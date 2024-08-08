'use strict';

/**
 * test-cover service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-cover.test-cover');
