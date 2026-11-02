import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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

