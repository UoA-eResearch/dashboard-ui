# DashboardUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

[Angular Material schematics](https://material.angular.io/guide/schematics) are also available. For example, to generate a Material Table, run `ng generate @angular/material:table <component-name>`.

## Project Folder Structure

This project is organised in alignment with the recommendations in [angular-folder-structure](https://angular-folder-structure.readthedocs.io/en/latest/index.html).
The app is broken into the following main folders:
* core -> this module is for classes used by app.module. Resources which are always loaded such as route guards, HTTP interceptors, and application level services belong in this directory.
* data -> holds the types (models/entities) and services for data consumed by the application.
* layout -> this directory contains components which are parts of the main layout such as Nav, Footer, etc. and have a <router-outlet></router-outlet> in the html for other components to embed within.
* modules -> contains a collection of modules which are each independent of each other. This allows Angular to load only the module it requires to display the request thereby saving bandwidth and speeding the entire application.
* shared -> contains classes and resources which are used in more than one dynamically loaded module. By always loading with the application the shared components are ready whenever a module requests them. It is a good place for resources used by some modules some of the time but not all modules all of the time.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `www/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). To run the tests with code coverage reporting, run 
`npm run test -- --code-coverage`. The code coverage report is generated and stored in the `coverage/` folder. Coverage thresholds are set at 80% for all files. Less than 80% coverage will generate errors to warn you. 
To change any of the test configurations, see [karma.conf.js](karma.conf.js).

To run unit tests with VSCode debugging enabled, run `ng test --browsers ChromeDebug`, wait for Karma to open up Chrome and run the tests. Leave it running and then in VSCode debug tab, select 'Debug tests in Chrome' from the launch dropdown. VSCode will attach to the Karma process and you can now put in breakpoints and debug your unit tests.

## Running end-to-end tests
[Cypress](https://www.cypress.io/) is used for e2e (integration) testing. The e2e tests test the main routes, user interactions and page elements of this web app. This includes tests of protected pages, therefore a login step is required prior to running some tests. The login and logout steps have been added as [custom commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax) which are defined in the [custom commands file](cypress/support/commands.js).

For running e2e tests locally, you must set the Research Hub Automation Test Account username and password (get from secret server) as environment variables.

Run `set "CYPRESS_TEST_ACCT_USERNAME=<username>" & set "CYPRESS_TEST_ACCT_PASSWORD=<password>" && npm run e2e` to set the environment variables and execute the end-to-end tests. To learn more about setting environment variables in Cypress, see [Environment Variables](https://docs.cypress.io/guides/guides/environment-variables.html#Setting).

To see the tests in the Cypress GUI, run `npm run cypress:open`.

During the CI/CD process (see below), the credentials must be available in the Jenkins server. The [Jenkinsfile](Jenkinsfile) picks up the credentials and sets them as environment variables using the withCredentials() plugin.

<!-- ### Running e2e tests on Browserstack
[Browserstack]() allows you to run automated Selenium testing on a range of different desktop and mobile browsers. The configuration for running our e2e tests on Browserstack is here: [Browserstack Config](e2e/protractor.conf.browserstack-remote.js).
To use Browserstack you must set the Browserstack username and access key in your environment variables. Get the username and access key by logging into Browserstack with the Developer uoaeresearch google account. 
Once you have the credentials set up, run the e2e tests on Browserstack using the following command (replace baseUrl with whatever instance of the app you want to test against):
`"node_modules/.bin/protractor" e2e/protractor.conf.browserstack-remote.js --baseUrl "https://eresearch-dashboard.sandbox.amazon.auckland.ac.nz/"`

You can also run Browserstack automation using browserstack-local which allows you to run BrowserStack against local hosts. Run npm start to start the app on localhost, then in a new console, run browserstack with the following command:
`"node_modules/.bin/protractor" e2e/protractor.conf.browserstack-local.js` -->


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## CI/CD

When updates to this repo are pushed to the **sandbox**, **nonprod**, or **prod** branches (which correspond to the 3 UoA AWS environments), a Github webhook triggers one of three corresponding jobs in the UoA production Jenkins server.
The Jenkins server uses the configurations set in its' environment for setting up access to the AWS resources/accounts/tags as well as deploying the stack on AWS. 
The Jenkins pipeline that gets run is defined in the [Jenkinsfile](Jenkinsfile) in this repository. The pipeline includes the following main stages:
* Checkout
* Build
* Run tests
* AWS Credential Grab
* Deploy (sync files to S3 bucket)
* Invalidate Cloudfront
* Post-pipeline steps (Slack and GitHub notifications)

Resources will not be deployed to AWS if any of the preceding pipeline stages fail. Therefore, it is a good idea to try running the unit and e2e tests locally as described above, before committing code to any of the CI branches.
Slack notifications can be viewed in the Research-Hub channel in uoa.slack.com.
Notification of a pipeline success or failure can also be seen in GitHub, as either a tick or a cross beside the commit that triggered the build.

## Branch Protection

Currently, only the prod branch has branch protection applied. Branch protection is configured so that changes can only be merged into the branch once a pull request is submitted and approved. To view and modify branch protection rules in GitHub, go here: https://github.com/UoA-eResearch/dashboard-graphql/settings/branches (requires admin access).