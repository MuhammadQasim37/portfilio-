"use client";
import { useState } from "react";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "ok" } | { kind: "error"; message: string };

export default function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "The message could not be sent.");
      form.reset();
      setState({ kind: "ok" });
    } catch (err) {
      setState({ kind: "error", message: err instanceof Error ? err.message : "The message could not be sent." });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label>Name<input name="name" required maxLength={100} autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required maxLength={200} autoComplete="email" /></label>
      <label>Message<textarea name="message" required minLength={10} maxLength={3000} /></label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn primary" type="submit" disabled={state.kind === "sending"}>
        {state.kind === "sending" ? "Sending..." : "Send message"}
      </button>
      <div aria-live="polite">
        {state.kind === "ok" && <p className="msg ok">Message sent. I will reply to your email.</p>}
        {state.kind === "error" && <p className="msg err">{state.message}</p>}
      </div>
    </form>
  );
}
