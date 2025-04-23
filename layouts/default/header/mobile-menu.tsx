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
  FileIcon as FilePdf,
  FileIcon,
  FileCode,
  FileType,
  Linkedin,
  GraduationCap,
  Languages,
  Code,
  Menu,
} from "lucide-react";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism-dark.css";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/translations";

// Componente de menú para móvil
export function MobileMenu() {
  const { t, setLanguage } = useLanguage();
  const [text, setText] = React.useState("");
  const [template, setTemplate] = React.useState<"linkedin" | "harvard" | null>(
    null
  );

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  const handleDownload = (format: string) => {
    console.log(`Descargando en formato ${format}`);
    setIsMenuOpen(false);
  };

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
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle>Open Resume</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">
              Librería para desarrolladores
            </h3>
            <Button variant="ghost" size="sm" className="justify-start">
              <FileCode className="mr-2 h-4 w-4" />
              Documentación API
            </Button>
            <Button variant="ghost" size="sm" className="justify-start">
              <Code className="mr-2 h-4 w-4" />
              SDK
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="justify-start">
            <GraduationCap className="mr-2 h-4 w-4" />
            {t("learnToDesign")}
          </Button>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">{t("cvType")}</h3>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => handleTemplateSelect("linkedin")}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              {t("linkedinStyle")}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => handleTemplateSelect("harvard")}
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              {t("harvardStyle")}
            </Button>
            <Button variant="ghost" size="sm" className="justify-start">
              <Upload className="mr-2 h-4 w-4" />
              {t("uploadTemplate")}
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">{t("exportAs")}</h3>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => handleDownload("pdf")}
            >
              <FilePdf className="mr-2 h-4 w-4" />
              PDF
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => handleDownload("docx")}
            >
              <FileIcon className="mr-2 h-4 w-4" />
              Word
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => handleDownload("html")}
            >
              <FileCode className="mr-2 h-4 w-4" />
              HTML
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => handleDownload("txt")}
            >
              <FileType className="mr-2 h-4 w-4" />
              {t("plainText")}
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Idioma</h3>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => handleLanguageChange("es")}
            >
              <Languages className="mr-2 h-4 w-4" />
              Español
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => handleLanguageChange("en")}
            >
              <Languages className="mr-2 h-4 w-4" />
              English
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
