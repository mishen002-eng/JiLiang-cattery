import { NextResponse } from "next/server";
import { Resend } from "resend";
import { applicationSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const result = applicationSchema.safeParse(body);

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
      subject: `New Kitten Application: ${result.data.firstName} ${result.data.lastName}`,
      html: `
        <h2>New Kitten Application</h2>
        <p><strong>Name:</strong> ${result.data.firstName} ${result.data.lastName}</p>
        <p><strong>Email:</strong> ${result.data.email}</p>
        <p><strong>Country:</strong> ${result.data.country}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
