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
			cjs: {
				options: {
					format: 'cjs'
				},
				files: {
					'./dist/Clone.cjs': ['src/index.js']
				}
			},
			mjs: {
				options: {
					format: 'es'
				},
				files: {
					'./dist/Clone.mjs': ['src/index.js']
				}
			}
		 },
		terser: {
			dist: {
				files: {
					'./dist/Clone.min.cjs': ['./dist/Clone.cjs'],
					'./dist/Clone.min.mjs': ['./dist/Clone.mjs']
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
