import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { VisualisationDetailsComponent } from './visualisation-details.component';
import { SharedModule } from '@shared/shared.module';

describe('VisualisationDetailsComponent', () => {
  let component: VisualisationDetailsComponent;
  let fixture: ComponentFixture<VisualisationDetailsComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationDetailsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ApolloTestingModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    controller = TestBed.inject(ApolloTestingController);
    fixture = TestBed.createComponent(VisualisationDetailsComponent);
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
