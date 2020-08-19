import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@app/core.module';
import { ProjectComponent } from './project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

// https://medium.com/@sergeyfetiskin/testing-apollo-graphql-in-your-angular-application-595f0a04aad3

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent ],
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
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    controller.verify();
    fixture.destroy();
  });
});
