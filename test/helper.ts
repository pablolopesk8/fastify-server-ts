import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build as buildApplication } from 'fastify-cli/helper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const AppPath = path.join(__dirname, '..', 'dist', 'app.js');

function config() {
  return {
    skipOverride: true,
  };
}

async function build(t: { after: (callback: () => void) => void }) {
  const argv = [AppPath];
  const app = await buildApplication(argv, config());

  t.after(() => app.close());

  return app;
}

export { config, build };
