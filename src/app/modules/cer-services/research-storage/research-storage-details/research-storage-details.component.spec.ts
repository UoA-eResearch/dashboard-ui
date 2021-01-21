import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ResearchStorageDetailsComponent } from './research-storage-details.component';
import { SharedModule } from '@shared/shared.module';

describe('ResearchStorageDetailsComponent', () => {
  let component: ResearchStorageDetailsComponent;
  let fixture: ComponentFixture<ResearchStorageDetailsComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchStorageDetailsComponent ],
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
    fixture = TestBed.createComponent(ResearchStorageDetailsComponent);
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
