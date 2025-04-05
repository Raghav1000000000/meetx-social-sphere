
import React from 'react';
import { MapPin } from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export type AdItem = {
  id: string;
  title: string;
  description: string;
  business: string;
  location: string;
  expiresIn: string;
  type: 'professional' | 'social' | 'both';
  image: string;
};

interface NearbyAdsProps {
  ads: AdItem[];
  mode: 'professional' | 'social';
  onViewAd: (adTitle: string) => void;
}

export const NearbyAds: React.FC<NearbyAdsProps> = ({ 
  ads, 
  mode, 
  onViewAd 
}) => {
  // Filter ads relevant to the current mode
  const relevantAds = ads.filter(ad => 
    ad.type === mode || ad.type === 'both'
  );
  
  if (relevantAds.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-8 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MapPin className="mr-2 h-5 w-5 text-mode-primary" /> 
        Nearby Opportunities
        <span className="text-sm font-normal text-muted-foreground ml-2">
          (Based on your location)
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relevantAds.map((ad) => (
          <AdBanner 
            key={ad.id}
            title={ad.title}
            description={ad.description}
            business={ad.business}
            location={ad.location}
            expiresIn={ad.expiresIn}
            type={ad.type}
            image={ad.image}
            onView={() => onViewAd(ad.title)}
          />
        ))}
      </div>
    </div>
  );
};
