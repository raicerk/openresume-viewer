import LinkedInProfile from "./linkedin/linkedin-profile";
import type { ParsedDocument } from "../context/context";
import React from "react";
import { ResumeSchema } from "../types/resume";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

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
      <ErrorBoundary fallbackRender={Fallback}>
        <LinkedInProfile resume={data} />
      </ErrorBoundary>
    </div>
  );
};

function isRecord(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}

function Fallback({ error }: FallbackProps) {
  return (
    <section role="alert">
      <p>Something went wrong</p>
      <pre className="bg-red-500 text-white">{error.message}</pre>
    </section>
  );
}
