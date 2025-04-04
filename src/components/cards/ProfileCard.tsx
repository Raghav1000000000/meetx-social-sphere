
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
import { ChatBubbleIcon, ShareIcon } from '@radix-ui/react-icons';
import { MapPin } from 'lucide-react';

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

  return (
    <Card className="w-full max-w-md animate-fade-in overflow-hidden">
      <CardHeader className="relative pb-2">
        {isLive && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-600">LIVE</span>
          </div>
        )}
        <div className="flex items-start gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-meetx-purple text-white">
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
                <Badge key={idx} variant="outline" className="bg-meetx-light text-meetx-purple-dark border-none">
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
                    <Badge key={idx} variant="outline" className="bg-meetx-light text-meetx-purple-dark border-none">
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
          className="flex-1"
          size="sm"
          onClick={onViewProfile}
        >
          View Profile
        </Button>
        <Button
          className="flex-1 bg-meetx-purple hover:bg-meetx-purple-dark"
          size="sm"
          onClick={onConnect}
        >
          <ChatBubbleIcon className="mr-2 h-4 w-4" />
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
