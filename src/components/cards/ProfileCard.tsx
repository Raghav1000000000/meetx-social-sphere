
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  MessageCircle, 
  Star, 
  ExternalLink, 
  User as UserIcon,
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

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
const ProfileCard: React.FC<ProfileCardProps> = ({
  type,
  name,
  avatar,
  location,
  isLive = false,
  distance,
  title,
  company,
  skills = [],
  interests = [],
  bio,
  experience = [],
  socialHandles = [],
  reviews = [],
  onViewProfile,
  onConnect,
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

  // Determine card color based on user's selected mode
  const cardColorClass = type === 'professional' 
    ? 'border-mode-primary/30 hover:border-mode-primary shadow-md hover:shadow-lg' 
    : 'border-mode-primary/30 hover:border-mode-primary shadow-md hover:shadow-lg';
  
  // Determine badge color based on user's selected mode
  const badgeColorClass = type === 'professional'
    ? 'bg-mode-primary/20 text-mode-primary border-none badge-animated'
    : 'bg-mode-primary/20 text-mode-primary border-none badge-animated';

  // Calculate average rating
  const averageRating = reviews.length 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  return (
    <Card className={`w-full max-w-md animate-fade-in overflow-hidden border-2 transition-all duration-300 ${cardColorClass}`}>
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
      
      <CardContent className="pb-4">
        {type === 'professional' && skills.length > 0 && (
          <div className="mt-3">
            <h4 className="text-sm font-medium mb-2">Skills</h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.slice(0, 3).map((skill, idx) => (
                <Badge 
                  key={idx} 
                  variant="outline" 
                  className={`${badgeColorClass} transform transition-all duration-300 hover:-translate-y-1`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
              {skills.length > 3 && (
                <Badge variant="outline" className="bg-background text-muted-foreground">
                  +{skills.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
        
        {type === 'social' && (
          <>
            {bio && <p className="text-sm mt-2 line-clamp-2">{bio}</p>}
            
            {interests.length > 0 && (
              <div className="mt-3">
                <h4 className="text-sm font-medium mb-2">Interests</h4>
                <div className="flex flex-wrap gap-1.5">
                  {interests.slice(0, 3).map((interest, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className={`${badgeColorClass} transform transition-all duration-300 hover:-translate-y-1`}
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {interest}
                    </Badge>
                  ))}
                  {interests.length > 3 && (
                    <Badge variant="outline" className="bg-background text-muted-foreground">
                      +{interests.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </>
        )}
        
        {reviews.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center gap-2 mb-2">
              <UserIcon className="h-3 w-3 text-mode-primary" />
              <h4 className="text-sm font-medium">Top Review</h4>
            </div>
            <div className="text-xs bg-background/50 p-2 rounded-md border border-border/50 italic">
              "{reviews[0].comment}"
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between gap-2 pt-2">
        <Button
          variant="outline"
          className={`flex-1 transition-colors duration-300 hover:bg-mode-primary/20 border-mode-primary/30`}
          size="sm"
          onClick={onViewProfile}
        >
          View Profile
        </Button>
        <Button
          className={`flex-1 transition-transform duration-300 hover:scale-105 bg-mode-primary hover:bg-mode-primary/90`}
          size="sm"
          onClick={onConnect}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
