export const environment = {
  production: true,
  version: '1.1.VERSION_WILL_BE_REPLACED_BY_CICD',
  auth: {
    cognitoAwsRegion: 'ap-southeast-2',
    cognitoUserPoolId: 'ap-southeast-2_pgErjyL4O',
    cognitoDomain: 'uoapool-sandbox',
    cognitoClientId: 'lrju6v80vse4bbaesjvnr2ff0',
    redirectUri: 'https://eresearch-dashboard.sandbox.amazon.auckland.ac.nz',
    scopes: 'openid profile https://eresearch-dashboard.auckland.ac.nz/dashboard',
    codeChallengeMethod: 'S256',
    logoutUri: 'https://eresearch-dashboard.sandbox.amazon.auckland.ac.nz'
  },
  privateUrlKeyWords: {
    whoNeedBearerToken: [{ url: 'apigw.sandbox.amazon.auckland.ac.nz', optional: false }],
    whoNeedIdToken: []
  },
  dashboardGraphQlUrl: 'https://apigw.sandbox.amazon.auckland.ac.nz/cer-dashboard-graphql',
  serverlessNowUrl: 'https://apigw.sandbox.amazon.auckland.ac.nz/serverless-now',
  servicenowUrl: 'https://uoadev.service-now.com/',
  researchHubUrl: 'https://research-hub-dev.connect.test.amazon.auckland.ac.nz/',
};
