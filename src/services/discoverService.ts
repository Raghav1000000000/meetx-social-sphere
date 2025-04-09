
import { connectToDatabase } from '@/lib/db';
import { User } from '@/services/authService';
import { AdItem } from '@/components/discover/NearbyAds';

export interface DiscoverFilterOptions {
  sortBy?: 'distance' | 'recent' | 'relevant';
  radius?: number;
  skills?: string[];
  interests?: string[];
  userType?: 'professional' | 'social' | 'both';
}

export const discoverService = {
  async getUsers(filters: DiscoverFilterOptions = {}): Promise<User[]> {
    try {
      const db = await connectToDatabase();
      const usersCollection = db.collection('users');
      
      // Build filter query
      const query: any = {};
      
      if (filters.userType && filters.userType !== 'both') {
        query.type = filters.userType;
      }
      
      // Get users
      const users = await usersCollection
        .find(query)
        .project({ password: 0 }) // Exclude password
        .toArray();
      
      // Apply sorting
      const sortedUsers = users.sort((a, b) => {
        if (filters.sortBy === 'distance') {
          // Sort by distance (mockup for now, would use geospatial in real app)
          const distA = parseFloat(a.distance?.replace('km', '') || '0');
          const distB = parseFloat(b.distance?.replace('km', '') || '0');
          return distA - distB;
        } else if (filters.sortBy === 'recent') {
          // Sort by created date
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        } else {
          // Default sort - by relevance (would implement proper algorithm)
          return 0;
        }
      });
      
      return sortedUsers as User[];
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
  
  async getNearbyAds(location: string, userType: 'professional' | 'social'): Promise<AdItem[]> {
    try {
      const db = await connectToDatabase();
      const adsCollection = db.collection('ads');
      
      // Build query
      const query: any = {
        $or: [
          { type: userType },
          { type: 'both' }
        ]
      };
      
      // Get ads
      const ads = await adsCollection
        .find(query)
        .toArray();
      
      return ads as AdItem[];
    } catch (error) {
      console.error('Error fetching ads:', error);
      throw error;
    }
  }
};
