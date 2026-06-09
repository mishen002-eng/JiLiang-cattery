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

    const d = result.data;
    const countryMap: Record<string, string> = { US: "United States", CA: "Canada", international: "International" };
    const housingMap: Record<string, string> = { house: "House", apartment: "Apartment", condo: "Condo", townhouse: "Townhouse", other: "Other" };
    const allergyMap: Record<string, string> = { none: "No allergies", yes: "Yes", unknown: "Unknown" };
    const sexMap: Record<string, string> = { male: "Male", female: "Female", no_preference: "No preference" };
    const timingMap: Record<string, string> = { asap: "As soon as possible", next_available: "Next available", flexible: "Flexible" };

    const html = `
<html><body style="font-family:sans-serif;color:#333;max-width:600px;margin:0 auto;">
<h2 style="border-bottom:2px solid #c9a96e;padding-bottom:8px;">New Kitten Application</h2>

<h3 style="color:#c9a96e;">About the Applicant</h3>
<p><strong>Name:</strong> ${d.firstName} ${d.lastName}</p>
<p><strong>Email:</strong> ${d.email}</p>
<p><strong>Phone:</strong> ${d.phone}</p>
<p><strong>Country:</strong> ${countryMap[d.country] ?? d.country}${d.countryOther ? ` (${d.countryOther})` : ""}</p>
<p><strong>City:</strong> ${d.city}</p>
<p><strong>State / Province:</strong> ${d.state}</p>
${d.occupation ? `<p><strong>Occupation:</strong> ${d.occupation}</p>` : ""}

<h3 style="color:#c9a96e;">Home Environment</h3>
<p><strong>Housing Type:</strong> ${housingMap[d.housingType] ?? d.housingType}</p>
<p><strong>Own or Rent:</strong> ${d.ownOrRent === "own" ? "Own" : "Rent"}</p>
${d.landlordApproval ? `<p><strong>Landlord Approval:</strong> ${d.landlordApproval}</p>` : ""}
<p><strong>Other Pets:</strong> ${d.otherPets || "None"}</p>
<p><strong>Has Children:</strong> ${d.hasChildren ? "Yes" : "No"}${d.childrenAges ? ` (Ages: ${d.childrenAges})` : ""}</p>
<p><strong>Allergy Awareness:</strong> ${allergyMap[d.allergyAwareness] ?? d.allergyAwareness}</p>

<h3 style="color:#c9a96e;">Kitten Preferences</h3>
<p><strong>Sex Preference:</strong> ${sexMap[d.sexPreference] ?? d.sexPreference}</p>
<p><strong>Color Preference:</strong> ${d.colorPreference || "No preference"}</p>
<p><strong>Timing:</strong> ${timingMap[d.timing] ?? d.timing}</p>
<p><strong>Considering a Pair:</strong> ${d.consideringPair ? "Yes" : "No"}</p>
<p><strong>Needs Transport:</strong> ${d.needsTransport ? "Yes" : "No"}</p>

<h3 style="color:#c9a96e;">Commitments</h3>
<p><strong>Indoor Only:</strong> ${d.indoorOnly ? "Yes ✓" : "No"}</p>
<p><strong>No-Declaw Agreement:</strong> ${d.noDeClawAgreement ? "Agreed ✓" : "No"}</p>
${d.additionalInfo ? `<p><strong>Additional Info:</strong><br>${d.additionalInfo.replace(/\n/g, "<br>")}</p>` : ""}
</body></html>`;

    const text = [
      "NEW KITTEN APPLICATION",
      "======================",
      "",
      "ABOUT THE APPLICANT",
      `Name: ${d.firstName} ${d.lastName}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      `Country: ${countryMap[d.country] ?? d.country}${d.countryOther ? ` (${d.countryOther})` : ""}`,
      `City: ${d.city}`,
      `State / Province: ${d.state}`,
      d.occupation ? `Occupation: ${d.occupation}` : "",
      "",
      "HOME ENVIRONMENT",
      `Housing Type: ${housingMap[d.housingType] ?? d.housingType}`,
      `Own or Rent: ${d.ownOrRent === "own" ? "Own" : "Rent"}`,
      d.landlordApproval ? `Landlord Approval: ${d.landlordApproval}` : "",
      `Other Pets: ${d.otherPets || "None"}`,
      `Has Children: ${d.hasChildren ? "Yes" : "No"}${d.childrenAges ? ` (Ages: ${d.childrenAges})` : ""}`,
      `Allergy Awareness: ${allergyMap[d.allergyAwareness] ?? d.allergyAwareness}`,
      "",
      "KITTEN PREFERENCES",
      `Sex Preference: ${sexMap[d.sexPreference] ?? d.sexPreference}`,
      `Color Preference: ${d.colorPreference || "No preference"}`,
      `Timing: ${timingMap[d.timing] ?? d.timing}`,
      `Considering a Pair: ${d.consideringPair ? "Yes" : "No"}`,
      `Needs Transport: ${d.needsTransport ? "Yes" : "No"}`,
      "",
      "COMMITMENTS",
      `Indoor Only: ${d.indoorOnly ? "Yes" : "No"}`,
      `No-Declaw Agreement: ${d.noDeClawAgreement ? "Agreed" : "No"}`,
      d.additionalInfo ? `Additional Info:\n${d.additionalInfo}` : "",
    ].filter(Boolean).join("\n");

    await resend.emails.send({
      from: "Jiliang Cattery <onboarding@resend.dev>",
      to: "jiliangcattery@gmail.com",
      subject: `New Kitten Application: ${d.firstName} ${d.lastName}`,
      html,
      text,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
