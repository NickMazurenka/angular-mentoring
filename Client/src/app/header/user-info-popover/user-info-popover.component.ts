import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';

@Component({
  selector: 'app-user-info-popover',
  templateUrl: './user-info-popover.component.html',
  styleUrls: ['./user-info-popover.component.scss']
})
export class UserInfoPopoverComponent {

  @Input()
  isOpen: boolean;

  positionList = [
    new ConnectionPositionPair(
      { originX: 'end', originY: 'top' },
      { overlayX: 'end', overlayY: 'top' })
  ];

  constructor() { }

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

}
