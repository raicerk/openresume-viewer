"use client";

import { useLanguage } from "@/hooks/use-language";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useDocumentViewerContext } from "../hooks/useDocumentViewerContext";
import { Export } from "./export";
import { useMemo } from "react";
import { ParsedDocument } from "../context/context";

function isRecord(obj: any): obj is Record<string, unknown> {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}

const HTMLPreview = ({ children }: { children?: ParsedDocument }) => {
  if (!isRecord(children)) {
    return (
      <div className="rounded-lg border bg-card p-4">Invalid data format</div>
    );
  }

  return (
    <div className="space-y-4">
      {Object.entries(children).map(([key, value]) => (
        <div key={key} className="rounded-lg border bg-card p-4">
          <h3 className="mb-2 font-medium text-primary">{key}</h3>

          {Array.isArray(value) ? (
            <ul className="list-inside list-disc space-y-1">
              {value.map((item, index) => (
                <li key={index} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">{value?.toString()}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export function Preview() {
  const { t } = useLanguage();
  const { source, document } = useDocumentViewerContext();

  const content = useMemo(() => {
    switch (source.language) {
      case "text":
        return source.text.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ));
      default:
        return <HTMLPreview children={document} />;
    }
  }, [document, source]);

  return (
    <div className="relative flex flex-col rounded-lg border bg-card">
      <div className="p-3 text-sm font-medium text-muted-foreground">
        {t("preview")}
      </div>
      <div className="relative flex-1 min-h-[300px]">
        <ScrollArea className="h-full border-t p-4">{content}</ScrollArea>
        <Export />
      </div>
    </div>
  );
}
