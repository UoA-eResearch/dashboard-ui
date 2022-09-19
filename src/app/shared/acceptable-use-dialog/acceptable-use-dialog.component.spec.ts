import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { AcceptableUseDialogComponent } from './acceptable-use-dialog.component';

describe('AcceptableUseDialogComponent', () => {
  let component: AcceptableUseDialogComponent;
  let fixture: ComponentFixture<AcceptableUseDialogComponent>;

  beforeEach(async(() => {
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
