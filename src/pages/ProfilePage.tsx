
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CardCreationForm from '@/components/cards/CardCreationForm';
import ProfileCard from '@/components/cards/ProfileCard';
import MainLayout from '@/components/layout/MainLayout';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * ProfilePage - User profile management page
 * Allows creating/editing professional and social cards
 */
const ProfilePage: React.FC = () => {
  const { mode } = useTheme();
  
  // Mock data for preview cards with enhanced details
  const professionalCardData = {
    type: 'professional' as const,
    name: 'John Doe',
    title: 'Software Engineer',
    company: 'Tech Company',
    skills: ['React', 'TypeScript', 'Node.js', 'UX Design', 'Project Management'],
    location: 'San Francisco, CA',
    experience: [
      {
        role: 'Senior Software Engineer',
        company: 'Tech Company',
        duration: '2020 - Present',
        description: 'Leading frontend development for core products'
      },
      {
        role: 'Software Engineer',
        company: 'Previous Company',
        duration: '2017 - 2020',
        description: 'Developed web applications using React and Node.js'
      }
    ],
    socialHandles: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/johndoe',
        username: 'johndoe'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/johndoe',
        username: 'johndoe'
      }
    ],
    reviews: [
      {
        reviewer: 'Jane Smith',
        rating: 5,
        comment: 'John is an excellent collaborator with strong technical skills and communication.',
        date: 'April 15, 2023'
      },
      {
        reviewer: 'Mike Johnson',
        rating: 4,
        comment: 'Great to work with, delivers high-quality code on time.',
        date: 'March 30, 2023'
      }
    ]
  };
  
  const socialCardData = {
    type: 'social' as const,
    name: 'John Doe',
    bio: 'Passionate about technology, travel, and photography. Always looking for new adventures!',
    interests: ['Hiking', 'Photography', 'Coffee', 'Travel', 'Music'],
    location: 'San Francisco, CA',
    socialHandles: [
      {
        platform: 'Instagram',
        url: 'https://instagram.com/johndoe',
        username: 'johndoe'
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/johndoe',
        username: 'johndoe'
      }
    ],
    reviews: [
      {
        reviewer: 'Alex Freeman',
        rating: 5,
        comment: 'John is a great hiking buddy! Very knowledgeable about trails and always prepared.',
        date: 'May 2, 2023'
      }
    ]
  };
  
  return (
    <MainLayout>
      <div className={`container max-w-5xl mx-auto py-8 ${mode === 'professional' ? 'professional-theme' : 'social-theme'}`}>
        <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
        <p className="text-muted-foreground mb-8">
          Create and manage your {mode === 'professional' ? 'professional' : 'social'} cards
        </p>
        
        <Tabs defaultValue="cards" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="cards">Create Cards</TabsTrigger>
            <TabsTrigger value="preview">Preview Cards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cards" className="animate-fade-in">
            <CardCreationForm />
          </TabsContent>
          
          <TabsContent value="preview">
            <div className="grid md:grid-cols-2 gap-6">
              {(mode === 'professional' || mode === 'both') && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="font-medium text-lg">Professional Card Preview</h3>
                  <ProfileCard 
                    {...professionalCardData}
                    onViewProfile={() => {}}
                    onConnect={() => {}}
                  />
                </div>
              )}
              
              {(mode === 'social' || mode === 'both') && (
                <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <h3 className="font-medium text-lg">Social Card Preview</h3>
                  <ProfileCard 
                    {...socialCardData}
                    onViewProfile={() => {}}
                    onConnect={() => {}}
                  />
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
