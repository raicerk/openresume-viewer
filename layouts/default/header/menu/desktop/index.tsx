"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import classNames from "classnames";
import { GraduationCap } from "lucide-react";
import { DeveloperResources } from "./developer-resources";
import { DownloadTemplate } from "./download-template";
import { LanguageSelector } from "./language-selector";

export function DesktopMenu({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <div className={classNames("flex items-center gap-2", className)}>
      <DeveloperResources />

      <Button variant="ghost" size="sm" className="h-8">
        <GraduationCap className="mr-2 h-4 w-4" />
        {t("learnToDesign")}
      </Button>

      <DownloadTemplate />

      <LanguageSelector />
    </div>
  );
}
