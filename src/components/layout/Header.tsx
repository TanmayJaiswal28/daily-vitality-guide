
import React from "react";
import { Bell, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/mood":
        return "Mood Tracker";
      case "/water":
        return "Water Tracker";
      case "/sleep":
        return "Sleep Tracker";
      case "/meals":
        return "Meal Log";
      case "/fitness":
        return "Fitness Checklist";
      case "/stretch":
        return "Stretch Routine";
      case "/journal":
        return "Journal";
      case "/weight":
        return "Weight Tracker";
      case "/breathing":
        return "Breathing Exercises";
      default:
        return "Wellness Track";
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 md:px-8">
      <div className="md:hidden flex items-center">
        <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">W</span>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-800 hidden md:block">{getPageTitle()}</h1>
      <h1 className="text-xl font-bold text-gray-800 md:hidden">{getPageTitle()}</h1>
      
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon" className="rounded-full">
          <Bell size={18} />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <User size={18} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
