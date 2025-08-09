import { createRouter } from '@/lib/create-app';
// biome-ignore lint/performance/noNamespaceImport: TODO: Fix this
import * as handlers from './tasks.handlers';
// biome-ignore lint/performance/noNamespaceImport: TODO: Fix this
import * as routes from './tasks.routes';

const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.getOne, handlers.getOne)
  .openapi(routes.patch, handlers.patch)
  .openapi(routes.remove, handlers.remove);

export default router;
