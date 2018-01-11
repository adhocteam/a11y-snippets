var fs = require('fs');
var parser = require('xml2json');
var AxeReports = require('axe-reports');
var A11yUtils = require('./a11y-utilities');

// Build a header row for our CSV file output
AxeReports.createCsvReportHeaderRow()

// Read in the XML sitemap file
fs.readFile('./fixtures/sitemap.example.xml', 'utf8', function (err, data) {
  var arr
  var urls

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
  urls = arr.map(function (url) {
    return url.loc;
  });

  // Initiate the a11y testing
  A11yUtils.checkA11y(urls, 'content');
});
