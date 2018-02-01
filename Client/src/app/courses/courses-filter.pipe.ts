import { Pipe, PipeTransform } from '@angular/core';
import { ICourseDetails } from '../shared-models/course-details.model';

@Pipe({
  name: 'coursesFilter'
})
export class CoursesFilterPipe implements PipeTransform {

  transform(courses: ICourseDetails[], descriptionFilter?: string): ICourseDetails[] {
    descriptionFilter = descriptionFilter.toLowerCase();
    return courses.filter((course: ICourseDetails) => course.description.toLowerCase().indexOf(descriptionFilter) !== -1);
  }

}
