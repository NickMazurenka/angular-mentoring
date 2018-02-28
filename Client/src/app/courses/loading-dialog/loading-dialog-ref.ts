import { OverlayRef } from '@angular/cdk/overlay';
import { EventEmitter, Output } from '@angular/core';

export class LoadingDialogRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
