
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import GoLiveButton from '@/components/live/GoLiveButton';
import MainLayout from '@/components/layout/MainLayout';

/**
 * Index - Home page of the MeetX application
 * Shows overview features and quick actions
 */
const Index: React.FC = () => {
  return (
    <MainLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 space-y-12">
        {/* Hero Section */}
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-meetx-purple to-meetx-blue bg-clip-text text-transparent">
              Connect with People Around You
            </h1>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl">
              MeetX helps you discover and connect with interesting people nearby for networking, 
              friendship, or collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <GoLiveButton />
              <Button variant="outline" asChild>
                <Link to="/discover">Discover People</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle>Professional Networking</CardTitle>
                <CardDescription>
                  Connect with professionals in your field
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Create your professional card with your skills, experience, and goals to find 
                  valuable connections in your industry.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/profile">Create Professional Card</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle>Social Connections</CardTitle>
                <CardDescription>
                  Meet like-minded people for friendship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Share your interests, hobbies, and personality to connect with people who share 
                  your passions and values.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/profile">Create Social Card</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <CardTitle>Location-Based</CardTitle>
                <CardDescription>
                  Find people in your immediate vicinity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Set your visibility radius to discover and connect with people in cafés, 
                  coworking spaces, airports, and other public places.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/live">Explore Live Users</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
