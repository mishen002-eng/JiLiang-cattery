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

    await resend.emails.send({
      from: "Jiliang Cattery <onboarding@resend.dev>",
      to: "jiliangcattery@gmail.com",
      subject: `Contact: ${result.data.subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${result.data.name}</p>
        <p><strong>Email:</strong> ${result.data.email}</p>
        <p><strong>Subject:</strong> ${result.data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${result.data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
