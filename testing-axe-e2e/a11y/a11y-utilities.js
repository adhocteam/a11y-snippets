/* eslint semi: ["error", "always"] */
var AxeBuilder = require('axe-webdriverjs');
var AxeReports = require('axe-reports');
var WebDriver = require('selenium-webdriver');
var By = WebDriver.By;
var until = WebDriver.until;
var env = require('./env');

// Add Chrome capabilities for a WebDriver session
var chromeCapabilities = WebDriver.Capabilities.chrome();

// Configure Chrome Headless
if (env.a11yConfig === 'headless') {
  chromeCapabilities.set('chromeOptions', {
    args: [
      "--headless",
    ]
  });
}

// Build the actual driver object
var driver = new WebDriver.Builder()
  .forBrowser('chrome')
  .withCapabilities(chromeCapabilities)
  .build();

// Give a buffer against async script loads
// breaking the test run and hanging Chrome
driver
  .manage()
  .timeouts()
  .setScriptTimeout(20000);

// Build the axe scanner that will
// analyze pages inside the driver
var axeBuilder = AxeBuilder(driver)
  .configure({
    reporter: 'v2',
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa', 'section508']
    }
  });

exports.checkA11y = function (dataArray) {
  dataArray.forEach(function (url) {
    driver.get(url);
    driver.wait(until.elementLocated(By.id('wrapper')), 10000)
      .then(function () {
        axeBuilder.analyze(function (results) {
          AxeReports.createCsvReportRow(results);
        });
      });
  });
  driver.quit();
};

exports.checkA11yConsole = function (dataArray, el) {
  dataArray.forEach(function (url) {
    driver.get(url);
    driver.wait(until.elementLocated(By.id(el)), 10000)
      .then(function () {
        axeBuilder.analyze(function (results) {
          AxeReports.createConsoleReportRow(results);
        });
      });
  });
  driver.quit();
};
