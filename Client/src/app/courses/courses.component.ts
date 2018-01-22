import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';
import { CoursesService } from './courses.service';
import { CoursesFilterPipe } from './courses-filter.pipe';
import { Router } from '@angular/router';
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

  private getCourseListPaging(): Observable<ICourseDetails[]> {
    return this.coursesService.getCourseList(this.pageNumber * this.coursesPerPage, this.coursesPerPage);
  }

  private getCourseListSearch(): Observable<ICourseDetails[]> {
    return this.coursesService.getCourseList();
  }

  ngOnInit() {
    this._getCourseListSubscriptionOnInit =
      this.getCourseListPaging().subscribe((courses: ICourseDetails[]) => {
        this.courses = courses;
      });
  }

  search() {
    this._getCourseListSubscriptionSearch = this.getCourseListSearch().subscribe((courses: ICourseDetails[]) => {
      if (this.pattern) {
        this.courses = new CoursesFilterPipe().transform(courses, this.pattern);
      } else {
        this.courses = courses;
      }
    });
  }

  onNextPageClick() {
    this.pageNumber++;
    this._getCourseListSubscriptionOnInit =
      this.getCourseListPaging().subscribe((courses: ICourseDetails[]) => {
        this.courses = courses;
      });
  }

  onPrevPageClick() {
    this.pageNumber--;
    this._getCourseListSubscriptionOnInit =
      this.getCourseListPaging().subscribe((courses: ICourseDetails[]) => {
        this.courses = courses;
      });
  }

  onAddCourseClicked() {
    this.router.navigate(['addCourse']);
  }

  deleteCourse(course: ICourseDetails) {
    this._deleteCourseSubscription =
      this.coursesService.deleteCouse(course).subscribe((courses: ICourseDetails[]) => this.courses = courses);
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
