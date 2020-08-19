import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchVmListComponent } from './research-vm-list.component';

describe('ResearchVmListComponent', () => {
  let component: ResearchVmListComponent;
  let fixture: ComponentFixture<ResearchVmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchVmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchVmListComponent);
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
