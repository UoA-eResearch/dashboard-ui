import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppAuthConfigService } from './app-auth-config.service';
import { AppStorageService } from './app-storage.service';


describe('AppAuthConfigService', () => {
  let service: AppAuthConfigService;
  let storage: AppStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AppAuthConfigService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
