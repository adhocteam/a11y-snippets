# Accessibility Page Score

An Excel (XLSX) and Open Document Standard (ODS) worksheet to calcuate an accessibiilty score per page. This score can measure compliance for static content, referred to as `electronic content` and rich web applications, referred to as `applications` or `software`.

## Page Score Goals by Release Cycle

* Test your applications for accessibility errors throughout the development cycle. Release cycles are a good time to fill out accessibility page score worksheets.
* A page accessibility score of **10.0** or less is a good goal for an alpha release <sup
id="a1">[[1]](#fn1)</sup>
* A page accessibility score of **5.0** or less is the goal for a beta release <sup id="a2">[[2]](#fn2)</sup>
* A page accessibility score of **2.5** or less is the goal for a production release

## Which Worksheet Should I Use

Informational sites with pages of static content should use the Accessibility Page Score - Electronic Content file. These sites are often hand-coded or managed with a content management system like Wordpress.

Web applications that meet one ore more of these criteria should be considered software:

* Use a client-side framework like [React](https://reactjs.org/), [Angular](https://angularjs.org/), or [Vue.js](https://vuejs.org/)
* Contain logic that controls experience based on user input
* Contain rich user interfaces or widgets
* Provide dynamic content like video, audio, or data feeds

## Testing Procedures

You will need to perform all recommended tests to receive an accurate page score. Automated test errors calculate raw scores, manual tests calculate modifiers, and page count helps smooth scores based on application size.

### Page Count

Count the number of pages you will be testing. If you are reviewing electronic content, your page count could be the number of URLs in your `sitemap.xml` file. If you are testing software or rich web applications, you should consider each view, route, or unique presentation one page.

### Testing with aXe

* Download and run Ad Hoc's [axe-e2e script](https://github.com/adhocteam/a11y-snippets/tree/master/test-scripts/axe-e2e) if you are evaluating electronic content
* Download the [Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/) axe plugins if you are evaluating software
* Count up the number of Critical, Serious, Moderate, and Minor errors axe detects in your electronic content or software. You will input these error counts into your chosen worksheet.
* The `axe-e2e` script can create a CSV file for easy sorting and counting. This is a useful feature if you are evaluating a large number of pages.
* Software or rich web applications should be evaluated manually. Different user paths, rich interfaces, and routing software make automated scanning impractical.

### Testing Keyboard, Zoom, Color, and Screen Reader Usability

Tests for keyboard, zoom to 400%, color, and screen reader are treated as pass or fail. Each modifier has been weighted using United States population statistics where available, and educated guesses where necessary. The values get larger as page counts increase, to accurately capture user impact.

To determine manual test pass or fail, please read the Manual Test Pass Fail Criteria document. It has been included as a Word (.docx) and Open Document Text (.odt) document. Specific errors are called out for each test. Links to more information are included to make your tests easier and meaningful.

### Determining Your Accessibility Page Score

When automated and manual errors are tallied, you are ready to enter them into respective worksheets. The worksheets have basic error handling, but make a few presumptions:

* The pages being tested is equal or greater than 1
* Scores will increase rapidly with high numbers of automated errors on low page-count applications
* Scores will increase rapidly with manual errors on higher page-count applications

#### Electronic Content

1. Change the number of pages being tested in cell B17
2. Enter a test date in cell B18 (optional)
3. Enter the number of critical axe errors in cell B23
4. Enter the number of serious axe errors in cell B24
5. Enter the number of moderate axe errors in cell B25
6. Enter the number of minor axe errors in cell B26
7. Answer Yes or No in cells B29-B32. These are dropdown menus that can be clicked to show the options inside.
8. Review your current accessibility page score in cell B35.

#### Software (Rich Web Applications)

The software worksheet includes two extra inputs for active focus management. Single-page applications often require focus to be captured and reset programmatically. This modifier is heavily weighted because it has the potential to disrupt keyboard and screen reader users and should be considered its own test class. [Learn more about actively managing focus for React apps.](https://adhocteam.us/2018/02/20/developer-driven-focus-management-for-single-page-applications/)

1. Change the number of views or unique states being tested in cell B18
2. Enter a test date in cell B19 (optional)
3. Enter the number of critical axe errors in cell B24
4. Enter the number of serious axe errors in cell B25
5. Enter the number of moderate axe errors in cell B26
6. Enter the number of minor axe errors in cell B27
7. Answer Yes or No in cells B30-B34. These are dropdown menus that can be clicked to show the options inside.
8. Review your current accessibility page score in cell B37.

## Additional Information

<sup id="fn1">[1]</sup> Alpha software has most or all of its core functionality developed, but is not ready for user testing. [↑](#a1)

<sup id="fn2">[2]</sup> Beta software has most or all of its core functionality developed, and is stable for user testing. [↑](#a2)
