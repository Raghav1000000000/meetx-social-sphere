
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { 
  Bell, 
  MessageSquare, 
  User, 
  Settings, 
  LogOut, 
  Menu,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcher from '@/components/theme/ThemeSwitcher';
import ModeSwitcher from '@/components/theme/ModeSwitcher';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * Navbar - Top navigation bar for the MeetX application
 * Contains the logo, search, notifications, and user menu
 */
const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { mode } = useTheme();
  const { state: sidebarState, toggleSidebar } = useSidebar();

  // This would be replaced with actual auth logic
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2" 
            onClick={toggleSidebar}
            aria-label={`${sidebarState === 'expanded' ? 'Collapse' : 'Expand'} sidebar`}
          >
            {sidebarState === 'expanded' ? 
              <ChevronLeft className="h-5 w-5" /> : 
              <ChevronRight className="h-5 w-5" />
            }
          </Button>
        </div>

        <Link to="/" className="flex items-center gap-2 mr-4">
          <span className="hidden md:inline-flex text-2xl font-bold bg-gradient-to-r from-mode-primary to-mode-secondary bg-clip-text text-transparent">
            MeetX
          </span>
          <span className="md:hidden text-2xl font-bold bg-gradient-to-r from-mode-primary to-mode-secondary bg-clip-text text-transparent">
            MX
          </span>
        </Link>

        <div className="flex items-center ml-4 md:ml-6">
          <ModeSwitcher variant="minimal" showLabels={false} />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeSwitcher />
          
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-9 w-9 ring-2 ring-mode-primary/30">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-gradient-to-r from-mode-primary to-mode-secondary text-white font-bold">
                        US
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">User Name</p>
                      <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex cursor-pointer items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Log In</Link>
              </Button>
              <Button className="bg-mode-primary hover:bg-mode-primary/90" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
