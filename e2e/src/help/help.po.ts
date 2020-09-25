import { browser } from 'protractor';
import { _$ } from './../utils';

export class HelpPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/help') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return _$('app-header h1').getText() as Promise<string>;
  }

  getHelpContainer(): Promise<boolean> {
    return _$('.help-container').isDisplayed() as Promise<boolean>;
  }

  getFaqsComponent(): Promise<boolean> {
    return _$('.app-faqs-panel').isDisplayed() as Promise<boolean>;
  }
}
