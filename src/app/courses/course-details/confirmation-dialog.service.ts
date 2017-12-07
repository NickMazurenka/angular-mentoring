import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

  private overlay: Overlay;

  constructor(overlay: Overlay) {
    this.overlay = overlay;
  }

  open() {
    const overlayConfig = this.getOverlayConfig();

    const overlayRef = this.overlay.create(overlayConfig);

    const dialogPortal = new ComponentPortal(ConfirmationDialogComponent);

    overlayRef.attach(dialogPortal);

    overlayRef.backdropClick().subscribe(_ => overlayRef.dispose);
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

}
