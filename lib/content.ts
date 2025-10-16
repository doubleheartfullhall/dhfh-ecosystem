export type ValuePoint = {
  title: string;
  description: string;
};

export type Program = {
  name: string;
  description: string;
  highlights: string[];
};

export type Stat = {
  label: string;
  value: string;
  description: string;
};

export const heroCopy = {
  eyebrow: "Double Heart Full Hall",
  title: "A bilingual learning ecosystem where stories ignite curiosity.",
  description:
    "DHFH stitches together illustrated worlds, tactile exploration, and AI-guided conversation. Families, classrooms, and community centers collaborate to nurture empathy-driven multilingual learners.",
};

export const heroValues: ValuePoint[] = [
  {
    title: "Multilingual by design",
    description:
      "Curricula crafted with educators and linguists ensure a balanced progression of literacy, cultural context, and play.",
  },
  {
    title: "Community-first",
    description:
      "Local storytellers, illustrators, and classroom pilots shape every release before it reaches the broader ecosystem.",
  },
  {
    title: "Accessible for every family",
    description:
      "Sliding-scale subscriptions and open-licensed resources keep language discovery joyful and equitable.",
  },
];

export const programs: Program[] = [
  {
    name: "Story Worlds",
    description:
      "Immersive bilingual picture books with layered translations and read-aloud audio for families exploring new languages together.",
    highlights: [
      "Paired Mandarin and English narration",
      "Augmented reality vocabulary hunts",
      "Parent discussion prompts",
    ],
  },
  {
    name: "Play Labs",
    description:
      "Hands-on activity kits that transform each book into an experiment, building STEAM confidence through cultural celebrations.",
    highlights: [
      "Reusable craft materials and tactile games",
      "Step-by-step facilitator guides",
      "Adaptable challenges for multiple age groups",
    ],
  },
  {
    name: "Story Guides AI",
    description:
      "Conversational companion that scaffolds pronunciation, comprehension, and creative writing in both languages on any device.",
    highlights: [
      "Adaptive prompts that level with the learner",
      "Offline-friendly transcripts and practice decks",
      "Progress snapshots for caregivers and teachers",
    ],
  },
];

export const pilotStats: Stat[] = [
  {
    label: "Learners engaged",
    value: "2,500+",
    description:
      "Across after-school programs, Saturday schools, and bilingual households in three regions.",
  },
  {
    label: "Stories published",
    value: "18",
    description:
      "Original tales illustrated with community artists representing cultures across the diaspora.",
  },
  {
    label: "Educator partners",
    value: "45",
    description:
      "Teachers and librarians codesigning activities that welcome mixed-level language learners.",
  },
  {
    label: "Languages supported",
    value: "6",
    description:
      "Mandarin, Cantonese, Spanish, Tagalog, Vietnamese, and English with more in development.",
  },
];
