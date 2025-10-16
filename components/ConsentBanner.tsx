"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "dhfh-consent-banner-dismissed";

export default function ConsentBanner(): JSX.Element | null {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 mx-auto max-w-4xl rounded-2xl border border-dhfh-porcelain bg-white/95 p-4 shadow-soft backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-dhfh-ink">We use cookies for this demo</p>
          <p className="text-sm text-dhfh-ink/70">
            Review our <Link href="/legal/privacy" className="text-dhfh-jade underline">privacy policy</Link>, {" "}
            <Link href="/legal/terms" className="text-dhfh-jade underline">terms</Link>, and {" "}
            <Link href="/legal/children" className="text-dhfh-jade underline">children&apos;s notice</Link> before continuing.
          </p>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="rounded-full bg-dhfh-red px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-dhfh-ink"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
