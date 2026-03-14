import { createLogger } from 'bytekit/logger';

export const logger = createLogger({
  namespace: 'clean-arch-template',
  level: import.meta.env.DEV ? 'debug' : 'info',
});
