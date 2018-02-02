import { IAuthor } from './author.model';

export interface ICourseDetails {
  id: number;
  name: string;
  description: string;
  date: Date;
  duration: number;
  authors: IAuthor[];
  starred?: boolean;
}
