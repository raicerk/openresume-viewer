"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { FileCode } from "lucide-react";
import CodeEditor from "react-simple-code-editor";
import { useDocumentViewerContext } from "../hooks/useDocumentViewerContext";
import { useSourceCode } from "../hooks/useSourceCode";
import React from "react";

type EditorProps = {
  onSourceChange(text: string): void;
};

export function Editor({ onSourceChange }: EditorProps) {
  const { t } = useLanguage();
  const { source, error } = useDocumentViewerContext();
  const { format, highlight } = useSourceCode(source.text);

  return (
    <div className="relative flex flex-col rounded-lg border bg-card">
      <div className="flex items-center justify-between border-b p-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{t("detectedFormat")}</span>
          <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
            {source.language === "text" && "ORF"}
            {source.language === "json" && "JSON"}
            {source.language === "yaml" && "YAML"}
          </span>
        </div>
      </div>
      <div className="relative flex-1">
        {source.language !== "text" && source.text.trim() !== "" && (
          <Button
            className="absolute right-2 top-2 z-10"
            variant="ghost"
            size="sm"
            onClick={() => {
              const formatted = format(source.text);

              onSourceChange(formatted);
            }}
          >
            <FileCode className="mr-2 h-4 w-4" />
            {t("format")}
          </Button>
        )}
        <CodeEditor
          value={source.text}
          onValueChange={onSourceChange}
          highlight={(code) => {
            const highlighted = highlight(code);
            return highlighted;
          }}
          padding={16}
          style={{
            boxSizing: "border-box",
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            height: "100%",
            backgroundColor: "transparent",
            color: "inherit",
            borderRadius: "0",
          }}
          className="h-full min-h-full overflow-auto"
          placeholder={t("editorPlaceholder")}
        />
        {error && (
          <div className="absolute bottom-0 left-0 right-0 bg-destructive/10 p-2 text-sm text-destructive">
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
}
