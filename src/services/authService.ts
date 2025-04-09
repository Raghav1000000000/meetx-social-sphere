
import { connectToDatabase } from '@/lib/db';
import { hashPassword, comparePassword } from '@/lib/crypto';

export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  type: 'professional' | 'social';
  bio?: string;
  title?: string;
  company?: string;
  skills?: string[];
  interests?: string[];
  location?: string;
  distance?: string;
  profileImage?: string;
  socialHandles?: {
    platform: string;
    url: string;
    username: string;
  }[];
}

export const authService = {
  async registerUser(userData: Omit<User, '_id'>): Promise<User | null> {
    try {
      const db = await connectToDatabase();
      const usersCollection = db.collection('users');
      
      // Check if user already exists
      const existingUser = await usersCollection.findOne({ email: userData.email });
      if (existingUser) {
        throw new Error('User already exists with this email');
      }
      
      // Hash password
      const hashedPassword = await hashPassword(userData.password || '');
      
      // Create user object without exposing password
      const userToInsert = {
        ...userData,
        password: hashedPassword,
        createdAt: new Date(),
      };
      
      // Insert user
      const result = await usersCollection.insertOne(userToInsert);
      
      if (result.acknowledged) {
        // Return user without password
        const { password, ...userWithoutPassword } = userToInsert;
        return userWithoutPassword as User;
      }
      
      return null;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
  
  async loginUser(email: string, password: string): Promise<User | null> {
    try {
      const db = await connectToDatabase();
      const usersCollection = db.collection('users');
      
      // Find user
      const user = await usersCollection.findOne({ email });
      if (!user) {
        return null;
      }
      
      // Check password
      const isPasswordValid = await comparePassword(password, user.password);
      if (!isPasswordValid) {
        return null;
      }
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword as User;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  
  async getUserById(userId: string): Promise<User | null> {
    try {
      const db = await connectToDatabase();
      const usersCollection = db.collection('users');
      
      const user = await usersCollection.findOne({ _id: userId });
      if (!user) {
        return null;
      }
      
      // Return user without password
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as User;
    } catch (error) {
      console.error('Get user error:', error);
      throw error;
    }
  }
};
