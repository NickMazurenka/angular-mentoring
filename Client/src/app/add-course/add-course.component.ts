import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  addCourseForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.addCourseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', Validators.maxLength(200)],
      date: '',
      duration: '',
      authors: ''
    });
  }

  ngOnInit() {
  }

  onCancelClick() {
    this.router.navigate(['courses']);
  }
}
