
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Founder from "./pages/Founder";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import DoctoateHolders from "./pages/DoctoateHolders";
import Awardees from "./pages/Awardees";
import NHGPFMembers from "./pages/NHGPFMembers";
import PPRMembers from "./pages/PPRMembers";
import ApplyDoctorate from "./pages/ApplyDoctorate";
import ApplyAward from "./pages/ApplyAward";
import Tieups from "./pages/Tieups";
import Contact from "./pages/Contact";
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
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/doctorate-holders" element={<DoctoateHolders />} />
          <Route path="/awardees" element={<Awardees />} />
          <Route path="/nhgpf-members" element={<NHGPFMembers />} />
          <Route path="/ppr-members" element={<PPRMembers />} />
          <Route path="/apply-doctorate" element={<ApplyDoctorate />} />
          <Route path="/apply-award" element={<ApplyAward />} />
          <Route path="/tieups" element={<Tieups />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
