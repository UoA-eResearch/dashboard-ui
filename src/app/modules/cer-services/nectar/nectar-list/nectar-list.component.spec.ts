import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { NectarListComponent } from './nectar-list.component';

describe('NectarListComponent', () => {
  let component: NectarListComponent;
  let fixture: ComponentFixture<NectarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NectarListComponent ],
      imports: [ SharedModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NectarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
