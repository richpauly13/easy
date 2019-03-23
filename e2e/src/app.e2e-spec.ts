import { AppPage } from './app.po';

import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display Alert', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Alert');
	});

	afterEach(async () => {
		const logs = await browser
			.manage()
			.logs()
			.get(logging.Type.BROWSER);

		expect(logs).not.toContain(
			jasmine.objectContaining({
				level: logging.Level.SEVERE
			} as logging.Entry)
		);
	});
});
