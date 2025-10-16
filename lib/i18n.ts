export type SupportedLanguage = "en" | "zh" | "bilingual";

const translations: Record<string, { en: string; zh: string }> = {
  "welcome.title": {
    en: "Welcome to the DHFH Ecosystem",
    zh: "欢迎来到双心满堂生态体系",
  },
  "onboarding.navigation.back": {
    en: "Back",
    zh: "返回",
  },
  "onboarding.navigation.continue": {
    en: "Continue",
    zh: "继续",
  },
  "onboarding.start.title": {
    en: "Let’s get your family set up",
    zh: "让我们为您的家庭完成设置",
  },
  "onboarding.start.description": {
    en: "We will ask a few quick questions so the Double Heart Full Hall experience can match the stories and activities to your family’s language journey.",
    zh: "我们将问几个简单的问题，好让双心满堂体验与您家庭的语言旅程相匹配。",
  },
  "onboarding.start.cta": {
    en: "Begin onboarding",
    zh: "开始体验",
  },
  "onboarding.start.note": {
    en: "You can pause at any time and resume later—your answers are saved to this device until setup is complete.",
    zh: "您可随时暂停并稍后继续，在完成设置之前，您的回答都会保存在此设备上。",
  },
  "onboarding.age.step": {
    en: "Step 1 of 6",
    zh: "第 1 步（共 6 步）",
  },
  "onboarding.age.title": {
    en: "How old is your reader?",
    zh: "您的读者几岁？",
  },
  "onboarding.age.description": {
    en: "We tailor the pacing, vocabulary, and activity prompts to the reader’s developmental stage.",
    zh: "我们会根据读者的发展阶段调整节奏、词汇与活动提示。",
  },
  "onboarding.age.optionHint": {
    en: "Select to preview stories crafted for this age.",
    zh: "选择即可预览为该年龄段设计的故事。",
  },
  "onboarding.roles.step": {
    en: "Step 2 of 6",
    zh: "第 2 步（共 6 步）",
  },
  "onboarding.roles.title": {
    en: "Who will use DHFH?",
    zh: "谁会使用双心满堂？",
  },
  "onboarding.roles.description": {
    en: "Knowing the roles helps us offer tips for parents, kids, and partners who are learning together.",
    zh: "了解角色有助于我们为家长、孩子与学习伙伴提供贴心建议。",
  },
  "onboarding.roles.caregiver.title": {
    en: "Caregiver",
    zh: "照护者",
  },
  "onboarding.roles.caregiver.description": {
    en: "Guides reading sessions, sets goals, and tracks progress for the family.",
    zh: "引导共读时光、设定目标，并为全家跟踪进度。",
  },
  "onboarding.roles.reader.title": {
    en: "Young Reader",
    zh: "小小读者",
  },
  "onboarding.roles.reader.description": {
    en: "Explores interactive stories, activities, and voice-acted adventures.",
    zh: "探索互动故事、活动与配音冒险。",
  },
  "onboarding.roles.partner.title": {
    en: "Learning Partner",
    zh: "学习伙伴",
  },
  "onboarding.roles.partner.description": {
    en: "Supports bilingual practice with conversation prompts and games.",
    zh: "通过对话提示与游戏支持双语练习。",
  },
  "onboarding.fluency.step": {
    en: "Step 3 of 6",
    zh: "第 3 步（共 6 步）",
  },
  "onboarding.fluency.title": {
    en: "What is your reader’s fluency?",
    zh: "读者的中文程度如何？",
  },
  "onboarding.fluency.description": {
    en: "We balance English and Mandarin support so stories feel inviting and gently challenging.",
    zh: "我们会平衡英语与中文的支持，让故事既亲切又带来温和挑战。",
  },
  "onboarding.fluency.beginning.title": {
    en: "Beginning bilingual",
    zh: "起步双语者",
  },
  "onboarding.fluency.beginning.description": {
    en: "Just starting to hear or say words in Mandarin Chinese.",
    zh: "刚开始接触或说中文词汇。",
  },
  "onboarding.fluency.growing.title": {
    en: "Growing speaker",
    zh: "成长中的小讲者",
  },
  "onboarding.fluency.growing.description": {
    en: "Understands everyday phrases and enjoys picture-supported stories.",
    zh: "理解日常短语，喜欢带插图的故事。",
  },
  "onboarding.fluency.confident.title": {
    en: "Confident communicator",
    zh: "自信小沟通者",
  },
  "onboarding.fluency.confident.description": {
    en: "Reads simple passages aloud and experiments with writing characters.",
    zh: "可以朗读简单段落，并尝试书写汉字。",
  },
  "onboarding.display.step": {
    en: "Step 4 of 6",
    zh: "第 4 步（共 6 步）",
  },
  "onboarding.display.title": {
    en: "Choose how words appear",
    zh: "选择文字如何呈现",
  },
  "onboarding.display.description": {
    en: "Customize the reading interface so each learner can build confidence with characters, pinyin, and English meaning.",
    zh: "自定义阅读界面，让每位学习者都能在汉字、拼音与英文之间建立信心。",
  },
  "onboarding.display.modeHeading": {
    en: "Story display mode",
    zh: "故事显示模式",
  },
  "onboarding.display.pinyinHeading": {
    en: "Pinyin support",
    zh: "拼音辅助",
  },
  "onboarding.display.mode.chinese.title": {
    en: "Chinese focus",
    zh: "中文优先",
  },
  "onboarding.display.mode.chinese.description": {
    en: "Primary text in Simplified Chinese with gentle English summaries.",
    zh: "以简体中文为主，并辅以温和的英文摘要。",
  },
  "onboarding.display.mode.english.title": {
    en: "English focus",
    zh: "英文优先",
  },
  "onboarding.display.mode.english.description": {
    en: "Stories in English first with optional Chinese vocabulary callouts.",
    zh: "故事以英文呈现，并可选配中文词汇提示。",
  },
  "onboarding.display.mode.bilingual.title": {
    en: "Bilingual blend",
    zh: "双语融合",
  },
  "onboarding.display.mode.bilingual.description": {
    en: "Line-by-line bilingual layout with tone color-coding and audio prompts.",
    zh: "逐行双语排版，配有声调色标与音频提示。",
  },
  "onboarding.display.pinyin.show.title": {
    en: "Show",
    zh: "显示",
  },
  "onboarding.display.pinyin.show.description": {
    en: "Always display pinyin alongside characters.",
    zh: "始终在汉字旁显示拼音。",
  },
  "onboarding.display.pinyin.hide.title": {
    en: "Hide",
    zh: "隐藏",
  },
  "onboarding.display.pinyin.hide.description": {
    en: "Keep the page clean until you tap a phrase.",
    zh: "保持页面简洁，直到您点击短语。",
  },
  "onboarding.display.pinyin.tap.title": {
    en: "Tap to reveal",
    zh: "轻点显示",
  },
  "onboarding.display.pinyin.tap.description": {
    en: "Interactive hints appear when you need them.",
    zh: "需要时通过互动提示出现拼音。",
  },
  "onboarding.audio.step": {
    en: "Step 5 of 6",
    zh: "第 5 步（共 6 步）",
  },
  "onboarding.audio.title": {
    en: "How should audio behave?",
    zh: "音频应如何配合？",
  },
  "onboarding.audio.description": {
    en: "Audio helpers coach pronunciation, tone, and comprehension. Choose the style that fits your household.",
    zh: "音频助手会指导发音、声调与理解。请选择适合家庭的方式。",
  },
  "onboarding.audio.preference.narrated.title": {
    en: "Narrated stories",
    zh: "故事配音",
  },
  "onboarding.audio.preference.narrated.description": {
    en: "Play fully voiced tales in Mandarin with English explanations when needed.",
    zh: "播放普通话全程配音，必要时加入英文说明。",
  },
  "onboarding.audio.preference.callResponse.title": {
    en: "Call and response",
    zh: "跟读互动",
  },
  "onboarding.audio.preference.callResponse.description": {
    en: "Pause for the reader to repeat phrases or answer comprehension prompts.",
    zh: "在关键处暂停，让读者复述或回答理解问题。",
  },
  "onboarding.audio.preference.soundOff.title": {
    en: "Sound off",
    zh: "静音模式",
  },
  "onboarding.audio.preference.soundOff.description": {
    en: "Mute narration for quiet reading sessions while keeping on-page cues.",
    zh: "关闭旁白，保留页面提示，适合安静阅读。",
  },
  "onboarding.success.badge": {
    en: "Setup complete",
    zh: "设置完成",
  },
  "onboarding.success.title": {
    en: "You’re ready to explore",
    zh: "可以开始探索啦",
  },
  "onboarding.success.description": {
    en: "Your preferences are saved on this device. Jump straight into your first bilingual world, or head to settings to adjust the experience anytime.",
    zh: "您的偏好已保存在此设备上。现在就进入第一个双语世界，或随时前往设置调整体验。",
  },
  "onboarding.success.enterHub": {
    en: "Enter the world hub",
    zh: "进入世界集散地",
  },
  "onboarding.success.adjustSettings": {
    en: "Adjust settings",
    zh: "前往设置",
  },
  "reader.tip": {
    en: "Tap highlighted words to hear the pronunciation.",
    zh: "点击高亮词汇即可听发音。",
  },
};

export function getText(key: string, lang: SupportedLanguage = "en"): string {
  const entry = translations[key];

  if (!entry) {
    return key;
  }

  if (lang === "bilingual") {
    return `${entry.en} / ${entry.zh}`;
  }

  return entry[lang];
}

export function listSupportedKeys(): string[] {
  return Object.keys(translations);
}
