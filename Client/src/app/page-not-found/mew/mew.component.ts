import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Mew } from './mew.model';

@Component({
  selector: 'app-mew',
  templateUrl: './mew.component.html',
  styleUrls: ['./mew.component.scss']
})
export class MewComponent implements OnInit {

  get source(): string {
    switch (this.mew.type) {
      default:
      case 1: return 'assets/img/mew1.png';
      case 2: return 'assets/img/mew2.png';
      case 3: return 'assets/img/mew3.png';
    }
  }

  get left(): string {
    return this.mew.positionX + 'px';
  }

  get top(): string {
    return this.mew.positionY + 'px';
  }

  get height(): string {
    return this.mew.height + 'px';
  }

  get animation(): string {
    return `rotate${this.mew.rotationType} ${this.mew.rotationPeriod}s infinite linear`;
  }

  @Input()
  mew: Mew;

  constructor() {
  }

  ngOnInit() {
  }

}
