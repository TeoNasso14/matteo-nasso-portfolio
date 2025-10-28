'use strict';

/**
 * contact service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contacts-section.contacts-section');
