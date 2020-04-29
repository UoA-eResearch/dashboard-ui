import { TestBed } from '@angular/core/testing';

import { AppAuthConfigService } from './app-auth-config.service';

describe('AppAuthConfigService', () => {
  let service: AppAuthConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAuthConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
