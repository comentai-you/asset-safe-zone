import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Wallet from "./pages/Wallet";
import Auth from "./pages/Auth";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import TrustPageDashboard from "./pages/TrustPageDashboard";
import TrustPageEditor from "./pages/TrustPageEditor";
import LandingPageView from "./pages/LandingPageView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* TrustPage Routes */}
          <Route path="/trustpage" element={<TrustPageDashboard />} />
          <Route path="/trustpage/new" element={<TrustPageEditor />} />
          <Route path="/trustpage/edit/:id" element={<TrustPageEditor />} />
          <Route path="/p/:slug" element={<LandingPageView />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
