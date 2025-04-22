"use client";

import { useLanguage } from "@/contexts/language-context";
import { Coffee } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t py-4">
      <div className="container flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
        <nav className="flex gap-4">
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
            Apóyanos con un café
          </a>
        </nav>
      </div>
    </footer>
  );
}
