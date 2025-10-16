export type PinyinMode = "show" | "hide" | "tap";

export function isPinyinVisible(mode: PinyinMode, isRevealed: boolean): boolean {
  if (mode === "show") {
    return true;
  }

  if (mode === "hide") {
    return false;
  }

  return isRevealed;
}

export function allowsPinyinTap(mode: PinyinMode): boolean {
  return mode === "tap";
}
