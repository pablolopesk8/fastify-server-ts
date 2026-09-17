# Fastify Server TypeScript

This project is a minimal Fastify + TypeScript server that auto-loads plugin and route modules from the `plugins/` and `routes/` directories.

## Prerequisites

- Node.js
- npm

## Install

From the project root, install dependencies:

```bash
pnpm install
```

## Run the app

### Development mode

```bash
pnpm run dev
```

This builds the TypeScript app and starts the Fastify server with watch mode enabled. The app listens on the default Fastify port:

- <http://localhost:3000>

### Production mode

```bash
pnpm start
```

This builds the project and runs the compiled server from `dist/app.js`.

## Run tests

```bash
pnpm test
```

This script runs the TypeScript build first and then executes the test suite with Node's built-in test runner and `tsx`.

## Project structure

- `app.ts` registers the auto-loaded plugins and routes.
- `plugins/` contains Fastify plugins shared across the app.
- `routes/` contains route modules; nested folders like `routes/example/` are also auto-loaded.
- `test/` contains the application tests.

## Useful commands

```bash
pnpm run build
pnpm run dev
pnpm start
pnpm test
```

## Learn more

- Fastify docs: <https://fastify.dev/docs/latest/>
- Fastify CLI: <https://www.npmjs.com/package/fastify-cli>
