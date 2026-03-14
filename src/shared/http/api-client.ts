import { env } from '@shared/config/env';
import { logger } from '@shared/observability/logger';
import { ApiClient } from 'bytekit/api-client';

export const apiClient = new ApiClient({
  baseUrl: env.apiBaseUrl,
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
  logger,
});
