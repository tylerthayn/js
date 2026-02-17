let { nodeResolve } = require('@rollup/plugin-node-resolve')
let commonjs = require('@rollup/plugin-commonjs')

module.exports = function(grunt) {

		grunt.initConfig({
		clean: {
			docs: ['./docs'],
			dist: ['./dist']
		 },
		jsdoc : {
			dist : {
				options: {
					configure: "jsdoc.conf"
				}
			}
		 },
		rollup: {
			options: {
				plugins: [
					nodeResolve(),
					commonjs()
				]
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

	grunt.registerTask('docs', ['clean:docs', 'jsdoc'])
	grunt.registerTask('dist', ['clean:dist', 'rollup', 'terser'])
	grunt.registerTask('default', ['clean', 'rollup', 'terser', 'jsdoc'])

}
