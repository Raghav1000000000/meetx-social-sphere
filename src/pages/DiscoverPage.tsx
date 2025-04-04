
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileCard from '@/components/cards/ProfileCard';
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
 * DiscoverPage - Page for discovering users
 * Shows filters and lists of professional and social profiles
 */
const DiscoverPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Mock data for users
  const professionalUsers = [
    {
      type: 'professional' as const,
      name: 'Emily Chen',
      title: 'Full Stack Developer',
      company: 'Tech Innovators',
      skills: ['React', 'Node.js', 'MongoDB'],
      location: 'San Francisco, CA',
      distance: '1.5km',
    },
    {
      type: 'professional' as const,
      name: 'James Wilson',
      title: 'Product Manager',
      company: 'Product Vision',
      skills: ['Strategy', 'User Research', 'Agile'],
      location: 'Chicago, IL',
      distance: '800m',
    },
    {
      type: 'professional' as const,
      name: 'Sophia Martinez',
      title: 'UX Designer',
      company: 'Creative Solutions',
      skills: ['UI Design', 'Wireframing', 'Prototyping'],
      location: 'Boston, MA',
      distance: '2.3km',
    },
  ];
  
  const socialUsers = [
    {
      type: 'social' as const,
      name: 'David Kim',
      bio: 'Coffee enthusiast and amateur photographer exploring the city.',
      interests: ['Coffee', 'Photography', 'Urban Exploration'],
      location: 'New York, NY',
      distance: '1.2km',
    },
    {
      type: 'social' as const,
      name: 'Olivia Brown',
      bio: 'Yoga instructor and nutrition coach passionate about wellness.',
      interests: ['Yoga', 'Nutrition', 'Mindfulness'],
      location: 'Austin, TX',
      distance: '3.5km',
    },
    {
      type: 'social' as const,
      name: 'Ethan Taylor',
      bio: 'Music producer and vinyl collector. Always looking for new sounds.',
      interests: ['Music Production', 'Vinyl Records', 'Concerts'],
      location: 'Nashville, TN',
      distance: '900m',
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
        <h1 className="text-3xl font-bold mb-2">Discover People</h1>
        <p className="text-muted-foreground mb-6">
          Find professionals and social connections based on your interests
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search by name, skills, interests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium whitespace-nowrap">Sort By:</span>
            <Select defaultValue="distance">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Distance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="relevant">Relevance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="professional" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
          
          <TabsContent value="professional" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalUsers.map((user, index) => (
                <ProfileCard
                  key={index}
                  {...user}
                  onViewProfile={() => {}}
                  onConnect={() => handleConnect(user.name)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialUsers.map((user, index) => (
                <ProfileCard
                  key={index}
                  {...user}
                  onViewProfile={() => {}}
                  onConnect={() => handleConnect(user.name)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default DiscoverPage;
