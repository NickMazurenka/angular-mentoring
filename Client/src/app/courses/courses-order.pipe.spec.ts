import { CoursesOrderPipe } from './courses-order.pipe';
import { ICourse } from './models/course.model';

describe('CoursesOrderPipe', () => {
  const courses: ICourse[] = [
    {
      id: 0,
      name: 'A name',
      date: new Date('2018-02-17'),
      description: 'A description',
      duration: 1,
      authors: []
    },
    {
      id: 1,
      name: 'B name',
      date: new Date('2018-02-18'),
      description: 'B description',
      duration: 1,
      authors: []
    },
    {
      id: 2,
      name: 'C name',
      date: new Date('2018-02-19'),
      description: 'C description',
      duration: 1,
      authors: []
    }
  ];

  it('should create an instance', () => {
    const pipe = new CoursesOrderPipe();
    expect(pipe).toBeTruthy();
  });

  it('should order courses descending', () => {
    const ordered = new CoursesOrderPipe().transform(courses);
    expect(ordered).toEqual([
      {
        id: 2,
        name: 'C name',
        date: new Date('2018-02-19'),
        description: 'C description',
        duration: 1,
        authors: []
      },
      {
        id: 1,
        name: 'B name',
        date: new Date('2018-02-18'),
        description: 'B description',
        duration: 1,
        authors: []
      },
      {
        id: 0,
        name: 'A name',
        date: new Date('2018-02-17'),
        description: 'A description',
        duration: 1,
        authors: []
      },
    ]);
  });
});
