# Accessibility Evaluation Checklist

## What this document does

This document provides guidance to assess, report, and quantify the accessibility of the products Ad Hoc builds.

## Who it is for

User interface and experience designers, researchers, and front-end engineers are the primary audience. However, this is not an exhaustive list. Anyone with access to a web browser or mobile device can be an accessibility tester. This document and templates can be used to help you identify **what** to test, and **how** to evaluate your website or application.

## Getting Started

Application accessibility health can be determined by automated and human checks in the five areas below. For all items except automated errors, human testers should check the most common user stories, or the most highly trafficked pages using analytics data.

The most common red flag (major or critical impact) errors have to do with keyboard navigation and/or screen readers. These can be time and resource intensive to fix if not caught early in the development cycle.

### Step 1. Tally automated errors - high importance

Automated scan errors are the first thing we recommend logging for fixes. These errors can cause issues for screen reader, keyboard, mobile, and low-vision users. Issues include improperly formed markup, misused ARIA attributes, color contrast, and missing landmark structures.

* [Run automated scans](https://www.youtube.com/watch?v=FW1giWW5M9I) against all rich application pages or states. The Axe-core plugin is available for [Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/). This adds a tab to developer tools and provides on-demand accessibility scanning for single pages during development.
* [Run the axe-end to end script with CSV and console output](https://github.com/adhocteam/a11y-snippets/tree/master/test-scripts/axe-e2e) for automated scans of high page count static sites. Errors can be outputted to CSV for easy spreadsheet import.

### Step 2. Audit with screen readers - maximal importance

Screen reader testing is mostly a manual process. Ideally, pages under test should be free of errors identified by axe-core or other automated scanner before manual testing begins. For applications, this means all pages should be evaluated. For larger static sites, pick 10-15 highly trafficked pages, or run the [axe-e2e script](https://github.com/adhocteam/a11y-snippets/tree/master/test-scripts/axe-e2e) again.

* [Test using JAWS + IE11 on Win7/10](https://webaim.org/articles/jaws/)
* [Test using NVDA + Firefox on Win7/10 - VIDEO](https://www.youtube.com/watch?v=Vx1vSd5uYS8)
* [Test using VoiceOver + Safari on OSX](https://webaim.org/articles/voiceover/)

### Step 3. Audit keyboard navigation - maximal importance

Keyboard testing is mostly a manual process. All pages under test should be free of errors identified by axe-core or other automated scanner first, then manual testing and ideally keyboard end-to-end testing should follow.

* [Ensure all pages can be navigated with keyboard](https://webaim.org/techniques/keyboard/)
* Ensure no links, buttons, or form elements are unreachable using Tab, Shift + Tab
* Ensure custom rich components can be navigated using keyboard, arrow keys
* Skip navigation link should be on all pages with navigation, large numbers of links
* For rich applications, ensure [focus is being actively managed](https://adhocteam.us/2018/02/20/developer-driven-focus-management-for-single-page-applications/). This is a large penalty on the accessibility page score worksheet, due to its potential for user impairment.

### Step 4. Check color contrast and color blindness - high importance

Check for colorblindness issues in live sites using the [Chrome Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en) plugin

### Step 5. Zoom your screen to 400% - medium importance

* Layouts should still be usable at 400% increase in size, to meet near-future requirements
* [WCAG2.1: Understanding Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)

### Step 6. Fill out accessibility page score worksheet

Programs should create a new file when a product is being audited the first time. When a product is being re-evaluated, duplicate the tab Current Audit, and rename it to the previous audit date. This allows you to look back and track accessibility page scores over time.

### Step 7. Log Issues in Ticket Tracker of Choice

Templates are available for Github issues and Jira CSV upload.
