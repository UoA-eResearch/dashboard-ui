import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@app/core.module';
import { MyProjectsComponent } from './my-projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Apollo } from 'apollo-angular';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';

describe('MyProjectsComponent', () => {
  let component: MyProjectsComponent;
  let fixture: ComponentFixture<MyProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyProjectsComponent, ProjectComponent, ProjectListComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule,
        CoreModule,
        BrowserAnimationsModule
      ],
      providers: [ Apollo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Projects Dashboard'`, () => {
    const app = fixture.componentInstance;
    expect(app.pageInfo.title).toEqual('Projects Dashboard');
  });
});
