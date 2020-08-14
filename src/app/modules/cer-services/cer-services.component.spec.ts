import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@app/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CerServicesComponent } from './cer-services.component';

describe('CerServicesComponent', () => {
  let component: CerServicesComponent;
  let fixture: ComponentFixture<CerServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerServicesComponent ],
      imports: [
        SharedModule,
        CoreModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
