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
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.cjs'
			},
			src: {
				src: ['src/**/*.*js']
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
					name: 'Define',
					format: 'iife'
				},
				files: {
					'./dist/Define.iife.js': ['./src/Define.js']
				}
			 },
			umd: {
				options: {
					name: 'Define',
					format: 'umd'
				},
				files: {
					'./dist/Define.umd.js': ['./src/Define.js']
				}
			 },
			cjs: {
				options: {
					format: 'cjs'
				},
				files: {
					'./dist/Define.cjs': ['./src/Define.js']
				}
			},
			es: {
				options: {
					format: 'es'
				},
				files: {
					'./dist/Define.mjs': ['./src/Define.js']
				}
			}
		 },
		terser: {
			dist: {
				files: {
					'./dist/Define.iife.min.js': ['./dist/Define.iife.js'],
					'./dist/Define.umd.min.js': ['./dist/Define.umd.js'],
					'./dist/Define.min.cjs': ['./dist/Define.cjs'],
					'./dist/Define.min.mjs': ['./dist/Define.mjs']
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
		 },
		watch: {
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile']
			},
			src: {
				files: ['src/**/*.*js'],
				tasks: ['jsdoc', 'jshint:src'],
				options: {
					spawn: true
				}
			}
		 }
	});

	grunt.loadNpmTasks('grunt-contrib-clean')
	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-jsdoc')
	grunt.loadNpmTasks('grunt-rollup')
	grunt.loadNpmTasks('grunt-terser')

	grunt.registerTask('docs', ['clean:docs', 'jshint', 'jsdoc'])
	grunt.registerTask('dist', ['clean:dist', 'jshint', 'rollup', 'terser'])
	grunt.registerTask('default', ['clean', 'jshint', 'rollup', 'terser', 'jsdoc'])

}
