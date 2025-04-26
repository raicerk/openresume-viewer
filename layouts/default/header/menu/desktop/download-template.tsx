import { Button } from "@/components/ui/button";
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
import { AvailableTemplates } from "@/constants/available-templates";
import { useLanguage } from "@/hooks/use-language";
import { FileText, GraduationCap, Linkedin, Upload } from "lucide-react";
import { useState } from "react";

export function DownloadTemplate() {
  const { t } = useLanguage();
  const [, setText] = useState("");
  const [, setTemplate] = useState<"linkedin" | "harvard" | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTemplateSelect = (templateType: "linkedin" | "harvard") => {
    setTemplate(templateType);
    setText(t(`templates.${templateType}`));
    setIsMenuOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8">
          <FileText className="mr-2 h-4 w-4" />
          {t("cvType")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {AvailableTemplates.map(({ id, icon, translations }) => (
          <DropdownMenuItem key={id} onClick={() => handleTemplateSelect(id)}>
            <span className="mr-2 h-4 w-4">{icon}</span>
            <div className="flex flex-col">
              <span>{t(translations.name)}</span>
              <span className="text-xs text-muted-foreground">
                {t(translations.description)}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
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
  );
}
