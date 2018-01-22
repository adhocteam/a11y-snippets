var reporter = require('./scripts/e2e-axe');

if (process.env['NODE_ENV'] === 'report') {
  // Output CSV report in ./csv-reports
  reporter.createCSVReport('./fixtures/sitemap.example.xml');
} else if (process.env['NODE_ENV'] === 'consoleLight') {
  // Output to console with light display
  reporter.scanToConsole('./fixtures/sitemap.example.xml', 'light');
} else {
  // Output to console with dark display
  reporter.scanToConsole('./fixtures/sitemap.example.xml', 'dark');
}
