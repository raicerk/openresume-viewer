import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/hooks/use-language";
import { Language } from "@/lib/translations";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AvailableLanguages } from "@/constants/available-languages";

export function LanguageSelector() {
  const { t, language, setLanguage } = useLanguage();
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    // setIsMenuOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8">
          <Languages className="mr-2 h-4 w-4" />
          {language.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {AvailableLanguages.map(({ language, translation }) => (
          <DropdownMenuItem
            key={language}
            onClick={() => handleLanguageChange(language)}
          >
            {t(translation)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
