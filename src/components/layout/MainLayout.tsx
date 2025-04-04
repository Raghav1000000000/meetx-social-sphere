
import React from 'react';
import { Sidebar, SidebarContent, SidebarProvider } from '@/components/ui/sidebar';
import Navbar from './Navbar';
import SidebarNav from './SidebarNav';
import { Toaster } from '@/components/ui/sonner';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * MainLayout - The main layout component for the MeetX application
 * Wraps all pages with the sidebar, navbar and necessary providers
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar>
          <SidebarContent>
            <SidebarNav />
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
        <Toaster />
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
