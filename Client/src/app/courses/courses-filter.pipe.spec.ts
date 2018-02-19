import { CoursesFilterPipe } from './courses-filter.pipe';
import { ICourse } from './models/course.model';

describe('CoursesFilterPipe', () => {
  const courses: ICourse[] = [
    {
      id: 0,
      name: 'A name',
      date: null,
      description: 'A description',
      duration: 1,
      authors: []
    },
    {
      id: 1,
      name: 'B name',
      date: null,
      description: 'B description',
      duration: 1,
      authors: []
    },
    {
      id: 2,
      name: 'C name',
      date: null,
      description: 'C description',
      duration: 1,
      authors: []
    }
  ];

  it('should create an instance', () => {
    const pipe = new CoursesFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter course by description', () => {
    const filtered: ICourse[] = new CoursesFilterPipe().transform(courses, 'C description');
    expect(filtered).toEqual([
      {
        id: 2,
        name: 'C name',
        date: null,
        description: 'C description',
        duration: 1,
        authors: []
      }
    ]);
  });
});
