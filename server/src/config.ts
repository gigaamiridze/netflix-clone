import dotenv from 'dotenv';

dotenv.config();

export const { PORT, SECRET_KEY, MONGODB_URL } = process.env;