import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropboxDetailsComponent } from './dropbox-details.component';

describe('DropboxDetailsComponent', () => {
  let component: DropboxDetailsComponent;
  let fixture: ComponentFixture<DropboxDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropboxDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropboxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
