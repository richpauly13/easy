import { AppPage } from './app.po';

describe('workspace-project App', (): void => {
	let page: AppPage;

	beforeEach((): void => {
		page = new AppPage();
	});

	it('should contain alert', (): void => {
		page.navigateTo();

		expect(page.getTitleText()).toContain('Alert');
	});
});
