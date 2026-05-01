/** Inbox for site leads (hire modal, quick contact, etc.) via FormSubmit. */
export const PHOANAN_LEAD_EMAIL = "marketing@phoanan.us";

export type LeadSource =
  | "hire_developers_modal"
  | "home_quick_contact"
  | "popup"
  | "contact_page"
  | "contact_desktop"
  | "contact_mobile";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: LeadSource;
  /** Optional; sent as its own column in FormSubmit table when set. */
  company?: string;
};

type FormSubmitSuccess = { success?: boolean; message?: string };

/**
 * Delivers lead to {@link PHOANAN_LEAD_EMAIL} via FormSubmit (no API key).
 * First submission from a new domain may require activating the inbox (FormSubmit sends a one-time link).
 */
export async function submitSiteLead(
  payload: LeadPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(PHOANAN_LEAD_EMAIL)}`;

  const body: Record<string, string> = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    message: payload.message.trim(),
    _subject: `Phoanan lead — ${payload.source.replace(/_/g, " ")}`,
    _template: "table",
  };

  const company = payload.company?.trim();
  if (company) {
    body.company = company;
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const raw = await res.text();
    let data: FormSubmitSuccess = {};
    try {
      data = JSON.parse(raw) as FormSubmitSuccess;
    } catch {
      /* FormSubmit sometimes returns non-JSON on error */
    }

    if (!res.ok) {
      return { ok: false, error: data.message || raw.slice(0, 180) || `Request failed (${res.status})` };
    }

    if (data.success === false) {
      return { ok: false, error: data.message || "Submission was not accepted." };
    }

    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Network error" };
  }
}
