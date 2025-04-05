
import React from 'react';
import ProfileCard from '@/components/cards/ProfileCard';

// Professional user type
export interface ProfessionalUser {
  type: 'professional';
  name: string;
  title?: string;
  company?: string;
  skills?: string[];
  location?: string;
  distance?: string;
  experience?: {
    role: string;
    company: string;
    duration: string;
    description?: string;
  }[];
  socialHandles?: {
    platform: string;
    url: string;
    username: string;
  }[];
  reviews?: {
    reviewer: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

// Social user type
export interface SocialUser {
  type: 'social';
  name: string;
  bio?: string;
  interests?: string[];
  location?: string;
  distance?: string;
  socialHandles?: {
    platform: string;
    url: string;
    username: string;
  }[];
  reviews?: {
    reviewer: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

// Combined user type
export type User = ProfessionalUser | SocialUser;

interface UserListProps {
  users: User[];
  onConnect: (name: string) => void;
  onViewProfile: () => void;
}

export const UserList: React.FC<UserListProps> = ({ 
  users, 
  onConnect, 
  onViewProfile 
}) => {
  if (users.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No users found in this category.
      </div>
    );
  }
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user, index) => (
        <div className="staggered-item" key={index}>
          <ProfileCard
            {...user}
            onViewProfile={onViewProfile}
            onConnect={() => onConnect(user.name)}
          />
        </div>
      ))}
    </div>
  );
};
