import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewsDetailPage from "./pages/NewsDetailPage";
import AthleticsPage from "./pages/AthleticsPage";
import MusicPage from "./pages/MusicPage";
import DramaPage from "./pages/DramaPage";
import ScienceClubPage from "./pages/ScienceClubPage";
import IntramuralsPage from "./pages/IntramuralsPage";
import ArtClubPage from "./pages/ArtClubPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/activities/athletics" element={<AthleticsPage />} />
          <Route path="/activities/music" element={<MusicPage />} />
          <Route path="/activities/drama" element={<DramaPage />} />
          <Route path="/activities/science-club" element={<ScienceClubPage />} />
          <Route path="/activities/intramurals" element={<IntramuralsPage />} />
          <Route path="/activities/art-club" element={<ArtClubPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
