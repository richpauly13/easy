const config = require('./protractor.conf').config;

config.multiCapabilities = [
	{
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--no-sandbox', '--disable-gpu']
        }
    },
    {
        browserName: 'firefox'
    }
];

exports.config = config;
