# Accessibility Heat Index Score

An Excel (XLSX) and Open Document Standard (ODS) worksheet to calcuate an accessibiilty score for static content sites, referred to as `electronic content` and rich web applications, referred to as `applications` or `software`.

## Which Worksheet Should I Use

Which worksheet to use depends on the type of content you are evaluating. Informational sites with high numbers of static content pages should be considered electronic content.

Rich applications are more loosely defined:

* Created using a client-side framework like React, Angular, or Vue.js
* Contain logic trees that provide different experiences based on user input
* Contain a high number of rich user interfaces or widgets
* Provide dynamic content like video, audio, or live data streams

## Testing Procedures

You will need to perform automated and manual accessibility testing to receive an accurate heat index score. Automated test errors are used to calcuate a raw score, manual test errors are used as score multipliers, and total pages or views under test are used to normalize for site and application size.

### Page Counts

Enter the number of pages you will be testing into your worksheet. If you are testing electronic content, your page count should match the number of unique URLs in your `sitemap.xml` file. If you are testing software or rich web applications, you should consider each view, route, or unique presentation as one page.

### Testing with aXe

* Download and run Ad Hoc's [axe-e2e script](https://github.com/adhocteam/a11y-snippets/tree/master/test-scripts/axe-e2e) if you are evaluating electronic content
* Download the [Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/) axe plugins if you are evaluating software
* Count up the number of Critical, Serious, Major, and Minor errors axe detects in your electronic content or software. You will input these error counts into your chosen worksheet.
* The `axe-e2e` script can create a CSV file for easy sorting and counting. This is a useful feature if you are evaluating a large number of pages.
* Software or rich web applications should be evaluated manually. Different user paths, rich interfaces, and routing software make automated scanning impractical.

### Testing Keyboard, Zoom, Color, and Screen Reader Usability

Manual testing for keyboards, layout zoom to 400%, color, and screen reader usability are treated as pass or fail for index scoring.
