
import React from "react";
import Layout from "@/components/layout/Layout";
import BreathingExercise from "@/components/trackers/BreathingExercise";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BreathingPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Breathing Exercises</h2>
          <p className="text-muted-foreground mt-1">Techniques to help you relax and reduce stress</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card className="h-auto">
              <CardHeader>
                <CardTitle>Breathing Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="p-3 bg-secondary rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                    <h4 className="font-medium">4-7-8 Breathing</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds.
                    </p>
                  </li>
                  <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                    <h4 className="font-medium">Box Breathing</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Inhale, hold, exhale, hold - all for equal counts.
                    </p>
                  </li>
                  <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                    <h4 className="font-medium">Diaphragmatic Breathing</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Deep breathing that engages your diaphragm.
                    </p>
                  </li>
                  <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                    <h4 className="font-medium">Alternate Nostril Breathing</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      A yogic breath control practice that brings calm and balance.
                    </p>
                  </li>
                  <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                    <h4 className="font-medium">Resonant Breathing</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Breathing at a rate of 5 breaths per minute.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="4-7-8">
              <TabsList className="mb-4">
                <TabsTrigger value="4-7-8">4-7-8 Technique</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="history">My History</TabsTrigger>
              </TabsList>
              <TabsContent value="4-7-8">
                <BreathingExercise />
              </TabsContent>
              <TabsContent value="benefits">
                <Card>
                  <CardHeader>
                    <CardTitle>Benefits of Breathing Exercises</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-wellness-blue rounded-lg">
                        <h4 className="font-medium">Reduces Stress</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Deep breathing activates the parasympathetic nervous system, reducing stress hormones.
                        </p>
                      </div>
                      <div className="p-4 bg-wellness-green rounded-lg">
                        <h4 className="font-medium">Improves Focus</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Regular breathing exercises can enhance mental clarity and concentration.
                        </p>
                      </div>
                      <div className="p-4 bg-wellness-yellow rounded-lg">
                        <h4 className="font-medium">Better Sleep</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Calming breathing techniques can help you fall asleep faster and improve sleep quality.
                        </p>
                      </div>
                      <div className="p-4 bg-wellness-lightPurple rounded-lg">
                        <h4 className="font-medium">Reduces Blood Pressure</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Studies show that regular deep breathing can help lower blood pressure.
                        </p>
                      </div>
                      <div className="p-4 bg-wellness-pink rounded-lg">
                        <h4 className="font-medium">Improves Digestion</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Deep breathing increases blood flow to digestive organs, improving function.
                        </p>
                      </div>
                      <div className="p-4 bg-wellness-orange rounded-lg">
                        <h4 className="font-medium">Boosts Immunity</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Reduced stress from breathing exercises can help strengthen your immune system.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Breathing History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        You've completed 12 breathing sessions this month.
                      </p>
                      <div className="bg-secondary p-4 rounded-lg">
                        <h4 className="font-medium">Most Recent Sessions:</h4>
                        <ul className="mt-2 space-y-2">
                          <li className="flex justify-between">
                            <span>4-7-8 Breathing</span>
                            <span className="text-muted-foreground">Today, 9:15 AM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Box Breathing</span>
                            <span className="text-muted-foreground">Yesterday, 10:30 PM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>4-7-8 Breathing</span>
                            <span className="text-muted-foreground">May 16, 8:45 AM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Diaphragmatic Breathing</span>
                            <span className="text-muted-foreground">May 15, 7:20 PM</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BreathingPage;
