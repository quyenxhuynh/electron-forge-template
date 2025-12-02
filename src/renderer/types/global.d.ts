export interface IElectronAPI {
  selectFolder: () => Promise<string | null>;
  selectFile: (filters: Electron.FileFilter[]) => Promise<string | null>;
}

declare global {
  interface Window {
    api: IElectronAPI;
  }
}
