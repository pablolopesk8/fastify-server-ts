import fp from 'fastify-plugin'
import { FastifyPluginAsync } from 'fastify'

const sensiblePlugin: FastifyPluginAsync = async function (fastify) {
  fastify.register(require('@fastify/sensible'), {
    errorHandler: false
  })
}

export = fp(sensiblePlugin)
