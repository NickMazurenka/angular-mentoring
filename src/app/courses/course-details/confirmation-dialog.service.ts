import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogRef } from './confirmation-dialog/confirmation-dialog-ref';

@Injectable()
export class ConfirmationDialogService {

  private overlay: Overlay;
  private injector: Injector;

  constructor(injector: Injector, overlay: Overlay) {
    this.overlay = overlay;
  }

  open() {
    const overlayConfig = this.getOverlayConfig();

    const overlayRef = this.overlay.create(overlayConfig);

    const dialogRef = new ConfirmationDialogRef(overlayRef);

    const injectionTokens = new WeakMap();
    injectionTokens.set(ConfirmationDialogRef, dialogRef);
    const injector = new PortalInjector(this.injector, injectionTokens);
    const containerPortal = new ComponentPortal(ConfirmationDialogComponent, null, injector);
    overlayRef.attach(containerPortal);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
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
