import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-acceptable-use-dialog',
  templateUrl: 'acceptable-use-dialog.component.html'
})
export class AcceptableUseDialogComponent {

  constructor(public dialogRef: MatDialogRef<AcceptableUseDialogComponent>) { }


  onNoClick(): void {
    this.dialogRef.close()
  }

}
