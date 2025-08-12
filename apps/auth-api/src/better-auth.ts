import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite', // or "pg" or "mysql"
  }),
});

// import { betterAuth } from 'better-auth';
// import { prismaAdapter } from 'better-auth/adapters/prisma';

// import prisma from '@/db/index';
// import { ENV } from '@/env';

// export const auth = betterAuth({
//   database: prismaAdapter(prisma, {
//     provider: 'postgresql',
//   }),
//   // Allow requests from the frontend development server
//   trustedOrigins: ['http://localhost:5173'],
//   emailAndPassword: {
//     enabled: true,
//   },
//   socialProviders: {
//     // github: {
//     //   clientId: ENV.GITHUB_CLIENT_ID,
//     //   clientSecret: ENV.GITHUB_CLIENT_SECRET,
//     // },
//     // google: {
//     //   clientId: ENV.GOOGLE_CLIENT_ID,
//     //   clientSecret: ENV.GOOGLE_CLIENT_SECRET,
//     // },
//   },
// });

// export type AuthType = {
//   user: typeof auth.$Infer.Session.user | null;
//   session: typeof auth.$Infer.Session.session | null;
// };
