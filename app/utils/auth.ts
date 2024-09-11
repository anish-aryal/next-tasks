
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'dnksdbjfbsbBKJLrbtbiuekfk';

export interface User {
  id: number;
  username: string;
}

export const generateToken = (user: User): string => {
  return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string): User | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as User;
  } catch (error) {
    return null;
  }
};