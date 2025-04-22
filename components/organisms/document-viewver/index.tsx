"use client";

import { useReducer } from "react";
import { DocumentContext } from "./context/context";
import { reducer } from "./context/reducer";
import { Editor } from "./editor";
import { Preview } from "./preview";

export function DocumentViewer() {
  const [state, dispatch] = useReducer(reducer, {
    source: { language: "text", text: "" },
  });

  return (
    <DocumentContext.Provider value={state}>
      <div className="container px-4">
        <div className="grid h-[calc(100vh-10rem)] grid-cols-1 gap-4 lg:grid-cols-2">
          <Editor
            onError={(message) =>
              dispatch({ type: "error", payload: { message } })
            }
            onSourceChange={(text, language = state.source.language) => {
              dispatch({ type: "updateSource", payload: { language, text } });
            }}
          />

          <Preview />
        </div>
      </div>
    </DocumentContext.Provider>
  );
}
