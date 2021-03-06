// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
// Note that this is the config file for e2e tests using BrowserStack's 
// automation API (against local hosts). 
// See protractor.conf.browserstack-remote.js for remote-test settings.

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
var browserstack = require('browserstack-local');

exports.config = {
  allScriptsTimeout: 11000,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
  },
  baseUrl: 'http://localhost:4200/',
  params: {
    loginUrl: 'iam.test.auckland.ac.nz/profile/SAML2/Redirect/SSO',
    credentials: {
      username: process.env.TEST_ACCT_USERNAME,
      password: process.env.TEST_ACCT_PASSWORD
    }
  },
  onPrepare: function () {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: StacktraceOption.PRETTY
        }
      })
    );
    browser.driver.manage().window().maximize();

    /*
    * Steps to perform user login prior to all tests
    */
    browser.driver.get(browser.baseUrl);
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
  },
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  commonCapabilities: {
    'browserstack.user': process.env.BROWSERSTACK_CREDENTIALS_USER,
    'browserstack.key': process.env.BROWSERSTACK_CREDENTIALS_KEY,
    'project': 'eResearchDashboard',
    'build': 'Internal',
    'browserstack.debug': false,
    'browserstack.video': true,
    'browserstack.local': true,
    'acceptSslCerts': true,
    'browserstack.maskCommands': 'setValues, getValues, setCookies, getCookies',
  },
  multiCapabilities: [
    {
      'browserName': 'Chrome',
      'os': 'Windows',
      'os_version': '10',
      'resolution': '1280x1024'
    },
    {
      'browserName': 'Firefox',
      'os': 'Windows',
      'os_version': '10',
      'resolution': '1280x1024'
    }
  ],

  // Code to start browserstack local before start of test
  beforeLaunch: function () {
    console.log("Connecting local");
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({ 'key': exports.config.commonCapabilities['browserstack.key'] }, function (error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function () {
    return new Promise(function (resolve, reject) {
      exports.bs_local.stop(resolve);
    });
  }

};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});