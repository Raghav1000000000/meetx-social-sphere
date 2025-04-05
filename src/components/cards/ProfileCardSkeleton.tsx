
import React from 'react';
import { 
  Card, 
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * ProfileCardSkeleton - Loading placeholder for profile cards
 */
const ProfileCardSkeleton: React.FC = () => {
  return (
    <Card className="w-full max-w-md overflow-hidden border-2 transition-all duration-300 border-border/30 animate-pulse">
      <div className="p-6 pb-2">
        <div className="flex items-start gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-1/4" />
          </div>
        </div>
      </div>
      
      <CardContent className="pb-4 space-y-4">
        <div>
          <Skeleton className="h-4 w-1/3 mb-2" />
          <div className="flex flex-wrap gap-1.5">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-6 w-16 rounded-full" />
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between gap-2 pt-2">
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
      </CardFooter>
    </Card>
  );
};

export default ProfileCardSkeleton;
