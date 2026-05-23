import { Resend } from "resend";
import { site } from "./site";

const FROM = `Friends of Lafayette-Pointer Park <noreply@lafayettepointerpark.com>`;
const TO = site.email;

let resendClient: Resend | null = null;

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not set");
  }
  if (!resendClient) {
    resendClient = new Resend(key);
  }
  return resendClient;
}

export type ContactPayload = {
  name: string;
  email: string;
  zip?: string;
  message: string;
};

export async function sendContactMessage(payload: ContactPayload) {
  const lines = [
    `Name:  ${payload.name}`,
    `Email: ${payload.email}`,
    payload.zip ? `Zip:   ${payload.zip}` : null,
    "",
    payload.message,
  ].filter(Boolean);
  const { error } = await getResend().emails.send({
    from: FROM,
    to: TO,
    replyTo: payload.email,
    subject: `Contact form: ${payload.name}`,
    text: lines.join("\n"),
  });
  if (error) {
    throw new Error(error.message ?? "Resend send failed");
  }
}

export type SignupPayload = {
  firstName: string;
  lastName: string;
  email: string;
  notes?: string;
};

export async function sendSignupNotification(payload: SignupPayload) {
  const lines = [
    `Name:  ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.email}`,
    payload.notes ? `Notes: ${payload.notes}` : null,
  ].filter(Boolean);
  const { error } = await getResend().emails.send({
    from: FROM,
    to: TO,
    replyTo: payload.email,
    subject: `News signup: ${payload.firstName} ${payload.lastName}`,
    text: lines.join("\n"),
  });
  if (error) {
    throw new Error(error.message ?? "Resend send failed");
  }
}
