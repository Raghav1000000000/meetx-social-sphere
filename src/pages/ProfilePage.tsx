
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CardCreationForm from '@/components/cards/CardCreationForm';
import ProfileCard from '@/components/cards/ProfileCard';
import MainLayout from '@/components/layout/MainLayout';

/**
 * ProfilePage - User profile management page
 * Allows creating/editing professional and social cards
 */
const ProfilePage: React.FC = () => {
  // Mock data for preview cards
  const professionalCardData = {
    type: 'professional' as const,
    name: 'John Doe',
    title: 'Software Engineer',
    company: 'Tech Company',
    skills: ['React', 'TypeScript', 'Node.js'],
    location: 'San Francisco, CA',
  };
  
  const socialCardData = {
    type: 'social' as const,
    name: 'John Doe',
    bio: 'Passionate about technology, travel, and photography.',
    interests: ['Hiking', 'Photography', 'Cooking'],
    location: 'San Francisco, CA',
  };
  
  return (
    <MainLayout>
      <div className="container max-w-5xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
        <p className="text-muted-foreground mb-8">
          Create and manage your professional and social cards
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
              <div className="space-y-4 animate-fade-in">
                <h3 className="font-medium text-lg">Professional Card Preview</h3>
                <ProfileCard 
                  {...professionalCardData}
                  onViewProfile={() => {}}
                  onConnect={() => {}}
                />
              </div>
              
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <h3 className="font-medium text-lg">Social Card Preview</h3>
                <ProfileCard 
                  {...socialCardData}
                  onViewProfile={() => {}}
                  onConnect={() => {}}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
