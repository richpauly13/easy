import { browser, by, element } from 'protractor';

export class AppPage {

	// eslint-disable-next-line class-methods-use-this
	public get titleText(): Promise<string> {
		return element(by.css('ez-root')).getText() as Promise<string>;
	}

	// eslint-disable-next-line class-methods-use-this
	public navigateTo(): Promise<string> {
		return browser.get(browser.baseUrl) as Promise<string>;
	}
}
