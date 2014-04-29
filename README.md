Terrific Micro Grunt
====================

Based on "Terrific Micro" but uses "Grunt" for concatenation and minification.
Nearly all features and the framework it self are written by someone else take a look into the caption "References".

THANKS TO ALL DEVELOPERS

Features
========
* Module Generator (shell)
* Integrated QUnit tests (http://localhost/yourproject/cache/tests.html)
* LESS support
* CSS and JS concatenation
* CSS and JS minification
* Sprite generator with retina support
* JsHint
* String Search
* Complexity calculation
* YUIDoc JavaScript Documentation (http://localhost/yourproject/cache/jsdoc)
* Live reload (Browser plugin required: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)


Installation & Requirements
===========================

You need an Apache with PHP 5+ support and Node.js.

1. Install node.js (http://nodejs.org/)
2. Install NPM (https://www.npmjs.org/)
3. Install Glue (http://glue.readthedocs.org/en/latest/installation.html)
4. Unzip https://github.com/smollweide/terrific-micro-grunt/archive/master.zip in your project root
5. Navigate into project root
6. Run "npm install"
7. Run "grunt"
8. Start working

Use grunt
=========

* run "grunt" for generating the base files, generating the tests and starting the watch task
* run "grunt build" for generating the base files and the tests
* run "grunt sprites" for generating the sprite images
* run "grunt tests" for generating the tests
* run "grunt jshint" for hinting
* run "grunt search" for searching the strings "alert, console, TODO, debug, fixme" in you project
* run "grunt yuidoc" for generating the javascript documentation
* run "grunt complexity" for calculating the halstead and cyclomatic of you code

Module Generator
================

1. Run "sh generate-module.sh Example"
2. The new module are created with the following structure in the "modules" folder.

- /Example
- /Example/example.html
- /Example/css/example.css
- /Example/js/example.js
- /Example/tests/example.tests.js
- /Example/tests/example.tests.html

Creating pages
==============

read the terrific-micro documentation: https://github.com/rogerdudler/terrific-micro#creating-pages
    
Render Modules
==============

read the terrific-micro documentation: https://github.com/rogerdudler/terrific-micro#render-modules
    
Render Partials
===============

read the terrific-micro documentation: https://github.com/rogerdudler/terrific-micro#render-partials

Includes
========

* TerrificJS (http://terrifically.org)
* JQuery (optional, you can also use zepto)
* Bootstrap 3.1.0 Styles
* QUnit (https://qunitjs.com/)

Important
=========

- Run "grunt" every time you start working
- The minified files will be created while running "grunt" or "grunt build"
- The concatenated files will be created after running "grunt" every time you change something (watch task)
- Read the grunt documentation for more details (http://gruntjs.com/)

References
==========

- Terrific Micro -> https://github.com/rogerdudler/terrific-micro
- terrific.js -> https://github.com/brunschgi/terrificjs
- bootstrap.css -> http://getbootstrap.com/
- jquery.js -> http://jquery.com/
- qunit -> https://qunitjs.com/
- npm -> https://www.npmjs.org/
- glue -> http://glue.readthedocs.org/en/latest/
- grunt -> http://gruntjs.com/
- grunt-contrib-concat -> https://github.com/gruntjs/grunt-contrib-concat
- grunt-less-imports -> https://github.com/MarcDiethelm/grunt-less-imports
- grunt-contrib-less -> https://github.com/gruntjs/grunt-contrib-less
- grunt-contrib-uglify -> https://github.com/gruntjs/grunt-contrib-uglify
- grunt-glue-nu -> https://github.com/MarcDiethelm/grunt-glue-nu
- grunt-contrib-jshint -> https://github.com/gruntjs/grunt-contrib-jshint
- grunt-search -> https://github.com/benkeen/grunt-search
- grunt-contrib-yuidoc -> https://github.com/gruntjs/grunt-contrib-yuidoc
- grunt-contrib-watch -> https://github.com/gruntjs/grunt-contrib-watch
- grunt-contrib-copy -> https://github.com/gruntjs/grunt-contrib-copy
- grunt-contrib-clean -> https://github.com/gruntjs/grunt-contrib-clean
- grunt-contrib-livereload -> https://github.com/gruntjs/grunt-contrib-livereload
- grunt-rename -> https://www.npmjs.org/package/grunt-rename
- load-grunt-tasks -> https://github.com/sindresorhus/load-grunt-tasks
- grunt-complexity -> https://github.com/vigetlabs/grunt-complexity

License
=======

Copyright (c) 2014 Simon Mollweide

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
