
import React from 'react';
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
import { MapPin, MessageCircle } from 'lucide-react';

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
  // Social specific props
  interests?: string[];
  bio?: string;
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
  onViewProfile,
  onConnect,
}) => {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  // Determine card color based on type
  const cardColorClass = type === 'professional' 
    ? 'border-meetx-blue-light hover:border-meetx-blue' 
    : 'border-meetx-purple-light hover:border-meetx-purple';
  
  // Determine badge color based on type
  const badgeColorClass = type === 'professional'
    ? 'bg-meetx-blue-light/30 text-meetx-blue border-none'
    : 'bg-meetx-purple-light/30 text-meetx-purple-dark border-none';

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
            <AvatarFallback className={type === 'professional' ? 'bg-meetx-blue text-white' : 'bg-meetx-purple text-white'}>
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-xl">{name}</CardTitle>
            {type === 'professional' && (
              <CardDescription className="text-sm font-medium text-gray-600">
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
      </CardContent>
      
      <CardFooter className="flex justify-between gap-2 pt-2">
        <Button
          variant="outline"
          className={`flex-1 transition-colors duration-300 ${type === 'professional' ? 'hover:bg-meetx-blue-light/50' : 'hover:bg-meetx-purple-light/50'}`}
          size="sm"
          onClick={onViewProfile}
        >
          View Profile
        </Button>
        <Button
          className={`flex-1 transition-transform duration-300 hover:scale-105 ${type === 'professional' ? 'bg-meetx-blue hover:bg-meetx-blue-light' : 'bg-meetx-purple hover:bg-meetx-purple-dark'}`}
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
