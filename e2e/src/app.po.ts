import { browser, by, element, WebElement } from 'protractor';
import { PrivateKeyInput } from 'crypto';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.className('header-title')).getText() as Promise<string>;
  }

  getNavBar(): Promise<boolean> {
    return element(by.css('app-nav')).isDisplayed() as Promise<boolean>;
  }

  getNavBarLogo(): Promise<boolean> {
    return element(by.className('dashboard-logo')).isDisplayed() as Promise<boolean>;
  }

  getFooter(): Promise<boolean> {
    return element(by.css('app-footer')).isDisplayed() as Promise<boolean>;
  }

  getHomeDashboard(): Promise<boolean> {
    return element(by.css('app-home-dashboard')).isDisplayed() as Promise<boolean>;
  }

  getHomeDashboardTitleText(): Promise<string> {
    return element(by.css('app-home-dashboard h1')).getText() as Promise<string>;
  }

  getUserName(): Promise<string> {
    return element(by.id('user-fullname')).getText() as Promise<string>;
  }

  // test only after logout
  getSignInButton(): Promise<boolean> {
    return element(by.className('signin-button')).isDisplayed() as Promise<boolean>;
  }
}
