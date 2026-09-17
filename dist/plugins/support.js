"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const supportPlugin = async function (fastify) {
    fastify.decorate('someSupport', function () {
        return 'hugs';
    });
};
module.exports = (0, fastify_plugin_1.default)(supportPlugin);
