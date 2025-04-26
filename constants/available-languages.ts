import { Language, TranslationKeys } from "@/lib/translations";

export const AvailableLanguages: Array<{
  language: Language;
  translation: TranslationKeys;
}> = [
  {
    language: "es",
    translation: "languageSpanish",
  },
  {
    language: "en",
    translation: "languageEnglish",
  },
];

Object.freeze(AvailableLanguages);
