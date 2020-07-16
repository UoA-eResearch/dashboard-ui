import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeModule } from '../home.module';
import { HomeDashBoardComponent } from './home-dashboard.component';
import { MaterialModule } from '../../../../app.material.module';

describe('HomeDashBoardComponent', () => {
  let component: HomeDashBoardComponent;
  let fixture: ComponentFixture<HomeDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDashBoardComponent],
      imports: [
        LayoutModule,
        HomeModule,
        MaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
