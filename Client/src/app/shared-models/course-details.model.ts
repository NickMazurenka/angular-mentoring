export interface ICourseDetails {
  id: number;
  name: string;
  description: string;
  date: Date;
  duration: number;
  starred?: boolean;
}
