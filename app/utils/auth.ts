import jwt from 'jsonwebtoken';

const JWT_SECRET = 'dnksdbjfbsbBKJLrbtbiuekfk';

export interface User {
  id: number;
  username: string;
}

export const generateToken = (user: User): string => {
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  console.log('Generated Token:', token); // Log generated token
  return token;
};

export const verifyToken = (token: string): User | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as User;
    console.log('Decoded Token:', decoded);
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error); // Log the exact error message
    return null;
  }
};
