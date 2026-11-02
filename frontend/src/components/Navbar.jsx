import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { Menu, X, Compass, Search, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { openEnquiryModal } = useSite();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tourism' },
    { name: 'Destinations', path: '/tourism' },
    { name: 'Visa Services', path: '/visa' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-header-scrolled shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]'
          : 'glass-header shadow-[0_4px_20px_0_rgba(0,0,0,0.03)]'
      }`}
      style={{
        WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(190%)' : 'blur(24px) saturate(180%)',
        backdropFilter: scrolled ? 'blur(28px) saturate(190%)' : 'blur(24px) saturate(180%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff4500] to-[#ff7a00] flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-neutral-900 leading-none">
                One<span className="text-[#ff5500]">Life</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-500 mt-0.5">
                TRAVEL & TOURS
              </span>
            </div>
          </Link>

          {/* Glassmorphic Desktop Nav Pills Container */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/45 backdrop-blur-md border border-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.03)]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-1.5 text-[14px] rounded-full transition-all font-medium ${
                    isActive
                      ? 'text-[#ff5500] font-bold bg-white shadow-xs border border-orange-100/70'
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              to="/option-2"
              className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/60 hover:bg-white/95 text-[#ff5500] backdrop-blur-md transition-all border border-orange-200/80 shadow-xs flex items-center gap-1.5 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Design Option 2</span>
            </Link>

            <button
              onClick={() => openEnquiryModal({ interest: 'Both' })}
              className="p-2.5 rounded-full text-neutral-700 hover:text-[#ff5500] bg-white/50 hover:bg-white/80 border border-white/60 backdrop-blur-md transition-all shadow-xs"
              aria-label="Search trips"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => openEnquiryModal({ interest: 'Both' })}
              className="btn-orange-glow text-white text-[14px] font-bold px-6 py-2.5 rounded-full shadow-md transition-all active:scale-95"
            >
              Book a Trip
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-700 bg-white/60 hover:bg-white/90 border border-white/60 backdrop-blur-md transition-all focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Glassmorphic Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden border-b border-white/50 bg-white/85 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 shadow-2xl transition-all"
          style={{
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            backdropFilter: 'blur(24px) saturate(180%)'
          }}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-base rounded-xl font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-orange-50/90 text-[#ff5500] font-bold border border-orange-200/50'
                    : 'text-neutral-700 hover:bg-white/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/option-2"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-base rounded-xl font-semibold text-[#ff5500] bg-orange-50/70 border border-orange-200/60 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#ff5500]" />
              <span>Explore Design Option 2</span>
            </Link>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEnquiryModal({ interest: 'Both' });
              }}
              className="w-full btn-orange-glow text-white font-bold py-3.5 rounded-full text-center shadow"
            >
              Book a Trip
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
