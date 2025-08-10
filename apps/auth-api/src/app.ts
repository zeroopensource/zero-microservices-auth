import configureOpenAPI from '@/lib/configure-open-api';
import createApp from '@/lib/create-app';
import index from '@/routes/index.route';
import tasks from '@/routes/tasks/tasks.index';

const app = createApp();

configureOpenAPI(app);

const routes = [index, tasks] as const;

for (const route of routes) {
  app.route('/', route);
}

export type AppType = (typeof routes)[number];

export default app;
