var AxeReports = require("axe-reports");
var fs = require("fs");
var parser = require("xml2json");
var A11yUtils = require("../utilities/a11y-e2e-utilities");

/**
 * Read the sitemap into NodeJS filesystem, and create an array of URLs to scan. The output will
 * be rendered to a 'base.csv' file in the /csv-reports directory. The filename and directory can be
 * overridden by changing the 'yarn' or 'npm' statement used to pipe the output file location.
 *
 * Example: If the desired filename was report_1: `$ NODE_ENV=report node index > ./csv-reports/report_1.csv`
 *
 * @param {String} Path to sitemap.xml file used to create array of URLs to scan
 * @param {String} ID of container element WebDriver will look for
 */
exports.createCSVReport = function(sitemap, el) {
  // Build a header row for our CSV file output
  AxeReports.createCsvReportHeaderRow();

  // Read in the XML sitemap file
  fs.readFile(sitemap, "utf8", function(err, data) {
    var arr;
    var urls;

    if (err) {
      console.log(err);
    } else {
      // Convert to JSON data
      arr = parser.toJson(data);

      // Convert to Javascript object
      arr = JSON.parse(arr);

      // Isolate the loc:url string pair
      arr = arr["urlset"]["url"];
    }

    // Map a new array of URL strings
    urls = arr.map(function(url) {
      return url.loc;
    });

    // Initiate the a11y testing, output to CSV
    A11yUtils.checkA11y(urls, el);
  });
};

/**
 * Read the sitemap into NodeJS filesystem, and create an array of URLs to scan. The output will
 * be rendered on the command line as errors are detected.
 *
 * @param {String} Path to sitemap.xml file used to create array of URLs to scan
 * @param {String} ID of container element WebDriver will look for
 * @param {String} 'dark' for darker colored consoles, 'light' for lighter colored consoles
 */
exports.scanToConsole = function(sitemap, el, consoleColor) {
  // Read in the XML sitemap file
  fs.readFile(sitemap, "utf8", function(err, data) {
    var arr;
    var urls;

    if (err) {
      console.log(err);
    } else {
      // Convert to JSON data
      arr = parser.toJson(data);

      // Convert to POJO
      arr = JSON.parse(arr);

      // Isolate the loc:url string pair
      arr = arr["urlset"]["url"];
    }

    // Map a new array of URL strings
    urls = arr.map(function(url) {
      return url.loc;
    });

    // Initiate the a11y testing, output to console
    A11yUtils.checkA11yConsole(urls, el, consoleColor);
  });
};
