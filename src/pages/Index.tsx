
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import GoLiveButton from '@/components/live/GoLiveButton';
import MainLayout from '@/components/layout/MainLayout';
import { useTheme } from '@/contexts/ThemeContext';
import ModeSwitcher from '@/components/theme/ModeSwitcher';
import { Briefcase, Users, MapPin, Zap, Share2 } from 'lucide-react';

/**
 * Index - Home page of the MeetX application
 * Shows overview features and quick actions
 */
const Index: React.FC = () => {
  const { mode } = useTheme();
  
  // Define mode-specific content
  const heroText = mode === 'professional' 
    ? "Connect with Professionals Around You" 
    : "Meet Interesting People Nearby";
    
  const heroSubtext = mode === 'professional'
    ? "MeetX helps you discover and connect with professionals for networking, mentorship, and collaboration."
    : "MeetX helps you discover and connect with like-minded people for friendship, activities, and social events.";
  
  // Define features based on mode
  const features = mode === 'professional' 
    ? [
        {
          title: "Professional Networking",
          description: "Connect with professionals in your field",
          content: "Create your professional card with your skills, experience, and goals to find valuable connections in your industry.",
          action: "Create Professional Card",
          link: "/profile",
          icon: <Briefcase className="h-12 w-12 mb-4 text-mode-primary" />
        },
        {
          title: "Business Opportunities",
          description: "Discover collaboration and job opportunities",
          content: "Find potential clients, partners, or employers who are looking for your exact skills and expertise.",
          action: "Explore Opportunities",
          link: "/discover",
          icon: <Zap className="h-12 w-12 mb-4 text-mode-secondary" />
        },
        {
          title: "Location-Based",
          description: "Find professionals in your vicinity",
          content: "Set your visibility radius to discover and connect with professionals in conferences, coworking spaces, and business events.",
          action: "Explore Live Users",
          link: "/live",
          icon: <MapPin className="h-12 w-12 mb-4 text-mode-primary" />
        }
      ]
    : [
        {
          title: "Social Connections",
          description: "Meet like-minded people for friendship",
          content: "Share your interests, hobbies, and personality to connect with people who share your passions and values.",
          action: "Create Social Card",
          link: "/profile",
          icon: <Users className="h-12 w-12 mb-4 text-mode-primary" />
        },
        {
          title: "Local Activities",
          description: "Find people for shared experiences",
          content: "Discover others who enjoy the same activities, from hiking and sports to art and music events.",
          action: "Find Activities",
          link: "/discover",
          icon: <Share2 className="h-12 w-12 mb-4 text-mode-secondary" />
        },
        {
          title: "Location-Based",
          description: "Meet people in your immediate vicinity",
          content: "Set your visibility radius to discover and connect with people in cafés, parks, festivals, and other public places.",
          action: "Explore Live Users",
          link: "/live",
          icon: <MapPin className="h-12 w-12 mb-4 text-mode-primary" />
        }
      ];

  return (
    <MainLayout>
      <section className={`w-full py-12 md:py-24 lg:py-32 space-y-12 ${mode === 'professional' ? 'professional-theme' : 'social-theme'}`}>
        {/* Hero Section */}
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-mode-primary to-mode-secondary bg-clip-text text-transparent">
              {heroText}
            </h1>
            <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-400 md:text-xl">
              {heroSubtext}
            </p>
            
            {/* Mode Switcher */}
            <div className="mb-8 mt-4">
              <div className="text-sm font-medium text-center text-gray-500 mb-3">Choose your experience</div>
              <ModeSwitcher variant="hero" />
            </div>
            
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
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover-lift" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-mode-primary/10 border-mode-primary/30" 
                    asChild
                  >
                    <Link to={feature.link}>{feature.action}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
