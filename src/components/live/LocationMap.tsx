
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Placeholder for a map component - in a real app, you would use a library like Leaflet or Google Maps
const LocationMap: React.FC<{ zoneRadius: string }> = ({ zoneRadius }) => {
  // This is just a placeholder - in a real implementation, this would render an actual map
  return (
    <Card className="w-full h-80 bg-gray-100">
      <CardContent className="p-0 h-full flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-muted-foreground">Map showing users within {zoneRadius}</p>
          <p className="text-sm text-muted-foreground">
            (Actual map implementation would go here using Google Maps or similar)
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
