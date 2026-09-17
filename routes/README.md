# Routes folder

This directory contains the HTTP endpoints for the app. Like the plugins folder, it is auto-loaded by `app.ts` using `@fastify/autoload`.

Each route module is a Fastify plugin. When you add a file here, it is registered automatically; when you add a nested folder with an `index.ts`, that folder is also mounted as a route group.

## Current examples

- `routes/root.ts` exposes `GET /` and returns `{ root: true }`.
- `routes/example/index.ts` exposes `GET /example` and returns `this is an example`.

The module naming convention is simple:

- a file at `routes/root.ts` becomes `/`
- a folder at `routes/example/index.ts` becomes `/example`
- additional route handlers inside the same module can register more endpoints using `fastify.get()`, `fastify.post()`, and so on

## Adding a route

```ts
import { FastifyPluginAsync } from 'fastify';

const exampleRoute: FastifyPluginAsync = async function (fastify) {
  fastify.get('/hello', async function () {
    return { hello: 'world' };
  });
};

export = exampleRoute;
```

This route is loaded automatically as long as the file remains in `routes/` or inside a nested route directory.

## Best practices

- Keep route modules focused on one concern or endpoint group.
- Put shared behavior in `plugins/` instead of duplicating logic across route files.
- Use the tests in `test/routes/` to verify route behavior through `app.inject()`.

## Related docs

- Fastify routes: <https://fastify.dev/docs/latest/Reference/Routes/>
- Fastify plugins: <https://fastify.dev/docs/latest/Reference/Plugins/>
