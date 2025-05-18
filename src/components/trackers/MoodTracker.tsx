
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SmilePlus } from "lucide-react";
import { toast } from "sonner";

const MoodTracker = () => {
  const moods = [
    { emoji: "😀", name: "Happy" },
    { emoji: "😊", name: "Good" },
    { emoji: "😐", name: "Neutral" },
    { emoji: "😔", name: "Sad" },
    { emoji: "😡", name: "Angry" },
  ];

  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");

  const saveMood = () => {
    if (selectedMood !== null) {
      toast.success(`Mood saved: ${moods[selectedMood].name}`);
      setSelectedMood(null);
      setNote("");
    } else {
      toast.error("Please select a mood first");
    }
  };

  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>How are you feeling today?</span>
          <SmilePlus className="h-5 w-5 text-primary" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          {moods.map((mood, index) => (
            <button
              key={index}
              className={`mood-emoji p-3 ${selectedMood === index ? "selected" : ""}`}
              onClick={() => setSelectedMood(index)}
            >
              <span role="img" aria-label={mood.name}>
                {mood.emoji}
              </span>
              <p className="text-xs mt-1">{mood.name}</p>
            </button>
          ))}
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Add a note (optional)</label>
          <textarea
            className="w-full p-2 border border-gray-200 rounded-md h-24"
            placeholder="How are you feeling today? What made you feel this way?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        
        <Button className="w-full" onClick={saveMood}>Save Mood</Button>
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
