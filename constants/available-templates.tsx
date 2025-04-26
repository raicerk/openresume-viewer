import { TranslationKeys } from "@/lib/translations";
import { GraduationCap, Linkedin } from "lucide-react";

export type Templates = "linkedin" | "harvard";

export const AvailableTemplates: Array<{
  id: Templates;
  icon: React.JSX.Element;
  translations: {
    name: TranslationKeys;
    description: TranslationKeys;
  };
}> = [
  {
    id: "linkedin",
    icon: <Linkedin />,
    translations: {
      name: "linkedinStyle",
      description: "linkedinDesc",
    },
  },
  {
    id: "harvard",
    icon: <GraduationCap />,
    translations: {
      name: "harvardStyle",
      description: "harvardDesc",
    },
  },
];

Object.freeze(AvailableTemplates);
