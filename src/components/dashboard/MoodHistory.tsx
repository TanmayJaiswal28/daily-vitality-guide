
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MoodHistory = () => {
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const moodData = [
    { day: "Mon", mood: "😊" },
    { day: "Tue", mood: "😀" },
    { day: "Wed", mood: "😐" },
    { day: "Thu", mood: "😊" },
    { day: "Fri", mood: "😀" },
    { day: "Sat", mood: "😀" },
    { day: "Sun", mood: "😊" },
  ];

  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-2 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
      <CardHeader>
        <CardTitle>Mood History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          {moodData.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-2xl">{data.mood}</div>
              <div className={`mt-2 text-xs font-medium ${today.getDay() === days.indexOf(data.day) ? 'text-primary' : 'text-muted-foreground'}`}>
                {data.day}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h4 className="font-medium">Weekly Overview</h4>
          <p className="text-sm text-muted-foreground mt-1">
            You've been feeling great most of the week! Keep up the positive vibes.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodHistory;
