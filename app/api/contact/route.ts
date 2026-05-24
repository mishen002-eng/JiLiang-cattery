import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
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

    console.log("New contact message:", {
      name: result.data.name,
      email: result.data.email,
      subject: result.data.subject,
      message: result.data.message,
    });

    // TODO: Wire up Resend email
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Jiliang Cattery <noreply@jiliangcattery.com>",
    //   to: "hello@jiliangcattery.com",
    //   subject: `Contact: ${result.data.subject}`,
    //   html: `...`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
