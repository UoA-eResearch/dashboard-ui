import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { DropboxListComponent } from './dropbox-list.component';

describe('DropboxListComponent', () => {
  let component: DropboxListComponent;
  let fixture: ComponentFixture<DropboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropboxListComponent ],
      imports: [ SharedModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropboxListComponent);
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
