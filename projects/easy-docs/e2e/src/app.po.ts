import { browser, by, element } from 'protractor';

export class AppPage {
	public element: Promise<string>;
	public url: Promise<any>;

	public getTitleText(): Promise<string> {
		this.element = element(by.css('docs-home p')).getText() as Promise<string>;

		return this.element;
	}

	public navigateTo(): Promise<any> {
		this.url = browser.get(browser.baseUrl) as Promise<any>;

		return this.url;
	}
}
