import { atomWithStorage } from "jotai/utils";

export const viewModeState = atomWithStorage<"grid" | "rows">(
  "view-mode",
  "grid"
);
