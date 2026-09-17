# Fastify Server TypeScript

This repository is a small Fastify + TypeScript server built around auto-loaded plugins and routes. The app is configured in `app.ts`, where `@fastify/autoload` loads everything from the `plugins/` and `routes/` directories.

## Prerequisites

- Node.js
- pnpm

## Install dependencies

```bash
pnpm install
```

## Run the app

### Development

```bash
pnpm run dev
```

This script builds the TypeScript app and starts Fastify CLI in watch mode. The server listens on the default Fastify port:

- <http://localhost:3000>

### Production

```bash
pnpm start
```

This builds the project and starts the compiled server from `dist/app.js`.

## Run tests

```bash
pnpm test
```

The test script first runs `tsc -p tsconfig.json`, then executes the Node test suite with `node --test --import tsx` against files in `test/**/*.test.ts`.

## Project structure

- `app.ts` registers the plugin and route loaders.
- `plugins/` holds shared Fastify plugins, such as `support.ts`.
- `routes/` contains root-level and nested route modules. The example route is mounted under `routes/example/index.ts`, which is exposed at `/example`.
- `test/` contains app-level and plugin-level tests using `app.inject()`.

## Current app behavior

- `GET /` returns `{ root: true }` from `routes/root.ts`.
- `GET /example` returns `this is an example` from `routes/example/index.ts`.
- `plugins/support.ts` adds a `someSupport()` decorator that is verified by the standalone plugin test.

## Useful commands

```bash
pnpm run build
pnpm run dev
pnpm start
pnpm test
pnpm lint
pnpm format
pnpm format:check
```

## Learn more

- Fastify docs: <https://fastify.dev/docs/latest/>
- Fastify CLI: <https://www.npmjs.com/package/fastify-cli>
