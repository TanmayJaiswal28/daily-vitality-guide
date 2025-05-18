
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RefreshCw, Wind } from "lucide-react";

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState("ready");
  const [timeLeft, setTimeLeft] = useState(0);
  
  const breathingCycle = {
    inhale: 4,
    hold: 7,
    exhale: 8,
  };
  
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    
    if (isActive) {
      if (currentPhase === "ready") {
        setCurrentPhase("inhale");
        setTimeLeft(breathingCycle.inhale);
      }
      
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (currentPhase === "inhale") {
              setCurrentPhase("hold");
              return breathingCycle.hold;
            } else if (currentPhase === "hold") {
              setCurrentPhase("exhale");
              return breathingCycle.exhale;
            } else if (currentPhase === "exhale") {
              setCurrentPhase("inhale");
              return breathingCycle.inhale;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, currentPhase]);
  
  const toggleActive = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setCurrentPhase("ready");
    }
  };
  
  const resetExercise = () => {
    setIsActive(false);
    setCurrentPhase("ready");
    setTimeLeft(0);
  };
  
  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>4-7-8 Breathing Exercise</span>
          <Wind className="h-5 w-5 text-blue-400" />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex justify-center my-8">
          <div 
            className={`w-48 h-48 rounded-full flex items-center justify-center text-2xl font-bold border-4 
              ${currentPhase === "inhale" ? "border-blue-400 animate-breathe" : 
                currentPhase === "hold" ? "border-purple-400" : 
                currentPhase === "exhale" ? "border-green-400" : "border-gray-200"}`
            }
          >
            <div className="flex flex-col items-center">
              <span className="text-lg">
                {currentPhase === "ready" ? "Ready" :
                 currentPhase === "inhale" ? "Inhale" :
                 currentPhase === "hold" ? "Hold" : "Exhale"}
              </span>
              {isActive && <span className="text-3xl mt-1">{timeLeft}</span>}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            The 4-7-8 breathing technique can help reduce anxiety and help you fall asleep.
          </p>
          
          <div className="flex justify-center space-x-2">
            <Button 
              onClick={toggleActive}
              className={isActive ? "bg-red-500 hover:bg-red-600" : ""}
            >
              {isActive ? <><Pause className="mr-2 h-4 w-4" /> Pause</> : <><Play className="mr-2 h-4 w-4" /> Start</>}
            </Button>
            <Button variant="outline" onClick={resetExercise}>
              <RefreshCw className="mr-2 h-4 w-4" /> Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BreathingExercise;
