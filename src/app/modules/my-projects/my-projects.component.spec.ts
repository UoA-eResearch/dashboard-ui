import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@app/core.module';
import { MyProjectsComponent } from './my-projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ProjectComponent } from './project/project.component';
import { MyProjectsListComponent } from './my-projects-list/my-projects-list.component';

describe('MyProjectsComponent', () => {
  let component: MyProjectsComponent;
  let fixture: ComponentFixture<MyProjectsComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyProjectsComponent, ProjectComponent, MyProjectsListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        CoreModule,
        BrowserAnimationsModule,
        ApolloTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    controller = TestBed.inject(ApolloTestingController);
    fixture = TestBed.createComponent(MyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Projects Dashboard'`, () => {
    const app = fixture.componentInstance;
    expect(app.pageInfo.title).toEqual('Projects Dashboard');
  });

  afterEach(() => {
    controller.verify();
    fixture.destroy();
  });
});
