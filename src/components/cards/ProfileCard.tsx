
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
  Briefcase, 
  Calendar, 
  User as UserIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Progress } from '@/components/ui/progress';

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
  const [showDetails, setShowDetails] = useState(false);
  
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
    ? 'border-mode-primary/30 hover:border-mode-primary' 
    : 'border-mode-primary/30 hover:border-mode-primary';
  
  // Determine badge color based on user's selected mode
  const badgeColorClass = type === 'professional'
    ? 'bg-mode-primary/20 text-mode-primary border-none'
    : 'bg-mode-primary/20 text-mode-primary border-none';

  // Calculate average rating
  const averageRating = reviews.length 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  return (
    <Card className={`w-full max-w-md animate-fade-in overflow-hidden border-2 transition-all duration-300 hover:shadow-lg ${cardColorClass}`}>
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
          <Avatar className="h-14 w-14 transition-transform hover:scale-105 duration-300">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className={`bg-mode-primary text-white`}>
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-xl">{name}</CardTitle>
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
              {skills.map((skill, idx) => (
                <Badge 
                  key={idx} 
                  variant="outline" 
                  className={`${badgeColorClass} transform transition-all duration-300 hover:-translate-y-1`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {type === 'social' && (
          <>
            {bio && <p className="text-sm mt-2">{bio}</p>}
            
            {interests.length > 0 && (
              <div className="mt-3">
                <h4 className="text-sm font-medium mb-2">Interests</h4>
                <div className="flex flex-wrap gap-1.5">
                  {interests.map((interest, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className={`${badgeColorClass} transform transition-all duration-300 hover:-translate-y-1`}
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
        
        {/* Collapsible additional details section */}
        <Collapsible open={showDetails} onOpenChange={setShowDetails} className="mt-4">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full flex items-center justify-center gap-1 py-1 h-auto text-xs">
              {showDetails ? "Show less" : "Show more details"}
              {showDetails ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="mt-3 space-y-4">
            {/* Experience (Professional) */}
            {type === 'professional' && experience.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Briefcase className="h-3 w-3 mr-1 text-mode-primary" />
                  Experience
                </h4>
                <div className="space-y-3">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="text-sm">
                      <div className="font-medium">{exp.role}</div>
                      <div className="text-muted-foreground text-xs flex items-center">
                        {exp.company} · <Calendar className="h-3 w-3 mx-1" /> {exp.duration}
                      </div>
                      {exp.description && (
                        <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Social Handles */}
            {socialHandles.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <ExternalLink className="h-3 w-3 mr-1 text-mode-primary" />
                  Connect Online
                </h4>
                <div className="flex flex-wrap gap-2">
                  {socialHandles.map((handle, idx) => (
                    <a 
                      key={idx}
                      href={handle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs flex items-center gap-1 bg-background py-1 px-2 rounded-full border hover:bg-mode-primary/10 transition-colors"
                    >
                      {handle.platform} <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            )}
            
            {/* Reviews */}
            {reviews.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Star className="h-3 w-3 mr-1 text-mode-primary" fill="currentColor" />
                  Top Review
                </h4>
                {reviews.slice(0, 1).map((review, idx) => (
                  <div key={idx} className="text-xs p-2 bg-background rounded-md border">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-medium flex items-center">
                        <UserIcon className="h-3 w-3 mr-1" /> {review.reviewer}
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-3 w-3 ${star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{review.comment}</p>
                    <div className="text-gray-500 mt-1 text-[10px]">{review.date}</div>
                  </div>
                ))}
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      
      <CardFooter className="flex justify-between gap-2 pt-2">
        <Button
          variant="outline"
          className={`flex-1 transition-colors duration-300 hover:bg-mode-primary/20`}
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
