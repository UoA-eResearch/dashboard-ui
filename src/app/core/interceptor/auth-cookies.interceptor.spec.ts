import { TestBed } from '@angular/core/testing';

import { AuthCookiesInterceptor } from './auth-cookies.interceptor';

describe('AuthCookiesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthCookiesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthCookiesInterceptor = TestBed.inject(AuthCookiesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
