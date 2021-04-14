export const environment = {
  production: true,
  version: '1.1.VERSION_WILL_BE_REPLACED_BY_CICD',
  auth: {
    cognitoAwsRegion: 'ap-southeast-2',
    cognitoUserPoolId: 'ap-southeast-2_gtuqqgIIq',
    cognitoDomain: 'uoapool-nonprod',
    cognitoClientId: '2bdqs02j8na3eko34tuuf2s0lf',
    redirectUri: 'https://eresearch-dashboard.connect.test.amazon.auckland.ac.nz',
    scopes: 'openid profile https://eresearch-dashboard.auckland.ac.nz/dashboard',
    codeChallengeMethod: 'S256',
    logoutUri: 'https://eresearch-dashboard.connect.test.amazon.auckland.ac.nz'
  },
  privateUrlKeyWords: {
    whoNeedBearerToken: [{ url: 'apigw.test.amazon.auckland.ac.nz', optional: false }],
    whoNeedIdToken: []
  },
  dashboardGraphQlUrl: 'https://apigw.test.amazon.auckland.ac.nz/cer-dashboard-graphql',
  serverlessNowUrl: 'https://apigw.test.amazon.auckland.ac.nz/serverless-now-test/',
  servicenowUrl: 'https://uoatest.service-now.com/',
  researchHubUrl: 'https://research-hub.auckland.ac.nz/',
};