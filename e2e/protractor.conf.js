// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless',
        '--window-size=1920,1080'
      ],
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  params: {
    loginUrl: "iam.test.auckland.ac.nz/profile/SAML2/Redirect/SSO",
    credentials: {
      username: process.env.TEST_ACCT_USERNAME,
      password: process.env.TEST_ACCT_PASSWORD
    }
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: "pretty" } }));
    
    /*
    * Steps to perform user login prior to all tests
    */ 
    const { browser, by } = require('protractor');
    browser.get(browser.baseUrl);
    browser.findElement(by.className('signin-button')).click();

    // wait for UoA SSO login page to load, then submit credentials
    browser.driver.wait(async function() {
      const url = await browser.driver.getCurrentUrl();
      return url.includes(browser.params.loginUrl);
    }, 10000).then(function() {
      browser.driver.findElement(by.id('username')).sendKeys(browser.params.credentials.username);
      browser.driver.findElement(by.id('password')).sendKeys(browser.params.credentials.password);
      browser.driver.findElement(by.className('login-button')).click();
    });
    
    // wait for the login to complete and return to the base url
    return browser.driver.wait(async function() {
      const url = await browser.driver.getCurrentUrl();
      return url === browser.baseUrl;
    }, 10000);
  }
};
