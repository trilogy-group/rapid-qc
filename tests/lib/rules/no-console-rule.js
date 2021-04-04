/**
 * @license
 * Copyright Trilogy Enterprises, Inc - All Rights Reserved.
 *
 * This file is part of Rapid Engineering QC project.
 * Unauthorized copying of this file, via any medium is strictly prohibited - Proprietary and confidential
 */

'use strict';

const RULE = require('../../../lib/rules/no-console-rule');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('No Console', RULE, {
  valid: [
    {
      code: 'class One {}',
      parserOptions: { ecmaVersion: 6 },
      errors: [],
    },
  ],
  invalid: [
    {
      code: 'console.log("");',
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          messageId: 'unexpected',
        },
      ],
    },
  ],
});
