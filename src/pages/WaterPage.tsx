
import React from "react";
import Layout from "@/components/layout/Layout";
import WaterTracker from "@/components/trackers/WaterTracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", glasses: 6 },
  { name: "Tue", glasses: 7 },
  { name: "Wed", glasses: 5 },
  { name: "Thu", glasses: 8 },
  { name: "Fri", glasses: 4 },
  { name: "Sat", glasses: 6 },
  { name: "Sun", glasses: 7 },
];

const WaterPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Water Tracker</h2>
          <p className="text-muted-foreground mt-1">Monitor your daily water intake</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <WaterTracker />
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Water Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mr-2">✓</span>
                    <span>Helps maintain body temperature</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mr-2">✓</span>
                    <span>Lubricates and cushions joints</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mr-2">✓</span>
                    <span>Protects your spinal cord and tissues</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mr-2">✓</span>
                    <span>Helps excrete waste through perspiration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Water Intake History</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="week">
                  <TabsList className="mb-4">
                    <TabsTrigger value="week">This Week</TabsTrigger>
                    <TabsTrigger value="month">This Month</TabsTrigger>
                  </TabsList>
                  <TabsContent value="week">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="glasses" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <div>Average: 6.1 glasses</div>
                      <div>Goal: 8 glasses</div>
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
                <CardTitle>Water Intake Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-md">
                    <h4 className="font-medium">Start your morning with water</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Drink a glass of water first thing in the morning to kickstart your metabolism.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-md">
                    <h4 className="font-medium">Set reminders</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Use your phone to set hourly reminders to drink water throughout the day.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-md">
                    <h4 className="font-medium">Infuse your water</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Add cucumber, lemon, or berries to your water to make it more appealing.
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

export default WaterPage;
