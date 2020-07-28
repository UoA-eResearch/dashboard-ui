# DashboardUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

[Angular Material schematics](https://material.angular.io/guide/schematics) are also available. For example, to generate a Material Table, run `ng generate @angular/material:table <component-name>`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `www/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). To run the tests with code coverage reporting, run 
`npm run test -- --code-coverage`. The code coverage report is generated and stored in the `coverage/` folder. Coverage thresholds are set at 80% for all files. Less than 80% coverage will generate errors to warn you. 
To change any of the test configurations, see [karma.conf.js](karma.conf.js).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

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