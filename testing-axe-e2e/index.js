var reporter = require('./scripts/e2e-a11y');

if (process.env['NODE_ENV'] === 'report') {
  // Output CSV report in ./csv-reports
  reporter.createCSVReport('./fixtures/sitemap.example.xml');
} else {
  // Output to console
  // TODO: Add a light option for console output
  reporter.scanToConsole('./fixtures/sitemap.example.xml');
}
