
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Briefcase, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface ModeSwitcherProps {
  variant?: 'button' | 'radio' | 'hero';
  className?: string;
}

const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ variant = 'button', className = '' }) => {
  const { mode, setMode } = useTheme();

  const handleModeChange = (newMode: 'professional' | 'social') => {
    setMode(newMode);
    toast.success(`Switched to ${newMode} mode`, {
      description: newMode === 'professional' 
        ? 'Now focusing on career connections and professional networking.' 
        : 'Now focusing on social connections and personal interests.'
    });
  };

  if (variant === 'radio') {
    return (
      <RadioGroup
        value={mode}
        onValueChange={(value) => handleModeChange(value as 'professional' | 'social')}
        className="flex gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="professional" id="professional" />
          <Label htmlFor="professional" className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            Professional
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="social" id="social" />
          <Label htmlFor="social" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            Social
          </Label>
        </div>
      </RadioGroup>
    );
  }
  
  if (variant === 'hero') {
    return (
      <div className={`flex gap-4 ${className}`}>
        <Button 
          size="lg"
          className={`flex items-center gap-2 transition-all ${mode === 'professional' 
            ? 'bg-mode-primary text-white' 
            : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleModeChange('professional')}
        >
          <Briefcase className="h-5 w-5" />
          Professional
        </Button>
        <Button 
          size="lg"
          className={`flex items-center gap-2 transition-all ${mode === 'social' 
            ? 'bg-mode-primary text-white' 
            : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleModeChange('social')}
        >
          <Users className="h-5 w-5" />
          Social
        </Button>
      </div>
    );
  }
  
  // Default button variant
  return (
    <div className={`inline-flex rounded-md shadow-sm ${className}`}>
      <Button
        variant={mode === 'professional' ? 'default' : 'outline'}
        className={`rounded-r-none ${mode === 'professional' ? 'bg-mode-primary hover:bg-mode-primary/90' : ''}`}
        onClick={() => handleModeChange('professional')}
      >
        <Briefcase className="mr-2 h-4 w-4" />
        Professional
      </Button>
      <Button
        variant={mode === 'social' ? 'default' : 'outline'}
        className={`rounded-l-none ${mode === 'social' ? 'bg-mode-primary hover:bg-mode-primary/90' : ''}`}
        onClick={() => handleModeChange('social')}
      >
        <Users className="mr-2 h-4 w-4" />
        Social
      </Button>
    </div>
  );
};

export default ModeSwitcher;
