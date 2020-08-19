import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationListComponent } from './visualisation-list.component';

describe('VisualisationListComponent', () => {
  let component: VisualisationListComponent;
  let fixture: ComponentFixture<VisualisationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationListComponent);
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
