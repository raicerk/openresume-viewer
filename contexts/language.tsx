import * as React from "react";
import { TranslationKeys, type Language } from "@/lib/translations";

type TranslationFunction = {
  (key: string): string;
  (key: TranslationKeys): string;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationFunction;
};

export const LanguageContext = React.createContext<
  LanguageContextType | undefined
>(undefined);
