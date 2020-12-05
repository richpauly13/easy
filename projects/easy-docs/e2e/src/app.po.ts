import { browser, by, element } from 'protractor';

export class AppPage {
	public async getTitleText(): Promise<string> {
		return element(by.css('ez-root h1')).getText() as Promise<string>;
	}

	public async navigateTo(): Promise<unknown> {
		return browser.get(browser.baseUrl) as Promise<unknown>;
	}
}
