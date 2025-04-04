
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProfileCard from '@/components/cards/ProfileCard';
import LocationMap from '@/components/live/LocationMap';
import GoLiveButton from '@/components/live/GoLiveButton';
import MainLayout from '@/components/layout/MainLayout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from 'sonner';

/**
 * LivePage - Page for going live and finding nearby users
 * Shows a map and list of live users in the selected zone
 */
const LivePage: React.FC = () => {
  const [zoneRadius, setZoneRadius] = useState<string>("1km");
  
  // Mock data for live users
  const liveUsers = [
    {
      type: 'professional' as const,
      name: 'Alice Johnson',
      title: 'UX Designer',
      company: 'Design Studio',
      skills: ['UI/UX', 'Figma', 'User Research'],
      location: 'Coffee Shop',
      isLive: true,
      distance: '400m',
    },
    {
      type: 'social' as const,
      name: 'Mike Smith',
      bio: 'Traveling digital nomad working from cafés around the world.',
      interests: ['Travel', 'Photography', 'Coffee'],
      location: 'Coworking Space',
      isLive: true,
      distance: '800m',
    },
    {
      type: 'professional' as const,
      name: 'Sarah Lee',
      title: 'Marketing Manager',
      company: 'Growth Co',
      skills: ['Digital Marketing', 'Analytics', 'Content Strategy'],
      location: 'Library',
      isLive: true,
      distance: '1.2km',
    },
  ];
  
  const handleConnect = (userName: string) => {
    toast.success(`Connection request sent to ${userName}`, {
      description: "They'll be notified of your request.",
    });
  };
  
  return (
    <MainLayout>
      <div className="container max-w-5xl mx-auto py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Live Now</h1>
            <p className="text-muted-foreground">
              Discover and connect with people nearby
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Radius:</span>
              <Select value={zoneRadius} onValueChange={setZoneRadius}>
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="1km" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500m">500m</SelectItem>
                  <SelectItem value="1km">1km</SelectItem>
                  <SelectItem value="5km">5km</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <GoLiveButton />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LocationMap zoneRadius={zoneRadius} />
          </div>
          
          <div>
            <h2 className="font-medium text-lg mb-4">
              {liveUsers.length} People Live Nearby
            </h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {liveUsers.map((user, index) => (
                <ProfileCard
                  key={index}
                  {...user}
                  onViewProfile={() => {}}
                  onConnect={() => handleConnect(user.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LivePage;
