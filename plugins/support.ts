import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';

const supportPlugin: FastifyPluginAsync = async function (fastify) {
  fastify.decorate('someSupport', function () {
    return 'hugs';
  });
};

export default fp(supportPlugin);
