import { Injectable, Injector, ComponentRef, Inject } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ConfirmationDialogRef } from './confirmation-dialog-ref';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

  constructor(private injector: Injector, private overlay: Overlay) {
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
