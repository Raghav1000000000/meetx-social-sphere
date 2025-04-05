
import React from 'react';
import { Card } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import ProfileCardHeader from './ProfileCardHeader';
import ProfileCardContent from './ProfileCardContent';
import ProfileCardFooter from './ProfileCardFooter';

interface SocialHandle {
  platform: string;
  url: string;
  username: string;
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  description?: string;
}

interface ReviewItem {
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProfileCardProps {
  type: 'professional' | 'social';
  name: string;
  avatar?: string;
  location?: string;
  isLive?: boolean;
  distance?: string;
  // Professional specific props
  title?: string;
  company?: string;
  skills?: string[];
  experience?: Experience[];
  // Social specific props
  interests?: string[];
  bio?: string;
  // Common additional props
  socialHandles?: SocialHandle[];
  reviews?: ReviewItem[];
  onViewProfile?: () => void;
  onConnect?: () => void;
}

/**
 * ProfileCard - Card component for displaying user profiles
 * Can be rendered as either professional or social card types
 */
const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const { mode } = useTheme();
  const { type, onViewProfile, onConnect } = props;
  
  // Determine card color based on user's selected mode
  const cardColorClass = type === 'professional' 
    ? 'border-mode-primary/30 hover:border-mode-primary shadow-md hover:shadow-lg' 
    : 'border-mode-primary/30 hover:border-mode-primary shadow-md hover:shadow-lg';

  return (
    <Card className={`w-full max-w-md animate-fade-in overflow-hidden border-2 transition-all duration-300 ${cardColorClass}`}>
      <ProfileCardHeader {...props} />
      <ProfileCardContent {...props} />
      <ProfileCardFooter onViewProfile={onViewProfile} onConnect={onConnect} />
    </Card>
  );
};

export default ProfileCard;
