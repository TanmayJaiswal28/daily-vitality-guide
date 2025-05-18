
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Plus } from "lucide-react";
import { toast } from "sonner";

const SleepTracker = () => {
  const [hours, setHours] = useState(7);
  const [minutes, setMinutes] = useState(30);
  
  const handleHoursChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHours(parseInt(e.target.value));
  };
  
  const handleMinutesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMinutes(parseInt(e.target.value));
  };
  
  const logSleep = () => {
    const totalMinutes = (hours * 60) + minutes;
    toast.success(`Sleep logged: ${hours}h ${minutes}m`);
  };
  
  // Generate options for hours and minutes
  const hourOptions = Array.from({ length: 13 }, (_, i) => i);
  const minuteOptions = Array.from({ length: 12 }, (_, i) => i * 5);

  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Sleep Tracker</span>
          <Moon className="h-5 w-5 text-primary" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center mb-8">
          <div className="w-64 h-64 rounded-full border-8 border-secondary flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold">
                {hours}h {minutes}m
              </div>
              <p className="text-sm text-muted-foreground mt-2">Last Night's Sleep</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Hours</label>
              <select 
                className="w-full p-2 border border-gray-200 rounded-md" 
                value={hours}
                onChange={handleHoursChange}
              >
                {hourOptions.map((h) => (
                  <option key={h} value={h}>{h} hours</option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Minutes</label>
              <select 
                className="w-full p-2 border border-gray-200 rounded-md" 
                value={minutes}
                onChange={handleMinutesChange}
              >
                {minuteOptions.map((m) => (
                  <option key={m} value={m}>{m} min</option>
                ))}
              </select>
            </div>
          </div>
          
          <Button onClick={logSleep} className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Log Sleep
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SleepTracker;
