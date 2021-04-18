import { browser, by, element } from 'protractor';

export class AppPage {
	public async getTitleText(): Promise<string> {
		return await element(by.css('ez-root h1')).getText();
	}

	public async navigateTo(): Promise<string> {
		return await browser.get(browser.baseUrl) as string;
	}
}
