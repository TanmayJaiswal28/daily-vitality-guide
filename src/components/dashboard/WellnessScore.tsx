
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WellnessScore = () => {
  const score = 78; // Example score out of 100
  const circumference = 2 * Math.PI * 45; // 45 is the radius
  const dashOffset = circumference - (score / 100) * circumference;

  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-1 h-[350px] animate-fadeIn">
      <CardHeader>
        <CardTitle>Wellness Score</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-[calc(100%-80px)]">
        <div className="relative">
          <svg width="150" height="150" className="transform -rotate-90">
            <circle
              cx="75"
              cy="75"
              r="45"
              stroke="#E5DEFF"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="75"
              cy="75"
              r="45"
              stroke="#9b87f5"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-4xl font-bold">{score}</span>
            <span className="text-sm text-muted-foreground">/ 100</span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="font-medium text-green-600">Good</p>
          <p className="text-sm text-muted-foreground mt-1">Based on your activity this week</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessScore;
