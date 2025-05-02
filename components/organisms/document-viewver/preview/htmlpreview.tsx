import LinkedInProfile from "@/components/templates/linkedin/linkedInProfile";
import type { ParsedDocument } from "../context/context";

export const HTMLPreview = ({ children }: { children?: ParsedDocument }) => {
  if (!isRecord(children)) {
    return (
      <div className="rounded-lg border bg-card p-4">Invalid data format</div>
    );
  }

  return (
    <div className="space-y-4">
      {/* TODO: Acá debo agregar los templates para mapear los datos */}
      <LinkedInProfile />
      {Object.entries(children).map(([key, value]) => (
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
  );
};

function isRecord(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}
