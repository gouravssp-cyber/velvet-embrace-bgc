import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Demo from "./components/Demo";
import NotFound from "./pages/NotFound";
import React, { useState } from "react";
import Blognew from "./pages/Blognew";
import Blogtwo from "./pages/Blogtwo";
import Blogthree from "./pages/Blogthree";
import Blogfour from "./pages/Blogfour";
import Blogfive from "./pages/Blogfive";
import Blogsix from "./pages/Blogsix";

const queryClient = new QueryClient();



/* ---------------- Modal Component ---------------- */

type HumanModalProps = {
  open: boolean;
  onAnswer: (isHuman: boolean) => void;
};

const HumanModal = ({ open, onAnswer }: HumanModalProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 min-w-[320px] max-w-[420px] w-full text-center border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Are you 18+?</h2>
        <p className="text-gray-500 mb-8 text-base md:text-lg">Please confirm to continue.</p>
        <div className="flex gap-6 justify-center">
          <button
            onClick={() => onAnswer(true)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            autoFocus
          >
            Yes
          </button>
          <button
            onClick={() => onAnswer(true)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition text-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Route Wrapper for "/" ---------------- */

const HomeRoute = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [isHuman, setIsHuman] = useState<boolean | null>(null);

  // On page load, show Demo by default
  React.useEffect(() => {
    setIsHuman(null);
    setModalOpen(true);
  }, []);

  const handleAnswer = (answer: boolean) => {
    setIsHuman(answer);
    setModalOpen(false);
  };

  // Show Demo by default, replace with Index if user is human
  return (
    <>
      {isHuman === true ? <Index /> : <Demo />}
      <HumanModal open={modalOpen} onAnswer={handleAnswer} />
    </>
  );
};

/* ---------------- App Root ---------------- */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dehradun-call-girls" element={<Blognew />} />
            <Route path="/mussoorie-weekend-call-girls" element={<Blog />} />
            <Route path="/dehradun-2026-college-girls-short-vs-full-night-offer" element={<Blogtwo />} />
            <Route path="/sexy-call-girl-in-dehradun-24/7-Delivery-and-Cash" element={<Blogthree />} />
            <Route path="/dehradun-call-girls-service-real-photos-COD" element={<Blogfour />} />
            <Route path="/partner-se-sex-par-openly-baat-kaise-kare-guide" element={<Blogfive />} />
            <Route path="/call-girls-in-dehradun-2026–premium-dehradun-call-girls-service-with-real-photos" element={<Blogsix />} />
            {/* <Route path="/blog/:postId" element={<Blognew />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;