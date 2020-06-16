export const environment = {
  production: true,
  auth: {
    cognitoAwsRegion: '',
    cognitoUserPoolId: '',
    cognitoDomain: '',
    cognitoClientId: '',
    redirectUri: '',
    scopes: 'openid profile',
    codeChallengeMethod: 'S256',
  },
  privateUrlKeyWords: {
    whoNeedBearerToken: [],
  },
  dashboardGraphQlUrl: ''
};
