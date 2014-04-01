'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		ghost: {
			test: {
				files: [{
					src: ['tests/ghost/*_test.js']
				}]
			},
			options: {
				args: {
					baseUrl: 'http://donnees.montreal.qc.ca:' +
				},
				direct: false,
				logLevel: 'error',
				printCommand: false,
				printFilePaths: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-ghost');

	grunt.registerTask('test', ['ghost']);
};
