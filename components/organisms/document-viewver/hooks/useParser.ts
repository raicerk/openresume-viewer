import { useMemo } from "react";
import { parseSource } from "../languages";
import { useDocumentViewerContext } from "./useDocumentViewerContext";

export function useParser() {
  const { source } = useDocumentViewerContext();

  return useMemo(() => {
    return parseSource(source.text);
  }, [source]);
}
