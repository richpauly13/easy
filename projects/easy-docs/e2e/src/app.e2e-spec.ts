import { AppPage } from './app.po';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should contain alert', () => {
		page.navigateTo();

		expect(page.getTitleText()).toContain('Alert');
	});
});
