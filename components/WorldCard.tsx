"use client";

import Image from "next/image";
import { useState } from "react";

export type WorldCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

export default function WorldCard({ title, description, imageSrc, imageAlt = "", href }: WorldCardProps): JSX.Element {
  const [showImage, setShowImage] = useState(true);

  const cardContent = (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-dhfh-sky/30 to-dhfh-jade/30">
        {imageSrc && showImage ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(min-width: 768px) 380px, 100vw"
            className="object-cover"
            onError={() => setShowImage(false)}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <span className="inline-block border-b-2 border-dhfh-gold pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-dhfh-gold">
          Story World
        </span>
        <h3 className="font-display text-2xl leading-tight text-dhfh-ink">{title}</h3>
        <p className="text-sm leading-6 text-dhfh-ink/70">{description}</p>
      </div>
    </article>
  );

  if (href) {
    return (
      <a href={href} className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-dhfh-jade/40">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
