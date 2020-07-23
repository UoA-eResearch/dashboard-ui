import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsPanelComponent } from './faqs-panel.component';

describe('FaqsPanelComponent', () => {
  let component: FaqsPanelComponent;
  let fixture: ComponentFixture<FaqsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
