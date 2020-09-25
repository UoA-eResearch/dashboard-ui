import { MyServices } from './my-services.po';
import { browser, logging } from 'protractor';

describe('My Services Page Tests', () => {
  let page: MyServices;

  beforeEach(() => {
    page = new MyServices();
    page.navigateTo();
  });

  it('should display services dashboard welcome message', async () => {
    expect(page.getTitleText()).toEqual('Services Dashboard');
  });

  it('should display the my-services container', () => {
    expect(page.getMyServicesContainer).toBeTrue;
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
});
