import { IAuthorDto } from './author-dto.model';

export interface ICourseDto {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: string;
  length: number;
  authors: IAuthorDto[];
}
