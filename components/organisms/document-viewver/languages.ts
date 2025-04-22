import { DocumentContextType } from "./context/context";
import yaml from "js-yaml";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism-dark.css";

type LanguageActions = {
  test: (text: string) => boolean;
  formatter: (text: string) => string;
  highlight: (text: string) => string;
};

export const SupportedLanguages: Record<
  DocumentContextType["source"]["language"],
  LanguageActions
> = {
  json: {
    test(code) {
      try {
        return JSON.parse(code);
      } catch {
        return false;
      }
    },
    formatter(code) {
      return JSON.stringify(code, null, 2);
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
        console.debug(error);
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

export function parse(input: string) {
  let language = "text";
  let actions = SupportedLanguages.text;

  for (const [_language, _actions] of Object.entries(SupportedLanguages)) {
    const success = _actions.test(input);
    console.debug("testing against", _language, success);

    if (success) {
      language = _language;
      actions = _actions;
      break;
    }
  }

  return { language, actions };
}
