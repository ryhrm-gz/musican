import { MainProcessResponse } from ".";

declare global {
  interface Window {
    api: Sandbox;
  }
}

export interface Sandbox {
  openFolder: (path: string) => Promise<MainProcessResponse<undefined>>;
  getVersion: () => Promise<MainProcessResponse<string>>;
}
