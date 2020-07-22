import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from './../../../shared/shared.module';
import { MyServicesComponent } from './my-services.component';

describe('MyServicesComponent', () => {
  let component: MyServicesComponent;
  let fixture: ComponentFixture<MyServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyServicesComponent
      ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Services Dashboard'`, () => {
    const fixture = TestBed.createComponent(MyServicesComponent);
    const app = fixture.componentInstance;
    expect(app.pageInfo.title).toEqual('Services Dashboard');
  });
});
