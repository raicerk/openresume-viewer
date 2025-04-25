"use client";

import { useLanguage } from "@/contexts/language-context";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useDocumentViewerContext } from "./hooks/useDocumentViewerContext";
import yaml from "js-yaml";
import { Button } from "@/components/ui/button";
import {
  FileCode,
  FileIcon,
  FileType,
  FileIcon as FilePdf,
  Download,
} from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const generateHtmlPreview = (content: string, mode: string) => {
  try {
    let data = content;
    switch (mode) {
      case "json":
        data = JSON.parse(content);
        break;
      case "yaml": {
        const parsedYaml = yaml.load(content);
        if (typeof parsedYaml === "string") {
          data = parsedYaml;
        } else {
          throw new Error("Parsed YAML is not a string");
        }
        break;
      }
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
    console.error("Error parsing content:", e);
    return null;
  }
  return null;
};

export function Preview() {
  const { t } = useLanguage();
  const { source } = useDocumentViewerContext();
  const [, setIsMenuOpen] = useState(false);

  const handleDownload = (format: string) => {
    console.log(`Descargando en formato ${format}`);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative flex flex-col rounded-lg border bg-card">
      <div className="p-3 text-sm font-medium text-muted-foreground">
        {t("preview")}
      </div>
      <div className="relative flex-1 min-h-[300px]">
        <ScrollArea className="h-full border-t p-4">
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
        {/* Botón flotante de exportación */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              size="sm"
              className="absolute bottom-4 right-4 shadow-md flex items-center gap-2 z-10"
            >
              <Download className="h-4 w-4" />
              {t("exportAs")}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onClick={() => handleDownload("pdf")}>
              <FilePdf className="mr-2 h-4 w-4" />
              PDF
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDownload("docx")}>
              <FileIcon className="mr-2 h-4 w-4" />
              Word
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDownload("html")}>
              <FileCode className="mr-2 h-4 w-4" />
              HTML
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleDownload("txt")}>
              <FileType className="mr-2 h-4 w-4" />
              {t("plainText")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
