"use client";

import { useLanguage } from "@/hooks/use-language";
import { FileEdit } from "lucide-react";

export function Logo() {
  const { t, language } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <FileEdit className="h-6 w-6 text-primary" />
      <span className="text-lg font-semibold">{t("appName")}</span>
    </div>
  );
}
