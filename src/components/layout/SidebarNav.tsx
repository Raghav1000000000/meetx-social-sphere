
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Home,
  Users,
  MapPin,
  MessageSquare,
  User,
  Settings,
} from 'lucide-react';

/**
 * SidebarNav - Navigation menu for the sidebar
 * Contains links to various sections of the application
 */
const SidebarNav: React.FC = () => {
  return (
    <>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-meetx-purple">
          MeetX
        </h2>
      </div>
      
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                    `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-accent" : "hover:bg-accent/50"
                    }`
                  }
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink
                  to="/discover"
                  className={({ isActive }) => 
                    `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-accent" : "hover:bg-accent/50"
                    }`
                  }
                >
                  <Users className="h-5 w-5" />
                  <span>Discover</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink
                  to="/live"
                  className={({ isActive }) => 
                    `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-accent" : "hover:bg-accent/50"
                    }`
                  }
                >
                  <MapPin className="h-5 w-5" />
                  <span>Go Live</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink
                  to="/messages"
                  className={({ isActive }) => 
                    `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-accent" : "hover:bg-accent/50"
                    }`
                  }
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Messages</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      
      <SidebarGroup>
        <SidebarGroupLabel>Account</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink
                  to="/profile"
                  className={({ isActive }) => 
                    `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-accent" : "hover:bg-accent/50"
                    }`
                  }
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink
                  to="/settings"
                  className={({ isActive }) => 
                    `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-accent" : "hover:bg-accent/50"
                    }`
                  }
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default SidebarNav;
