import LinkedInProfile from "@/components/organisms/document-viewver/templates/linkedin/linkedInProfile";
import type { ParsedDocument } from "../context/context";
import React from "react";
import { ResumeSchema } from "../types/resume";

export const HTMLPreview = ({ children }: { children?: ParsedDocument }) => {
  if (!isRecord(children)) {
    return (
      <div className="rounded-lg border bg-card p-4">Invalid data format</div>
    );
  }

  const data: ResumeSchema = children as unknown as ResumeSchema;

  return (
    <div className="space-y-4">
      {/* TODO: Acá debo agregar los templates para mapear los datos */}
      <LinkedInProfile resume={data} />
    </div>
  );
};

function isRecord(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}
