import { browser, by, element } from 'protractor';

export class AppPage {
	public async navigateTo(): Promise<unknown> {
		return browser.get(browser.baseUrl) as Promise<unknown>;
	}

	public async getTitleText(): Promise<string> {
		return element(by.css('ez-root h1')).getText() as Promise<string>;
	}
}
