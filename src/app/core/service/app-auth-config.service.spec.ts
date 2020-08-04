import { TestBed } from '@angular/core/testing';
import { AppAuthConfigService } from './app-auth-config.service';


describe('AppAuthConfigService', () => {
  let service: AppAuthConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
    service = TestBed.inject(AppAuthConfigService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have all variables defined', () => {
    expect(service.codeChallengeMethod).toBeTruthy();
    expect(service.cognitoAwsRegion).toBeTruthy();
    expect(service.cognitoClientId).toBeTruthy();
    expect(service.cognitoDomain).toBeTruthy();
    expect(service.cognitoUserPoolId).toBeTruthy();
    expect(service.scopes).toBeTruthy();
    expect(service.redirectUri).toBeTruthy();
    expect(service.bearerTokenUrlFilter).toBeTruthy();
    expect(service.logoutUri).toBeTruthy();
    expect(service.useRefreshToken).toBeDefined();
    expect(service.navigateWithoutToken).toBeDefined();
  })
});
