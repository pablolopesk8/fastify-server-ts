"use strict";
const exampleRoute = async function (fastify) {
    fastify.get('/', async function () {
        return 'this is an example';
    });
};
module.exports = exampleRoute;
