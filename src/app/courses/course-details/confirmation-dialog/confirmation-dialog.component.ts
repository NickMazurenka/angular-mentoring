import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogRef } from './confirmation-dialog-ref';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  private dialogRef: ConfirmationDialogRef;

  constructor(dialogRef: ConfirmationDialogRef) {
    this.dialogRef = dialogRef;
  }

  yesClick() {
    this.dialogRef.delete();
  }

  cancelClick() {
    this.dialogRef.close();
  }
}
