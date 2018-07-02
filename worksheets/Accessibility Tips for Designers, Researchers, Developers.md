# Accessibility Tips for Designers, Researchers, and Developers

Accessibility is a wide-ranging discipline, with many ways to contribute. **UI/UX designers, researchers, and front-end engineers** are the primary audience for this document; they will be able to make regular, measurable contributions to accessibility with respect to criteria outlined.

The following recommendations have been put together to help teams identify and mitigate accessibility errors during the design, research, and development cycles.

There will always be errors that are identified during test and promotion cycles; the goal is to minimize errors called out by clients and end users.

## Automated errors

Automated scan errors are the first thing I recommend logging and fixing. These errors can cause issues for screen reader, keyboard, mobile, and low-vision users. Issues include improperly formed markup, misused ARIA attributes, color contrast, and missing landmark structures.

* [Run automated scans](https://www.youtube.com/watch?v=FW1giWW5M9I) against all application pages or states. The Axe-core plugin is available for [Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/). This adds a tab to developer tools and provides on-demand accessibility scanning for single pages during development.
* Going forward, we should also be testing pages with [axe-coconut](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/), which identifies experimental WCAG2 warnings and best practices.
* Run the [axe-end to end script with CSV and console output](https://github.com/adhocteam/a11y-snippets/tree/master/test-scripts/axe-e2e) for automated scans of high page count static sites. Errors can be outputted to CSV for easy spreadsheet import.
* React development, consider adding the [ESLint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) plugin to IDE/editors during development to eliminate a portion of these issues
* React development, consider adding [jest-axe](https://github.com/nickcolley/jest-axe) to component unit tests
* Developers should run the axe-core plugin while developing new components. Many automated errors can be avoided or fixed during the development cycle.
* Validate rendered HTML to avoid automated a11y errors

## Screen readers

Screen reader testing is mostly a manual process. Consider spot testing with at least two, and ideally all three screen readers listed here. At a minimum, NVDA should be tested as it is cross-browser and open-source. Mac users should also be testing VoiceOver on Safari. **Do not use Chrome,** as it can cause false positives and has some ARIA bugs.

* [Test using JAWS + IE11 on Win7/10](https://webaim.org/articles/jaws/)
* [Test using NVDA + Firefox on Win7/10 - VIDEO](https://www.youtube.com/watch?v=Vx1vSd5uYS8)
* [Test using VoiceOver + Safari on OSX](https://webaim.org/articles/voiceover/)

## Keyboards

Keyboard testing is a manual process. All pages should be verified by a human tester, and ideally an end-to-end keyboard script.

* [Ensure all pages can be navigated with keyboard](https://webaim.org/techniques/keyboard/)
* Ensure no links, buttons, or form elements are unreachable using Tab, Shift + Tab
* Ensure custom rich components can be navigated using keyboard, arrow keys
* Skip navigation link should be on all pages with navigation, large numbers of links
* For rich applications, ensure [focus is being actively managed]

## Color contrast and color blindness

* Designers should check color pairings during visual design sprints, especially:
  * White text on yellow, orange, red
  * Black text on darker blues, purples
  * Gray text on white or textured backgrounds.
* Sketch plugins for designers to test deliverables in progress:
  * [Sketch Color Contrast Analyzer](https://github.com/getflourish/Sketch-Color-Contrast-Analyser)
  * [Stark - Color Contrast and Color Blindness Plugin](http://www.getstark.co/)
* Check for colorblindness issues in live sites using the [Chrome Colorblinding plugin](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en)

## Responsive Design That Supports Zoom to 400%

* Layouts should still be usable at 400% increase in size, to meet near-future requirements
* [WCAG2.1: Understanding Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
