import { TestBed } from '@angular/core/testing';

import { AppErrorsConfigService } from './app-errors-config.service';

describe('AppErrorsConfigService', () => {
  let service: AppErrorsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppErrorsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
