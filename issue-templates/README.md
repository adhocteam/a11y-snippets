# Purpose

To provide templates for entering accessibility and Section 508 issues into Github and Jira. Include as much of the sample information as you can. This will make the issue easier to re-create and fix.

## Github Template Instructions

* Create an `ISSUE_TEMPLATE` directory in your project root, on the `master` branch in Github
* When you create a new issue, use the following URL to pre-populate the 508 issue template: `https://github.com/<ORG_NAME>/<ORG_REPO>/issues/new?template=508_issue_template.md`
* `<ORG_NAME>` should be replaced with your organization name
* `<ORG_REPO>` should be replaced with the project repository
* [GITHUB: Creating an issue template for your repository](https://help.github.com/articles/creating-an-issue-template-for-your-repository/)
* [GITHUB: About automation for issues and pull requests with query parameters](https://help.github.com/articles/about-automation-for-issues-and-pull-requests-with-query-parameters/)

## Jira CSV Upload Instructions

Each row in the Excel and Open Office documents represent one row in Jira. The Summary column must be filled in for each row. All other columns are recommended, and will provide information needed to fix the issue.

* Download the Jira_508_upload_template for Excel or Open Office
* Replace the `SAMPLE` data in row 2 with real data:
  * **Issue Type** could include `<BUG>`, `<TASK>`, or custom types depending on your project
  * **Summary** is required for Jira to upload your file. This should be a brief explanation of the issue.
  * **Description** is a longer explanation of the issue, and is the field where the most information can be provided. The sample information shows how a typical accessibility ticket could be explained. The more information you can provide, the easier the issue will be to re-create.
  * **Acceptance Criteria** is a longer explanation that begins with a user statment. "As a `<USER-TYPE>` user, I want to be able to undertake a `<USER-ACTION>`. User types can be screen reader, keyboard, etc., and user actions should be related to the issue you are trying to fix.
  * **Priority** will usually be Blocker, Critical, Major, Minor, or Trivial. If the issue is systemic, or identified by users as blocking critical interactions, consider escalating the issue to Critical or Blocker.
  * **Component** is a useful way to sort tickets in Jira. The template allows you to enter up to three unique components. If you do not need to use the Component column, enter a single comma `,` so Jira will parse the exported file correctly.
  * **Reporter** could be a user name or unique ID, based on your project and team.
* Export your file as a comma-separated value (CSV) file from Excel or Open Office when you have entered all of your data.
* Import your data: [JIRA: Importing Data From CSV](https://confluence.atlassian.com/adminjiracloud/importing-data-from-csv-776636762.html#ImportingdatafromCSV-jirafieldtips)
