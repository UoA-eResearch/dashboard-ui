import { browser, by, element, WebElement } from 'protractor';
import { PrivateKeyInput } from 'crypto';

export class MyProjects {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/my-projects') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-header h1')).getText() as Promise<string>;
  }

  getMyProjectsContainer(): Promise<boolean> {
    return element(by.className('my-projects-container')).isDisplayed() as Promise<boolean>;
  }
}
