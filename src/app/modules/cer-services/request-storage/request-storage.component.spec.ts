import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedModule } from './../../../shared/shared.module';
import { CoreModule } from './../../../core/core.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestStorageComponent } from './request-storage.component';

describe('RequestStorageComponent', () => {
  let component: RequestStorageComponent;
  let fixture: ComponentFixture<RequestStorageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestStorageComponent ],
      imports: [
        SharedModule,
        CoreModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
