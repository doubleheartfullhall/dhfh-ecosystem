"use client";

import { useEffect, useState } from "react";

export type LanguageMode = "en" | "zh" | "bilingual";

const LANGUAGE_OPTIONS: Array<{ value: LanguageMode; label: string; description: string }> = [
  { value: "en", label: "English", description: "English text only" },
  { value: "zh", label: "中文", description: "Simplified Chinese" },
  { value: "bilingual", label: "Bilingual", description: "English + 中文" },
];

export interface LanguageToggleProps {
  value?: LanguageMode;
  onChange?: (mode: LanguageMode) => void;
}

export function LanguageToggle({ value, onChange }: LanguageToggleProps): JSX.Element {
  const [internalValue, setInternalValue] = useState<LanguageMode>(value ?? "bilingual");
  const activeValue = value ?? internalValue;

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleSelect = (next: LanguageMode) => {
    setInternalValue(next);
    onChange?.(next);
  };

  return (
    <div className="rounded-2xl border border-dhfh-porcelain bg-white p-4 shadow-soft">
      <p className="font-display text-lg text-dhfh-ink">Language</p>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {LANGUAGE_OPTIONS.map((option) => {
          const isActive = option.value === activeValue;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`rounded-xl border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isActive
                  ? "border-dhfh-red bg-dhfh-red/10 text-dhfh-red"
                  : "border-dhfh-porcelain text-dhfh-ink/70 hover:border-dhfh-red/50"
              }`}
            >
              <span className="block text-sm font-semibold uppercase tracking-wide">{option.label}</span>
              <span className="mt-1 block text-xs text-dhfh-ink/60">{option.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default LanguageToggle;
