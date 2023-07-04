import { Document } from 'mongoose';

export interface IList extends Document {
  title: string;
  type: string;
  genre: string;
  content: [];
}