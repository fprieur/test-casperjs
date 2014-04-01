'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			files: [
				'Gruntfile.js',
				'package.json',
				'source/**/*.js',
				'<%= nodeunit.tests %>'
			]
		},
        ghost: {
			test: {
				files: [{
					src: ['tests/ghost/*_test.js']
				}]
			},
			options: {
				args: {
					baseUrl: 'http://donnees.montreal.qc.ca:' 
				},
				direct: false,
				logLevel: 'error',
				printCommand: false,
				printFilePaths: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-ghost');

	grunt.registerTask('test', ['jshint', 'ghost']);
};
