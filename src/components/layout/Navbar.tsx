
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { 
  Bell, 
  MessageSquare, 
  User, 
  Settings, 
  LogOut, 
  Menu 
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

  // This would be replaced with actual auth logic
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <div className="md:hidden">
          <SidebarTrigger>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
            </Button>
          </SidebarTrigger>
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
          <ModeSwitcher />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeSwitcher />
          
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>US</AvatarFallback>
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
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
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
