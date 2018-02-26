import { Component, OnInit, Input, HostListener, EventEmitter, Output, ViewChild, TemplateRef } from '@angular/core';
import { ConnectionPositionPair, GlobalPositionStrategy, CdkConnectedOverlay, OverlayRef } from '@angular/cdk/overlay';
import { IUserInfo } from '../../shared-models/user-info.model';

@Component({
  selector: 'app-user-info-popover',
  templateUrl: './user-info-popover.component.html',
  styleUrls: ['./user-info-popover.component.scss']
})
export class UserInfoPopoverComponent {

  isOpen: boolean = false;

  positionList = [
    new ConnectionPositionPair(
      { originX: 'end', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' })
  ];

  @Input()
  userInfo: IUserInfo;

  @Output()
  onSignOut = new EventEmitter<void>();

  constructor() {
  }

  toggle(): void {
    this.isOpen ? this.close() : this.open();
  }

  close() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }

  @HostListener('click')
  onClick() {
    this.toggle();
  }

  onSignOutClick() {
    this.onSignOut.emit();
    this.close();
  }

}
