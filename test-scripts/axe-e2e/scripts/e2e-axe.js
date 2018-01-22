var AxeReports = require('axe-reports');
var fs = require('fs');
var parser = require('xml2json');
var A11yUtils = require('../utilities/a11y-e2e-utilities');

exports.createCSVReport = function(sitemap) {
  // Build a header row for our CSV file output
  AxeReports.createCsvReportHeaderRow();

  // Read in the XML sitemap file
  fs.readFile(sitemap, 'utf8', function(err, data) {
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
      arr = arr['urlset']['url'];
    }

    // Map a new array of URL strings
    urls = arr.map(function(url) {
      return url.loc;
    });

    // Initiate the a11y testing, output to CSV
    A11yUtils.checkA11y(urls, 'content');
  });
};

exports.scanToConsole = function(sitemap, consoleColor) {
  // Read in the XML sitemap file
  fs.readFile(sitemap, 'utf8', function(err, data) {
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
      arr = arr['urlset']['url'];
    }

    // Map a new array of URL strings
    urls = arr.map(function(url) {
      return url.loc;
    });

    // Initiate the a11y testing, output to console
    A11yUtils.checkA11yConsole(urls, 'content', consoleColor);
  });
};
