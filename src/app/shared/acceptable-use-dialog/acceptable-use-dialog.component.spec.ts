import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptableUseDialogComponent } from './acceptable-use-dialog.component';

describe('AcceptableUseDialogComponent', () => {
  let component: AcceptableUseDialogComponent;
  let fixture: ComponentFixture<AcceptableUseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptableUseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptableUseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
