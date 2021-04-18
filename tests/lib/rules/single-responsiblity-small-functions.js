/**
 * @license
 * Copyright Trilogy Enterprises, Inc - All Rights Reserved.
 *
 * This file is part of Rapid Engineering QC project.
 * Unauthorized copying of this file, via any medium is strictly prohibited - Proprietary and confidential
 */

 'use strict';

 const RULE = require('../../../lib/rules/single-responsibility-small-functions');
 const RuleTester = require('eslint').RuleTester;
 
 const ruleTester = new RuleTester();
 
 ruleTester.run('Single Responsibility: Small Functions', RULE, {
   valid: [
     {
       code: `/*eslint max-lines-per-function: ["error", 3]*/
          function foo() {
              var x = 0;
          }`,
       parserOptions: { ecmaVersion: 6 },
       options: [{ max: 75, skipComments: true, skipBlankLines: true }],
       errors: [],
     },
   ],
   invalid: [
     {
       code: `
       function foo() {
           var x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;
           \nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;
           \nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;
           \nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;
           \nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;
           \nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;
           \nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;\nvar x = 0;
       }`,
       parserOptions: { ecmaVersion: 6 },
       options: [{ max: 75, skipComments: true, skipBlankLines: true }],
       errors: [
         {
           messageId: 'exceed',
           data: {
             maxLines: 75,
             lineCount: 198,
             name: "Function 'foo'",
           },
         },
       ],
     },
   ],
 });
 