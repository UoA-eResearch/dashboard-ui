import { browser, $, $$, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';

const TIMEOUT_PERIOD = 65000;

/**
 * Wrapper around the standard $() and $$() Protractor functions that add extra waits
 * required to make the tests work reliably in BrowserStack Automation.
 * @param search CSS element finder
 */
export let _$ = (search): ElementFinder => {
  browser.driver.wait(ExpectedConditions.visibilityOf($(search)), TIMEOUT_PERIOD);
  browser.waitForAngular();
  return $(search);
}

/**
 * Wrapper around the standard $() and $$() Protractor functions that add extra waits
 * required to make the tests work reliably in BrowserStack Automation.
 * @param search CSS element finder
 */
export let _$$ = (search): ElementArrayFinder => {
  browser.driver.wait(ExpectedConditions.visibilityOf($$(search).first()), TIMEOUT_PERIOD);
  browser.waitForAngular();
  return $$(search);
}