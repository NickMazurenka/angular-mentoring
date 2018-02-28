import { Component, OnInit } from '@angular/core';
import { Mew } from './mew/mew.model';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  mews: Mew[] = [];

  private screenHeight: number;
  private screenWidth: number;
  private minimumHeight = 200;
  private maximumHeight = 400;
  private rotationPeriodMin = 3;
  private rotationPeriodMax = 10;
  private linearSpeedMin = 15;
  private linearSpeedMax = 100;

  constructor() {
    this.screenHeight = window.screen.height;
    this.screenWidth = window.screen.width;

    const initialCount = 27;
    for (let i = 0; i < initialCount; i++) {
      this.mews.push(this.createMew());
    }
  }

  private createMew(): Mew {
    const mew = {
      type: 1 + Math.floor(Math.random() * 3),
      positionX: 0,
      positionY: 0,
      height: this.minimumHeight + Math.floor(Math.random() * (this.maximumHeight - this.minimumHeight)),
      rotationType: 1 + Math.floor(Math.random() * 5),
      direction: Math.floor(Math.random() * 360),
      rotationPeriod: this.rotationPeriodMin + Math.random() * (this.rotationPeriodMax - this.rotationPeriodMin),
      linearSpeed: this.linearSpeedMin + Math.floor(Math.random() * (this.linearSpeedMax - this.linearSpeedMin))
    };
    mew.positionX = Math.floor(Math.random() * this.screenWidth) - mew.height;
    mew.positionY = Math.floor(Math.random() * this.screenHeight) - mew.height;
    return mew;
  }

}
