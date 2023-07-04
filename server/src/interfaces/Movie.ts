import { Document } from 'mongoose';

export interface IMovie extends Document {
  title: string;
  description: string;
  image: string;
  imageTitle: string;
  imageSmall: string;
  video: string;
  trailer: string;
  limit: number;
  year: number;
  genre: string;
  isSeries: boolean;
}