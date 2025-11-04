'use strict';

/**
 * working-place service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::working-place.working-place');