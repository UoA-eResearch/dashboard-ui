import { MyProjects } from './my-projects.po';
import { browser, logging } from 'protractor';

describe('My Projects Page Tests', () => {
  let page: MyProjects;

  beforeEach(() => {
    page = new MyProjects();
    page.navigateTo();
  });

  it('should display projects dashboard welcome message', async () => {

    console.log(await browser.getCurrentUrl());

    expect(page.getTitleText()).toEqual('Projects Dashboard');
  });

  it('should display the my-projects container', () => {
    expect(page.getMyProjectsContainer).toBeTrue;
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
