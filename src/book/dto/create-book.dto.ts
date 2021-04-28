import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Please provide a title for the book' })
  @IsString({ message: '' })
  title: string;
  subtitle: string;
  author: string;
  published: Date;
  publisher: string;
  pages: number;
  description: string;
  website: string;
}
