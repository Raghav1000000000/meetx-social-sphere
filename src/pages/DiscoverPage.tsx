
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainLayout from '@/components/layout/MainLayout';
import { toast } from 'sonner';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { NearbyAds } from '@/components/discover/NearbyAds';
import { UserFilters } from '@/components/discover/UserFilters';
import { UserList } from '@/components/discover/UserList';
import { discoverService } from '@/services/discoverService';
import { localAds } from '@/components/discover/mockData'; // Fallback data

/**
 * DiscoverPage - Page for discovering users
 * Shows filters and lists of professional and social profiles
 * Includes location-based advertising section
 */
const DiscoverPage: React.FC = () => {
  const { mode, setMode } = useTheme();
  const { user } = useAuth();
  const [sortBy, setSortBy] = useState('distance');
  
  // Fetch users based on mode and sort criteria
  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ['users', mode, sortBy],
    queryFn: () => discoverService.getUsers({ 
      userType: mode, 
      sortBy: sortBy as 'distance' | 'recent' | 'relevant' 
    }),
    placeholderData: [] // Empty array as fallback
  });
  
  // Fetch nearby ads
  const { data: ads = [] } = useQuery({
    queryKey: ['ads', mode],
    queryFn: () => discoverService.getNearbyAds(user?.location || 'Unknown', mode),
    placeholderData: localAds // Use mock data as fallback
  });
  
  // Sync the local state with the global theme mode
  const handleModeChange = (value: string) => {
    setMode(value as 'professional' | 'social');
  };
  
  const handleConnect = (userName: string) => {
    toast.success(`Connection request sent to ${userName}`, {
      description: "They'll be notified of your request.",
    });
  };
  
  const handleViewAd = (adTitle: string) => {
    toast.info(`Viewing offer: ${adTitle}`, {
      description: "This offer is available for a limited time.",
    });
  };
  
  const handleSortChange = (value: string) => {
    setSortBy(value);
    toast.info(`Sorting by ${value}`);
  };
  
  // Filter users based on mode
  const filteredUsers = users.filter(user => user.type === mode);
  
  return (
    <MainLayout>
      <div className={`container max-w-5xl mx-auto py-8 ${mode === 'professional' ? 'professional-theme' : 'social-theme'}`}>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-mode-primary to-mode-secondary bg-clip-text text-transparent">Discover People</h1>
        <p className="text-muted-foreground mb-6">
          Find {mode === 'professional' ? 'professionals' : 'social connections'} based on your location
        </p>
        
        {/* Location-based Ads Section */}
        <NearbyAds 
          ads={ads} 
          mode={mode} 
          onViewAd={handleViewAd} 
        />
        
        {/* Filters Section */}
        <UserFilters 
          defaultSort={sortBy} 
          onSortChange={handleSortChange} 
        />
        
        {/* Tabs for switching between Professional and Social modes */}
        <Tabs 
          defaultValue={mode} 
          className="w-full"
          onValueChange={handleModeChange}
          value={mode}
        >
          <TabsList className="mb-8 border border-mode-primary/30 bg-background">
            <TabsTrigger 
              value="professional" 
              className={`${mode === 'professional' ? 'bg-mode-primary text-white' : 'bg-transparent'} transition-all duration-300`}
            >
              Professional
            </TabsTrigger>
            <TabsTrigger 
              value="social"
              className={`${mode === 'social' ? 'bg-mode-primary text-white' : 'bg-transparent'} transition-all duration-300`}
            >
              Social
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="professional" className="animate-fade-in">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-mode-primary"></div>
                <p className="mt-2 text-muted-foreground">Loading professionals...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">
                Error loading users. Please try again.
              </div>
            ) : (
              <UserList 
                users={filteredUsers} 
                onConnect={handleConnect} 
                onViewProfile={() => {}} 
              />
            )}
          </TabsContent>
          
          <TabsContent value="social" className="animate-fade-in">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-mode-primary"></div>
                <p className="mt-2 text-muted-foreground">Loading social connections...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">
                Error loading users. Please try again.
              </div>
            ) : (
              <UserList 
                users={filteredUsers} 
                onConnect={handleConnect} 
                onViewProfile={() => {}} 
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default DiscoverPage;
