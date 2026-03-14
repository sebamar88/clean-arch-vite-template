import { EnvManager } from 'bytekit/env-manager';

const envManager = new EnvManager();

export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'Clean Arch Vite Template',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
  appEnv: envManager.require('MODE'),
};
