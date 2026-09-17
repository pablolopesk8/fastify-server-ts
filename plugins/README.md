# Plugins folder

This directory is where shared Fastify plugins live. `app.ts` registers the plugin loader with `@fastify/autoload`, so every file in this folder is loaded automatically.

In this project, the plugin pattern is intentionally small and explicit:

- `plugins/support.ts` registers a plugin with `fastify-plugin`.
- The plugin adds a decorator named `someSupport()` via `fastify.decorate()`.
- Anything in this folder should hold app-wide behavior such as cross-cutting decorators, hooks, or shared utilities.

The current example is intentionally minimal, but the pattern is the same you would use for authentication, validation, logging, or shared setup.

## Example

```ts
import fp from 'fastify-plugin'
import { FastifyPluginAsync } from 'fastify'

const supportPlugin: FastifyPluginAsync = async function (fastify) {
  fastify.decorate('someSupport', function () {
    return 'hugs'
  })
}

export = fp(supportPlugin)
```

Keep plugin code focused and reusable. If the behavior is specific to a single route or endpoint, it usually belongs in the `routes/` folder instead.

## Related docs

- Fastify plugins guide: <https://fastify.dev/docs/latest/Guides/Plugins-Guide/>
- Fastify decorators: <https://fastify.dev/docs/latest/Reference/Decorators/>
