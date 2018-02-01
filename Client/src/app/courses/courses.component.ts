import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';
import { CoursesService } from './courses.service';
import { CoursesFilterPipe } from './courses-filter.pipe';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  public pattern: string;
  public courses: ICourseDetails[];
  public coursesPerPage = 5;
  public pageNumber = 0;

  private coursesService: CoursesService;
  private router: Router;

  private _getCourseListSubscriptionOnInit: Subscription;
  private _getCourseListSubscriptionSearch: Subscription;
  private _deleteCourseSubscription: Subscription;

  constructor(router: Router, coursesService: CoursesService) {
    this.router = router;
    this.courses = [];
    this.coursesService = coursesService;
  }

  private getCourseList(): Observable<ICourseDetails[]> {
    return this.coursesService.getCourseList(this.pageNumber * this.coursesPerPage, this.coursesPerPage, this.pattern);
  }

  ngOnInit() {
    this._getCourseListSubscriptionOnInit =
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

  onNextPageClick() {
    this.pageNumber++;
    this._getCourseListSubscriptionOnInit =
      this.getCourseList().subscribe((courses: ICourseDetails[]) => {
        this.courses = courses;
      });
  }

  onPrevPageClick() {
    this.pageNumber--;
    this._getCourseListSubscriptionOnInit =
      this.getCourseList().subscribe((courses: ICourseDetails[]) => {
        this.courses = courses;
      });
  }

  deleteCourse(course: ICourseDetails) {
    this._deleteCourseSubscription =
      this.coursesService.deleteCouse(course.id, this.pageNumber * this.coursesPerPage, this.coursesPerPage)
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
