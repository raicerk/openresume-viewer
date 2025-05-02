import { useMemo } from "react";
import { parseSource } from "../languages";

export function useSourceCode(source: string) {
  return useMemo(() => {
    return parseSource(source);
  }, [source]);
}
