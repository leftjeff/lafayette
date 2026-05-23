"use server";

import { sendContactMessage } from "@/lib/email";

export type ContactState = {
  ok: boolean;
  error?: string;
};

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const zip = String(formData.get("zip") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name) return { ok: false, error: "Please add your name." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!message) return { ok: false, error: "Please add a message." };

  try {
    await sendContactMessage({
      name,
      email,
      zip: zip || undefined,
      message,
    });
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error:
        e instanceof Error
          ? e.message
          : "Something went wrong sending your message.",
    };
  }
}
