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

1. Add the `axe-e2e` directory to the project you want to test. If your
   project root is `cool-project`, copy or move the `axe-e2e` directory inside it.
2. If you haven't already, open your Terminal application
3. Change into the `axe-e2e` directory from the project root by typing `$ cd axe-e2e` at your
   terminal prompt ($)
4. Type `$ yarn install` at your terminal prompt ($)
5. Name your sitemap file `sitemap.xml` and add it to the
   `axe-e2e/fixtures` directory. Ensure your XML file follows the same format as `sitemap.example.xml`.
6. `index.js` passes Webdriver a `css selector="#content"` argument by default. If you use a
   different [CSS selector](https://www.w3.org/TR/CSS/#selectors) on your pages, open `axe-e2e/index.js` and edit the
   second argument on lines 5, 8, and 11. Be sure to pass a `<String>` in quotation
   marks, or Webdriver will throw an error. For more information about Webdriver selectors, see [Webdriver > Class > By](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/by_exports_By.html) documentation.
7. Run one or more of the following commands from your terminal prompt:

### If using Yarn:

* `$ yarn test:console-dark` to output errors to a dark terminal window
* `$ yarn test:console-light` to output errors to a light terminal window
* `$ yarn test:report` to output errors to `/csv-reports/base.csv`

### If using npm:

* `$ npm run test:console-dark` to output errors to a dark terminal window
* `$ npm run test:console-light` to output errors to a light terminal window
* `$ npm run test:report` to output errors to `/csv-reports/base.csv`

## If you receive a Terminal error after updating

The new version of axe-e2e may cause an error the first time you run `yarn | npm run test`. If this happens, run the following commands from your terminal prompt:

### If using Yarn:

1. `$ yarn install`
2. `$ yarn test:<PREFERRED-TEST>` Replace `<PREFERRED-TEST>` with one of the yarn commands in Step 7 above.

### If using npm:

1. `$ npm install`
2. `$ npm run test:<PREFERRED-TEST>` Replace `<PREFERRED-TEST>` with one of the npm commands in Step 7 above.
