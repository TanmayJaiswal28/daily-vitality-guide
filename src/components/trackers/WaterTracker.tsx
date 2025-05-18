
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Plus, Minus } from "lucide-react";
import { toast } from "sonner";

const WaterTracker = () => {
  const [glasses, setGlasses] = useState(4);
  const goal = 8;
  const percentage = Math.min((glasses / goal) * 100, 100);

  const addGlass = () => {
    if (glasses < goal) {
      setGlasses(glasses + 1);
      toast.success("Water intake added!");
    } else {
      toast("You've reached your daily goal!", {
        description: "Great job staying hydrated!",
      });
    }
  };

  const removeGlass = () => {
    if (glasses > 0) {
      setGlasses(glasses - 1);
    }
  };

  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Water Tracker</span>
          <Droplets className="h-5 w-5 text-blue-500" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center mt-4 mb-8">
          <div className="relative w-36 h-36">
            <div 
              className="absolute bottom-0 w-full bg-blue-500/20 rounded-full overflow-hidden transition-all duration-1000"
              style={{ 
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div 
                className="absolute bottom-0 w-full bg-blue-500 rounded-b-full transition-all duration-1000"
                style={{ height: `${percentage}%` }}
              >
                <div className="absolute top-0 left-0 right-0 h-4 bg-blue-400 rounded-full opacity-30 animate-wave"></div>
              </div>
              <p className="text-white font-bold text-xl z-10">{glasses}/{goal}</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            {glasses < goal 
              ? `${goal - glasses} more glasses to reach your daily goal`
              : "You've reached your daily goal!"
            }
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={removeGlass}
              disabled={glasses <= 0}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Button 
              className="rounded-full px-6" 
              onClick={addGlass}
            >
              <Plus className="h-4 w-4 mr-2" /> Add Glass
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WaterTracker;
