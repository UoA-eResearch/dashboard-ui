import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { NectarDetailsComponent } from './nectar-details.component';
import { SharedModule } from '@shared/shared.module';

describe('NectarDetailsComponent', () => {
  let component: NectarDetailsComponent;
  let fixture: ComponentFixture<NectarDetailsComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NectarDetailsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ApolloTestingModule,
        SharedModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    controller = TestBed.inject(ApolloTestingController);
    fixture = TestBed.createComponent(NectarDetailsComponent);
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
