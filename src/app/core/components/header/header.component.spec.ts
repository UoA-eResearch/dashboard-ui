import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../../../app.material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { CoreModule } from './../../core.module';
import { SharedModule } from './../../../shared/shared.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MaterialModule,
        LayoutModule,
        CoreModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
