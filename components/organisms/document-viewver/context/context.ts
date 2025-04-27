import { createContext } from "react";
import type { KnownLanguages } from "../languages";

export type ParsedDocument = Record<string, string>;

export type DocumentContextType = {
  source: {
    language: KnownLanguages;
    text: string;
  };
  document?: ParsedDocument;
  error?: {
    message: string;
  };
};

export const DocumentContext = createContext<DocumentContextType>({
  source: {
    language: "text",
    text: "",
  },
  document: {},
});
