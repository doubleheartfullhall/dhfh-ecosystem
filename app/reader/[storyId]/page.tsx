"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import ConsentBanner from "@/components/ConsentBanner";
import ReaderHeader from "@/components/ReaderHeader";
import type { LanguageMode } from "@/components/LanguageToggle";
import { allowsPinyinTap, isPinyinVisible, type PinyinMode } from "@/lib/pinyin";
import sampleStory from "@/data/sampleStory.json";

interface ReaderPageProps {
  params: {
    storyId: string;
  };
}

type StoryData = typeof sampleStory;

const STORIES: Record<string, StoryData> = {
  [sampleStory.id]: sampleStory,
};

export default function ReaderPage({ params }: ReaderPageProps): JSX.Element {
  const { storyId } = params;
  const story = STORIES[storyId] ?? sampleStory;
  const currentPage = story.pages[0];
  const hasImage = Boolean(currentPage.image && currentPage.image.trim().length > 0);

  const [language, setLanguage] = useState<LanguageMode>("bilingual");
  const [pinyinMode, setPinyinMode] = useState<PinyinMode>("tap");
  const [revealedPinyin, setRevealedPinyin] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (pinyinMode !== "tap") {
      setRevealedPinyin({});
    }
  }, [pinyinMode]);

  useEffect(() => {
    setRevealedPinyin({});
  }, [storyId]);

  const { en: titleEn, zh: titleZh } = story.title;

  const title = useMemo(() => {
    if (language === "zh") {
      return titleZh;
    }

    if (language === "en") {
      return titleEn;
    }

    return `${titleEn} · ${titleZh}`;
  }, [language, titleEn, titleZh]);

  const showChinese = language === "zh" || language === "bilingual";
  const showEnglish = language === "en" || language === "bilingual";

  return (
    <main className="relative min-h-screen bg-porcelain px-6 py-16">
      <ConsentBanner />
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <ReaderHeader
          language={language}
          onLanguageChange={setLanguage}
          pinyin={pinyinMode}
          onPinyinChange={setPinyinMode}
        />
        <div className="flex flex-col gap-10 md:flex-row">
          <article className="flex-1 space-y-6">
            <header className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-dhfh-jade">{story.world} world</p>
              <h1 className="font-display text-4xl text-dhfh-ink">{title}</h1>
              <p className="text-xs uppercase tracking-wide text-dhfh-ink/60">Story ID: {story.id}</p>
            </header>

            <div className="overflow-hidden rounded-2xl bg-white shadow-soft">
              {hasImage ? (
                <Image
                  src={currentPage.image}
                  alt={`Illustration for ${story.title.en}`}
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              ) : (
                <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-dhfh-sky/20 via-white to-dhfh-jade/10 text-center text-sm font-medium uppercase tracking-[0.3em] text-dhfh-ink/40">
                  Illustration coming soon
                </div>
              )}
            </div>

            <section className="space-y-4 rounded-2xl bg-white p-6 shadow-soft">
              <h2 className="font-display text-2xl text-dhfh-ink">Story text</h2>
              <ul className="space-y-4">
                {currentPage.segments.map((segment, index) => {
                  const allowTap = showChinese && allowsPinyinTap(pinyinMode);
                  const shouldShowPinyin =
                    showChinese && isPinyinVisible(pinyinMode, Boolean(revealedPinyin[index]));

                  return (
                    <li key={index} className="space-y-2">
                      {showChinese && <p className="text-xl text-dhfh-ink">{segment.zh}</p>}
                      {shouldShowPinyin && (
                        <p className="text-sm uppercase tracking-wide text-dhfh-jade">{segment.pinyin}</p>
                      )}
                      {allowTap && (
                        <button
                          type="button"
                          onClick={() =>
                            setRevealedPinyin((prev) => ({
                              ...prev,
                              [index]: !prev[index],
                            }))
                          }
                          className="text-xs font-semibold uppercase tracking-wide text-dhfh-jade underline"
                        >
                          {revealedPinyin[index] ? "Hide pinyin" : "Reveal pinyin"}
                        </button>
                      )}
                      {showEnglish && <p className="text-lg text-dhfh-ink/80">{segment.en}</p>}
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>
          <aside className="w-full max-w-sm space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <h2 className="font-display text-xl text-dhfh-ink">Vocabulary</h2>
              <ul className="mt-3 space-y-3">
                {story.vocab.map((entry) => (
                  <li key={entry.hanzi} className="rounded-xl border border-dhfh-porcelain p-3">
                    <p className="text-lg font-semibold text-dhfh-ink">{entry.hanzi}</p>
                    <p className="text-sm uppercase tracking-wide text-dhfh-jade">{entry.pinyin}</p>
                    <p className="text-sm text-dhfh-ink/70">{entry.en}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
