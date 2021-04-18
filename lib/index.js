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
                'rp/no-console': ['error', { allow: ['warn', 'error'] }],
                'rp/file-size': [
                    'error',
                    { max: 400, skipComments: true, skipBlankLines: true },
                ],
                'rp/small-functions': [
                    'error',
                    { max: 75, skipComments: true, skipBlankLines: true },
                ],
                '@angular-eslint/component-selector': [
                  'error',
                  { type: ['element', 'attribute'], prefix: [''], style: 'kebab-case' },
                ],
                '@angular-eslint/directive-selector': [
                  'error',
                  { type: ['element', 'attribute'], prefix: [''], style: 'camelCase' },
                ],
                '@angular-eslint/component-class-suffix': ['error'],
                '@angular-eslint/directive-class-suffix': ['error']
            }
        }
    },
    rules: {
        'rule-of-one': require('./rules/single-responsibility-rule-of-one'),
        'file-size': require('./rules/single-responsibility-file-size'),
        'small-functions': require('./rules/single-responsibility-small-functions'),
        'no-console': require('./rules/no-console-rule')
    }
}
