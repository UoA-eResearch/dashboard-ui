import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { AcceptableUseDialogComponent } from './acceptable-use-dialog.component';

describe('AcceptableUseDialogComponent', () => {
  let component: AcceptableUseDialogComponent;
  let fixture: ComponentFixture<AcceptableUseDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptableUseDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }]
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
