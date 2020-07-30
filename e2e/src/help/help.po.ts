import { browser, by, element, WebElement } from 'protractor';
import { PrivateKeyInput } from 'crypto';

export class HelpPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/help') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-header h1')).getText() as Promise<string>;
  }

  getHelpContainer(): Promise<boolean> {
    return element(by.className('help-container')).isDisplayed() as Promise<boolean>;
  }

  getFaqsComponent(): Promise<boolean> {
    return element(by.className('faqs-panel')).isDisplayed() as Promise<boolean>;
  }
}
