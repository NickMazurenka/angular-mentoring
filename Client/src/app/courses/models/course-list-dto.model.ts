import { ICourseDto } from './course-dto.model';

export interface ICourseListDto {
  courses: ICourseDto[];
  total: number;
}
