import { createHash } from "crypto";
import { site } from "./site";

const FROM_EMAIL = "noreply@lafayettepointerpark.com";
const FROM_NAME = "Friends of Lafayette-Pointer Park";

function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  if (!apiKey) throw new Error("MAILCHIMP_API_KEY is not set");
  const server = apiKey.split("-").pop();
  if (!server) throw new Error("Invalid MAILCHIMP_API_KEY format (expected key-usXX)");
  return { apiKey, server };
}

function getMandrillKey() {
  const key = process.env.MAILCHIMP_TRANSACTIONAL_API_KEY;
  if (!key) throw new Error("MAILCHIMP_TRANSACTIONAL_API_KEY is not set");
  return key;
}

export type ContactPayload = {
  name: string;
  email: string;
  zip?: string;
  message: string;
};

export async function sendContactMessage(payload: ContactPayload) {
  const key = getMandrillKey();
  const lines = [
    `Name:  ${payload.name}`,
    `Email: ${payload.email}`,
    payload.zip ? `Zip:   ${payload.zip}` : null,
    "",
    payload.message,
  ].filter(Boolean);

  const res = await fetch("https://mandrillapp.com/api/1.0/messages/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      key,
      message: {
        from_email: FROM_EMAIL,
        from_name: FROM_NAME,
        to: [{ email: site.email, type: "to" }],
        subject: `Contact form: ${payload.name}`,
        text: lines.join("\n"),
        headers: { "Reply-To": payload.email },
      },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Email send failed: ${body}`);
  }

  const data: unknown = await res.json();
  if (
    Array.isArray(data) &&
    data[0]?.status === "rejected"
  ) {
    throw new Error(data[0].reject_reason ?? "Email send failed");
  }
}

export type SignupPayload = {
  firstName: string;
  lastName: string;
  email: string;
  notes?: string;
};

export async function sendSignupNotification(payload: SignupPayload) {
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  if (!audienceId) throw new Error("MAILCHIMP_AUDIENCE_ID is not set");

  const { apiKey, server } = getMailchimpConfig();
  const subscriberHash = createHash("md5")
    .update(payload.email.toLowerCase())
    .digest("hex");

  const res = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`,
    {
      method: "PUT",
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: payload.email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: payload.firstName,
          LNAME: payload.lastName,
        },
      }),
    },
  );

  if (!res.ok) {
    const body: { detail?: string } = await res.json().catch(() => ({}));
    throw new Error(body.detail ?? "Mailchimp subscribe failed");
  }
}
