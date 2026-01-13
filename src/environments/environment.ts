// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: '1.1.VERSION_WILL_BE_REPLACED_BY_CICD',
  auth: {
    cognitoAwsRegion: 'ap-southeast-2',
    cognitoUserPoolId: 'ap-southeast-2_gtuqqgIIq',
    cognitoDomain: 'uoapool-nonprod',
    cognitoClientId: '4s59akvtr9qt5e3nl5dine8pdk',
    redirectUri: 'http://localhost:4200',
    scopes: 'openid profile https://eresearch-dashboard-dev.auckland.ac.nz/dashboard',
    codeChallengeMethod: 'S256',
    logoutUri: 'http://localhost:4200'
  },
  privateUrlKeyWords: {
    whoNeedBearerToken: [{ url: 'apigw.test.amazon.auckland.ac.nz', optional: false }],
    whoNeedIdToken: []
  },
  serverlessNowUrl: 'https://apigw.test.amazon.auckland.ac.nz/serverless-now-test',
  servicenowUrl: 'https://uoatest.service-now.com/',
  researchHubUrl: 'https://research-hub-dev.connect.test.amazon.auckland.ac.nz/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
