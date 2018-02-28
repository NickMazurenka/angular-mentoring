import { Injectable, Injector, ComponentRef, Inject } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { LoadingDialogRef } from './loading-dialog-ref';
import { LoadingDialogComponent } from './loading-dialog.component';

@Injectable()
export class LoadingDialogService {

  private dialogRef: LoadingDialogRef;

  constructor(private injector: Injector, private overlay: Overlay) {
  }

  open() {
    const overlayConfig = this.getOverlayConfig();

    const overlayRef = this.overlay.create(overlayConfig);

    this.dialogRef = new LoadingDialogRef(overlayRef);

    const injectionTokens = new WeakMap();
    injectionTokens.set(LoadingDialogRef, this.dialogRef);
    const injector = new PortalInjector(this.injector, injectionTokens);
    const containerPortal = new ComponentPortal(LoadingDialogComponent, null, injector);
    overlayRef.attach(containerPortal);

    return this.dialogRef;
  }

  close() {
    if (this.dialogRef != null) {
      this.dialogRef.close();
    }
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
