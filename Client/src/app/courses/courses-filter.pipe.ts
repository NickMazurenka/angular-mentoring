import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from './models/course.model';

@Pipe({
  name: 'coursesFilter'
})
export class CoursesFilterPipe implements PipeTransform {

  transform(courses: ICourse[], descriptionFilter?: string): ICourse[] {
    descriptionFilter = descriptionFilter.toLowerCase();
    return courses.filter((course: ICourse) => course.description.toLowerCase().indexOf(descriptionFilter) !== -1);
  }

}
