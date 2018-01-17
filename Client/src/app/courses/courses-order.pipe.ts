import { Pipe, PipeTransform } from '@angular/core';
import { ICourseDetails } from './course-details/course-details.model';

@Pipe({
  name: 'coursesOrder'
})
export class CoursesOrderPipe implements PipeTransform {

  transform(courses: ICourseDetails[]): any {
    return courses.sort((a: ICourseDetails, b: ICourseDetails) => b.date.getTime() - a.date.getTime());
  }

}
