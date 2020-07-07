export const environment = {
  production: true,
  version: '1.1.VERSION_WILL_BE_REPLACED_BY_CICD',
  auth: {
    cognitoAwsRegion: '',
    cognitoUserPoolId: '',
    cognitoDomain: '',
    cognitoClientId: '',
    redirectUri: '',
    scopes: 'openid profile',
    codeChallengeMethod: 'S256',
    logoutUri: ''
  },
  privateUrlKeyWords: {
    whoNeedBearerToken: [],
    whoNeedIdToken: []
  },
  dashboardGraphQlUrl: ''
};