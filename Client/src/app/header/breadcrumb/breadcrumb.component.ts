import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, UrlSegment } from '@angular/router';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

export interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadCrumbComponent {

  breadcrumbs: Observable<BreadCrumb[]>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.breadcrumbs = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).pipe(
      distinctUntilChanged()).pipe(
      map(event => this.buildBreadCrumb(this.activatedRoute.firstChild)));
  }

  buildBreadCrumb(route: ActivatedRoute): BreadCrumb[] {
    const breadcrumbs: BreadCrumb[] = [];
    let path: string = '';
    route.snapshot.url.forEach((url: UrlSegment) => {
      path = path + (path.length === 0 ? '' : '/') + url.path;
      breadcrumbs.push({
        label: url.path,
        url: path
      });
    });

    return breadcrumbs;
  }
}
