import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@app/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
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
        SharedModule,
        CoreModule,
        BrowserAnimationsModule,
        RouterTestingModule
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
    const app = fixture.componentInstance;
    expect(app.pageInfo.title).toEqual('Services Dashboard');
  });
});
