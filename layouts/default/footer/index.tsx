"use client";

import React from "react";
import { useLanguage } from "@/hooks/use-language";
import { Coffee } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t py-4">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t("footer.help")}
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t("footer.privacy")}
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t("footer.terms")}
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Coffee className="h-4 w-4" />
            {t("footer.coffe")}
          </a>
        </nav>
      </div>
    </footer>
  );
}
