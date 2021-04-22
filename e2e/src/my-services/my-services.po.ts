import { browser } from 'protractor';
import { _$ } from './../utils';

export class MyServices {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/my-services') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return _$('app-header h1').getText() as Promise<string>;
  }

  getMyServicesContainer(): Promise<boolean> {
    return _$('.my-services-container').isDisplayed() as Promise<boolean>;
  }
}
