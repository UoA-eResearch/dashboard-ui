import { browser, by, element, WebElement } from 'protractor';
import { PrivateKeyInput } from 'crypto';

export class MyServices {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/my-services') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-header h1')).getText() as Promise<string>;
  }

  getMyServicesContainer(): Promise<boolean> {
    return element(by.className('my-services-container')).isDisplayed() as Promise<boolean>;
  }
}
