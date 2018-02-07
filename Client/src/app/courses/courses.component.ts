import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesFilterPipe } from './courses-filter.pipe';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ICourseDetails } from '../shared-models/course-details.model';
import { CoursesService } from '../shared-services/courses.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  public pattern: string;
  public courses: ICourseDetails[];
  public coursesPerPage = 5;
  public currentPage = 1;
  public get totalPages() {
    return Math.round(this._coursesTotal / this.coursesPerPage) + (this._coursesTotal % this.coursesPerPage > 0 ? 1 : 0);
  }

  private _coursesTotal = 0;

  private coursesService: CoursesService;
  private router: Router;

  private _getCourseListSubscriptionOnInit: Subscription;
  private _getCourseListSubscriptionOnPageChange: Subscription;
  private _getCourseListSubscriptionSearch: Subscription;
  private _getCourseTotalSunscription: Subscription;
  private _deleteCourseSubscription: Subscription;

  constructor(router: Router, coursesService: CoursesService) {
    this.router = router;
    this.courses = [];
    this.coursesService = coursesService;
  }

  private getCourseList(): Observable<ICourseDetails[]> {
    return this.coursesService.getCourseList((this.currentPage - 1) * this.coursesPerPage, this.coursesPerPage, this.pattern);
  }

  private updateCourseTotal() {
    this.coursesService.getCourseTotal().subscribe(count => this._coursesTotal = count);
  }

  ngOnInit() {
    this._getCourseListSubscriptionOnInit =
      this.getCourseList().subscribe((courses: ICourseDetails[]) => {
        this.courses = courses;
      });
    this.updateCourseTotal();
  }

  onPageChange(value: number) {
    this.currentPage = value;
    this._getCourseListSubscriptionOnPageChange =
      this.getCourseList().subscribe((courses: ICourseDetails[]) => {
        this.courses = courses;
      });
  }

  search(pattern: string) {
    this.pattern = pattern;
    this._getCourseListSubscriptionSearch = this.getCourseList().subscribe((courses: ICourseDetails[]) => {
      this.courses = courses;
    });
  }

  deleteCourse(course: ICourseDetails) {
    this._deleteCourseSubscription =
      this.coursesService.deleteCouse(course.id, (this.currentPage - 1) * this.coursesPerPage, this.coursesPerPage)
        .subscribe(() => this.search(this.pattern));
  }

  ngOnDestroy() {
    if (this._getCourseListSubscriptionOnInit) {
      this._getCourseListSubscriptionOnInit.unsubscribe();
    }
    if (this._getCourseListSubscriptionSearch) {
      this._getCourseListSubscriptionSearch.unsubscribe();
    }
    if (this._deleteCourseSubscription) {
      this._deleteCourseSubscription.unsubscribe();
    }
  }

}
