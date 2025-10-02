import { expo } from '@better-auth/expo';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import {
  admin,
  anonymous,
  apiKey,
  organization,
  phoneNumber,
  twoFactor,
  username,
} from 'better-auth/plugins';
// import { passkey } from 'better-auth/plugins/passkey';
import { db } from '../db';
// biome-ignore lint/performance/noNamespaceImport: Documented Usage
import * as schema from '../db/schema/auth';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  trustedOrigins: [process.env.CORS_ORIGIN || '', 'my-better-t-app://'],
  emailAndPassword: {
    enabled: true,
  },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [
    expo(),
    twoFactor(),
    username(),
    anonymous(),
    phoneNumber(),
    admin(),
    apiKey(),
    organization(),
    // passkey(),
  ],
});
