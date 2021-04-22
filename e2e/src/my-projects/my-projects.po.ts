import { browser, } from 'protractor';
import { _$ } from './../utils';

export class MyProjects {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/my-projects') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return _$('app-header h1').getText() as Promise<string>;
  }

  getMyProjectsContainer(): Promise<boolean> {
    return _$('.my-projects-container').isDisplayed() as Promise<boolean>;
  }
}
