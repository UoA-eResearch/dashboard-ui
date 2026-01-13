import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedModule } from './../../../shared/shared.module';
import { CoreModule } from './../../../core/core.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestVmComponent } from './request-vm.component';

describe('RequestVmComponent', () => {
  let component: RequestVmComponent;
  let fixture: ComponentFixture<RequestVmComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestVmComponent ],
      imports: [
        SharedModule,
        CoreModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVmComponent);
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
