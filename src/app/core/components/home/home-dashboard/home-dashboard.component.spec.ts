import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeModule } from '../home.module';
import { HomeDashBoardComponent } from './home-dashboard.component';
import { SharedModule } from './../../../../shared/shared.module';

describe('HomeDashBoardComponent', () => {
  let component: HomeDashBoardComponent;
  let fixture: ComponentFixture<HomeDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDashBoardComponent],
      imports: [
        HomeModule,
        RouterTestingModule,
        SharedModule
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
