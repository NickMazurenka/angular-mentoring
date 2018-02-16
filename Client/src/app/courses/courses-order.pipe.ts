import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from './models/course.model';

@Pipe({
  name: 'coursesOrder'
})
export class CoursesOrderPipe implements PipeTransform {

  transform(courses: ICourse[]): any {
    return courses.sort((a: ICourse, b: ICourse) => b.date.getTime() - a.date.getTime());
  }

}
