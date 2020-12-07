import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServerlessNowService } from './serverless-now.service';

describe('ServerlessNowService', () => {
  let service: ServerlessNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(ServerlessNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
