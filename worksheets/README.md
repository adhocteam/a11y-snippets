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

### Automated Testing

* Download and run the axe-e2e script if you are evaluating electronic content
* Download the Chrome or Firefox axe-core plugins if you are evaluating software
