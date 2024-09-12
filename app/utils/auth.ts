import jwt from 'jsonwebtoken';

const JWT_SECRET = 'dnksdbjfbsbBKJLrbtbiuekfk';

export interface User {
  id: number;
  username: string;
  name: string;
}

export const generateToken = (user: User): string => {
  const token = jwt.sign({ id: user.id, username: user.username, name: user.name }, JWT_SECRET, { expiresIn: '1h' });
  console.log('Generated Token:', token);
  return token;
};



export const getLoggedInUser = (): User | null => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in local storage');
        return null;
      }
      const decoded = jwt.decode(token) as User;
      if (!decoded) {
        console.error('Token decoding failed');
        return null;
      }

      console.log('Decoded Token:', decoded);
      return decoded;
    } catch (error) {
      console.error('Token decoding error:', error);
      return null;
    }
  };