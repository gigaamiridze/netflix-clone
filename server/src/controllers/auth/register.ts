import { Request, Response, NextFunction } from 'express';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('Register');
  } catch (err) {
    next(err);
  }
}