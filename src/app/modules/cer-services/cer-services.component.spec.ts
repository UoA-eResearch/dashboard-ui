import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerServicesComponent } from './cer-services.component';

describe('CerServicesComponent', () => {
  let component: CerServicesComponent;
  let fixture: ComponentFixture<CerServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerServicesComponent ]
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
