/**
 * Grunt Build Script
 * - based on grunt v0.4
 *
 */

// Start here: http://gruntjs.com/getting-started, run npm install -g grunt-cli (nodejs must be installed)
// Change to project root

// run "grunt" for generating the base fields, generating the tests and starting the watch task
// run "grunt build" for generating the base files
// run "grunt sprites" for generation the sprite images
// run "grunt tests" for generating the tests
// run "grunt jshint" for hinting
// run "grunt search" for searching production strings (alert,console,TODO,debug,fixme) in you project
// run "grunt yuidoc" for generating the javascript documentation
// run "grunt complexity" for calculating the halstat and cyliomatic of you code

module.exports = function(grunt) {
	'use strict';

	////////////////////////////////////////////////////////////////////////////////
	//
	// NPM Tasks
	//
	////////////////////////////////////////////////////////////////////////////////
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-less-imports');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		////////////////////////////////////////////////////////////////////////////////
		//
		// Project
		//
		////////////////////////////////////////////////////////////////////////////////
		project: {
			name: 'Terrific Micro Grunt',
			description: 'grunt version of Terrific Micro',
			version: '0.1.0',
			url: 'https://github.com/smollweide/terrific-micro-grunt',
			devUrl: 'http://github.local/terrific-micro-grunt/'
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// Directories
		//
		////////////////////////////////////////////////////////////////////////////////
		dirs: {

			////////////////////////////////////////////////////////////////////////////
			// BASE
			assets: 'assets',
			modules: 'modules',
			cache: 'cache',
			tests: 'tests',
			views: 'views',
			partials: 'views/partials',
			gruntLog: '<%=dirs.cache%>/gruntLog',

			////////////////////////////////////////////////////////////////////////////
			// Triggerfile
			trigger: '<%=dirs.cache%>/triggerfile',

			////////////////////////////////////////////////////////////////////////////
			// lint
			lint: [
				'<%=dirs.assets%>/js/utils/*.js',
				'<%=dirs.modules%>/*/js/*.js'
			],

			////////////////////////////////////////////////////////////////////////////
			// Scripts
			scripts: [
				'<%=dirs.assets%>/js/libraries/*.js',
				'<%=dirs.assets%>/js/plugins/*.js',
				'<%=dirs.assets%>/js/utils/*.js',
				'<%=dirs.modules%>/*/js/*.js'
			],

			////////////////////////////////////////////////////////////////////////////
			// Styles
			styles: [
				'<%=dirs.cache%>/*.less',
				'<%=dirs.assets%>/css/libraries/*.less',
				'<%=dirs.assets%>/css/libraries/*.css',
				'<%=dirs.assets%>/css/plugins/*.less',
				'<%=dirs.assets%>/css/plugins/*.css',
				'<%=dirs.assets%>/css/elements/*.less',
				'<%=dirs.assets%>/css/elements/*.css',
				'<%=dirs.modules%>/*/css/*.less'
			],

			////////////////////////////////////////////////////////////////////////////
			// Sprites
			sprites: {
				retina: {
					src: [
						'<%=dirs.assets%>/sprites/*.png'
					],
					output: {
						img: '<%=dirs.cache%>/media/img/',
						url: '<%=dirs.cache%>/media/img/',
						less: '<%=dirs.assets%>/css/elements/'
					}
				}
			},

			////////////////////////////////////////////////////////////////////////////
			// Search
			search: [
				'<%=dirs.assets%>/js/utils/*.js',
				'<%=dirs.modules%>/*/js/*.js'
			],

			////////////////////////////////////////////////////////////////////////////
			// YUIdoc
			yuidoc: [
				'<%=dirs.assets%>/js/utils/',
				'<%=dirs.modules%>'
			],

			////////////////////////////////////////////////////////////////////////////
			// Complexity
			complexity: [
				'<%=dirs.assets%>/js/utils/*.js',
				'<%=dirs.modules%>/*/js/*.js'
			],

			////////////////////////////////////////////////////////////////////////////
			// Tests
			testsJs: [
				'<%=dirs.assets%>/js/*/tests/*.js',
				'<%=dirs.modules%>/*/tests/*.js'
			],
			testsHtml: [
				'<%=dirs.tests%>/tests.start.html',
				'<%=dirs.assets%>/js/*/tests/*.html',
				'<%=dirs.modules%>/*/tests/*.html',
				'<%=dirs.tests%>/tests.end.html'
			],

			////////////////////////////////////////////////////////////////////////////
			// Markup
			markup: [
				'<%=dirs.modules%>/*/*.html',
				'<%=dirs.views%>/*.html',
				'<%=dirs.partials%>/*.html'
			],

			////////////////////////////////////////////////////////////////////////////
			// Export
			export: {
				dir: '<%=dirs.cache%>/exported',
				param: 'export=true'
			}
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// Copy
		//
		////////////////////////////////////////////////////////////////////////////////
		copy: {
			images: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['<%=dirs.cache%>/media/img/*'],
						dest: '<%=dirs.export.dir%>/<%=dirs.cache%>/media/img',
						filter: 'isFile'
					}
				]
			},
			css: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['<%=dirs.cache%>/css/*'],
						dest: '<%=dirs.export.dir%>/<%=dirs.cache%>/css',
						filter: 'isFile'
					}
				]
			},
			js: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['<%=dirs.cache%>/js/*'],
						dest: '<%=dirs.export.dir%>/<%=dirs.cache%>/js',
						filter: 'isFile'
					}
				]
			}
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// Curl
		//
		////////////////////////////////////////////////////////////////////////////////
		curl: {
			index: {
				src: '<%=project.devUrl%>/index.html?<%=dirs.export.param%>',
				dest: '<%=dirs.export.dir%>/index.html'
			}
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// jsHint
		//
		////////////////////////////////////////////////////////////////////////////////
		jshint: {
			scripts: ['Gruntfile.js', '<%=dirs.lint%>'],
			gruntfile: ['Gruntfile.js']
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// Concatination, Compiling
		//
		////////////////////////////////////////////////////////////////////////////////
		concat: {
			scripts: {
				src: ['<%=dirs.scripts%>'],
				dest: '<%=dirs.cache%>/js/base.js'
			},
			testsJs: {
				src: ['<%=dirs.testsJs%>'],
				dest: '<%=dirs.cache%>/js/base.tests.js'
			},
			testsHtml: {
				src: ['<%=dirs.testsHtml%>'],
				dest: '<%=dirs.cache%>/tests.html'
			}
		},

		less_imports: {
			external_styles: {
				options: {},
				src: '<%=dirs.styles%>',
				dest: '<%=dirs.cache%>/css/temp-styles-imports.less'
			}
		},

		less: {
			development: {
				files: {
					'<%=dirs.cache%>/css/base.css': '<%=dirs.cache%>/css/temp-styles-imports.less'
				}
			}
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// Minification
		//
		////////////////////////////////////////////////////////////////////////////////
		uglify: {
			scripts: {
				src: ['<%=concat.scripts.dest%>'],
				dest: '<%=dirs.cache%>/js/base.min.js'
			}
		},

		cssmin: {
			compress: {
				files: {
					'<%=dirs.cache%>/css/base.min.css': ['<%=dirs.cache%>/css/base.css']
				}
			}
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// Maintenance Tasks
		//
		////////////////////////////////////////////////////////////////////////////////
		clean: {
			less_imports: {
				src: ['<%=dirs.cache%>/css/temp-styles-imports.less']
			},
			triggerfile: {
				src: ['<%=dirs.cache%>/triggerfile']
			}
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// Watch
		//
		////////////////////////////////////////////////////////////////////////////////
		watch: {
			scripts: {
				files: ['<%=dirs.scripts%>'],
				tasks: ['build-scripts-fast'],
				options: {
					livereload: true
				}
			},
			styles: {
				files: ['<%=dirs.styles%>'],
				tasks: ['build-styles-fast'],
				options: {
					livereload: true
				}
			},
			tests: {
				files: ['<%=dirs.testsJs%>', '<%=dirs.testsHtml%>'],
				tasks: ['build-tests']
			},
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['build-scripts-fast', 'build-styles-fast', 'build-tests'],
				options: {
					livereload: true
				}
			},
			markup: {
				files: ['<%=dirs.markup%>'],
				options: {
					livereload: true
				}
			},
			triggerfile: {
				files: ['<%=dirs.trigger%>'],
				tasks: ['build-scripts-fast', 'build-styles-fast', 'build-tests'],
				options: {
					livereload: true
				}
			}
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// Sprites
		//
		////////////////////////////////////////////////////////////////////////////////
		glue:	{
			retina: {
				options: {
					bundleName          : 'sprites',
					less                : '<%=dirs.sprites.retina.output.less%>',
					url                 : '<%=dirs.sprites.retina.output.url%>',
					namespace           : '',
					'sprite-namespace'  : '',
					cachebuster         : true,
					crop				: false,
					retina				: true
				},
				src: '<%=dirs.sprites.retina.src%>',
				dest: '<%=dirs.sprites.retina.output.img%>'
			}
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// search
		//
		////////////////////////////////////////////////////////////////////////////////
		search: {
			devcode: {
				files: {
					src: '<%=dirs.search%>'
				},
				options: {
					searchString: /(alert|console|TODO|debug|fixme)/ig,
					logFile: '<%=dirs.gruntLog%>/search-devcode.json'
				}
			}
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// YuiDoc
		//
		////////////////////////////////////////////////////////////////////////////////
		yuidoc: {
			compile: {
				name: '<%=project.name%>',
				description: '<%=project.description%>',
				version: '<%=project.version%>',
				url: '<%=project.url%>',
				options: {
					paths: '<%=dirs.yuidoc%>',
					outdir: '<%=dirs.cache%>/jsdoc'
				}
			}
		},

		////////////////////////////////////////////////////////////////////////////////
		//
		// complexity
		//
		////////////////////////////////////////////////////////////////////////////////
		complexity: {
			generic: {
				src: '<%=dirs.complexity%>',
				options: {
					breakOnErrors: false,
					jsLintXML: '<%=dirs.gruntLog%>/complexity-report.xml',
					checkstyleXML: '<%=dirs.gruntLog%>/complexity-checkstyle.xml',
					errorsOnly: false,
					cyclomatic: [3, 7, 12],
					halstead: [8, 14, 20],
					maintainability: 100
				}
			}
		}

	});



	////////////////////////////////////////////////////////////////////////////////
	//
	// Tasks
	//
	////////////////////////////////////////////////////////////////////////////////
	require('load-grunt-tasks')(grunt);

	// sprites
	grunt.registerTask('sprites',  [
		'glue'
	]);

	// css
	grunt.registerTask('build-styles-fast', [
		'less_imports',
		'less',
		'clean:less_imports'
	]);
	grunt.registerTask('build-styles', [
		'build-styles-fast',
		'less',
		'cssmin'
	]);

	// js
	grunt.registerTask('build-scripts-fast', [
		'concat:scripts'
	]);
	grunt.registerTask('build-scripts', [
		'build-scripts-fast',
		'uglify'
	]);

	// tests
	grunt.registerTask('build-tests', [
		'concat:testsJs',
		'concat:testsHtml'
	]);

	// build
	grunt.registerTask('build', [
		'build-styles',
		'build-scripts',
		'build-tests',
		'clean'
	]);

	// export
	grunt.registerTask('export', [
		'build',
		'copy',
		'curl'
	]);

	// default
	grunt.registerTask('default', [
		'build',
		'watch'
	]);
};
