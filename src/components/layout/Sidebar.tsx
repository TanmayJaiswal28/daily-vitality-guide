
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Droplets, 
  Moon, 
  Utensils, 
  Dumbbell, 
  BookOpen, 
  Weight, 
  Wind, 
  SmilePlus,
  StretchHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home /> },
    { name: "Mood Tracker", path: "/mood", icon: <SmilePlus /> },
    { name: "Water Tracker", path: "/water", icon: <Droplets /> },
    { name: "Sleep Tracker", path: "/sleep", icon: <Moon /> },
    { name: "Meal Log", path: "/meals", icon: <Utensils /> },
    { name: "Fitness Checklist", path: "/fitness", icon: <Dumbbell /> },
    { name: "Stretch Routine", path: "/stretch", icon: <StretchHorizontal /> },
    { name: "Journal", path: "/journal", icon: <BookOpen /> },
    { name: "Weight Tracker", path: "/weight", icon: <Weight /> },
    { name: "Breathing", path: "/breathing", icon: <Wind /> },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white shadow-md rounded-2xl p-5 h-[calc(100vh-2rem)] m-4 fixed">
      <div className="flex items-center mb-8">
        <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">W</span>
        </div>
        <h1 className="text-xl font-bold ml-2 text-gray-800">Wellness Track</h1>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={cn(
              "flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-secondary transition-colors",
              location.pathname === item.path && "bg-secondary text-primary font-medium"
            )}
          >
            <span className="w-5 h-5 mr-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
      
      <div className="mt-auto">
        <div className="bg-secondary rounded-xl p-4 mt-6">
          <h3 className="font-semibold text-gray-700">Daily Wellness Tip</h3>
          <p className="text-sm text-gray-600 mt-2">Remember to take short breaks and stretch when working for long hours.</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
