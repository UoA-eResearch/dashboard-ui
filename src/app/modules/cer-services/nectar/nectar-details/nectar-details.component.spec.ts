import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NectarDetailsComponent } from './nectar-details.component';

describe('NectarDetailsComponent', () => {
  let component: NectarDetailsComponent;
  let fixture: ComponentFixture<NectarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NectarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NectarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
