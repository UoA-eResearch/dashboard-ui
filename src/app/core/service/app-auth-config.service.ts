import { Injectable } from '@angular/core';

import { CognitoConfigService } from '@uoa/auth';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppAuthConfigService extends CognitoConfigService {
    constructor() {
        super();
        this.codeChallengeMethod = environment.auth.codeChallengeMethod;
        this.cognitoAwsRegion = environment.auth.cognitoAwsRegion;
        this.cognitoClientId = environment.auth.cognitoClientId;
        this.cognitoDomain = environment.auth.cognitoDomain;
        this.cognitoUserPoolId = environment.auth.cognitoUserPoolId;
        this.scopes = environment.auth.scopes;
        this.redirectUri = environment.auth.redirectUri;
        this.bearerTokenUrlFilter = environment.privateUrlKeyWords.whoNeedBearerToken;
        this.logoutUri = environment.auth.logoutUri;
        // If you dont want to use refreshtoken to get new token, set to false. Default = true.
        this.useRefreshToken = true;
        // If you don't want to navigate to login page when token is expired, set to false. Default = true.
        this.navigateWithoutToken = true;
    }
}
