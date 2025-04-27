import merge from "lodash/merge";
import { DocumentContextType } from "./context";
import { KnownLanguages, parseSource } from "../languages";
import yaml from "js-yaml";

type ReducerState = DocumentContextType;

type Action =
  | { type: "updateSource"; payload: { text: string } }
  | { type: "error"; payload: { message: string } };

export function reducer(state: ReducerState, action: Action) {
  switch (action.type) {
    case "updateSource":
      const {
        payload: { text },
      } = action;
      const { language } = parseSource(text);
      const document = parseDocument(text, language);

      return { source: { language, text }, document } satisfies ReducerState;
    default:
      return state;
  }
}

function parseDocument(source: string, language: KnownLanguages) {
  try {
    switch (language) {
      case "json":
        return JSON.parse(source);
      case "yaml":
        return yaml.load(source);
      case "text":
        return {}; // TODO
    }
  } catch (error) {
    return null;
  }
}
