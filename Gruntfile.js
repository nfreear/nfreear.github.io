/*!
  Nfreear blog task-runner | © 2016 NDF.
*/

module.exports = function (grunt) {
	'use strict';

	grunt.log.subhead('Running X build and tests...');

	grunt.initConfig({
		dir:  '_posts',

		exec: {
			count: 'echo "Count of posts: " && ls _posts/ | wc -l',
			draft: 'jekyll serve --drafts --unpublished --future',
			serve: 'jekyll serve',
			gem: 'gem install github-pages',
			grep: runIf('grep', '! grep -r Config themes/applaud'),
			rewrite: '../melody.phar run -vvv _bin/rewritemap.php && php -l _out/index.php'
		},

		sass: {
  	},
		jshint: {
			options: {
				bitwise: true,
				curly: true,
				eqeqeq: true,
				futurehostile: true,
				laxcomma: true,
				undef: true,
				// https://github.com/jshint/jshint/blob/master/src/messages.js#L80
				//'-W033': true,    // Ignore Missing semicolon;
				//'-W030': true,    // Ignore Expected an assignment or function call and instead saw an expression;
				//'-W069': true,    // Ignore {a} is better written in dot notation;
				globals: { jQuery: false, window: false, ga: false }
			},
			blog: [ 'js/*.js', '!js/intensedebate/*' ],
			grunt: {
				options: { node: true },
				files: { src: 'Gruntfile.js' }
			}
		},
		yamllint: {
			travis:  '.travis.yml'
		},
		// https://npmjs.com/package/grunt-link-checker
		// https://github.com/cgiffard/node-simplecrawler#configuration
		linkChecker: {
		},
		watch: {
			css: { files: '<%= dir %>/less/**/*.less', tasks: [  ] }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-exec');
	//grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [ 'jshint' ]);


	/* ------------------------------------------------------------------- */

	/* Only run this task if the current task matches pattern.
	*/
	function runIf(pattern, cmd) {
		var the_task = grunt.cli.tasks.length ? grunt.cli.tasks[ 0 ] : null;
		if (the_task && the_task.match(pattern)) {
			// Matching named / non-default task.
			return cmd;
		}
		// 'default' task.
		return 'echo :noop';
	}

	function isVerbose() {
		return grunt.option('verbose') || grunt.option('debug');
	}
};
