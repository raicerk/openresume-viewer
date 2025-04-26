"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Upload,
  FileCode,
  Linkedin,
  GraduationCap,
  Languages,
  Code,
  Menu,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import type { Language } from "@/lib/translations";
import { AvailableLanguages } from "@/constants/available-languages";
import { AvailableTemplates } from "@/constants/available-templates";
import { AvailableResources } from "@/constants/available-resources";
import classNames from "classnames";

// Componente de menú para móvil
export function MobileMenu({ className }: { className?: string }) {
  const { t, setLanguage } = useLanguage();
  const [, setText] = React.useState("");
  const [, setTemplate] = React.useState<"linkedin" | "harvard" | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleTemplateSelect = (templateType: "linkedin" | "harvard") => {
    setTemplate(templateType);
    setText(t(`templates.${templateType}`));
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={classNames(className)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>{t("appName")}</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">{t("libraryForDevelopers")}</h3>
            <ul>
              {AvailableResources.map(({ id, icon, link, translations }) => (
                <li key={id}>
                  <Button variant="ghost" size="sm" className="justify-start">
                    <span className="mr-2 h-4 w-4">{icon}</span>
                    {t(translations.name)}
                  </Button>
                </li>
              ))}
              <li>
                <Button variant="ghost" size="sm" className="justify-start">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  {t("learnToDesign")}
                </Button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">{t("cvType")}</h3>
            <ul>
              {AvailableTemplates.map(({ id, icon, translations }) => (
                <li key={id}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start"
                    onClick={() => handleTemplateSelect("linkedin")}
                  >
                    <span className="mr-2 h-4 w-4">{icon}</span>
                    {t(translations.name)}
                  </Button>
                </li>
              ))}
              <li>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Upload className="mr-2 h-4 w-4" />
                  {t("uploadTemplate")}
                </Button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">{t("language")}</h3>
            <ul>
              {AvailableLanguages.map(({ language, translation }) => (
                <li key={language}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start"
                    onClick={() => handleLanguageChange(language)}
                  >
                    <Languages className="mr-2 h-4 w-4" />
                    {t(translation)}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
