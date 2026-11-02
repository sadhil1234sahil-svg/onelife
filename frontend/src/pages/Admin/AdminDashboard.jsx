import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import AdminLogin from './AdminLogin';
import EnquiriesTab from './EnquiriesTab';
import PackagesTab from './PackagesTab';
import VisasTab from './VisasTab';
import SiteSettingsTab from './SiteSettingsTab';
import TestimonialsTab from './TestimonialsTab';
import { 
  Users, 
  Palmtree, 
  ShieldCheck, 
  Settings, 
  Star, 
  LogOut, 
  ExternalLink, 
  Sparkles,
  Inbox
} from 'lucide-react';

export default function AdminDashboard() {
  const { adminToken, adminUser, adminLogout, enquiries, packages, visas, testimonials } = useSite();
  const [activeTab, setActiveTab] = useState('enquiries');

  // If not authenticated, render login page
  if (!adminToken) {
    return <AdminLogin onLoginSuccess={() => setActiveTab('enquiries')} />;
  }

  const newEnquiriesCount = enquiries.filter(e => e.status === 'New').length;

  const tabs = [
    {
      id: 'enquiries',
      name: 'Customer Enquiries',
      icon: Inbox,
      badge: newEnquiriesCount > 0 ? `${newEnquiriesCount} New` : null
    },
    {
      id: 'packages',
      name: 'Holiday Packages',
      icon: Palmtree,
      badge: packages.length
    },
    {
      id: 'visas',
      name: 'Visa Services',
      icon: ShieldCheck,
      badge: visas.length
    },
    {
      id: 'settings',
      name: 'Site Content & Hero',
      icon: Settings,
      badge: null
    },
    {
      id: 'testimonials',
      name: 'Testimonials',
      icon: Star,
      badge: testimonials.length
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Bar */}
        <div className="bg-[#141210] text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-xl border border-[#26221f] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 px-3 rounded-2xl shadow">
              <img
                src="/logo.png"
                alt="OneLife Tourism"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  OneLife Admin Panel
                </h1>
                <span className="bg-[#bbf451] text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                  Live
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                Logged in as <strong className="text-stone-200">{adminUser?.email || 'admin@onelife.com'}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Link
              to="/"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-stone-200 transition-colors"
            >
              <span>View Public Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={adminLogout}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-red-950/60 hover:bg-red-900 text-red-200 border border-red-800/50 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div 
            onClick={() => setActiveTab('enquiries')}
            className={`p-5 rounded-3xl border transition-all cursor-pointer ${
              activeTab === 'enquiries' ? 'bg-white shadow-md border-[#ff6b00]' : 'bg-white/60 hover:bg-white border-stone-200'
            }`}
          >
            <span className="text-xs font-semibold text-neutral-500 block">Total Enquiries</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-neutral-900">{enquiries.length}</span>
              {newEnquiriesCount > 0 && (
                <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                  +{newEnquiriesCount} new
                </span>
              )}
            </div>
          </div>

          <div 
            onClick={() => setActiveTab('packages')}
            className={`p-5 rounded-3xl border transition-all cursor-pointer ${
              activeTab === 'packages' ? 'bg-white shadow-md border-[#ff6b00]' : 'bg-white/60 hover:bg-white border-stone-200'
            }`}
          >
            <span className="text-xs font-semibold text-neutral-500 block">Active Packages</span>
            <div className="text-3xl font-extrabold text-neutral-900 mt-1">{packages.length}</div>
          </div>

          <div 
            onClick={() => setActiveTab('visas')}
            className={`p-5 rounded-3xl border transition-all cursor-pointer ${
              activeTab === 'visas' ? 'bg-white shadow-md border-[#ff6b00]' : 'bg-white/60 hover:bg-white border-stone-200'
            }`}
          >
            <span className="text-xs font-semibold text-neutral-500 block">Visa Countries</span>
            <div className="text-3xl font-extrabold text-neutral-900 mt-1">{visas.length}</div>
          </div>

          <div 
            onClick={() => setActiveTab('testimonials')}
            className={`p-5 rounded-3xl border transition-all cursor-pointer ${
              activeTab === 'testimonials' ? 'bg-white shadow-md border-[#ff6b00]' : 'bg-white/60 hover:bg-white border-stone-200'
            }`}
          >
            <span className="text-xs font-semibold text-neutral-500 block">Reviews Published</span>
            <div className="text-3xl font-extrabold text-neutral-900 mt-1">{testimonials.length}</div>
          </div>
        </div>

        {/* Tab Navigation Navigation Bar */}
        <div className="flex overflow-x-auto items-center gap-2 pb-2 mb-8 border-b border-stone-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#bbf451]' : 'text-neutral-500'}`} />
                <span>{tab.name}</span>
                {tab.badge !== null && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-200 text-neutral-700'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Area */}
        <div className="transition-all duration-200">
          {activeTab === 'enquiries' && <EnquiriesTab />}
          {activeTab === 'packages' && <PackagesTab />}
          {activeTab === 'visas' && <VisasTab />}
          {activeTab === 'settings' && <SiteSettingsTab />}
          {activeTab === 'testimonials' && <TestimonialsTab />}
        </div>

      </div>
    </div>
  );
}

