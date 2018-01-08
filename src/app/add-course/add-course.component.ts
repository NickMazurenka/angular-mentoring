import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.router.navigate(['courses']);
  }
}
