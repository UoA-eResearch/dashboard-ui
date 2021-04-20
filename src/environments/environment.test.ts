export const environment = {
  production: true,
  version: '1.1.VERSION_WILL_BE_REPLACED_BY_CICD',
  auth: {
    cognitoAwsRegion: 'ap-southeast-2',
    cognitoUserPoolId: 'ap-southeast-2_gtuqqgIIq',
    cognitoDomain: 'uoapool-nonprod',
    cognitoClientId: 'u2f373gv4v1ssb4p6jl7ph16r',
    redirectUri: 'https://eresearch-dashboard.connect.test.amazon.auckland.ac.nz',
    scopes: 'openid profile https://eresearch-dashboard-test.auckland.ac.nz/dashboard',
    codeChallengeMethod: 'S256',
    logoutUri: 'https://eresearch-dashboard.connect.test.amazon.auckland.ac.nz'
  },
  privateUrlKeyWords: {
    whoNeedBearerToken: [{ url: 'apigw.test.amazon.auckland.ac.nz', optional: false }],
    whoNeedIdToken: []
  },
  dashboardGraphQlUrl: 'https://apigw.test.amazon.auckland.ac.nz/cer-dashboard-graphql-test',
  serverlessNowUrl: 'https://apigw.test.amazon.auckland.ac.nz/serverless-now-test',
  servicenowUrl: 'https://uoatest.service-now.com/',
  researchHubUrl: 'https://research-hub.auckland.ac.nz/',
};