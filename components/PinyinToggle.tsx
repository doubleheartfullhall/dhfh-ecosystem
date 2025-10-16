"use client";

import { useEffect, useState } from "react";

import type { PinyinMode } from "@/lib/pinyin";

const MODE_OPTIONS: Array<{ value: PinyinMode; label: string; description: string }> = [
  { value: "show", label: "Show", description: "Always display pinyin" },
  { value: "hide", label: "Hide", description: "No pinyin by default" },
  { value: "tap", label: "Tap", description: "Reveal on tap" },
];

export interface PinyinToggleProps {
  value?: PinyinMode;
  onChange?: (mode: PinyinMode) => void;
}

export function PinyinToggle({ value, onChange }: PinyinToggleProps): JSX.Element {
  const [internalValue, setInternalValue] = useState<PinyinMode>(value ?? "tap");
  const activeValue = value ?? internalValue;

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleSelect = (next: PinyinMode) => {
    setInternalValue(next);
    onChange?.(next);
  };

  return (
    <div className="rounded-2xl border border-dhfh-porcelain bg-white p-4 shadow-soft">
      <p className="font-display text-lg text-dhfh-ink">Pinyin</p>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {MODE_OPTIONS.map((option) => {
          const isActive = activeValue === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`rounded-xl border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isActive
                  ? "border-dhfh-jade bg-dhfh-jade/10 text-dhfh-jade"
                  : "border-dhfh-porcelain text-dhfh-ink/70 hover:border-dhfh-jade/50"
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

export default PinyinToggle;
