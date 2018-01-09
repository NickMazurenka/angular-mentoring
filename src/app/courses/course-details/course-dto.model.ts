export interface ICourseDto {
    courseId: number;
    courseDuration: number;
    courseDate: Date;
    courseDescription: string;
    courseStarred?: boolean;
}
