"use client";

import { useLanguage } from "@/contexts/language-context";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useDocumentViewerContext } from "./hooks/useDocumentViewerContext";
import yaml from "js-yaml";

const generateHtmlPreview = (content: string, mode: string) => {
  try {
    let data = content;
    switch (mode) {
      case "json":
        data = JSON.parse(content);
        break;
      case "yaml":
        const parsedYaml = yaml.load(content);
        if (typeof parsedYaml === "string") {
          data = parsedYaml;
        } else {
          throw new Error("Parsed YAML is not a string");
        }
        break;
      default:
        throw new Error("Unsupported mode");
    }

    if (typeof data === "object" && data !== null) {
      return (
        <div className="space-y-4">
          {Object.entries(data).map(([key, value]) => (
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
    }
  } catch (e) {
    return null;
  }
  return null;
};

export function Preview() {
  const { t } = useLanguage();
  const { source } = useDocumentViewerContext();
  return (
    <div className="relative flex flex-col rounded-lg border bg-card">
      <div className="p-3 text-sm font-medium text-muted-foreground">
        {t("preview")}
      </div>
      <ScrollArea className="flex-1 border-t p-4">
        {source.text ? (
          <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
            {source.language === "text" ? (
              source.text.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))
            ) : (
              <div className="rounded-lg border p-4">
                {generateHtmlPreview(source.text, source.language)}
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">{t("emptyPreview")}</p>
        )}
      </ScrollArea>
    </div>
  );
}
