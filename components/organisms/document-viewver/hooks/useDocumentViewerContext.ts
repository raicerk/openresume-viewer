import { useContext } from "react";
import { DocumentContext } from "../context/context";

export function useDocumentViewerContext() {
  return useContext(DocumentContext);
}
