"use strict";
const rootRoute = async function (fastify) {
    fastify.get('/', async function () {
        return { root: true };
    });
};
module.exports = rootRoute;
