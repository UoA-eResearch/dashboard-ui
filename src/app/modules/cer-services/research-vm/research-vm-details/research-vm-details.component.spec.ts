import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ResearchVmDetailsComponent } from './research-vm-details.component';
import { SharedModule } from '@shared/shared.module';

describe('ResearchVmDetailsComponent', () => {
  let component: ResearchVmDetailsComponent;
  let fixture: ComponentFixture<ResearchVmDetailsComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchVmDetailsComponent ],
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
    fixture = TestBed.createComponent(ResearchVmDetailsComponent);
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
