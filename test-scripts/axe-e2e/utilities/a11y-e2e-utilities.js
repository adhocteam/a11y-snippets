/* eslint semi: ["error", "always"] */
var AxeBuilder = require("axe-webdriverjs");
var AxeReports = require("axe-reports");
var WebDriver = require("selenium-webdriver");
var By = WebDriver.By;
var until = WebDriver.until;
var env = require("./env");

/**
 * Based on examples and documentation provided by:
 *
 * https://github.com/dequelabs/axe-webdriverjs#usage
 * https://github.com/dequelabs/axe-core/blob/develop/doc/examples/selenium/build/tasks/axe-selenium.js
 * https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs
 * https://developers.google.com/web/updates/2017/04/headless-chrome#drivers
 */

// Add Chrome capabilities for a WebDriver session
var chromeCapabilities = WebDriver.Capabilities.chrome();

// Configure Chrome Headless
if (env.a11yConfig === "headless") {
  chromeCapabilities.set("chromeOptions", {
    args: ["--headless"]
  });
}

// Build the actual driver object
var driver = new WebDriver.Builder()
  .forBrowser("chrome")
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
var axeBuilder = AxeBuilder(driver).configure({
  reporter: "v2",
  runOnly: {
    type: "tag",
    values: ["wcag2a", "wcag2aa", "section508"]
  }
});

/**
 * Scan for accessibility errors, and output them to to a CSV file.
 *
 * @param {String} Path to sitemap.xml file used to create array of URLs to scan
 * @param {String} ID of container element WebDriver will look for
 */
exports.checkA11y = function(dataArray, el) {
  dataArray.forEach(function(url) {
    driver.get(url);
    driver.wait(until.elementLocated(By.css(el)), 10000).then(function() {
      axeBuilder.analyze(function(results) {
        AxeReports.createCsvReportRow(results);
      });
    });
  });
  driver.quit();
};

/**
 * Scan for accessibility errors, and output them to the terminal console.
 *
 * @param {String} Path to sitemap.xml file used to create array of URLs to scan
 * @param {String} ID of container element WebDriver will look for
 * @param {String} Set console preference for darker or lighter background colors
 *
 * Documentation for Webdriver selector functions:
 * https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html
 */
exports.checkA11yConsole = function(dataArray, el, consoleColor) {
  dataArray.forEach(function(url) {
    driver.get(url);
    driver.wait(until.elementLocated(By.css(el)), 10000).then(function() {
      axeBuilder.analyze(function(results) {
        AxeReports.createConsoleReportRow(results, consoleColor);
      });
    });
  });
  driver.quit();
};
