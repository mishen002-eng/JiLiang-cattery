import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    // Honeypot check
    if (result.data.website && result.data.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    const d = result.data;
    const subjectMap: Record<string, string> = {
      general: "General Inquiry",
      kitten_inquiry: "Kitten Inquiry",
      visit_request: "Visit Request",
    };
    const subjectLabel = subjectMap[d.subject] ?? d.subject;

    const html = `
<html><body style="font-family:sans-serif;color:#333;max-width:600px;margin:0 auto;">
<h2 style="border-bottom:2px solid #c9a96e;padding-bottom:8px;">New Contact Message</h2>
<p><strong>Name:</strong> ${d.name}</p>
<p><strong>Email:</strong> ${d.email}</p>
<p><strong>Subject:</strong> ${subjectLabel}</p>
<h3 style="color:#c9a96e;">Message</h3>
<p style="white-space:pre-wrap;">${d.message.replace(/\n/g, "<br>")}</p>
</body></html>`;

    const text = [
      "NEW CONTACT MESSAGE",
      "===================",
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Subject: ${subjectLabel}`,
      "",
      "Message:",
      d.message,
    ].join("\n");

    await resend.emails.send({
      from: "Jiliang Cattery <onboarding@resend.dev>",
      to: "jiliangcattery@gmail.com",
      subject: `Contact (${subjectLabel}): ${d.name}`,
      html,
      text,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
