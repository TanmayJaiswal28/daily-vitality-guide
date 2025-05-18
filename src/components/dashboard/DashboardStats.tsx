
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Moon, Utensils, Dumbbell } from "lucide-react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="animate-fadeIn">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Water Intake</CardTitle>
          <Droplets className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4/8 glasses</div>
          <p className="text-xs text-muted-foreground">50% of daily goal</p>
          <div className="mt-2 h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: "50%" }} />
          </div>
        </CardContent>
      </Card>
      <Card className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sleep Duration</CardTitle>
          <Moon className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7h 12m</div>
          <p className="text-xs text-muted-foreground">90% of recommended</p>
          <div className="mt-2 h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{ width: "90%" }} />
          </div>
        </CardContent>
      </Card>
      <Card className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Meals Logged</CardTitle>
          <Utensils className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2/3 meals</div>
          <p className="text-xs text-muted-foreground">Lunch & Breakfast</p>
          <div className="mt-2 h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div className="bg-green-500 h-full rounded-full" style={{ width: "67%" }} />
          </div>
        </CardContent>
      </Card>
      <Card className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Exercise</CardTitle>
          <Dumbbell className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">25 mins</div>
          <p className="text-xs text-muted-foreground">50% of daily goal</p>
          <div className="mt-2 h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div className="bg-orange-500 h-full rounded-full" style={{ width: "50%" }} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
