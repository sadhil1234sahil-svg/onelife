import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { Menu, X, Compass, Search, Phone, Globe } from 'lucide-react';

export default function Navbar() {
  const { settings, openEnquiryModal } = useSite();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tourism' },
    { name: 'Destinations', path: '/tourism' },
    { name: 'Visa Services', path: '/visa' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff4500] to-[#ff7a00] flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-neutral-900 leading-none">
                One<span className="text-[#ff5500]">Life</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-400 mt-0.5">
                TRAVEL & TOURS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-[14px] rounded-full transition-all font-medium ${
                    isActive
                      ? 'text-[#ff5500] font-bold bg-orange-50/80 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3.5">
            <button
              onClick={() => openEnquiryModal({ interest: 'Both' })}
              className="p-2.5 rounded-full text-neutral-600 hover:text-[#ff5500] hover:bg-neutral-50 transition-colors"
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
              className="p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-base rounded-xl font-medium ${
                  location.pathname === link.path
                    ? 'bg-orange-50 text-[#ff5500] font-bold'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
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
