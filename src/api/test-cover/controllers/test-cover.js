'use strict';

/**
 * test-cover controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-cover.test-cover');
