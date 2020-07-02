export const environment = {
  production: true,
  version: '1.1.VERSION_WILL_BE_REPLACED_BY_CICD',
  auth: {
    cognitoAwsRegion: 'ap-southeast-2',
    cognitoUserPoolId: 'ap-southeast-2_pgErjyL4O',
    cognitoDomain: 'uoapool-sandbox',
    cognitoClientId: 'lrju6v80vse4bbaesjvnr2ff0',
    redirectUri: 'https://domx0qy8opg01.cloudfront.net',
    scopes: 'openid profile https://my-domain.auckland.ac.nz/angular-test',
    codeChallengeMethod: 'S256',
    logout_uri: 'https://domx0qy8opg01.cloudfront.net'
  },
  privateUrlKeyWords: {
    whoNeedBearerToken: ['apigw.sandbox.amazon.auckland.ac.nz'],
    whoNeedIdToken: []
  },
  dashboardGraphQlUrl: 'https://apigw.sandbox.amazon.auckland.ac.nz/dev-cer-dashboard-graphql/graphql'
};
