import { Request, Response, NextFunction } from 'express';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('Login');
  } catch (err) {
    next(err);
  }
}