export const translations = {
  es: {
    appName: "Open Curriculum",
    learnToDesign: "Aprende a diseñar tu propia plantilla",
    cvType: "Tipo de Curriculum Vitae",
    linkedinStyle: "Estilo LinkedIn",
    linkedinDesc: "Profesional y conciso",
    harvardStyle: "Estilo Harvard",
    harvardDesc: "Académico y detallado",
    customStyle: "Estilo Personalizado",
    customDesc: "Usa tu propia plantilla",
    uploadTemplate: "Subir plantilla",
    exportAs: "Exportar como",
    detectedFormat: "Formato detectado:",
    format: "Formatear",
    preview: "Vista previa",
    emptyPreview: "El texto ingresado aparecerá aquí...",
    editorPlaceholder: "Pega tu texto aquí... Se detectará automáticamente si es OpenC, JSON o YAML",
    formatError: "Error al formatear el código",
    footer: {
      copyright: "© 2024 Open Curriculum. Todos los derechos reservados.",
      help: "Ayuda",
      privacy: "Privacidad",
      terms: "Términos",
    },
    templates: {
      linkedin: `[Tu Nombre]
[Título Profesional]

PERFIL PROFESIONAL
Profesional con [X] años de experiencia en [industria/campo]...`,
      harvard: `[Nombre Completo]
[Dirección]
[Teléfono] | [Email]

EDUCACIÓN...`,
    },
  },
  en: {
    appName: "Open Curriculum",
    learnToDesign: "Learn to design your own template",
    cvType: "CV Type",
    linkedinStyle: "LinkedIn Style",
    linkedinDesc: "Professional and concise",
    harvardStyle: "Harvard Style",
    harvardDesc: "Academic and detailed",
    customStyle: "Custom Style",
    customDesc: "Use your own template",
    uploadTemplate: "Upload template",
    exportAs: "Export as",
    detectedFormat: "Detected format:",
    format: "Format",
    preview: "Preview",
    emptyPreview: "The entered text will appear here...",
    editorPlaceholder: "Paste your text here... It will automatically detect if it's OpenC, JSON or YAML",
    formatError: "Error formatting code",
    footer: {
      copyright: "© 2024 Open Curriculum. All rights reserved.",
      help: "Help",
      privacy: "Privacy",
      terms: "Terms",
    },
    templates: {
      linkedin: `[Your Name]
[Professional Title]

PROFESSIONAL PROFILE
Professional with [X] years of experience in [industry/field]...`,
      harvard: `[Full Name]
[Address]
[Phone] | [Email]

EDUCATION...`,
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKeys = keyof typeof translations.es

