import { createContext } from "react";

export type DocumentContextType = {
  source: {
    language: "json" | "yaml" | "text";
    text: string;
  };
  error?: {
    message: string;
  };
};

export const DocumentContext = createContext<DocumentContextType>({
  source: {
    language: "text",
    text: "",
  },
});
