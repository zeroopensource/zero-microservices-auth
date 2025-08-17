import { pinoLogger as logger } from 'hono-pino';
import pino from 'pino';
import pretty from 'pino-pretty';
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
