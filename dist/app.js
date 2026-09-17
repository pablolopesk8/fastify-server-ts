"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const node_path_1 = __importDefault(require("node:path"));
const autoload_1 = __importDefault(require("@fastify/autoload"));
const options = {};
const app = async function (fastify, opts) {
    fastify.register(autoload_1.default, {
        dir: node_path_1.default.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
    });
    fastify.register(autoload_1.default, {
        dir: node_path_1.default.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
    });
};
app.options = options;
module.exports = app;
