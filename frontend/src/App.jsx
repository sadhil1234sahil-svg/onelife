import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import Home from './pages/Home';
import HomeOption2 from './pages/HomeOption2';
import Visas from './pages/Visas';
import Tourism from './pages/Tourism';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/Admin/AdminDashboard';
import { Sparkles } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdmin = location.pathname.startsWith('/admin');
  const isOption2 = location.pathname === '/option-2' || location.pathname === '/v2';

  // Secret admin shortcut: Ctrl + Shift + A (or Cmd + Shift + A)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        navigate('/admin');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {!isAdmin && !isOption2 && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/option-2" element={<HomeOption2 />} />
          <Route path="/v2" element={<HomeOption2 />} />
          <Route path="/visa" element={<Visas />} />
          <Route path="/visas" element={<Visas />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/packages" element={<Tourism />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdmin && <EnquiryModal />}
      {!isAdmin && !isOption2 && <Footer />}

      {/* Persistent 1-Click Design Switcher Pill */}
      {!isAdmin && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            to={isOption2 ? "/" : "/option-2"}
            className="flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-neutral-950/90 hover:bg-black text-white text-xs font-bold backdrop-blur-xl border border-white/25 shadow-2xl transition-all transform hover:scale-105 active:scale-95 group"
          >
            <Sparkles className="w-4 h-4 text-[#ff5500] animate-pulse" />
            <span>
              {isOption2 ? 'Switch to Design Option 1 (Marquee)' : 'Switch to Design Option 2 (Bromo Mockup)'}
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <Router>
        <MainLayout />
      </Router>
    </SiteProvider>
  );
}

