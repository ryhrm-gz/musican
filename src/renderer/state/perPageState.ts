import { atomWithStorage } from "jotai/utils";

export const perPageState = atomWithStorage<number>("per-page", 30);
