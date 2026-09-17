import { test } from 'node:test'
import assert from 'node:assert/strict'
import Fastify from 'fastify'
import Support from '../../plugins/support'

test('support works standalone', async () => {
  const fastify = Fastify()
  fastify.register(Support)

  await fastify.ready()
  const decoratedFastify = fastify as unknown as {
    someSupport: () => string
  }
  assert.equal(decoratedFastify.someSupport(), 'hugs')
})

// You can also use plugin with opts in fastify v2
//
// test('support works standalone', (t) => {
//   t.plan(2)
//   const fastify = Fastify()
//   fastify.register(Support)
//
//   fastify.ready((err) => {
//     t.error(err)
//     assert.equal(fastify.someSupport(), 'hugs')
//   })
// })
