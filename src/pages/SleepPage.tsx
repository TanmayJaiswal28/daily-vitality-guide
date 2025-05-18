
import React from "react";
import Layout from "@/components/layout/Layout";
import SleepTracker from "@/components/trackers/SleepTracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", hours: 7.5 },
  { name: "Tue", hours: 6.8 },
  { name: "Wed", hours: 8.0 },
  { name: "Thu", hours: 7.2 },
  { name: "Fri", hours: 6.5 },
  { name: "Sat", hours: 8.5 },
  { name: "Sun", hours: 7.3 },
];

const SleepPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Sleep Tracker</h2>
          <p className="text-muted-foreground mt-1">Monitor your sleep duration and quality</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <SleepTracker />
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Sleep Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Overall Quality</span>
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                        </svg>
                      ))}
                      <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Time to fall asleep</span>
                      <span>15 min</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "20%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Interruptions</span>
                      <span>2</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "40%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Restfulness</span>
                      <span>Good</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "75%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Sleep Duration History</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="week">
                  <TabsList className="mb-4">
                    <TabsTrigger value="week">This Week</TabsTrigger>
                    <TabsTrigger value="month">This Month</TabsTrigger>
                  </TabsList>
                  <TabsContent value="week">
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis domain={[4, 10]} />
                        <Tooltip />
                        <Area type="monotone" dataKey="hours" stroke="#9b87f5" fill="#E5DEFF" />
                      </AreaChart>
                    </ResponsiveContainer>
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <div>Weekly Average: 7.4 hours</div>
                      <div>Recommended: 7-9 hours</div>
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
                <CardTitle>Sleep Improvement Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary rounded-md">
                    <h4 className="font-medium">Keep a Consistent Schedule</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Try to go to bed and wake up at the same time every day, even on weekends.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-secondary rounded-md">
                    <h4 className="font-medium">Create a Relaxing Bedtime Routine</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Wind down with activities like reading, gentle stretching, or meditation.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-secondary rounded-md">
                    <h4 className="font-medium">Optimize Your Sleep Environment</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Keep your bedroom cool, dark, and quiet. Consider using earplugs or a white noise machine if needed.
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

export default SleepPage;
