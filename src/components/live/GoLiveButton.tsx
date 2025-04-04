
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { MapPin } from 'lucide-react';

/**
 * GoLiveButton - Button that opens a dialog for users to go live
 * Allows selecting card type and zone radius
 */
const GoLiveButton: React.FC = () => {
  const [cardType, setCardType] = useState<string>('professional');
  const [zoneRadius, setZoneRadius] = useState<string>('1km');
  const [open, setOpen] = useState(false);
  
  const handleGoLive = () => {
    // This would call an API in a real app to update the user's live status
    console.log('Going live with:', { cardType, zoneRadius });
    
    toast.success('You are now live!', {
      description: `You're visible to others within ${zoneRadius}.`,
    });
    
    setOpen(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-auto bg-meetx-purple hover:bg-meetx-purple-dark">
          <MapPin className="mr-2 h-5 w-5" />
          Go Live Now
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Go Live</DialogTitle>
          <DialogDescription>
            Choose which card to display and your visibility radius.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>Select Card Type</Label>
            <RadioGroup defaultValue={cardType} onValueChange={setCardType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="professional" id="professional" />
                <Label htmlFor="professional">Professional</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="social" id="social" />
                <Label htmlFor="social">Social</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="zone">Visibility Radius</Label>
            <Select defaultValue={zoneRadius} onValueChange={setZoneRadius}>
              <SelectTrigger>
                <SelectValue placeholder="Select Radius" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="500m">500m</SelectItem>
                  <SelectItem value="1km">1km</SelectItem>
                  <SelectItem value="5km">5km</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleGoLive}
            className="bg-meetx-purple hover:bg-meetx-purple-dark"
          >
            Go Live
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GoLiveButton;
