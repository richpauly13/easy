import { AppPage } from './app.po';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display Skip to content', () => {
		page.navigateTo();

		expect(page.getTitleText()).toEqual('Skip to content');
	});
});
