/**
 * @license
 * Copyright Trilogy Enterprises, Inc - All Rights Reserved.
 *
 * This file is part of Rapid Engineering QC project.
 * Unauthorized copying of this file, via any medium is strictly prohibited - Proprietary and confidential
 */

'use strict';

const RULE = require('eslint/lib/rules/max-lines-per-function');
const RP_CONF = {
  meta: {
    docs: {
      description:
        'Do define small functions limiting them to no more than 75 lines',
      url: 'https://angular.io/guide/styleguide#small-functions',
    },
    messages: {
      exceed:
        'QB Rule #3: {{name}} has too many lines ({{lineCount}}). Maximum allowed is {{maxLines}}',
    },
  },
};

module.exports = { ...RULE, ...RP_CONF };
