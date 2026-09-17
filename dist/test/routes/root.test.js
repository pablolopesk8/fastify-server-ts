"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const strict_1 = __importDefault(require("node:assert/strict"));
const { build } = require('../helper');
(0, node_test_1.test)('default root route', async (t) => {
    const app = await build(t);
    const res = await app.inject({
        url: '/'
    });
    strict_1.default.deepStrictEqual(JSON.parse(res.payload), { root: true });
});
// inject callback style:
//
// test('default root route', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/'
//   }, (err, res) => {
//     t.error(err)
//     assert.deepStrictEqual(JSON.parse(res.payload), { root: true })
//   })
// })
