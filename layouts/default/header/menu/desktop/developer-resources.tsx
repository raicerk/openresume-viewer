import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvailableResources } from "@/constants/available-resources";
import { useLanguage } from "@/hooks/use-language";
import { Code, FileCode } from "lucide-react";

export function DeveloperResources() {
  const { t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8">
          <Code className="mr-2 h-4 w-4" />
          {t("libraryForDevelopers")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {AvailableResources.map(({ id, icon, link, translations }) => (
          <DropdownMenuItem key={id}>
            <span className="mr-2 h-4 w-4">{icon}</span>
            <div className="flex flex-col">
              <span>{t(translations.name)}</span>
              <span className="text-xs text-muted-foreground">
                {t(translations.kind)}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
