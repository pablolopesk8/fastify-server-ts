import { FastifyPluginAsync } from 'fastify';

const exampleRoute: FastifyPluginAsync = async function (fastify) {
  fastify.get('/', async function () {
    return 'this is an example';
  });
};

export = exampleRoute;
