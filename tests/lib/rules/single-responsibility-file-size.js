/**
 * @license
 * Copyright Trilogy Enterprises, Inc - All Rights Reserved.
 *
 * This file is part of Rapid Engineering QC project.
 * Unauthorized copying of this file, via any medium is strictly prohibited - Proprietary and confidential
 */

 'use strict';

 const RULE = require('../../../lib/rules/single-responsibility-file-size');
 const RuleTester = require('eslint').RuleTester;
 
 const ruleTester = new RuleTester();
 
 ruleTester.run('Single Responsibility: File Size', RULE, {
   valid: [
     {
       code:
         '// Comment\n\n\nx\nJ\nu\ny\nU\nx\nZ\ny\ny\n6\nL\n6\nm\nI\nu\nV\nX\nR\nq\nE\nD\no\nC\nb\ng\nf\ni\nF\nG\n9\nf\nq\nl\nG\nh\no\ne\nL\n6\ni\nG\nU\nH\np\n0\n4\nD\nK\nO\nf\nh\nk\nu\nz\nR\nz\n1\n9\nf\n5\nm\nP\nx\nY\n0\n2\nO\nw\nQ\na\nx\nc\nx\nj\nR\nI\nL\n7\nJ\n5\n1\nu\nZ\nu\np\nI\na\n0\nO\nI\nc\nP\n9\n7\nf\nJ\nA\nw\nM\n9\nF\nn\np\nM\ns\nr\nJ\nq\nz\ny\nN\n4\nM\nE\nJ\nz\nQ\n4\n8\nD\np\n9\ng\ne\nm\nT\nd\nQ\nf\nF\nH\ns\nN\nG\no\nX\nS\n7\nu\n4\np\nT\nj\nF\nq\nG\nL\nF\n8\nX\nH\nd\nr\nf\nK\nr\nI\nl\ny\nQ\nh\nf\nh\nh\nd\nq\n0\nI\nr\nK\nx\nF\nc\nq\nw\nG\nh\nT\nu\nn\nk\nE\nF\ni\nm\nm\nQ\nq\nP\nP\nw\n6\nK\n3\nm\ni\nK\nu\na\nM\nE\nR\nx\nk\nP\nK\nI\n2\nQ\nu\nA\nS\nP\nf\n8\nv\nu\nH\nv\n8\nX\nS\nL\nD\ne\nj\nq\nW\nK\nl\n3\nX\nl\nR\nY\n2\n3\n2\ni\nZ\nu\nB\ny\nn\n7\na\nz\nG\nh\nZ\nk\nt\n0\nP\nL\nk\nV\nf\nb\nm\nj\n4\nb\nu\nY\n8\n6\nk\nt\nS\nN\na\nw\nt\nL\nM\nM\nf\n9\nS\n9\nU\nW\n3\nA\nI\nv\nL\nn\n6\nr\n5\nH\n0\nl\ny\nY\na\nc\n9\nw\nQ\nY\n6\nL\nP\nw\nm\nV\nN\nJ\nF\n6\nw\n9\nf\nH\nz\nX\nm\nr\nu\nk\nn\nk\nM\nx\nj\nm\n4\nw\nO\na\nM\nS\nY\n1\nU\nz\nM\nD\n8\nK\nN\nd\nx\nT\n2\nt\ng\np\nk\nZ\nJ\nl\nW\nb\nm\nX\n9\nH\no\nh\n9\n1\nS\nj\nf\nK\nt\n9\nT\nk\n3\nX\nM\n3\nx\nZ\n9\nX\nl\nc\nL\nN\nK\nE\ns\nF\n7\nQ\np\nt\nK\nA\np\n0\nP\nx\ny\n',
       parserOptions: { ecmaVersion: 6 },
       options: [{ max: 400, skipComments: true, skipBlankLines: true }],
       errors: [],
     },
   ],
   invalid: [
     {
       code: `z\nx\nJ\nu\ny\nU\nx\nZ\ny\ny\n6\nL\n6\nm\nI\nu\nV\nX\nR\nq\nE\nD\no\nC\nb\ng\nf\ni\nF\nG\n9\nf\nq\nl\nG\nh\no\ne\nL\n6\ni\nG\nU\nH\np\n0\n4\nD\nK\nO\nf\nh\nk\nu\nz\nR\nz\n1\n9\nf\n5\nm\nP\nx\nY\n0\n2\nO\nw\nQ\na\nx\nc\nx\nj\nR\nI\nL\n7\nJ\n5\n1\nu\nZ\nu\np\nI\na\n0\nO\nI\nc\nP\n9\n7\nf\nJ\nA\nw\nM\n9\nF\nn\np\nM\ns\nr\nJ\nq\nz\ny\nN\n4\nM\nE\nJ\nz\nQ\n4\n8\nD\np\n9\ng\ne\nm\nT\nd\nQ\nf\nF\nH\ns\nN\nG\no\nX\nS\n7\nu\n4\np\nT\nj\nF\nq\nG\nL\nF\n8\nX\nH\nd\nr\nf\nK\nr\nI\nl\ny\nQ\nh\nf\nh\nh\nd\nq\n0\nI\nr\nK\nx\nF\nc\nq\nw\nG\nh\nT\nu\nn\nk\nE\nF\ni\nm\nm\nQ\nq\nP\nP\nw\n6\nK\n3\nm\ni\nK\nu\na\nM\nE\nR\nx\nk\nP\nK\nI\n2\nQ\nu\nA\nS\nP\nf\n8\nv\nu\nH\nv\n8\nX\nS\nL\nD\ne\nj\nq\nW\nK\nl\n3\nX\nl\nR\nY\n2\n3\n2\ni\nZ\nu\nB\ny\nn\n7\na\nz\nG\nh\nZ\nk\nt\n0\nP\nL\nk\nV\nf\nb\nm\nj\n4\nb\nu\nY\n8\n6\nk\nt\nS\nN\na\nw\nt\nL\nM\nM\nf\n9\nS\n9\nU\nW\n3\nA\nI\nv\nL\nn\n6\nr\n5\nH\n0\nl\ny\nY\na\nc\n9\nw\nQ\nY\n6\nL\nP\nw\nm\nV\nN\nJ\nF\n6\nw\n9\nf\nH\nz\nX\nm\nr\nu\nk\nn\nk\nM\nx\nj\nm\n4\nw\nO\na\nM\nS\nY\n1\nU\nz\nM\nD\n8\nK\nN\nd\nx\nT\n2\nt\ng\np\nk\nZ\nJ\nl\nW\nb\nm\nX\n9\nH\no\nh\n9\n1\nS\nj\nf\nK\nt\n9\nT\nk\n3\nX\nM\n3\nx\nZ\n9\nX\nl\nc\nL\nN\nK\nE\ns\nF\n7\nQ\np\nt\nK\nA\np\n0\nP\nx\ny\n`,
       parserOptions: { ecmaVersion: 6 },
       options: [{ max: 400, skipComments: true, skipBlankLines: true }],
       errors: [
         {
           messageId: 'exceed',
           data: {
             max: 400,
             actual: 401,
           },
         },
       ],
     },
   ],
 });
 