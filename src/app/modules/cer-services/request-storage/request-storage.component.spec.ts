import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestStorageComponent } from './request-storage.component';

describe('RequestStorageComponent', () => {
  let component: RequestStorageComponent;
  let fixture: ComponentFixture<RequestStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestStorageComponent ]
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
});
