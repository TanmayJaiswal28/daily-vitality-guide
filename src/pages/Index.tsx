
import React from "react";
import Layout from "@/components/layout/Layout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import WellnessScore from "@/components/dashboard/WellnessScore";
import MoodHistory from "@/components/dashboard/MoodHistory";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h2 className="text-3xl font-bold">{getGreeting()}, Alex</h2>
            <p className="text-muted-foreground mt-1">Here's a summary of your wellness journey today.</p>
          </div>
          <Button className="mt-4 sm:mt-0">
            View Full Report
          </Button>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <WellnessScore />
          <RecentActivity />
          <MoodHistory />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/water">
                  <Button variant="outline" className="w-full justify-between">
                    Log Water <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/mood">
                  <Button variant="outline" className="w-full justify-between">
                    Track Mood <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/sleep">
                  <Button variant="outline" className="w-full justify-between">
                    Log Sleep <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/breathing">
                  <Button variant="outline" className="w-full justify-between">
                    Start Breathing <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Today's Health Tip</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary p-4 rounded-md">
                <h3 className="font-medium text-lg mb-2">Stay Hydrated</h3>
                <p className="text-muted-foreground">
                  Drinking enough water each day is crucial for many reasons: to regulate body temperature, keep joints lubricated, prevent infections, deliver nutrients to cells, and keep organs functioning properly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
