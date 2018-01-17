import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Renderer } from '@angular/core';

@Directive({
  selector: '[appCoursePlateColor]'
})
export class CoursePlateColorDirective implements OnInit {
  private static daysFresh: number = 14;
  private element: ElementRef;
  private renderer: Renderer;

  // tslint:disable-next-line:no-input-rename
  @Input('appCoursePlateColor') date: Date;

  constructor(el: ElementRef, renderer: Renderer) {
    this.element = el;
    this.renderer = renderer;
  }

  ngOnInit(): void {
    let colorClass: string = 'course-plate';
    const dateLimit: Date = new Date();
    dateLimit.setDate(dateLimit.getDate() - CoursePlateColorDirective.daysFresh);

    if (this.date > new Date()) {
      colorClass = 'course-plate_upcoming';
    } else if (this.date >= dateLimit) {
      colorClass = 'course-plate_fresh';
    }
    this.renderer.setElementClass(this.element.nativeElement, colorClass, true);
  }

}
