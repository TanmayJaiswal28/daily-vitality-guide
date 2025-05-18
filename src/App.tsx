
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WaterPage from "./pages/WaterPage";
import MoodPage from "./pages/MoodPage";
import SleepPage from "./pages/SleepPage";
import BreathingPage from "./pages/BreathingPage";
import MealsPage from "./pages/MealsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/water" element={<WaterPage />} />
          <Route path="/mood" element={<MoodPage />} />
          <Route path="/sleep" element={<SleepPage />} />
          <Route path="/breathing" element={<BreathingPage />} />
          <Route path="/meals" element={<MealsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
