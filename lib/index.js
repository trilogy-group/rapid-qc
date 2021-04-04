/**
 * @license
 * Copyright Trilogy Enterprises, Inc - All Rights Reserved.
 *
 * This file is part of Rapid Engineering QC project.
 * Unauthorized copying of this file, via any medium is strictly prohibited - Proprietary and confidential
 */

module.exports = {
  configs: {
    typescript: {
      extends: ['plugin:@angular-eslint/recommended'],
      plugins: ['rp', '@angular-eslint'],
      rules: {
        'rp/rule-of-one': ['error', 1],
        '@angular-eslint/component-selector': [
          'error',
          { type: ['element', 'attribute'], prefix: [''], style: 'kebab-case' },
        ],
      },
    },
  },
  rules: {
    'rule-of-one': require('./rules/single-responsibility-rule-of-one'),
  },
};
