import { browser, by, element } from 'protractor';

export class AppPage {
	public get titleText(): Promise<string> {
		return element(by.css('ez-root')).getText() as Promise<string>;
	}

	public navigateTo(): Promise<string> {
		return browser.get(browser.baseUrl) as Promise<string>;
	}
}
