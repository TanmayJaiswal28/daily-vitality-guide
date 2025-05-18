
import React from "react";
import Layout from "@/components/layout/Layout";
import MoodTracker from "@/components/trackers/MoodTracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", mood: 4 },
  { name: "Tue", mood: 5 },
  { name: "Wed", mood: 3 },
  { name: "Thu", mood: 4 },
  { name: "Fri", mood: 4 },
  { name: "Sat", mood: 5 },
  { name: "Sun", mood: 4 },
];

const MoodPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Mood Tracker</h2>
          <p className="text-muted-foreground mt-1">Track how you're feeling over time</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <MoodTracker />
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Mood Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4 bg-wellness-lightPurple rounded-xl">
                  <h3 className="font-semibold text-lg">Your Weekly Mood:</h3>
                  <p className="text-3xl font-bold text-primary mt-2">Generally Positive</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    You've been feeling good most days. Great work maintaining a positive outlook!
                  </p>
                </div>
                <div className="mt-6 space-y-4">
                  <h4 className="font-medium">Common Mood Factors:</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ Regular exercise</li>
                    <li>✓ Adequate sleep</li>
                    <li>✓ Social interactions</li>
                    <li>✗ Work stress</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Mood History</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="week">
                  <TabsList className="mb-4">
                    <TabsTrigger value="week">This Week</TabsTrigger>
                    <TabsTrigger value="month">This Month</TabsTrigger>
                  </TabsList>
                  <TabsContent value="week">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis domain={[1, 5]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="mood" stroke="#9b87f5" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="mt-4 text-center">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1 = Very Sad</span>
                        <span>3 = Neutral</span>
                        <span>5 = Very Happy</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="month">
                    <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                      Monthly data coming soon
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Mood Improvement Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-wellness-lightPurple rounded-md">
                    <h4 className="font-medium">Practice Gratitude</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Take a few minutes each day to write down things you're grateful for.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-wellness-green rounded-md">
                    <h4 className="font-medium">Physical Activity</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Even just a 10-minute walk can boost your mood and reduce stress.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-wellness-blue rounded-md">
                    <h4 className="font-medium">Mindfulness Meditation</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Try a short meditation session to calm your mind and improve your mood.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-wellness-yellow rounded-md">
                    <h4 className="font-medium">Connect with Others</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Social connections help improve mental wellbeing. Reach out to a friend.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MoodPage;
