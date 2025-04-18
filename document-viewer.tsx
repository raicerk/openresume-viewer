"use client"

import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  FileText,
  Download,
  Upload,
  FileEdit,
  FileIcon as FilePdf,
  FileIcon,
  FileCode,
  FileType,
  Linkedin,
  GraduationCap,
  Languages,
  Code,
  Coffee,
} from "lucide-react"
import Editor from "react-simple-code-editor"
import Prism from "prismjs"
import "prismjs/components/prism-json"
import "prismjs/components/prism-yaml"
import "prismjs/themes/prism-dark.css"
import yaml from "js-yaml"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"

function DocumentViewerContent() {
  const { t, language, setLanguage } = useLanguage()
  const [text, setText] = React.useState("")
  const [template, setTemplate] = React.useState<"linkedin" | "harvard" | null>(null)
  const [detectedFormat, setDetectedFormat] = React.useState<"text" | "json" | "yaml">("text")
  const [error, setError] = React.useState<string | null>(null)

  const handleTextChange = (value: string) => {
    setText(value)
    setError(null)

    // Detectar formato automáticamente
    try {
      JSON.parse(value)
      setDetectedFormat("json")
      return
    } catch (e) {
      // No es JSON, intentar YAML
      try {
        yaml.load(value)
        setDetectedFormat("yaml")
        return
      } catch (e) {
        // Si no es JSON ni YAML, asumimos que es texto plano
        setDetectedFormat("text")
      }
    }
  }

  const generateHtmlPreview = (content: string, mode: string) => {
    try {
      let data = content
      if (mode === "json") {
        data = JSON.parse(content)
      } else if (mode === "yaml") {
        data = yaml.load(content)
      }

      if (typeof data === "object" && data !== null) {
        return (
          <div className="space-y-4">
            {Object.entries(data).map(([key, value]) => (
              <div key={key} className="rounded-lg border bg-card p-4">
                <h3 className="mb-2 font-medium text-primary">{key}</h3>
                {Array.isArray(value) ? (
                  <ul className="list-inside list-disc space-y-1">
                    {value.map((item, index) => (
                      <li key={index} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{value?.toString()}</p>
                )}
              </div>
            ))}
          </div>
        )
      }
    } catch (e) {
      return null
    }
    return null
  }

  const handleDownload = (format: string) => {
    console.log(`Descargando en formato ${format}`)
  }

  const handleTemplateSelect = (templateType: "linkedin" | "harvard") => {
    setTemplate(templateType)
    setText(t(`templates.${templateType}`))
  }

  const getEditorStyles = () => {
    return {
      root: {
        boxSizing: "border-box",
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14,
        height: "100%",
        backgroundColor: "transparent",
        color: "inherit",
        borderRadius: "0",
      },
      textarea: {
        outline: 0,
      },
    }
  }

  const highlightCode = (code: string) => {
    if (detectedFormat === "json") {
      return Prism.highlight(code, Prism.languages.json, "json")
    } else if (detectedFormat === "yaml") {
      return Prism.highlight(code, Prism.languages.yaml, "yaml")
    }
    return code
  }

  const formatCode = () => {
    try {
      if (detectedFormat === "json") {
        const parsed = JSON.parse(text)
        setText(JSON.stringify(parsed, null, 2))
      } else if (detectedFormat === "yaml") {
        const parsed = yaml.load(text)
        setText(yaml.dump(parsed, { indent: 2, lineWidth: -1 }))
      }
    } catch (e) {
      setError(t("formatError"))
    }
  }

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-14 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FileEdit className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">{t("appName")}</span>
          </div>

          {/* Horizontal Menu */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8">
                  <Code className="mr-2 h-4 w-4" />
                  Librería para desarrolladores
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <FileCode className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>Documentación API</span>
                    <span className="text-xs text-muted-foreground">Integra Open Curriculum</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Code className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>SDK</span>
                    <span className="text-xs text-muted-foreground">Cliente para Node.js</span>
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
                    <span className="text-xs text-muted-foreground">{t("linkedinDesc")}</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTemplateSelect("harvard")}>
                  <GraduationCap className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>{t("harvardStyle")}</span>
                    <span className="text-xs text-muted-foreground">{t("harvardDesc")}</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <FileText className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>{t("customStyle")}</span>
                      <span className="text-xs text-muted-foreground">{t("customDesc")}</span>
                    </div>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <label htmlFor="template-upload" className="flex w-full cursor-pointer items-center">
                        <Upload className="mr-2 h-4 w-4" />
                        {t("uploadTemplate")}
                      </label>
                      <input
                        id="template-upload"
                        type="file"
                        accept=".txt,.md,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            console.log("Plantilla seleccionada:", file.name)
                          }
                        }}
                      />
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Menú de Exportar */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8">
                  <Download className="mr-2 h-4 w-4" />
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

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8">
                  <Languages className="mr-2 h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange("es")}>Español</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-4">
        <div className="container px-4">
          <div className="grid h-[calc(100vh-10rem)] grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Editor Section */}
            <div className="relative flex flex-col rounded-lg border bg-card">
              <div className="flex items-center justify-between border-b p-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{t("detectedFormat")}</span>
                  <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    {detectedFormat === "text" && "OpenC"}
                    {detectedFormat === "json" && "JSON"}
                    {detectedFormat === "yaml" && "YAML"}
                  </span>
                </div>
              </div>
              <div className="relative flex-1">
                {(detectedFormat === "json" || detectedFormat === "yaml") && text.trim() !== "" && (
                  <Button variant="ghost" size="sm" onClick={formatCode} className="absolute right-2 top-2 z-10">
                    <FileCode className="mr-2 h-4 w-4" />
                    {t("format")}
                  </Button>
                )}
                <Editor
                  value={text}
                  onValueChange={handleTextChange}
                  highlight={(code) => highlightCode(code)}
                  padding={16}
                  style={getEditorStyles()}
                  className="h-full min-h-full overflow-auto"
                  placeholder={t("editorPlaceholder")}
                />
                {error && (
                  <div className="absolute bottom-0 left-0 right-0 bg-destructive/10 p-2 text-sm text-destructive">
                    {error}
                  </div>
                )}
              </div>
            </div>

            {/* Preview Section */}
            <div className="relative flex flex-col rounded-lg border bg-card">
              <div className="p-3 text-sm font-medium text-muted-foreground">{t("preview")}</div>
              <ScrollArea className="flex-1 border-t p-4">
                {text ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                    {detectedFormat === "text" ? (
                      text.split("\n").map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <div className="rounded-lg border p-4">{generateHtmlPreview(text, detectedFormat)}</div>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">{t("emptyPreview")}</p>
                )}
              </ScrollArea>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-4">
        <div className="container flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
          </div>
          <nav className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              {t("footer.help")}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              {t("footer.terms")}
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Coffee className="h-4 w-4" />
              Apóyanos con un café
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default function DocumentViewer() {
  return (
    <LanguageProvider>
      <DocumentViewerContent />
    </LanguageProvider>
  )
}

