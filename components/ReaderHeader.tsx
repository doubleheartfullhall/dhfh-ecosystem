"use client";

import { useMemo, useState } from "react";

import { useAppContext } from "@/components/auth/AppProvider";
import AudioControls from "@/components/AudioControls";
import LanguageToggle from "@/components/LanguageToggle";
import PinyinToggle from "@/components/PinyinToggle";
import type { LanguageMode } from "@/components/LanguageToggle";
import type { PinyinMode } from "@/lib/pinyin";
import { getText } from "@/lib/i18n";

interface QuickProfile {
  id: string;
  label: string;
  description: string;
}

const DEMO_PROFILES: QuickProfile[] = [
  { id: "demo-reader", label: "Mia", description: "Age 7 • Explorer" },
  { id: "demo-sibling", label: "Bao Bao", description: "Age 4 • Sidekick" },
  { id: "demo-grownup", label: "Grown-up", description: "Parent view" },
];

export interface ReaderHeaderProps {
  language: LanguageMode;
  onLanguageChange: (mode: LanguageMode) => void;
  pinyin: PinyinMode;
  onPinyinChange: (mode: PinyinMode) => void;
}

export default function ReaderHeader({
  language,
  onLanguageChange,
  pinyin,
  onPinyinChange,
}: ReaderHeaderProps): JSX.Element {
  const { user } = useAppContext();
  const [activeProfile, setActiveProfile] = useState<string>(DEMO_PROFILES[0]?.id ?? "demo-reader");

  const greeting = useMemo(() => {
    return getText("welcome.title", language);
  }, [language]);

  return (
    <header className="space-y-6 rounded-2xl bg-white p-6 shadow-soft">
      <div>
        <p className="text-xs uppercase tracking-wide text-dhfh-jade">{user?.email ?? "Guest"}</p>
        <h1 className="mt-1 font-display text-3xl text-dhfh-ink">{greeting}</h1>
        <p className="mt-2 text-sm text-dhfh-ink/70">{getText("reader.tip", language)}</p>
      </div>

      <section className="space-y-3">
        <h2 className="font-display text-xl text-dhfh-ink">Quick switch profiles</h2>
        <div className="flex flex-wrap gap-2">
          {DEMO_PROFILES.map((profile) => {
            const isActive = profile.id === activeProfile;
            return (
              <button
                key={profile.id}
                type="button"
                onClick={() => setActiveProfile(profile.id)}
                className={`rounded-full border px-4 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isActive
                    ? "border-dhfh-gold bg-dhfh-gold/10 text-dhfh-ink"
                    : "border-dhfh-porcelain text-dhfh-ink/70 hover:border-dhfh-gold/50"
                }`}
              >
                <span className="block text-sm font-semibold">{profile.label}</span>
                <span className="block text-xs text-dhfh-ink/60">{profile.description}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <LanguageToggle value={language} onChange={onLanguageChange} />
        <PinyinToggle value={pinyin} onChange={onPinyinChange} />
        <AudioControls />
      </section>
    </header>
  );
}
