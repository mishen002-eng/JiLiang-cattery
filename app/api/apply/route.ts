import { NextResponse } from "next/server";
import { applicationSchema } from "@/lib/schemas";

export async function POST(request: Request) {
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

    // Log for development — replace with Resend in production
    console.log("New application received:", {
      name: `${result.data.firstName} ${result.data.lastName}`,
      email: result.data.email,
      country: result.data.country,
    });

    // TODO: Wire up Resend email
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Jiliang Cattery <noreply@jiliangcattery.com>",
    //   to: locationEmail,
    //   subject: `New Application: ${result.data.firstName} ${result.data.lastName}`,
    //   html: `...`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
