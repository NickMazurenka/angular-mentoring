import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

  private overlay: Overlay;

  constructor(overlay: Overlay) {
    this.overlay = overlay;
  }

  open() {
    const overlayRef = this.overlay.create();

    const dialogPortal = new ComponentPortal(ConfirmationDialogComponent);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(dialogPortal);
  }

}
