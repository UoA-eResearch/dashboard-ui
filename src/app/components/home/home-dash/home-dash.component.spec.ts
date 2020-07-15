import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeModule } from './../home.module';
import { HomeDashComponent } from './home-dash.component';
import { MaterialModule } from './../../../app.material.module';

describe('HomeDashComponent', () => {
  let component: HomeDashComponent;
  let fixture: ComponentFixture<HomeDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDashComponent],
      imports: [
        LayoutModule,
        HomeModule,
        MaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
