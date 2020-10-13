import { browser, by, element } from 'protractor';

export class AppPage {
	public getTitleText(): Promise<string> {
		return element(by.css('ez-root')).getText() as Promise<string>;
	}

	public navigateTo(): Promise<any> {
		return browser.get(browser.baseUrl) as Promise<any>;
	}
}
