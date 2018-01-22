# axe-e2e
A simple script to analyze multiple pages for accessibility errors, and output
them to a terminal window, or CSV file. The script runs automatically, and is
designed to evaluate large numbers of pages.

## Usage
1. Add the `/axe-e2e/` directory to the project you want to test. If your
   project root is `/cool-project/`, copy or move `/axe-e2e/` inside there.
2. Run `$ yarn install` from your terminal prompt ($)
3. Replace the `/fixtures/sitemap.example.xml` file with your actual XML
   sitemap. Ensure your XML file follows the same format as the example.
4. Open `index.js` and upate the XML filename strings on lines 5, 8, and 11
5. Run `$ cd axe-e2e/` from your terminal prompt
6. Run one or more of the following from your terminal prompt:
  * `yarn test:console-dark` to output errors to a dark terminal window
  * `yarn test:console-light` to output errors to a light terminal window
  * `yarn test:report` to output errors to `/csv-reports/base.csv`
