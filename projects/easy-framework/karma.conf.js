// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
	config.set({
		basePath: '.',
		frameworks: [
            'jasmine',
            '@angular-devkit/build-angular'
        ],
		plugins: [
			require('@angular-devkit/build-angular/plugins/karma'),
			require('karma-coverage'),
			require('karma-firefox-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-jasmine'),
			require('karma-spec-reporter')
		],
		client: {
			clearContext: false
		},
		coverageIstanbulReporter: {
			check: {
				global: {
					statements: 100,
					branches: 100,
					functions: 100,
					lines: 100,
					excludes: [

					]
				}
			},
			dir: 'coverage/easy-framework',
			reporters: [
				{
					type: 'html',
					subdir: 'report-html'
				},
				{
					type: 'lcov',
					subdir: 'report-lcov'
				},
				{
					type: 'text-summary',
					subdir: '.',
					file: 'text-summary.txt'
				}
			],
			fixWebpackSourcePaths: true
		},
		reporters: [
            'spec',
            'kjhtml'
        ],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: [
            'Firefox'
        ],
		singleRun: false,
		restartOnFileChange: true
	});
};
