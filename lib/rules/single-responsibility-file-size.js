/**
 * @license
 * Copyright Trilogy Enterprises, Inc - All Rights Reserved.
 *
 * This file is part of Rapid Engineering QC project.
 * Unauthorized copying of this file, via any medium is strictly prohibited - Proprietary and confidential
 */

'use strict';

const RULE = require('eslint/lib/rules/max-lines');
const RP_CONF = {
  meta: {
    docs: {
      description: 'Limit files to 400 lines of code',
      url: 'https://angular.io/guide/styleguide#rule-of-one',
    },
    messages: {
      exceed:
        'QB Rule #2: File has too many lines ({{actual}}). Maximum allowed is {{max}}',
    },
  },
};

module.exports = { ...RULE, ...RP_CONF };
