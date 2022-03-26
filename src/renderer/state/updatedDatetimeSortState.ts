import { atomWithStorage } from "jotai/utils";

export const updatedDatetimeSortState = atomWithStorage<"latest" | "oldest">(
  "updated-datetime-sort",
  "latest"
);
