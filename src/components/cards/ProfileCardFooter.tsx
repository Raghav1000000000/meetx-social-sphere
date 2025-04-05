
import React from 'react';
import { CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ProfileCardFooterProps {
  onViewProfile?: () => void;
  onConnect?: () => void;
}

/**
 * ProfileCardFooter - Footer component for profile cards with action buttons
 */
const ProfileCardFooter: React.FC<ProfileCardFooterProps> = ({
  onViewProfile,
  onConnect,
}) => {
  const { mode } = useTheme();

  return (
    <CardFooter className="flex justify-between gap-2 pt-2">
      <Button
        variant="outline"
        className={`flex-1 transition-colors duration-300 hover:bg-mode-primary/20 border-mode-primary/30`}
        size="sm"
        onClick={onViewProfile}
      >
        <ExternalLink className="mr-2 h-4 w-4" />
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
  );
};

export default ProfileCardFooter;
