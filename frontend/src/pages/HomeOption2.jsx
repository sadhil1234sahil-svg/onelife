import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Star, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Check, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  Twitter, 
  Globe, 
  Users, 
  Quote, 
  Heart,
  Clock,
  Layers,
  Search,
  CheckCircle2
} from 'lucide-react';

export default function HomeOption2() {
  const { settings, openEnquiryModal, packages } = useSite();

  // Active step in booking section
  const [activeStep, setActiveStep] = useState(1);

  // Horizontal carousel scroll ref
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Selected package for modal popup
  const [selectedPkg, setSelectedPkg] = useState(null);

  // 1. HERO CARDS (Bottom Right row in Hero)
  const heroThumbnails = [
    {
      id: 'h1',
      title: 'Sunrise Summit Trail',
      location: 'Dolomites, Italy',
      image: '/hero/hero-3.jpg'
    },
    {
      id: 'h2',
      title: 'Cliffside Caldera Sunset',
      location: 'Santorini, Greece',
      image: '/hero/hero-2.jpg'
    },
    {
      id: 'h3',
      title: 'Ancient Historic Plaza',
      location: 'Rome, Italy',
      image: '/hero/hero-1.jpg'
    },
    {
      id: 'h4',
      title: 'Alpine Lake Reflections',
      location: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // 2. UNFORGETTABLE MOMENTS HORIZONTAL STRIP
  const momentsList = [
    {
      id: 'm1',
      title: 'Friends on the Summit',
      location: 'Swiss Alps',
      badge: 'Expedition',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      tilt: '-rotate-2'
    },
    {
      id: 'm2',
      title: 'Solo Alpine Lake Contemplation',
      location: 'Dolomites, Italy',
      badge: 'Solitude',
      image: '/hero/hero-3.jpg',
      tilt: 'rotate-1'
    },
    {
      id: 'm3',
      title: 'Volcanic Sunrise Watch',
      location: 'Mount Bromo',
      badge: 'Iconic Sunrise',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      tilt: '-rotate-1'
    },
    {
      id: 'm4',
      title: 'Romantic Aegean Caldera',
      location: 'Santorini, Greece',
      badge: 'Honeymoon',
      image: '/hero/hero-2.jpg',
      tilt: 'rotate-2'
    },
    {
      id: 'm5',
      title: '4x4 Off-Road Safari Jeep',
      location: 'Desert Dunes & Peaks',
      badge: 'Adventure',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      tilt: '-rotate-1'
    },
    {
      id: 'm6',
      title: 'Cobblestone Walking Tour',
      location: 'Rome, Italy',
      badge: 'Culture',
      image: '/hero/hero-1.jpg',
      tilt: 'rotate-1'
    }
  ];

  // 3. BENTO ADVENTURES
  const bentoGridTours = [
    {
      id: 'bg-1',
      title: 'Sunrise Summit Trek & Alpine Stays',
      desc: 'Climb above the morning cloud layer with private guides and stay in luxury mountain chalets.',
      duration: '5 Days, 4 Nights',
      price: '₹42,000',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      category: 'Alpine'
    },
    {
      id: 'bg-2',
      title: 'Wild River & Canyon Expeditions',
      desc: 'Navigate emerald gorges, secret waterfalls, and private boat charters.',
      duration: '4 Days, 3 Nights',
      price: '₹28,500',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80',
      category: 'Water & Nature'
    },
    {
      id: 'bg-3',
      title: 'Night Sky & Milky Way Stargazing',
      desc: 'Glamping under crystal-clear high-altitude night skies with expert astrophotographers.',
      duration: '3 Days, 2 Nights',
      price: '₹31,000',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
      category: 'Night Sky'
    },
    {
      id: 'bg-4',
      title: 'Panoramic Ridge Walk & Culture',
      desc: 'Explore ancient hilltop villages, authentic local vineyards, and historic monasteries.',
      duration: '6 Days, 5 Nights',
      price: '₹48,000',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80',
      category: 'Heritage'
    }
  ];

  // 4. POLAROID REVIEWS
  const polaroidStories = [
    {
      id: 'p1',
      author: 'Priya Sharma',
      location: 'Santorini Caldera',
      rating: 5,
      quote: 'The private catamaran cruise and fast-track Schengen visa made this our most magical anniversary trip ever.',
      image: '/hero/hero-2.jpg',
      tilt: '-rotate-2'
    },
    {
      id: 'p2',
      author: 'Aarav Malhotra',
      location: 'Dolomites Summits',
      rating: 5,
      quote: 'Standing at Lake Carezza at dawn was surreal. Zero stress about paperwork, all stays were flawless.',
      image: '/hero/hero-3.jpg',
      tilt: 'rotate-1'
    },
    {
      id: 'p3',
      author: 'Kabir & Meera',
      location: 'Colosseum VIP Tour',
      rating: 5,
      quote: 'Skipped the 3-hour queues in Rome. Our dedicated consultant answered all WhatsApp messages in minutes.',
      image: '/hero/hero-1.jpg',
      tilt: '-rotate-1'
    },
    {
      id: 'p4',
      author: 'Vikram Joshi',
      location: 'Swiss Glacier Train',
      rating: 5,
      quote: 'Approved Schengen visa in 8 days flat! Chalet reservations were 10/10 quality. OneLife is top tier.',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80',
      tilt: 'rotate-2'
    },
    {
      id: 'p5',
      author: 'Ananya Sen',
      location: 'Cappadocia Balloons',
      rating: 5,
      quote: 'The sunrise balloon flight was bucket-list perfection. Thank you OneLife for handling our Turkish E-visa so fast.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
      tilt: '-rotate-2'
    }
  ];

  // 5. FOUR EASY STEPS
  const bookingSteps = [
    {
      num: 1,
      title: 'Choose a Package & Destination',
      desc: 'Browse our handpicked European & global itineraries, or let our specialists craft a custom route tailored to your style.'
    },
    {
      num: 2,
      title: 'Check Visa & Slot Availability',
      desc: 'Our consular specialists immediately review your eligibility, reserve embassy appointment slots, and assemble your verified dossier.'
    },
    {
      num: 3,
      title: 'Confirm Stays & Transfers',
      desc: 'Lock in 4-star and 5-star boutique stays, private chauffeured transfers, and curated excursions with upfront transparent pricing.'
    },
    {
      num: 4,
      title: 'Enjoy Your Journey with 24/7 Concierge',
      desc: 'Fly with complete peace of mind. A dedicated OneLife trip manager stays connected with you via WhatsApp until you return safely.'
    }
  ];

  return (
    <div className="bg-[#faf9f6] text-neutral-900 min-h-screen selection:bg-[#ff5500] selection:text-white">
      
      {/* Design Switcher Banner (allows quick toggle between Option 1 & Option 2) */}
      <div className="bg-neutral-950 text-neutral-300 text-xs py-2 px-4 flex items-center justify-between border-b border-neutral-800">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            <span className="font-semibold text-white">Viewing Design Option 2 (Luxury Bromo/Alpine Bento Aesthetic)</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-neutral-400 hover:text-white underline transition-colors">
              Switch to Design Option 1
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 pt-4 pb-16 space-y-20 lg:space-y-28">

        {/* =========================================================
            1. HERO SECTION (Panoramic Card with Rounded Edges)
           ========================================================= */}
        <section className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden min-h-[680px] sm:min-h-[760px] lg:min-h-[820px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 text-white shadow-2xl">
          
          {/* Panoramic Background with Dark Vignette */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')` }}
          >
            {/* Multi-layer gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Top Floating Glass Capsule Navbar */}
          <div className="relative z-20 flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow">
                <Compass className="w-5 h-5 text-[#ff7a00]" />
              </div>
              <span className="text-xl font-black tracking-tight text-white drop-shadow">
                One<span className="text-[#ff7a00]">Life</span>
              </span>
            </Link>

            {/* Nav Capsule Links */}
            <nav className="hidden md:flex items-center gap-1 bg-black/30 backdrop-blur-xl border border-white/15 px-3 py-1.5 rounded-full shadow-lg">
              <Link to="/option-2" className="px-4 py-1.5 rounded-full text-xs font-bold text-neutral-950 bg-white shadow-sm transition-all">
                Home
              </Link>
              <Link to="/tourism" className="px-4 py-1.5 rounded-full text-xs font-semibold text-neutral-200 hover:text-white transition-colors">
                Experiences
              </Link>
              <Link to="/tourism" className="px-4 py-1.5 rounded-full text-xs font-semibold text-neutral-200 hover:text-white transition-colors">
                Holiday Packages
              </Link>
              <Link to="/visa" className="px-4 py-1.5 rounded-full text-xs font-semibold text-neutral-200 hover:text-white transition-colors">
                Visa Services
              </Link>
              <Link to="/about" className="px-4 py-1.5 rounded-full text-xs font-semibold text-neutral-200 hover:text-white transition-colors">
                About
              </Link>
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => openEnquiryModal({ interest: 'Both' })}
              className="bg-white/90 hover:bg-white text-neutral-950 text-xs font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <span>Book a Tour</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#ff5500]" />
            </button>

          </div>

          {/* Hero Center Title & Tagline */}
          <div className="relative z-20 max-w-3xl my-auto py-12 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-[#ff7a00] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UNFORGETTABLE SUNRISE & BESPOKE EXPEDITIONS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white drop-shadow-md">
              Unforgettable Global Journeys & Sunrise Expeditions
            </h1>

            <p className="text-base sm:text-lg text-neutral-200 font-normal leading-relaxed max-w-2xl drop-shadow">
              OneLife Tourism cures your wanderlust with handpicked alpine lakes, caldera sunrises, and forensic visa advisory across 40+ countries.
            </p>

          </div>

          {/* Hero Bottom Bar: Left Social Proof Card & Right 4 Thumbnails */}
          <div className="relative z-20 flex flex-col lg:flex-row items-end justify-between gap-6 pt-6">
            
            {/* Left Frosted Social Proof Card */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/20 p-5 rounded-3xl max-w-md w-full lg:w-auto shadow-2xl flex flex-col sm:flex-row items-center gap-4">
              <div className="flex -space-x-2 shrink-0">
                <img src="/hero/hero-1.jpg" alt="Traveler" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
                <img src="/hero/hero-2.jpg" alt="Traveler" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
                <img src="/hero/hero-3.jpg" alt="Traveler" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-[#ff5500] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                  +3.5k
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                  <span className="text-white ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-neutral-300 leading-snug">
                  Rated outstanding by 3,500+ travelers across India for flawless visas & luxury stays.
                </p>
              </div>
              <button 
                onClick={() => openEnquiryModal({ interest: 'Both' })}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#ff5500] text-white flex items-center justify-center shrink-0 transition-colors shadow"
                aria-label="View Reel"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>
            </div>

            {/* Right Horizontal Row of 4 Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full lg:w-auto">
              {heroThumbnails.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openEnquiryModal({ interest: 'Holiday Package', destination: item.location })}
                  className="w-28 sm:w-36 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white/25 hover:border-[#ff5500] hover:scale-105 transition-all duration-300 cursor-pointer relative shrink-0 group"
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 inset-x-2.5 text-white">
                    <p className="text-[10px] font-bold text-[#ff7a00] uppercase tracking-wider">{item.location}</p>
                    <h5 className="text-xs font-bold leading-tight truncate">{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* =========================================================
            2. "UNFORGETTABLE MOMENTS IN THE HEART OF..."
           ========================================================= */}
        <section className="space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block">
              MOMENTS & MEMORIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Unforgettable Moments in the Heart of Adventure
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Journeys that leave lasting impressions across Europe, alpine summits, and Aegean calderas.
            </p>
          </div>

          {/* Interactive Horizontal Scroll Strip */}
          <div className="relative">
            <div 
              ref={carouselRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar scroll-smooth"
            >
              {momentsList.map((m) => (
                <div
                  key={m.id}
                  onClick={() => openEnquiryModal({ interest: 'Holiday Package', destination: m.location })}
                  className={`w-64 sm:w-72 aspect-[4/5] rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 shrink-0 cursor-pointer relative group bg-stone-100 ${m.tilt} hover:rotate-0 hover:scale-[1.03]`}
                >
                  <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/25 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {m.badge}
                  </div>

                  <div className="absolute bottom-5 inset-x-5 text-white">
                    <span className="text-xs text-[#ff7a00] font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {m.location}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-[#ff7a00] transition-colors mt-0.5 leading-snug">
                      {m.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-neutral-900 flex items-center justify-center text-neutral-700 hover:text-black transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-12 h-full bg-[#ff5500] rounded-full" />
              </div>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-neutral-900 flex items-center justify-center text-neutral-700 hover:text-black transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </section>

        {/* =========================================================
            3. "DISCOVER THE BEST ADVENTURES" (BENTO GRID)
           ========================================================= */}
        <section className="space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block">
              DISCOVER EXPERIENCES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Discover the Best Adventures for Every Kind of Traveler
            </h2>
            <p className="text-sm text-neutral-600">
              Curated stays, private chauffeured transfers, and consular visa dossiers designed for effortless travel.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Large Hero Bento Card (Spans full height of 2 rows) */}
            <div 
              onClick={() => openEnquiryModal({ interest: 'Holiday Package', destination: 'Dolomites & Alpine Summits' })}
              className="lg:col-span-5 rounded-[36px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative min-h-[460px] lg:min-h-full flex flex-col justify-end p-8 text-white group cursor-pointer"
            >
              <img 
                src="/hero/hero-3.jpg" 
                alt="Untamed Beauty" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="relative z-10 space-y-3">
                <span className="inline-block bg-[#ff5500] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  FEATURED EXPEDITION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Discover the Untamed Beauty of Alpine Summits
                </h3>
                <p className="text-xs text-neutral-200 leading-relaxed line-clamp-2">
                  Immerse yourself in Europe's most dramatic mountain reflections, private chalet stays, and guided ridge walks.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-black text-white">Starting from ₹34,999</span>
                  <div className="w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center group-hover:bg-[#ff5500] group-hover:text-white transition-colors shadow">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right 2x2 Grid of 4 Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {bentoGridTours.map((tour) => (
                <div
                  key={tour.id}
                  onClick={() => openEnquiryModal({ interest: 'Holiday Package', destination: tour.title })}
                  className="bg-white rounded-[32px] p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
                >
                  <div>
                    <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-stone-100 mb-4 relative">
                      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-2.5 left-2.5 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        {tour.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ff5500] transition-colors leading-snug mb-1.5">
                      {tour.title}
                    </h4>

                    <p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                      {tour.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block">{tour.duration}</span>
                      <span className="text-sm font-black text-[#ff5500]">{tour.price}</span>
                    </div>
                    <button className="text-xs font-bold text-neutral-800 group-hover:text-[#ff5500] flex items-center gap-1 transition-colors">
                      <span>Book Now</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </section>

        {/* =========================================================
            4. "CAPTURE YOUR JOURNEY FOREVER" (POLAROID REVIEWS)
           ========================================================= */}
        <section className="space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block">
              TRAVELER STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Capture Your Journey Forever
            </h2>
            <p className="text-sm text-neutral-600">
              Unfiltered memories shared by travelers who trusted OneLife for their global vacations.
            </p>
          </div>

          {/* 5 Polaroid Style Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {polaroidStories.map((story) => (
              <div 
                key={story.id}
                className={`bg-white p-4 rounded-3xl border border-gray-200/70 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${story.tilt} hover:rotate-0 hover:-translate-y-2`}
              >
                <div>
                  <div className="rounded-2xl overflow-hidden aspect-[4/4] bg-stone-100 mb-4 shadow-inner">
                    <img src={story.image} alt={story.author} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400 mb-2">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-neutral-700 leading-relaxed italic mb-4">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h5 className="text-xs font-bold text-neutral-900">{story.author}</h5>
                  <p className="text-[11px] text-[#ff5500] font-semibold">{story.location}</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* =========================================================
            5. "HOW TO BOOK YOUR TOUR" (STEPS & PROCESS)
           ========================================================= */}
        <section className="bg-white rounded-[40px] p-8 sm:p-14 border border-gray-100 shadow-xl space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              How to Book Your Tour
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 text-[#ff5500]">Select Dates</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-neutral-600">Visa Check</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-neutral-600">Private Cars</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-neutral-600">Flight Holding</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-neutral-600">24/7 Concierge</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Big Photo Card */}
            <div className="lg:col-span-5 rounded-[36px] overflow-hidden shadow-2xl relative aspect-[4/5] bg-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80" 
                alt="Traveler looking at mountain" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#ff7a00]">100% SATISFACTION GUARANTEED</span>
                  <h4 className="text-lg font-bold text-white">Your Dream Trip Handled End-to-End</h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow">
                  <Check className="w-5 h-5 text-emerald-600 stroke-[3]" />
                </div>
              </div>
            </div>

            {/* Right 4 Horizontal Step Cards */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block mb-1">
                EASY PROCESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-6">
                Book Tour in 4 Easy Steps
              </h3>

              <div className="space-y-3.5">
                {bookingSteps.map((step) => {
                  const isActive = activeStep === step.num;
                  return (
                    <div
                      key={step.num}
                      onClick={() => setActiveStep(step.num)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                        isActive
                          ? 'bg-orange-50/60 border-orange-200/80 shadow-sm'
                          : 'bg-white border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                        isActive ? 'bg-[#ff5500] text-white shadow' : 'bg-gray-100 text-neutral-600'
                      }`}>
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-neutral-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openEnquiryModal({ interest: 'Both' })}
                  className="btn-orange-glow text-white font-bold px-8 py-3.5 rounded-full text-sm shadow-md"
                >
                  Start Consultation Now
                </button>
              </div>

            </div>

          </div>

        </section>

        {/* =========================================================
            6. PANORAMIC CTA BANNER (Sunset Clouds / Volcano)
           ========================================================= */}
        <section className="relative rounded-[36px] overflow-hidden min-h-[400px] flex items-center justify-center text-center p-8 sm:p-14 text-white shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block bg-[#ff5500] text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
              START YOUR CHAPTER
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Experience the Magic of OneLife Today
            </h2>

            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-xl mx-auto">
              Tell us your destination, dates, and budget. Our consular and travel specialists will prepare your dossier checklist and itinerary within 24 hours.
            </p>

            <div className="pt-4">
              <button
                onClick={() => openEnquiryModal({ interest: 'Both' })}
                className="btn-orange-glow text-white font-bold px-8 py-4 rounded-full text-sm shadow-xl inline-flex items-center gap-2"
              >
                <span>Start Planning Your Trip</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            7. MINIMALIST LUXURY FOOTER
           ========================================================= */}
        <footer className="pt-8 pb-4 border-t border-gray-200 text-neutral-600">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#ff5500] text-white flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-black text-neutral-900">OneLife Tourism</span>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Handpicked global journeys, luxury stays, and consular visa advisory across 40+ countries.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <h5 className="font-bold text-neutral-900 uppercase tracking-wider">Top Links</h5>
              <p><Link to="/tourism" className="hover:text-[#ff5500]">Holiday Packages</Link></p>
              <p><Link to="/visa" className="hover:text-[#ff5500]">Schengen Visas</Link></p>
              <p><Link to="/about" className="hover:text-[#ff5500]">About Our Team</Link></p>
              <p><Link to="/contact" className="hover:text-[#ff5500]">Contact Desk</Link></p>
            </div>

            <div className="space-y-2 text-xs">
              <h5 className="font-bold text-neutral-900 uppercase tracking-wider">Contact</h5>
              <p className="font-semibold text-neutral-900">+91 98765 43210</p>
              <p>hello@onelifetourism.com</p>
              <p>Andheri West, Mumbai, India</p>
            </div>

            <div className="space-y-3 text-xs">
              <h5 className="font-bold text-neutral-900 uppercase tracking-wider">Follow Us</h5>
              <div className="flex items-center gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-stone-100 hover:bg-[#ff5500] hover:text-white flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-stone-100 hover:bg-[#ff5500] hover:text-white flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-stone-100 hover:bg-[#ff5500] hover:text-white flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-neutral-400 pt-6 border-t border-gray-100">
            © {new Date().getFullYear()} OneLife Tourism. Design Option 2 (Luxury Bromo Edition).
          </div>
        </footer>

      </div>
    </div>
  );
}
