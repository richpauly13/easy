import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo(): Promise<any> {
		return browser.get(browser.baseUrl) as Promise<any>;
	}

	getParagraphText(): Promise<any> {
		return element(by.css('docs-root h1')).getText() as Promise<string>;
	}
}
