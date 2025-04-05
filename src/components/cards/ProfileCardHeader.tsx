
import React from 'react';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Star } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ProfileCardHeaderProps {
  name: string;
  avatar?: string;
  location?: string;
  distance?: string;
  title?: string;
  company?: string;
  isLive?: boolean;
  reviews?: {
    reviewer: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  type: 'professional' | 'social';
}

/**
 * ProfileCardHeader - Header component for profile cards
 */
const ProfileCardHeader: React.FC<ProfileCardHeaderProps> = ({
  name,
  avatar,
  location,
  distance,
  title,
  company,
  isLive = false,
  reviews = [],
  type,
}) => {
  const { mode } = useTheme();
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };
  
  // Calculate average rating
  const averageRating = reviews.length 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  return (
    <CardHeader className="relative pb-2">
      {isLive && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 animate-pulse-subtle">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-green-600">LIVE</span>
        </div>
      )}
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16 ring-2 ring-mode-primary/30 transition-transform hover:scale-110 duration-300">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className={`bg-gradient-to-br from-mode-primary to-mode-secondary text-white font-bold`}>
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-xl bg-gradient-to-r from-mode-primary to-mode-secondary bg-clip-text text-transparent">{name}</CardTitle>
          {type === 'professional' && (
            <CardDescription className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}{company ? ` at ${company}` : ''}
            </CardDescription>
          )}
          {location && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
              {distance && <span className="font-medium">&middot; {distance} away</span>}
            </div>
          )}
        </div>
      </div>
      
      {reviews.length > 0 && (
        <div className="flex items-center mt-2 text-sm">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`h-4 w-4 ${star <= Math.round(averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="ml-1 text-gray-600 dark:text-gray-400">
            ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
          </span>
        </div>
      )}
    </CardHeader>
  );
};

export default ProfileCardHeader;
