# Acceptance Criteria - Accessibility Tiers

The purpose of this document is to establish 3-4 tiers for acceptance criteria with respect to accessibility testing. The document will explore what types of testing should go into each tier, and how the tiers stack on one another. It is assumed defects and improvements will be logged in the issue tracker of choice for each testing tier.

## Accessibility Testing Tiers

### Tier 1

**Time to test:** 30-60 minutes <br/>
**Responsible party(ies):**
  * Front-end engineers
  * DevOps engineers for <abbr title="Continuous Integration, Continuous Deployment">CI/CD</abbr> pipeline automation
  * Quality assurance testers

#### Local Development (Front-end Engineers)

* Follow accessibility best practices
  * [React accessibility](https://reactjs.org/docs/accessibility.html)
* Validate HTML - Semantically correct markup is the foundation to good accessibility for screen readers and gives a boost to SEO.
  * [W3C validator](https://validator.w3.org/)
  * [Code Sniffer](http://squizlabs.github.io/HTML_CodeSniffer/)
* Scan rendered page(s) for accessibility errors
  * [aXe plugin for Chrome](http://bitly.com/aXe-Chrome) <small>RECOMMENDED</small>
  * [axe plugin for Firefox 54+](http://bit.ly/aXe-Firefox)
  * [WAVE](http://wave.webaim.org/extension/)
* Write accessibility unit tests for React components (assumes React, Jest)
  * [Jest](https://jestjs.io/docs/en/getting-started.html)
  * [jest-aXe](https://github.com/nickcolley/jest-axe) <small>OPTIONAL</small>

#### Linters (DevOps Engineers)

* [ESLint](https://eslint.org/docs/user-guide/command-line-interface)
* [eslint-plugin-JSX-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

#### CI/CD Testing (DevOps Engineers)
* [aXe](https://www.npmjs.com/package/axe-core)
* [aXe integration examples](https://github.com/dequelabs/axe-core/tree/develop/doc/examples)
* [Automate your Drupal accessibility testing with aXe and NightwatchJS](https://www.previousnext.com.au/blog/automate-your-drupal-accessibility-testing-axe-and-nightwatchjs)

#### Manual Testing (Quality Assurance Testers)

* Zoom layout to 400% at 1280px
  * [Ad Hoc - Zoom testing criteria](https://github.com/adhocteam/a11y-snippets/blob/master/worksheets/Accessibility%20Manual%20Testing%20Criteria.md#zoom-your-screen-to-400---three-or-more-errors)
  * [Understanding Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
* Navigate page(s) using the keyboard
  * [WebAIM navigate with the keyboard](https://webaim.org/techniques/keyboard/)
  * [Ad Hoc - Keyboard testing criteria](https://github.com/adhocteam/a11y-snippets/blob/master/worksheets/Accessibility%20Manual%20Testing%20Criteria.md#keyboard-navigation---five-or-more-errors)

### Tier 2

**Time to test:** 1-2 days, 1 dedicated resource <br/>
**Testing to be done:** Includes all of Tier 1, and tests below <br/>
**Responsible party(ies):** Accessibility specialist or delegate

#### Manual Testing (Quality Assurance Testers)

* Test pages for colorblindness
  * [Ad Hoc - Colorblindness test criteria](https://github.com/adhocteam/a11y-snippets/blob/master/worksheets/Accessibility%20Manual%20Testing%20Criteria.md#color-blindness---five-or-more-errors)
  * [Colorblinding Chrome plugin](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en)
* Smoke test page(s) with **one preferred** screen reader + browser pairing
  * [WebAIM Screenreader + Browser Combinations](https://webaim.org/projects/screenreadersurvey7/#browsercombos)
  * [Manual testing criteria](https://github.com/adhocteam/a11y-snippets/blob/master/worksheets/Accessibility%20Manual%20Testing%20Criteria.md#screen-readers---five-or-more-errors)
  * [MacOS + Safari + VoiceOver](https://webaim.org/articles/voiceover/)
  * [Win7/10 + Firefox + NVDA](https://www.youtube.com/watch?v=Vx1vSd5uYS8)
  * [Win7/10 + IE11 + JAWS](https://webaim.org/articles/jaws/)

### Tier 3

**Time to test:** 3-5 days, 1 dedicated resource <br/>
**Testing to be done:** Includes all of Tiers 1-2, and tests below <br/>
**Responsible party(ies):** Accessibility specialist or delegate

#### Manual Testing (Quality Assurance Testers)

* Test page(s) with **all preferred** screen reader + browser pairings
  * [WebAIM Screenreader + Browser Combinations](https://webaim.org/projects/screenreadersurvey7/#browsercombos)
  * [Manual testing criteria](https://github.com/adhocteam/a11y-snippets/blob/master/worksheets/Accessibility%20Manual%20Testing%20Criteria.md#screen-readers---five-or-more-errors)
  * [MacOS + Safari + VoiceOver](https://webaim.org/articles/voiceover/)
  * [Win7/10 + Firefox + NVDA](https://www.youtube.com/watch?v=Vx1vSd5uYS8)
  * [Win7/10 + IE11 + JAWS](https://webaim.org/articles/jaws/)
* <TODO: Add links> Review content for cognitive improvements
  * Headings, subheadings
  * Shorter paragraphs, scannability
* <TODO: Add links> Review content for motion, animation:
  * Percentage of page(s) in motion
  * Flashing content for users with seizures

### Tier 4

**Time to test:** 5-10 days, 1 dedicated resource<br/>
**Testing to be done:** Includes all of Tiers 1-3, and tests below <br/>
**Responsible party(ies):** Accessibility specialist

#### Manual Testing (Quality Assurance Testers)

* Write or update [VPAT (Voluntary Program Accessibility Template)](https://www.itic.org/policy/accessibility/vpat) document
  * MUST be a Word document, using the provided template
  * This document should be under version control with source code

---

## Mapping Features to Testing Tiers

Features should be evaluated on their relative complexity, story point estimates, and developer input, to determine the proper accessibility testing tier. The agreed-upon testing tier should be assigned according to the working team’s preference. Some potential times might include:

* When the feature is proposed and added to project backlog
* During sprint planning and/or story point estimation
* After work has commenced on the feature or story + sub-feature(s)

### User Story 1: Content Upgrade

**Scenario:** As a user, I want the content to be free of typographic errors, and be easy to read and understand.

**Type of user story:** Content editing

**Story point range:** 1-3

**Development effort:** Less than 1 day

**Accessibility testing:** Tier 1

### User Story 2: UI/UX Design Improvement

**Scenario:** As a user, I want the user interface to reflect the most important features highlighted during my research session. The interface should meet me where I am, with respect to my ability and understanding.

**Type of user story:** Visual and experience design new work or refactor

**Story point range:** 3-5

**Development effort:** 1 week or less (50% of a standard sprint)

**Accessibility testing:** Tier 2

### User Story 3: Updated Experience Flow

**Scenario:** As a user, I want the experience flow to be fully tested and free of accessibility defects. My updated user flow might be something like logging in with 2-factor authentication, updating my health records, or entering prescription drugs into a database.

**Type of user story:** Significant experience design refactor or new work

**Story point range:** 5-13

**Development effort:** Up to 2 weeks (one standard sprint)

**Accessibility testing:** Tier 3

### User Story 4: Release or Increment a Product

**Scenario:** As a user, I want the product to be fully tested and free of accessibility defects. This includes documentation stating the testing processes, and attesting to the product’s readiness. Any known issues or improvements should be documented in a roadmap.

**Type of user story:** Product release or increment release

**Story point range:** 8-13, depending on application size

**Development effort:** 2 weeks, with possible extension of up to 1 week to finalize VPAT

**Accessibility testing:** Tier 4

