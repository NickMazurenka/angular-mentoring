import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  public logoSpin: boolean = false;

  constructor() {
  }

}
