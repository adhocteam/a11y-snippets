# axe-e2e

A simple NodeJS accessibility script designed to analyze multiple pages for accessibility errors, and output
them to a terminal window, or CSV file. The script runs automatically, and is tailored to evaluate large numbers of pages using Chrome in a headless (no GUI) configuration.

## Pre-requisites

* **Chrome web browser, version 62 or newer**
  * Mac: Click Chrome from the top left of your display, then select About Google Chrome. Your version number will be the top item in the Settings page and will update automatically.
  * Windows: Click on the icon that looks like three horizontal bars in the top right of your screen. Click the three vertical dots on the top right, then click the Settings option near the bottom of the menu. When the Settings page is open, click the three horizontal bars on the top left, and select About Chrome from the menu that opens from the left. Chrome will update as necessary, and ask you to relaunch.
* **NodeJS**
  * [Node for Mac with nvm](https://github.com/creationix/nvm)
  * [Node for Windows](https://nodejs.org/en/download/)
* **Yarn (optional, fast package manager)**
  * [Yarn for Mac](https://yarnpkg.com/lang/en/docs/install/#mac-tab)
  * [Yarn for Windows](https://yarnpkg.com/lang/en/docs/install/#windows-tab)

## Usage

1. Add the `/axe-e2e/` directory to the project you want to test. If your
   project root is `/cool-project/`, copy or move `/axe-e2e/` inside it.
2. Run `$ yarn install` from your terminal prompt ($)
3. Replace the `/fixtures/sitemap.example.xml` file with your actual XML
   sitemap. Ensure your XML file follows the same format as the example.
4. Open `index.js` and upate the XML filename strings on lines 5, 8, and 11
5. Run `$ cd axe-e2e/` from your terminal prompt
6. Run one or more of the following commands from your terminal prompt:

### If using Yarn:

* `$ yarn test:console-dark` to output errors to a dark terminal window
* `$ yarn test:console-light` to output errors to a light terminal window
* `$ yarn test:report` to output errors to `/csv-reports/base.csv`

### If using npm:

* `$ npm run test:console-dark` to output errors to a dark terminal window
* `$ npm run test:console-light` to output errors to a light terminal window
* `$ npm run test:report` to output errors to `/csv-reports/base.csv`
