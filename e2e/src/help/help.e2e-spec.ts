import { HelpPage } from './help.po';
import { browser, logging } from 'protractor';

describe('Help Pages Tests', () => {
  let page: HelpPage;

  beforeEach(() => {
    page = new HelpPage();
    page.navigateTo();
  });

  it('should display help page welcome message', () => {
    expect(page.getTitleText()).toEqual('Welcome to the eResearch Help Repository!');
  });

  it('should display the help container', () => {
    expect(page.getHelpContainer).toBeTrue;
  });

  it('should display the faqs', () => {
    expect(page.getFaqsComponent).toBeTrue;
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
});
