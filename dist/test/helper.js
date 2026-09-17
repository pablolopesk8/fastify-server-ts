"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = config;
exports.build = build;
const node_path_1 = __importDefault(require("node:path"));
const helper_1 = require("fastify-cli/helper");
const AppPath = node_path_1.default.join(__dirname, '..', 'dist', 'app.js');
function config() {
    return {
        skipOverride: true
    };
}
async function build(t) {
    const argv = [AppPath];
    const app = await (0, helper_1.build)(argv, config());
    t.after(() => app.close());
    return app;
}
