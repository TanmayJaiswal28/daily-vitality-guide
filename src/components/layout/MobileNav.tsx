
import React, { useState } from "react";
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
  Menu,
  X,
  StretchHorizontal
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Mood Tracker", path: "/mood", icon: <SmilePlus size={20} /> },
    { name: "Water Tracker", path: "/water", icon: <Droplets size={20} /> },
    { name: "Sleep Tracker", path: "/sleep", icon: <Moon size={20} /> },
    { name: "Meal Log", path: "/meals", icon: <Utensils size={20} /> },
    { name: "Fitness Checklist", path: "/fitness", icon: <Dumbbell size={20} /> },
    { name: "Stretch Routine", path: "/stretch", icon: <StretchHorizontal size={20} /> },
    { name: "Journal", path: "/journal", icon: <BookOpen size={20} /> },
    { name: "Weight Tracker", path: "/weight", icon: <Weight size={20} /> },
    { name: "Breathing", path: "/breathing", icon: <Wind size={20} /> },
  ];

  return (
    <div className="md:hidden">
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-3 z-50">
        <Link to="/" className={`flex flex-col items-center ${location.pathname === '/' ? 'text-primary' : 'text-gray-600'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/water" className={`flex flex-col items-center ${location.pathname === '/water' ? 'text-primary' : 'text-gray-600'}`}>
          <Droplets size={24} />
          <span className="text-xs mt-1">Water</span>
        </Link>
        <Link to="/mood" className={`flex flex-col items-center ${location.pathname === '/mood' ? 'text-primary' : 'text-gray-600'}`}>
          <SmilePlus size={24} />
          <span className="text-xs mt-1">Mood</span>
        </Link>
        <Link to="/sleep" className={`flex flex-col items-center ${location.pathname === '/sleep' ? 'text-primary' : 'text-gray-600'}`}>
          <Moon size={24} />
          <span className="text-xs mt-1">Sleep</span>
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center text-gray-600">
              <Menu size={24} />
              <span className="text-xs mt-1">More</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] rounded-t-3xl">
            <div className="flex justify-between items-center mb-6 mt-2">
              <h2 className="text-xl font-bold">Wellness Track</h2>
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="grid grid-cols-3 gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex flex-col items-center p-4 rounded-xl ${location.pathname === item.path ? 'bg-secondary text-primary' : 'text-gray-700'}`}
                >
                  <span className="mb-2">{item.icon}</span>
                  <span className="text-xs text-center">{item.name}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
