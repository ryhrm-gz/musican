import { atomWithStorage } from "jotai/utils";

export const updatedSortState = atomWithStorage<"latest" | "oldest">(
  "updated-sort",
  "latest"
);
