import { browser, by, element } from 'protractor';

export class AppPage {
	public navigateTo() {
		return browser.get(browser.baseUrl) as Promise<any>;
	}

	public getTitleText() {
		return element(by.css('docs-root h1')).getText() as Promise<string>;
	}
}
