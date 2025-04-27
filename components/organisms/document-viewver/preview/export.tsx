import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/hooks/use-language";
import {
  Download,
  FileCode,
  FileIcon,
  FileIcon as FilePdf,
  FileType,
} from "lucide-react";

export function Export() {
  const { t } = useLanguage();

  const handleDownload = (format: string) => {};
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-4 right-4 shadow-md flex items-center gap-2 z-10"
        >
          <Download className="h-4 w-4" />
          {t("exportAs")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={() => handleDownload("pdf")}>
          <FilePdf className="mr-2 h-4 w-4" />
          PDF
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDownload("docx")}>
          <FileIcon className="mr-2 h-4 w-4" />
          Word
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDownload("html")}>
          <FileCode className="mr-2 h-4 w-4" />
          HTML
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDownload("txt")}>
          <FileType className="mr-2 h-4 w-4" />
          {t("plainText")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
