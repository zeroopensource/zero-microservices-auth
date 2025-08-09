import { pinoLogger as logger } from 'hono-pino';
import pino from 'pino';
// biome-ignore lint/performance/noNamespaceImport: documented usage
import * as pretty from 'pino-pretty';
import { ENV } from '@/env';

export function pinoLogger() {
  return logger({
    pino: pino(
      {
        level: ENV.LOG_LEVEL || 'info',
      },
      ENV.NODE_ENV === 'production' ? undefined : pretty()
    ),
  });
}
