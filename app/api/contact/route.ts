import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: "The contact form is not configured yet. Please email me directly." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  if (typeof body.website === "string" && body.website) return NextResponse.json({ ok: true }); // honeypot
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  if (!name || name.length > 100) return NextResponse.json({ error: "Enter your name." }, { status: 400 });
  if (!emailPattern.test(email) || email.length > 200) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  if (message.length < 10 || message.length > 3000) return NextResponse.json({ error: "Message must be 10 to 3000 characters." }, { status: 400 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from, to: [to], reply_to: email,
      subject: `Portfolio message from ${name.slice(0, 60)}`,
      html: `<p><b>${escapeHtml(name)}</b> (${escapeHtml(email)})</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!res.ok) return NextResponse.json({ error: "The email service rejected the message. Please try again later." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
