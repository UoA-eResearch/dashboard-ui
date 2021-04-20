export const environment = {
  production: true,
  version: '1.1.VERSION_WILL_BE_REPLACED_BY_CICD',
  auth: {
    cognitoAwsRegion: 'ap-southeast-2',
    cognitoUserPoolId: 'ap-southeast-2_B3Lx9B4bL',
    cognitoDomain: 'uoapool',
    cognitoClientId: 'TBC',
    redirectUri: 'https://eresearch-dashboard.auckland.ac.nz',
    scopes: 'openid profile https://eresearch-dashboard-prod.auckland.ac.nz/dashboard',
    codeChallengeMethod: 'S256',
    logoutUri: 'https://eresearch-dashboard.auckland.ac.nz'
  },
  privateUrlKeyWords: {
    whoNeedBearerToken: [{ url: 'apigw.prod.amazon.auckland.ac.nz', optional: false }],
    whoNeedIdToken: []
  },
  dashboardGraphQlUrl: 'https://apigw.prod.amazon.auckland.ac.nz/cer-dashboard-graphql-prod',
  serverlessNowUrl: 'https://apigw.prod.amazon.auckland.ac.nz/serverless-now-prod',
  servicenowUrl: 'https://uoaprod.service-now.com/',
  researchHubUrl: 'https://research-hub.auckland.ac.nz/',
};
