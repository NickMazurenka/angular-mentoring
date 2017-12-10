import { OverlayRef } from '@angular/cdk/overlay';
import { Output, EventEmitter } from '@angular/core';

export class ConfirmationDialogRef {
  @Output() onDelete: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }

  delete() {
    this.overlayRef.dispose();
    this.onDelete.emit();
  }
}
