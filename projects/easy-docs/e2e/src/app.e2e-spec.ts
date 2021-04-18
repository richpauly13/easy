/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { AppPage } from './app.po';

describe('workspace-project Easy', (): void => {
	let page: AppPage;

	beforeEach((): void => {
		page = new AppPage();
	});

	it('should contain alert', async(): Promise<void> => {
		await page.navigateTo();

		expect(await page.getTitleText()).toEqual('Alert');
	});
});
