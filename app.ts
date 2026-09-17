import path from 'node:path';
import AutoLoad from '@fastify/autoload';
import { FastifyPluginAsync, FastifyPluginOptions } from 'fastify';

const options: FastifyPluginOptions = {};

const app: FastifyPluginAsync & { options: FastifyPluginOptions } = async function (fastify, opts) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  });
};

app.options = options;

export = app;
