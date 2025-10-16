import { allowsPinyinTap, isPinyinVisible, type PinyinMode } from "../lib/pinyin";

type SampleSegment = {
  text: string;
  pinyin: string;
};

const sample: SampleSegment = {
  text: "今天我们一起包饺子。",
  pinyin: "jīn tiān wǒ men yì qǐ bāo jiǎo zi.",
};

function expect(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

function testVisibility(mode: PinyinMode, revealed: boolean, expected: boolean): void {
  const visible = isPinyinVisible(mode, revealed);
  expect(
    visible === expected,
    `Expected mode="${mode}" with revealed=${revealed} to be ${expected ? "visible" : "hidden"}, received ${visible}`,
  );
}

function run(): void {
  // "show" exposes pinyin without interaction
  testVisibility("show", false, true);
  testVisibility("show", true, true);

  // "hide" keeps pinyin hidden regardless of reveals
  testVisibility("hide", false, false);
  testVisibility("hide", true, false);

  // "tap" reveals only when toggled per segment
  testVisibility("tap", false, false);
  expect(allowsPinyinTap("tap"), "Tap mode should allow interaction");
  testVisibility("tap", true, true);

  // Non-tap modes do not allow interaction prompts
  expect(!allowsPinyinTap("show"), "Show mode should not allow tap interaction");
  expect(!allowsPinyinTap("hide"), "Hide mode should not allow tap interaction");

  console.log("pinyin.test.ts passed for sample text:", sample.text, "->", sample.pinyin);
}

run();
