import { Schema, model } from 'mongoose';
import { IList } from '../interfaces';

const ListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    type: { 
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    content: { 
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const List = model<IList>('List', ListSchema);