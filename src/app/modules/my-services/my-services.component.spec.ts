import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@app/core.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MyServicesComponent } from './my-services.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';


describe('MyServicesComponent', () => {
  let component: MyServicesComponent;
  let fixture: ComponentFixture<MyServicesComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyServicesComponent, ServicesListComponent
      ],
      imports: [
        SharedModule,
        HttpClientTestingModule,
        CoreModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        ApolloTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    controller = TestBed.inject(ApolloTestingController);
    fixture = TestBed.createComponent(MyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Services Dashboard'`, () => {
    const app = fixture.componentInstance;
    expect(app.pageInfo.title).toEqual('Services Dashboard');
  });

  afterEach(() => {
    controller.verify();
    fixture.destroy();
  });
});
