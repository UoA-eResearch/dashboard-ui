// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: '1.1.VERSION_WILL_BE_REPLACED_BY_CICD',
  auth: {
    cognitoAwsRegion: 'ap-southeast-2',
    cognitoUserPoolId: 'ap-southeast-2_pgErjyL4O',
    cognitoDomain: 'uoapool-sandbox',
    cognitoClientId: 'lrju6v80vse4bbaesjvnr2ff0',
    redirectUri: 'http://localhost:4200',
    scopes: 'openid profile https://eresearch-dashboard.auckland.ac.nz/dashboard',
    codeChallengeMethod: 'S256',
    logoutUri: 'http://localhost:4200'
  },
  privateUrlKeyWords: {
    whoNeedBearerToken: [{ url: 'apigw.sandbox.amazon.auckland.ac.nz', optional: false }],
    whoNeedIdToken: []
  },
  dashboardGraphQlUrl: 'https://apigw.sandbox.amazon.auckland.ac.nz/cer-dashboard-graphql',
  serverlessNowUrl: 'https://apigw.sandbox.amazon.auckland.ac.nz/serverless-now/',
  servicenowUrl: 'https://uoadev.service-now.com/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
