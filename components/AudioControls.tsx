"use client";

import { useState } from "react";

export interface AudioControlsProps {
  initialNarrator?: boolean;
  initialSlowMode?: boolean;
  initialWordHighlight?: boolean;
  initialRepeat?: boolean;
}

export function AudioControls({
  initialNarrator = true,
  initialSlowMode = false,
  initialWordHighlight = true,
  initialRepeat = false,
}: AudioControlsProps): JSX.Element {
  const [narratorOn, setNarratorOn] = useState(initialNarrator);
  const [slowModeOn, setSlowModeOn] = useState(initialSlowMode);
  const [wordHighlightOn, setWordHighlightOn] = useState(initialWordHighlight);
  const [repeatOn, setRepeatOn] = useState(initialRepeat);

  const toggles = [
    {
      label: "Narrator",
      description: "Enable guided narration",
      value: narratorOn,
      setter: setNarratorOn,
    },
    {
      label: "Slow mode",
      description: "Slow down pronunciation",
      value: slowModeOn,
      setter: setSlowModeOn,
    },
    {
      label: "Word highlight",
      description: "Highlight as audio plays",
      value: wordHighlightOn,
      setter: setWordHighlightOn,
    },
    {
      label: "Repeat",
      description: "Loop current page",
      value: repeatOn,
      setter: setRepeatOn,
    },
  ];

  return (
    <div className="rounded-2xl border border-dhfh-porcelain bg-white p-4 shadow-soft">
      <p className="font-display text-lg text-dhfh-ink">Audio support</p>
      <ul className="mt-3 space-y-3">
        {toggles.map((toggle) => (
          <li key={toggle.label} className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-dhfh-ink">{toggle.label}</p>
              <p className="text-xs text-dhfh-ink/60">{toggle.description}</p>
            </div>
            <button
              type="button"
              onClick={() => toggle.setter(!toggle.value)}
              className={`relative flex h-8 w-14 items-center overflow-hidden rounded-full border px-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                toggle.value
                  ? "border-dhfh-jade bg-dhfh-jade/20"
                  : "border-dhfh-porcelain bg-dhfh-porcelain"
              }`}
            >
              <span
                className={`absolute left-1 top-1 inline-block h-6 w-6 rounded-full bg-white shadow-soft transition-transform ${
                  toggle.value ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AudioControls;
