import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVmComponent } from './request-vm.component';

describe('RequestVmComponent', () => {
  let component: RequestVmComponent;
  let fixture: ComponentFixture<RequestVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestVmComponent ]
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
});
