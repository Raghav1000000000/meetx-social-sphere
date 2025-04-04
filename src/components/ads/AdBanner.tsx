
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock } from 'lucide-react';

interface AdBannerProps {
  title: string;
  description: string;
  business: string;
  location: string;
  expiresIn: string;
  type: 'professional' | 'social' | 'both';
  image?: string;
  onView: () => void;
}

/**
 * AdBanner - Component for displaying location-based advertisements
 * Shows special offers and promotions available near the user
 */
export const AdBanner: React.FC<AdBannerProps> = ({
  title,
  description,
  business,
  location,
  expiresIn,
  type,
  image,
  onView
}) => {
  // Determine styling based on ad type
  const getTypeStyles = () => {
    switch (type) {
      case 'professional':
        return {
          gradient: 'from-meetx-blue to-meetx-blue-light',
          border: 'border-meetx-blue',
          button: 'bg-meetx-blue hover:bg-meetx-blue-dark'
        };
      case 'social':
        return {
          gradient: 'from-meetx-purple to-meetx-purple-light',
          border: 'border-meetx-purple',
          button: 'bg-meetx-purple hover:bg-meetx-purple-dark'
        };
      default:
        return {
          gradient: 'from-meetx-orange to-meetx-yellow',
          border: 'border-meetx-orange',
          button: 'bg-meetx-orange hover:bg-meetx-orange-dark'
        };
    }
  };

  const styles = getTypeStyles();
  
  return (
    <Card className={`overflow-hidden border-2 ${styles.border} hover-lift animation-delay-${Math.floor(Math.random() * 5)} animate-fade-in`}>
      <div className={`h-2 bg-gradient-to-r ${styles.gradient} w-full`} />
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base font-bold">{title}</CardTitle>
            <CardDescription className="text-xs">{business}</CardDescription>
          </div>
          {image && (
            <div className="h-10 w-10 rounded bg-gray-100 overflow-hidden">
              <img src={image} alt={business} className="object-cover h-full w-full" />
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-sm">{description}</p>
        
        <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>Expires in {expiresIn}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          onClick={onView} 
          size="sm" 
          className={`w-full ${styles.button}`}
        >
          View Offer
        </Button>
      </CardFooter>
    </Card>
  );
};
