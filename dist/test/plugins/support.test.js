"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const strict_1 = __importDefault(require("node:assert/strict"));
const Fastify = require('fastify');
const Support = require('../../plugins/support');
(0, node_test_1.test)('support works standalone', async () => {
    const fastify = Fastify();
    fastify.register(Support);
    await fastify.ready();
    strict_1.default.equal(fastify.someSupport(), 'hugs');
});
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
