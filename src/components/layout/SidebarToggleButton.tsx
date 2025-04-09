
import React from 'react';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarToggleButtonProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ 
  className = "", 
  variant = "ghost",
  size = "icon"
}) => {
  const { state: sidebarState, toggleSidebar } = useSidebar();
  
  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className} 
      onClick={toggleSidebar}
      aria-label={`${sidebarState === 'expanded' ? 'Collapse' : 'Expand'} sidebar`}
    >
      {sidebarState === 'expanded' ? 
        <ChevronLeft className="h-5 w-5" /> : 
        <ChevronRight className="h-5 w-5" />
      }
    </Button>
  );
};

export default SidebarToggleButton;
