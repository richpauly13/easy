// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: [
            'jasmine',
            '@angular-devkit/build-angular'
        ],
		plugins: [
			require('@angular-devkit/build-angular/plugins/karma'),
			require('karma-coverage-istanbul-reporter'),
			require('karma-firefox-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-jasmine'),
			require('karma-spec-reporter')
		],
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, '../../coverage/easy-docs'),
			reports: [
                'html',
                'lcovonly',
                'text-summary'
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
