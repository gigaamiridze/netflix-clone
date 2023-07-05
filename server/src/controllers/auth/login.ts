import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../models';
import { Status } from '../../constants';
import { SECRET_KEY } from '../../config';

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

    let token: string | undefined = undefined;
    if (SECRET_KEY) {
      token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        SECRET_KEY,
        { expiresIn: '5d' },
      );
    }

    return res.status(200).json({
      status: Status.SUCCESS,
      user,
      token,
    });
  } catch (err) {
    next(err);
  }
}