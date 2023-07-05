import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models';
import { Status } from '../../constants';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: Status.FAIL,
        message: 'Incorrect email or password',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: Status.FAIL,
        message: 'Incorrect email or password',
      });
    }

    return res.status(200).json({ status: Status.SUCCESS, user });
  } catch (err) {
    next(err);
  }
}