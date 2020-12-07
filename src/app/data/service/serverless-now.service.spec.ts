import { TestBed } from '@angular/core/testing';

import { ServerlessNowService } from './serverless-now.service';

describe('ServerlessNowService', () => {
  let service: ServerlessNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerlessNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
