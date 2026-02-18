let { nodeResolve } = require('@rollup/plugin-node-resolve')
let commonjs = require('@rollup/plugin-commonjs')

module.exports = function(grunt) {
	let pkg = grunt.file.readJSON('package.json')

		grunt.initConfig({
		clean: {
			docs: ['./docs'],
			dist: ['./dist']
		 },
		jsdoc : {
			tts : {
				options: {
					destination: "docs/tts",
					template: "../../@docs/ink-docstrap"
				}
			},
			better : {
				options: {
					destination: "docs/better",
					template: "../../../node_modules/better-docs",
				}
			},
			fresh : {
				options: {
					destination: "docs/fresh",
					template: "../../../node_modules/jsdoc-fresh",
				}
			},
			ink: {
				options: {
					destination: "docs/ink",
					template: "../../../node_modules/ink-docstrap/template",
					configure: "jsdoc.inkstrap.conf"
					
				}
			},
			tui: {
				options: {
					destination: "docs/tui",
					template: "../../../node_modules/tui-jsdoc-template",
					configure: "jsdoc.tui.conf"
					
				}
			},
			options: {
				configure: "jsdoc.conf",
				package: "./package.json"
			}
		 },
		rollup: {
			options: {
				plugins: [
					nodeResolve(),
					commonjs()
				],
				banner: '/** ' + pkg.name + ' ' + pkg.version + '\n * @license\n * Copyright (c) 2026 Tyler Thayn\n * Licensed under the MIT license.\n * @see {@link http://ttscloud.net/}\n */'
			},
			iife: {
				options: {
					name: 'core',
					format: 'iife'
				},
				files: {
					'./dist/core.iife.js': ['src/index.js']
				}
			 },
			umd: {
				options: {
					name: 'core',
					format: 'umd'
				},
				files: {
					'./dist/core.umd.js': ['src/index.js']
				}
			 },
			cjs: {
				options: {
					format: 'cjs'
				},
				files: {
					'./dist/core.cjs': ['src/index.js']
				}
			},
			mjs: {
				options: {
					format: 'es'
				},
				files: {
					'./dist/core.mjs': ['src/index.js']
				}
			}
		 },
		terser: {
			dist: {
				files: {
					'./dist/core.iife.min.js': ['./dist/core.iife.js'],
					'./dist/core.umd.min.js': ['./dist/core.umd.js'],
					'./dist/core.min.cjs': ['./dist/core.cjs'],
					'./dist/core.min.mjs': ['./dist/core.mjs']
				},
				options: {
					compress: {
						booleans: false,
						join_vars: false,
						keep_classnames: true,
						keep_fnames: true,
						loops: false,
						dead_code: false,
						reduce_funcs: false,
						reduce_vars: false,
						sequences: false,
						typeofs: false
					},
					mangle: false,
					output: {
						quote_style: 1
					}
				}
			}
		 }
	});

	grunt.loadNpmTasks('grunt-contrib-clean')
	grunt.loadNpmTasks('grunt-jsdoc')
	grunt.loadNpmTasks('grunt-rollup')
	grunt.loadNpmTasks('grunt-terser')

	grunt.registerTask('docs', ['clean:docs', 'jsdoc:tts', 'jsdoc:tui'])
	grunt.registerTask('dist', ['clean:dist', 'rollup', 'terser'])
	grunt.registerTask('default', ['clean', 'rollup', 'terser', 'jsdoc:tts', 'jsdoc:tui'])

}
