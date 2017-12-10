import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogRef } from './confirmation-dialog-ref';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  private dialogRef: ConfirmationDialogRef;

  constructor(dialogRef: ConfirmationDialogRef) {
    this.dialogRef = dialogRef;
  }

  ngOnInit() {
  }

  yesClick() {
    this.dialogRef.delete();
  }

  cancelClick() {
    this.dialogRef.close();
  }
}
