import { FastifyPluginAsync } from 'fastify'

const rootRoute: FastifyPluginAsync = async function (fastify) {
  fastify.get('/', async function () {
    return { root: true }
  })
}

export = rootRoute
