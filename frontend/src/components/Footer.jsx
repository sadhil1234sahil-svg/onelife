import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { Compass, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  const { settings, openEnquiryModal } = useSite();

  const brandName = settings?.brandName || 'OneLife Tourism';
  const phone = settings?.contact?.phone || '+91 98765 43210';
  const email = settings?.contact?.email || 'hello@onelifetourism.com';
  const address = settings?.contact?.address || 'Suite 402, Signature Tower, Link Road, Andheri West, Mumbai';

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-neutral-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff4500] to-[#ff7a00] flex items-center justify-center text-white shadow-md">
                <Compass className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                One<span className="text-[#ff5500]">Life</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
              Discover beautiful life moments across 40+ global destinations. Expert visa consultancy and handpicked holiday packages crafted with passion.
            </p>
            <div className="pt-2 flex items-center gap-3 text-neutral-400">
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#ff5500] hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#ff5500] hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#ff5500] hover:text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#ff5500] hover:text-white flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Top Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li><Link to="/tourism" className="hover:text-white transition-colors">Paris, France</Link></li>
              <li><Link to="/tourism" className="hover:text-white transition-colors">Bali, Indonesia</Link></li>
              <li><Link to="/tourism" className="hover:text-white transition-colors">Rome, Italy</Link></li>
              <li><Link to="/tourism" className="hover:text-white transition-colors">Maldives Luxury</Link></li>
              <li><Link to="/tourism" className="hover:text-white transition-colors">Swiss Alps</Link></li>
              <li><Link to="/tourism" className="hover:text-white transition-colors">Dubai Highlights</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services & Tours
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li><Link to="/tourism" className="hover:text-white transition-colors">Holiday Packages</Link></li>
              <li><Link to="/visa" className="hover:text-white transition-colors">Schengen Visa Desk</Link></li>
              <li><Link to="/visa" className="hover:text-white transition-colors">US / UK Visa Filing</Link></li>
              <li><Link to="/tourism" className="hover:text-white transition-colors">Honeymoon Specials</Link></li>
              <li><Link to="/tourism" className="hover:text-white transition-colors">Family Expeditions</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Our Team</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span className="font-semibold text-white">{phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span className="break-all">{email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} OneLife Tourism Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-neutral-400 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-neutral-400 transition-colors">Cookie Preferences</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
