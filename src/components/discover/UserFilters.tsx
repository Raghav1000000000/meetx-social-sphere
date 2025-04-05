
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UserFiltersProps {
  onSortChange?: (value: string) => void;
  defaultSort?: string;
}

export const UserFilters: React.FC<UserFiltersProps> = ({ 
  onSortChange,
  defaultSort = "distance" 
}) => {
  return (
    <div className="flex items-center gap-2 justify-end mb-8">
      <span className="text-sm font-medium whitespace-nowrap">Sort By:</span>
      <Select 
        defaultValue={defaultSort} 
        onValueChange={onSortChange}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Distance" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="distance">Distance</SelectItem>
          <SelectItem value="recent">Most Recent</SelectItem>
          <SelectItem value="relevant">Relevance</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
