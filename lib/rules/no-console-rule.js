/**
 * @license
 * Copyright Trilogy Enterprises, Inc - All Rights Reserved.
 *
 * This file is part of Rapid Engineering QC project.
 * Unauthorized copying of this file, via any medium is strictly prohibited - Proprietary and confidential
 */

'use strict';

const RULE = require('eslint/lib/rules/no-console');
const RP_CONF = {
  meta: {
    docs: {
      description: 'Console logs are removed',
    },
    messages: {
      unexpected: 'QB Rule #51: Unexpected console statement.',
    },
  },
};

module.exports = { ...RULE, ...RP_CONF };
