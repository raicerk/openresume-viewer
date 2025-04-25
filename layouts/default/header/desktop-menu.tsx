"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileText,
  Upload,
  FileCode,
  Linkedin,
  GraduationCap,
  Languages,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import React from "react";
import { Language } from "@/lib/translations";

export function DesktopMenu() {
  const { t, language, setLanguage } = useLanguage()
  const [, setIsMenuOpen] = React.useState(false)
  const [, setText] = React.useState("")
  const [, setTemplate] = React.useState<"linkedin" | "harvard" | null>(null)
  
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setIsMenuOpen(false)
    
  }
  const handleTemplateSelect = (templateType: "linkedin" | "harvard") => {
    setTemplate(templateType)
    setText(t(`templates.${templateType}`))
    setIsMenuOpen(false)
  }

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8">
            <Code className="mr-2 h-4 w-4" />
            {t("libraryForDevelopers")}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>
            <FileCode className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span>{t("apiDocumentation")}</span>
              <span className="text-xs text-muted-foreground">
                {t("openResumeIntegration")}
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Code className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span>SDK</span>
              <span className="text-xs text-muted-foreground">
                {t("clientForJavascript")}
              </span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost" size="sm" className="h-8">
        <GraduationCap className="mr-2 h-4 w-4" />
        {t("learnToDesign")}
      </Button>

      {/* Menú de Tipo de CV */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8">
            <FileText className="mr-2 h-4 w-4" />
            {t("cvType")}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onClick={() => handleTemplateSelect("linkedin")}>
            <Linkedin className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span>{t("linkedinStyle")}</span>
              <span className="text-xs text-muted-foreground">
                {t("linkedinDesc")}
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleTemplateSelect("harvard")}>
            <GraduationCap className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span>{t("harvardStyle")}</span>
              <span className="text-xs text-muted-foreground">
                {t("harvardDesc")}
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <FileText className="mr-2 h-4 w-4" />
              <div className="flex flex-col">
                <span>{t("customStyle")}</span>
                <span className="text-xs text-muted-foreground">
                  {t("customDesc")}
                </span>
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <label
                  htmlFor="template-upload"
                  className="flex w-full cursor-pointer items-center"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {t("uploadTemplate")}
                </label>
                <input
                  id="template-upload"
                  type="file"
                  accept=".txt,.md,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      console.log("Plantilla seleccionada:", file.name);
                    }
                  }}
                />
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Language Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8">
            <Languages className="mr-2 h-4 w-4" />
            {language.toUpperCase()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleLanguageChange("es")}>
            {t("languageSpanish")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
            {t("languageEnglish")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
