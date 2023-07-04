import { Schema, model } from 'mongoose';
import { IMovie } from '../interfaces';

const MovieSchema = new Schema(
  {
    title: { 
      type: String,
      required: true,
      unique: true,
    },
    description: { type: String },
    image: { type: String },
    imageTitle: { type: String },
    imageSmall: { type: String },
    video: { type: String },  
    trailer: { type: String },  
    limit: { type: Number },
    year: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    isSeries: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Movie = model<IMovie>('Movie', MovieSchema);