import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  private router: Router;

  public logoSpin: boolean = false;

  constructor(router: Router) {
    this.router = router;
  }

  titleClicked() {
    this.router.navigate(['']);
  }

}
