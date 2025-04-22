import { DocumentContextType } from "./context";
import merge from "lodash/merge";

type Action =
  | { type: "updateSource"; payload: { language: string; text: string } }
  | { type: "error"; payload: { message: string } };

export function reducer(state: DocumentContextType, action: Action) {
  switch (action.type) {
    case "updateSource":
      return merge({}, state, { source: action.payload });
    default:
      return state;
  }
}
