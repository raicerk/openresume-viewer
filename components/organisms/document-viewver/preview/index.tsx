"use client";

import { useLanguage } from "@/hooks/use-language";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useMemo } from "react";
import { useDocumentViewerContext } from "../hooks/useDocumentViewerContext";
import { Export } from "./export";
import { HTMLPreview } from "./html-preview";

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
        return <HTMLPreview>{document}</HTMLPreview>;
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
