import { browser, ElementFinder } from 'protractor';
import { _$ } from './utils';

export class AppPage {
  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(): Promise<string> {
    return _$('.header-title').getText() as Promise<string>;
  }

  getNavBar(): Promise<boolean> {
    return _$('app-nav').isDisplayed() as Promise<boolean>;
  }

  getNavBarLogo(): Promise<boolean> {
    return _$('.dashboard-logo').isDisplayed() as Promise<boolean>;
  }

  getFooter(): Promise<boolean> {
    return _$('app-footer').isDisplayed() as Promise<boolean>;
  }

  getHomeDashboard(): Promise<boolean> {
    return _$('app-home-dashboard').isDisplayed() as Promise<boolean>;
  }

  getHomeDashboardTitleText(): Promise<string> {
    return _$('app-home-dashboard h1').getText() as Promise<string>;
  }

  getUserName(): Promise<string> {
    return _$('#user-fullname').getText() as Promise<string>;
  }

  getUserMenu(): Promise<boolean> {
    _$('.button-menu').click();
    return _$('.user-menu-container').isDisplayed() as Promise<boolean>
  }
}
