import { ICourse } from './course.model';

export interface ICourseList {
  courses: ICourse[];
  total: number;
}
