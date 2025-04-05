
import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User as UserIcon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ProfileCardContentProps {
  type: 'professional' | 'social';
  skills?: string[];
  interests?: string[];
  bio?: string;
  reviews?: {
    reviewer: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

/**
 * ProfileCardContent - Content component for profile cards
 */
const ProfileCardContent: React.FC<ProfileCardContentProps> = ({
  type,
  skills = [],
  interests = [],
  bio,
  reviews = [],
}) => {
  const { mode } = useTheme();
  
  // Determine badge color based on user's selected mode
  const badgeColorClass = type === 'professional'
    ? 'bg-mode-primary/20 text-mode-primary border-none badge-animated'
    : 'bg-mode-primary/20 text-mode-primary border-none badge-animated';

  return (
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
  );
};

export default ProfileCardContent;
