import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './../footer/footer.component';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        FooterComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loginService.doLogin() when login is called', async() => {
    const loginServiceSpy = spyOn(component.loginService, "doLogin");
    component.login();
    await expect(loginServiceSpy).toHaveBeenCalled();
  });

  it('should call loginService.logout() when logout is called', async() => {
    const loginServiceSpy = spyOn(component.loginService, "logout");
    component.logout();
    await expect(loginServiceSpy).toHaveBeenCalled();
  });

  it('should not call getUserInfo unless user is authenticated', async() => {
    const loginServiceSpy = spyOn(component.loginService, "getUserInfo");
    component.ngOnInit();
    await expect(loginServiceSpy).toHaveBeenCalledTimes(0);
  });

  afterEach(() => {
    fixture.destroy();
  });
});
