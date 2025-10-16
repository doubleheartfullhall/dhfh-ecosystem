"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { useAppContext } from "@/components/auth/AppProvider";

export default function QRClaimPage(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { registerUnlock } = useAppContext();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const code = searchParams.get("code") ?? "";

  const handleClaim = async () => {
    if (!code) {
      setStatus("error");
      setMessage("No access code detected. Try scanning the QR code again.");
      return;
    }

    try {
      setStatus("loading");
      setMessage("Validating your code...");
      const response = await fetch("/api/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (response.ok) {
        const payload = (await response.json()) as { ok: boolean; world?: string; stories?: string[] };
        if (payload?.ok && payload.world) {
          registerUnlock({ world: payload.world, stories: payload.stories ?? [] });
        }
        setStatus("success");
        setMessage("Code accepted! Taking you to your story world...");
        router.push("/world");
      } else {
        const errorPayload = (await response.json().catch(() => null)) as { error?: string } | null;
        setStatus("error");
        setMessage(errorPayload?.error ?? "That code could not be claimed. Double-check and try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="bg-porcelain min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 shadow-soft">
        <p className="font-semibold uppercase tracking-wide text-dhfh-jade">Access code</p>
        <h1 className="mt-2 font-display text-4xl text-dhfh-ink">Redeem your DHFH adventure</h1>
        <p className="mt-4 text-lg text-dhfh-ink/80">
          Scan a family booklet or enter the QR code to unlock guided stories, games, and activities tailored for
          bilingual explorers.
        </p>

        <div className="mt-8 space-y-3">
          <div className="rounded-lg border border-dashed border-dhfh-gold bg-dhfh-porcelain/80 px-4 py-3 font-mono text-sm text-dhfh-ink">
            {code ? code : "No code supplied"}
          </div>
          <button
            type="button"
            onClick={handleClaim}
            className="inline-flex items-center justify-center rounded-full bg-dhfh-red px-6 py-3 font-semibold text-white transition hover:bg-dhfh-red/90 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Claiming..." : "Claim my world"}
          </button>
          {message && (
            <p
              className={`text-sm ${status === "error" ? "text-dhfh-red" : "text-dhfh-jade"}`}
              aria-live="polite"
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
