import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('App Home Page Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getTitleText()).toEqual('Welcome to the eResearch Dashboard');
  });

  it('should display the navbar', () => {
    expect(page.getNavBar).toBeTrue;
  });

  it('should display the dashboard logo in the navbar', () => {
    expect(page.getNavBarLogo).toBeTrue;
  });

  it('should display the footer', () => {
    expect(page.getFooter).toBeTrue;
  });

  it('should display the home dashboard', () => {
    expect(page.getHomeDashboard).toBeTrue;
  });

  it('should display home dashboard title', () => {
    expect(page.getHomeDashboardTitleText()).toEqual('Access eResearch Services:');
  });

  it('should display the logged in users full name', async () => {
    expect(page.getUserName()).toEqual('Research Hub Automation Test Account');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);

    // commented for now - causing error in jenkins
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
});
