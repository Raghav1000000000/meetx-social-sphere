
import React, { useState } from 'react';
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
import { AdBanner } from '@/components/ads/AdBanner';
import { toast } from 'sonner';
import { MapPin, Clock } from 'lucide-react';

/**
 * DiscoverPage - Page for discovering users
 * Shows filters and lists of professional and social profiles
 * Includes location-based advertising section
 */
const DiscoverPage: React.FC = () => {
  const [mode, setMode] = useState<'professional' | 'social'>('professional');
  
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
  
  // Mock data for location-based ads
  const localAds = [
    {
      id: 'ad1',
      title: 'Limited Time: 20% Off Coffee',
      description: 'Visit Brew Heaven within 500m and show this ad for a discount.',
      business: 'Brew Heaven Café',
      location: '300m away',
      expiresIn: '2 hours',
      type: 'both' as const, // Fixed: using 'as const' to ensure proper typing
      image: '/placeholder.svg'
    },
    {
      id: 'ad2',
      title: 'Co-working Space Special',
      description: 'Free day pass for professionals in the tech industry.',
      business: 'The Productive Space',
      location: '1.2km away',
      expiresIn: '5 hours',
      type: 'professional' as const, // Fixed: using 'as const' to ensure proper typing
      image: '/placeholder.svg'
    },
    {
      id: 'ad3',
      title: 'Live Music Tonight',
      description: 'Local bands performing with happy hour specials all night!',
      business: 'Rhythm Club',
      location: '800m away',
      expiresIn: '8 hours',
      type: 'social' as const, // Fixed: using 'as const' to ensure proper typing
      image: '/placeholder.svg'
    }
  ];
  
  const getRelevantAds = () => {
    if (mode === 'professional') {
      return localAds.filter(ad => ad.type === 'professional' || ad.type === 'both');
    } else {
      return localAds.filter(ad => ad.type === 'social' || ad.type === 'both');
    }
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
  
  const handleModeChange = (value: string) => {
    setMode(value as 'professional' | 'social');
  };
  
  return (
    <MainLayout>
      <div className="container max-w-5xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2">Discover People</h1>
        <p className="text-muted-foreground mb-6">
          Find professionals and social connections based on your location
        </p>
        
        {/* Location-based Ads Section */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MapPin className="mr-2 h-5 w-5 text-meetx-orange" /> 
            Nearby Opportunities
            <span className="text-sm font-normal text-muted-foreground ml-2">
              (Based on your location)
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {getRelevantAds().map((ad) => (
              <AdBanner 
                key={ad.id}
                title={ad.title}
                description={ad.description}
                business={ad.business}
                location={ad.location}
                expiresIn={ad.expiresIn}
                type={ad.type}
                image={ad.image}
                onView={() => handleViewAd(ad.title)}
              />
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2 justify-end mb-8">
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
        
        <Tabs 
          defaultValue="professional" 
          className="w-full"
          onValueChange={handleModeChange}
          value={mode}
        >
          <TabsList className="mb-8 bg-gradient-to-r from-meetx-purple/50 to-meetx-blue/50">
            <TabsTrigger value="professional" className="data-[state=active]:bg-white">Professional</TabsTrigger>
            <TabsTrigger value="social" className="data-[state=active]:bg-white">Social</TabsTrigger>
          </TabsList>
          
          <TabsContent value="professional" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalUsers.map((user, index) => (
                <div className="staggered-item" key={index}>
                  <ProfileCard
                    {...user}
                    onViewProfile={() => {}}
                    onConnect={() => handleConnect(user.name)}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialUsers.map((user, index) => (
                <div className="staggered-item" key={index}>
                  <ProfileCard
                    {...user}
                    onViewProfile={() => {}}
                    onConnect={() => handleConnect(user.name)}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default DiscoverPage;
