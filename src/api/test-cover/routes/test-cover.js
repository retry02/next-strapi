'use strict';

/**
 * test-cover router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-cover.test-cover');
