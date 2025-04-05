
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainLayout from '@/components/layout/MainLayout';
import { toast } from 'sonner';
import { useTheme } from '@/contexts/ThemeContext';
import { NearbyAds } from '@/components/discover/NearbyAds';
import { UserFilters } from '@/components/discover/UserFilters';
import { UserList } from '@/components/discover/UserList';
import { professionalUsers, socialUsers, localAds } from '@/components/discover/mockData';

/**
 * DiscoverPage - Page for discovering users
 * Shows filters and lists of professional and social profiles
 * Includes location-based advertising section
 */
const DiscoverPage: React.FC = () => {
  const { mode, setMode } = useTheme();
  const [sortBy, setSortBy] = useState('distance');
  
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
    // In a real application, we would sort the users based on the selected value
    toast.info(`Sorting by ${value}`);
  };
  
  return (
    <MainLayout>
      <div className={`container max-w-5xl mx-auto py-8 ${mode === 'professional' ? 'professional-theme' : 'social-theme'}`}>
        <h1 className="text-3xl font-bold mb-2">Discover People</h1>
        <p className="text-muted-foreground mb-6">
          Find {mode === 'professional' ? 'professionals' : 'social connections'} based on your location
        </p>
        
        {/* Location-based Ads Section */}
        <NearbyAds 
          ads={localAds} 
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
          <TabsList className={`mb-8 bg-gradient-to-r from-mode-primary/30 to-mode-secondary/30`}>
            <TabsTrigger value="professional" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Professional</TabsTrigger>
            <TabsTrigger value="social" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">Social</TabsTrigger>
          </TabsList>
          
          <TabsContent value="professional" className="animate-fade-in">
            <UserList 
              users={professionalUsers} 
              onConnect={handleConnect} 
              onViewProfile={() => {}}
            />
          </TabsContent>
          
          <TabsContent value="social" className="animate-fade-in">
            <UserList 
              users={socialUsers} 
              onConnect={handleConnect} 
              onViewProfile={() => {}}
            />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default DiscoverPage;
