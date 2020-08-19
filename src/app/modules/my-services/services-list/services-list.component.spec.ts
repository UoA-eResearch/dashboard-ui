import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@app/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicesListComponent } from './services-list.component';

describe('ServicesListComponent', () => {
  let component: ServicesListComponent;
  let fixture: ComponentFixture<ServicesListComponent>;
  const SERVICES_MOCK = {
    "dropbox": [{
      "id": 1,
      "name": "dropbox-test",
      "__typename": "DropBoxProject"
    }],
    "nectar": [{
      "id": 1,
      "name": "nectar-test",
      "__typename": "NectarProject"
    }],
    "research_drive": [{
      "id": 1,
      "name": "research-drive-test",
      "__typename": "ResearchStorageProject"
    }],
    "vis": [{
      "id": 1,
      "name": "visualisation-test",
      "__typename": "VisualisationProject"
    }],
    "vm": [{
      "id": 1,
      "name": "research-vm-test",
      "__typename": "ResearchVMProject"
    }]
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesListComponent ],
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
    fixture = TestBed.createComponent(ServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.services = SERVICES_MOCK;
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
