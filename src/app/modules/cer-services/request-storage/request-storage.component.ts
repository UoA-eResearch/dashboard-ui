
import { map, first } from 'rxjs/operators';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { ServerlessNowService } from '@data/service/serverless-now.service';
import { LoginService } from '@uoa/auth';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { format, subYears } from 'date-fns'
import { ErrorDialogComponent } from '@shared/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from '@shared/confirm-dialog/confirm-dialog.component';
import { CanComponentDeactivate } from '@app/guard/confirm-deactivate.guard';
import { environment } from '@env';
import { AcceptableUseDialogComponent } from '@shared/acceptable-use-dialog/acceptable-use-dialog.component';


interface Person {
  firstName: string;
  lastName: string;
  email: string;
  access: string;
  // roles: string[];
  roles: {
    dataOwner: false;
    dataContact: false;
    projectOwner: false;
  };
}


@Component({
  selector: 'app-request-data',
  templateUrl: './request-storage.component.html',
  styleUrls: ['./request-storage.component.scss']
})
export class RequestStorageComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  private requestFormKey = 'requestStorageForm';

  @ViewChild('resultsDummyHeader') private resultsDummyHeader: ElementRef;
  @ViewChild('stepper') stepper: MatHorizontalStepper;
  public dateToday = new Date();
  public submitting = false;
  private routeParamsSub: Subscription;
  private stepperSub: Subscription;
  private dataRequirementsSub: Subscription;
  private endDateSub: Subscription;
  public title = 'Request Research Storage';
  public response: any;
  public requestTypeForm: FormGroup;
  public projectForm: FormGroup;
  public dataInfoForm: FormGroup;
  public dataSizeForm: FormGroup;
  public requestDetailsForm: FormGroup;
  public isEditable = true;
  public showOtherField = false;
  public projectMembers: FormArray;
  public requestTypeClicked = false;
  public showSizeNextYear = true;
  public ticketUrl: string = environment.servicenowUrl + 'nav_to.do?uri=u_request.do?sys_id=';
  public researchHubUrl: string = environment.researchHubUrl;

  public updateOptionsList = [
    'Extend Storage',
    'Change Access',
    'Other'
  ];

  public storageOptionsList = [
    'Dropbox',
    'Network Research Storage',
    'Something else'
  ];

  public fieldOfResearchCodes = [
    '01 Mathematical Sciences',
    '02 Physical Sciences',
    '03 Chemical Sciences',
    '04 Earth Sciences',
    '05 Environmental Sciences',
    '06 Biological Sciences',
    '07 Agricultural and Veterinary Sciences',
    '08 Information and Computing Sciences',
    '09 Engineering',
    '10 Technology',
    '11 Medical and Health Sciences',
    '12 Built Environment and Design',
    '13 Education',
    '14 Economics',
    '15 Commerce, Management, Tourism and Services',
    '16 Studies in Human Society',
    '17 Psychology and Cognitive Sciences',
    '18 Law and Legal Studies',
    '19 Studies in Creative Arts and Writing',
    '20 Language, Communication and Culture',
    '21 History and Archaeology',
    '22 Philosophy and Religious Studies',
    'Other'
  ];

  public dataRequirements = [
    'Part of a funded project research',
    'Requires human ethics research',
    'Requires animal ethics',
    'Part of clinical research',
    'Research involving children',
    'Commercially sensitive',
    'Research involves patent application',
    'Need for external collaborator access',
    'Requirement to delete data at end of project',
    'Other'
  ];

  public units = [
    'Gigabytes',
    'Terabytes'
  ];

  public access = [
    'Full Access',
    'Read Only'
  ];

  public roleTypes = [
    'Data Owner',
    'Data Contact',
    'Project Owner'
  ];

  constructor(
    private formBuilder: FormBuilder,
    dateAdapter: DateAdapter<NativeDateAdapter>,
    private serverlessNowService: ServerlessNowService,
    public loginService: LoginService,
    public dialog: MatDialog,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    dateAdapter.setLocale('en-GB');
  }

  async ngOnInit() {

    this.requestTypeForm = this.formBuilder.group({
      requestType: new FormControl('New', Validators.required),
      isPersonalDropbox: new FormControl(false)
    });

    this.projectForm = this.formBuilder.group({
      title: new FormControl(undefined, Validators.required),
      abstract: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(500)
      ]),
      storageOptions: new FormControl(undefined, Validators.required),
      endDate: new FormControl(undefined, [Validators.required]),
      fieldOfResearch: new FormControl(undefined, Validators.required),
    });

    this.requestDetailsForm = this.formBuilder.group({
      existingFolderName: new FormControl(undefined, [Validators.required]),
      updateType: new FormControl(undefined, [Validators.required]),
      requestDetails: new FormControl(undefined, [Validators.required]),
      comments: new FormControl(undefined)
    });

    function projectOwnerValidator(): ValidatorFn {
      return (formArray: FormArray) => {
        let projectOwnerCount = 0;
        formArray.value.forEach((projectMember) => {
          const personRoles = projectMember.roles;
          if (personRoles.projectOwner) {
            projectOwnerCount++;
          }
        });
        if (projectOwnerCount !== 1) {
          return { invalidProjectOwnerCount: true }
        }
        return null;
      };
    }

    function roleMinimumCountValidator(role, minimum): ValidatorFn {
      return (formArray: FormArray) => {
        let roleCount = 0;
        formArray.value.forEach((projectMember) => {
          const personRoles = projectMember.roles;
          if (personRoles[role]) {
            roleCount++;
          }
        });
        if (roleCount < minimum) {
          const errorKey = `${role}MinimumError`
          return { [errorKey]: true }
        }
        return null;
      };
    }

    function projectOwnerIsEmployee(): ValidatorFn {
      return (formArray: FormArray) => {
        let isValid = false;
        formArray.value.forEach((projectMember) => {
          let regex = /.*auckland.ac.nz$/;
          if (projectMember.roles.projectOwner && regex.test(projectMember.email)) {
            isValid = true;
          }
        });
        return isValid ? null : { invalidProjectOwnerEmail: true }
      };
    }

    this.projectMembers = this.formBuilder.array(
      [],
      Validators.compose([
        Validators.required,
        projectOwnerValidator(),
        roleMinimumCountValidator('dataContact', 1),
        roleMinimumCountValidator('dataOwner', 1),
        projectOwnerIsEmployee(),
      ])
    );

    this.dataInfoForm = this.formBuilder.group({
      dataRequirements: new FormControl(undefined),
      dataRequirementsOther: new FormControl(undefined),
      shortName: new FormControl(undefined, [
        Validators.required,
        Validators.maxLength(45),
      ]),
      projectMembers: this.projectMembers,
    });

    this.dataRequirementsSub = this.dataInfoForm
      .get('dataRequirements')
      .valueChanges.subscribe((items: string[]) => {
        const dataRequirementsOther = this.dataInfoForm.get(
          'dataRequirementsOther'
        );
        this.showOtherField =
          items && items.find((item) => item === 'Other') !== undefined;

        if (this.showOtherField) {
          dataRequirementsOther.setValidators([Validators.required]);
        } else {
          dataRequirementsOther.setValidators([]);
          dataRequirementsOther.setValue(undefined);
        }
      });

    this.dataSizeForm = this.formBuilder.group({
      sizeThisYear: new FormControl(undefined, [
        Validators.required,
        Validators.min(1),
      ]),
      unitThisYear: new FormControl(this.units[0], Validators.required),
      sizeNextYear: new FormControl(undefined, [
        Validators.required,
        Validators.min(1),
      ]),
      unitNextYear: new FormControl(this.units[0], Validators.required),
      comments: new FormControl(undefined)
    });

    this.endDateSub = this.projectForm
      .get('endDate')
      .valueChanges.subscribe((date: Date) => {
        this.showSizeNextYear = new Date() <= subYears(date, 1);

        const sizeNextYear = this.dataSizeForm.get('sizeNextYear');
        const unitNextYear = this.dataSizeForm.get('unitNextYear');

        if (this.showSizeNextYear) {
          sizeNextYear.setValidators([Validators.required, Validators.min(1)]);
          unitNextYear.setValidators([Validators.required]);
        } else {
          sizeNextYear.setValidators(null);
          unitNextYear.setValidators(null);

          sizeNextYear.setValue(undefined);
          unitNextYear.setValue(undefined);
        }
      });

    // Pre-populate first person in list with logged in user
    const user = await this.loginService.getUserInfo();
    this.addPerson({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      access: 'Full Access',
      roles: {
        dataOwner: false,
        dataContact: false,
        projectOwner: false,
      },
    });

    this.routeParamsSub = this.route.queryParams.subscribe(params => {
      const retry = params['retry'];

      if (retry) {
        this.loadRequest();
      } else {
        this.clearRequest();
      }
    });

    this.stepperSub = this.stepper.selectionChange.subscribe((selection) => {
      this.isEditable =
        selection.selectedIndex !== this.stepper._steps.length - 1;
      this.resultsDummyHeader.nativeElement.scrollIntoView();
    });
  }

  canDeactivate() {
    if (
      (!this.requestTypeForm.dirty &&
        !this.projectForm.dirty &&
        !this.dataInfoForm.dirty &&
        !this.dataSizeForm.dirty) ||
      this.response !== undefined
    ) {
      return true;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Leave form?',
        message: 'Leaving this form will delete all of the information you have filled in.'
      },
    });
    const afterClosedObs = dialogRef.afterClosed();
    const afterClosedSub = afterClosedObs.subscribe();

    return afterClosedObs.pipe(
      map(result => {
        afterClosedSub.unsubscribe();
        return result;
      }),
      first()
    );
  }

  saveRequest() {
    const form = {
      requestTypeForm: this.requestTypeForm.getRawValue(),
      requestDetailsForm: this.requestDetailsForm.getRawValue(),
      projectForm: this.projectForm.getRawValue(),
      dataInfoForm: this.dataInfoForm.getRawValue(),
      dataSizeForm: this.dataSizeForm.getRawValue(),
    };

    localStorage.setItem(this.requestFormKey, JSON.stringify(form));
  }

  loadRequest() {
    let form = localStorage.getItem(this.requestFormKey);

    if (form !== null) {
      form = JSON.parse(form);

      this.requestTypeForm.setValue(form['requestTypeForm']);
      this.requestDetailsForm.setValue(form['requestDetailsForm']);
      this.projectForm.setValue(form['projectForm']);
      this.dataInfoForm.setValue(form['dataInfoForm']);
      this.dataSizeForm.setValue(form['dataSizeForm']);

      this.stepper.selectedIndex = this.stepper._steps.length - 1; // Navigate to last step
    }
  }

  clearRequest() {
    localStorage.removeItem(this.requestFormKey);
  }

  /**
   * Unchecks the personal dropbox checkbox on the first page.
   */
  uncheckPersonalDropboxCheckbox() {
    this.requestTypeForm.controls.isPersonalDropbox.setValue(false);
  }

  addNewPerson() {
    this.addPerson({
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      access: 'Full Access',
      roles: {
        dataOwner: false,
        dataContact: false,
        projectOwner: false,
      }
    });
  }

  addPerson(person: Person) {
    const control = <FormArray>this.dataInfoForm.get('projectMembers');
    const rolesFormGroup = this.formBuilder.group({
      dataContact: new FormControl(person.roles.dataContact),
      projectOwner: new FormControl(person.roles.projectOwner),
      dataOwner: new FormControl(person.roles.dataOwner)
    });

    const personFormGroup = this.formBuilder.group({
      firstName: new FormControl(person.firstName, Validators.required),
      lastName: new FormControl(person.lastName, Validators.required),
      email: new FormControl(person.email, [
        Validators.required,
        Validators.pattern(/.*(\@|\@.+\.)(aucklanduni.ac.nz|auckland.ac.nz)$/),
      ]),
      access: new FormControl(person.access),
      roles: rolesFormGroup
    })
    control.push(personFormGroup);
  }

  deletePerson(index: number) {
    const control = <FormArray>this.dataInfoForm.get('projectMembers');
    control.removeAt(index);
  }

  ngOnDestroy() {
    try {
      this.routeParamsSub.unsubscribe();
      this.stepperSub.unsubscribe();
      this.dataRequirementsSub.unsubscribe();
      this.endDateSub.unsubscribe();
    } catch { }
  }

  showErrorDialog(
    title: string,
    message: string,
    closeButtonName: string,
    timeout: number
  ) {
    return this.dialog.open(ErrorDialogComponent, {
      data: {
        title: title,
        message: message,
        closeButtonName: closeButtonName,
        timeout: timeout
      },
    });
  }

  submit(requestType: string, currentForm: FormGroup) {
    const isValid = currentForm.valid; // Check if the form containing the submit button is valid
    currentForm.markAsTouched(); // Programmatically fire the formGroup's validators
    currentForm.markAsDirty();
    currentForm.markAsTouched();

    if (isValid) {
      this.submitting = true;
      let body;

      if (requestType === 'New' || this.requestTypeForm.controls.isPersonalDropbox.value) {
        body = Object.assign(
          {},
          this.requestTypeForm.getRawValue(),
          this.projectForm.getRawValue(),
          this.dataInfoForm.getRawValue(),
          this.dataSizeForm.getRawValue()
        );

        // Convert endDate into string
        body.endDate = format(body.endDate, 'yyyy-MM-dd');
      } else if (requestType === 'Existing') {
        body = Object.assign(
          {},
          this.requestTypeForm.getRawValue(),
          this.requestDetailsForm.getRawValue()
        );
      }

      // restructure body to avoid needing to alter servicenow api.
      if (body['projectMembers']) {
        console.log("project members restructure.");
        body['projectMembers'].forEach((member) => {
          const rolesArray = [];
          const roles = member['roles'];
          Object.keys(roles).forEach(function (key) {
            if (roles[key]) {
              // Replaces camel case to a lowercase string.
              const role = key
                .split(/(?=[A-Z])/)
                .map(s => {
                  s.toLowerCase()
                  return s.charAt(0).toUpperCase() + s.slice(1);
                })
                .join(' ');
              rolesArray.push(role);
            }
          });
          member['roles'] = rolesArray;
        });
      }

      // convert new - dropbox to the same value as new
      this.requestTypeForm.controls.isPersonalDropbox.value ? body["requestType"] = "New" : null;

      // remove property used for form processing
      delete body['isPersonalDropbox'];

      // console.debug('Submitting request body: ', body);

      this.serverlessNowService.requestService('storage', body).subscribe(
        (response) => {
          this.response = response;
          this.stepper.selectedIndex = this.stepper._steps.length - 1; // Navigate to the 'Done' form
        },
        (err: HttpErrorResponse) => {
          this.submitting = false;

          if (err.status === 401) {
            const dialogRef = this.showErrorDialog(
              'Session expired',
              'Redirecting to UoA Single Sign On...',
              'Login',
              5000
            );
            dialogRef.afterClosed().subscribe(async () => {
              const url = this.location.path(false) + '?retry=true';
              this.saveRequest();
              await this.loginService.doLogin(url);
            });
          } else {
            this.showErrorDialog(
              `${err.name}: ${err.status.toString()}`,
              JSON.stringify(err.error),
              'Close',
              undefined
            );
          }
        }
      );
    }
  }

  showAcceptableUseDialog() {
    this.dialog.open(AcceptableUseDialogComponent)
  }
}
