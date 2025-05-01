"use client";

import Prism from "prismjs";
import yaml from "js-yaml";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism-dark.css";

type LanguageActions = {
  test: (text: string) => boolean;
  formatter: (text: string) => string;
  highlight: (text: string) => string;
};

export type KnownLanguages = "json" | "yaml" | "text";

export const SupportedLanguages: Record<KnownLanguages, LanguageActions> = {
  json: {
    test(code) {
      try {
        return JSON.parse(code);
      } catch {
        console.error("JSON parsing error");
        return false;
      }
    },
    formatter(code) {
      return JSON.stringify(JSON.parse(code), null, 2);
    },
    highlight(code) {
      return Prism.highlight(code, Prism.languages.json, "json");
    },
  },
  yaml: {
    test(code) {
      try {
        yaml.load(code);
        return true;
      } catch (error) {
        console.error("YAML parsing error:", error);
        return false;
      }
    },
    formatter(code) {
      return yaml.dump(yaml.load(code), { indent: 2, lineWidth: -1 });
    },
    highlight(code) {
      return Prism.highlight(code, Prism.languages.yaml, "yaml");
    },
  },
  text: {
    test() {
      return true;
    },
    formatter(code) {
      return code;
    },
    highlight(code) {
      return code;
    },
  },
};

export function parseSource(input: string) {
  let language = "text";
  let actions = SupportedLanguages.text;

  for (const [_language, _actions] of Object.entries(SupportedLanguages)) {
    const success = _actions.test(input);
    if (success) {
      language = _language;
      actions = _actions;
      break;
    }
  }

  return {
    language: language as KnownLanguages,
    format(code = input) {
      return actions.formatter(code);
    },
    highlight(code = input) {
      return actions.highlight(code);
    },
  };
}
