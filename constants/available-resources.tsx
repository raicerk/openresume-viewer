import { TranslationKeys } from "@/lib/translations";
import { Code, FileCode } from "lucide-react";

export const AvailableResources: Array<{
  id: string;
  link: string;
  icon: React.JSX.Element;
  translations: {
    name: TranslationKeys;
    kind: TranslationKeys;
  };
}> = [
  {
    id: "api-docs",
    link: "",
    translations: {
      name: "apiDocumentation",
      kind: "openResumeIntegration",
    },
    icon: <FileCode />,
  },
  {
    id: "sdk",
    link: "",
    icon: <Code />,
    translations: {
      name: "clientForJavascript",
      kind: "openResumeIntegration",
    },
  },
];

Object.freeze(AvailableResources);
