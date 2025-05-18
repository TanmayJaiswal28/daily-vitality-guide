
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Moon, Utensils, Dumbbell } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      title: "Drank 250ml of water",
      time: "10 mins ago",
      icon: <Droplets className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 2,
      title: "Completed morning stretch routine",
      time: "2 hours ago",
      icon: <Dumbbell className="h-4 w-4 text-orange-500" />,
    },
    {
      id: 3,
      title: "Logged breakfast - Oatmeal with fruits",
      time: "3 hours ago",
      icon: <Utensils className="h-4 w-4 text-green-500" />,
    },
    {
      id: 4,
      title: "Woke up after 7h 12m of sleep",
      time: "4 hours ago",
      icon: <Moon className="h-4 w-4 text-primary" />,
    },
  ];

  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-1 h-[350px] animate-fadeIn" style={{ animationDelay: "0.1s" }}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className="mr-3 bg-secondary p-2 rounded-full">
                {activity.icon}
              </div>
              <div>
                <p className="font-medium text-sm">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
