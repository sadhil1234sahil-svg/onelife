import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Compass, 
  Star, 
  Heart, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Sparkles, 
  Clock, 
  Check, 
  Send, 
  QrCode, 
  Smartphone,
  Quote,
  Share2,
  Users
} from 'lucide-react';

export default function Home() {
  const { openEnquiryModal, submitEnquiry } = useSite();
  const navigate = useNavigate();

  // Search state in Hero
  const [searchParams, setSearchParams] = useState({
    destination: '',
    activity: 'All Activities',
    date: ''
  });

  // Wishlist heart toggle state
  const [likedCards, setLikedCards] = useState({});

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Selected package modal
  const [selectedPkg, setSelectedPkg] = useState(null);

  // Testimonial slider state
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // 1. HERO 3-COLUMN MARQUEE IMAGES
  // Column 1: Scrolls DOWN (Top to Bottom)
  const col1Images = [
    { id: 'c1-1', title: 'Rome Colosseum', image: '/hero/hero-1.jpg' },
    { id: 'c1-2', title: 'Santorini Sea View', image: '/hero/hero-2.jpg' },
    { id: 'c1-3', title: 'Dolomites Alpine Lake', image: '/hero/hero-3.jpg' },
    { id: 'c1-4', title: 'Tropical Beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' }
  ];

  // Column 2: Scrolls UP (Bottom to Top)
  const col2Images = [
    { id: 'c2-1', title: 'Cappadocia Hot Air Balloons', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80' },
    { id: 'c2-2', title: 'Paris Eiffel Tower', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
    { id: 'c2-3', title: 'Venice Canal Gondola', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=600&q=80' },
    { id: 'c2-4', title: 'Kyoto Bamboo Forest', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' }
  ];

  // Column 3: Scrolls DOWN (Top to Bottom)
  const col3Images = [
    { id: 'c3-1', title: 'Dubai Desert Safari', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
    { id: 'c3-2', title: 'Swiss Alps Mountain Pass', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80' },
    { id: 'c3-3', title: 'Bali Rice Terraces', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
    { id: 'c3-4', title: 'Amalfi Coast Haven', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80' }
  ];

  // 2. CIRCULAR DESTINATIONS ("Affordable holiday offers")
  const destinationCircles = [
    { id: 'd1', name: 'Rome', tours: '18 Tours', image: '/hero/hero-1.jpg' },
    { id: 'd2', name: 'Santorini', tours: '24 Tours', image: '/hero/hero-2.jpg' },
    { id: 'd3', name: 'Dolomites', tours: '12 Tours', image: '/hero/hero-3.jpg' },
    { id: 'd4', name: 'Paris', tours: '32 Tours', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80' },
    { id: 'd5', name: 'Bali', tours: '28 Tours', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=300&q=80' },
    { id: 'd6', name: 'Kyoto', tours: '16 Tours', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=80' },
    { id: 'd7', name: 'Dubai', tours: '35 Tours', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=300&q=80' },
    { id: 'd8', name: 'Maldives', tours: '14 Tours', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=300&q=80' }
  ];

  // 3. AFFORDABLE HOLIDAY OFFERS (8 CARDS IN 4 COLS)
  const holidayPackages = [
    {
      id: 'pkg-1',
      title: 'Rome & Vatican VIP Walking Tour',
      location: 'Rome, Italy',
      duration: '4 Days, 3 Nights',
      badge: 'Best Seller',
      badgeColor: 'bg-[#ff5500]',
      rating: 4.9,
      reviews: 142,
      price: '₹34,999',
      oldPrice: '₹42,000',
      image: '/hero/hero-1.jpg',
      inclusions: ['4-Star Historic Hotel', 'Colosseum Fast-Pass', 'Private Airport Transfers', 'Visa Assistance']
    },
    {
      id: 'pkg-2',
      title: 'Santorini Sunset & Caldera Cruise',
      location: 'Santorini, Greece',
      duration: '5 Days, 4 Nights',
      badge: 'Hot Deal',
      badgeColor: 'bg-rose-500',
      rating: 4.95,
      reviews: 98,
      price: '₹48,500',
      oldPrice: '₹56,000',
      image: '/hero/hero-2.jpg',
      inclusions: ['Cliffside Suite Stay', 'Catamaran Sunset Cruise', 'Daily Greek Breakfast', 'Schengen Visa Dossier']
    },
    {
      id: 'pkg-3',
      title: 'Venice Gondola & Murano Glass Tour',
      location: 'Venice, Italy',
      duration: '4 Days, 3 Nights',
      badge: 'Popular',
      badgeColor: 'bg-[#ff5500]',
      rating: 4.88,
      reviews: 86,
      price: '₹39,999',
      oldPrice: '₹47,000',
      image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80',
      inclusions: ['Grand Canal Hotel', 'Private Gondola Ride', 'Murano Glass Workshop', 'English Speaking Guide']
    },
    {
      id: 'pkg-4',
      title: 'Cappadocia Cave Stays & Balloon Flight',
      location: 'Nevsehir, Turkey',
      duration: '5 Days, 4 Nights',
      badge: 'Trending',
      badgeColor: 'bg-amber-500',
      rating: 4.97,
      reviews: 175,
      price: '₹42,000',
      oldPrice: '₹50,000',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      inclusions: ['Boutique Cave Hotel', 'Sunrise Hot Air Balloon Flight', 'Underground City Tour', 'E-Visa Filing']
    },
    {
      id: 'pkg-5',
      title: 'Swiss Alps & Glacier Express Adventure',
      location: 'Zermatt, Switzerland',
      duration: '6 Days, 5 Nights',
      badge: 'Featured',
      badgeColor: 'bg-[#ff5500]',
      rating: 4.93,
      reviews: 110,
      price: '₹78,000',
      oldPrice: '₹89,000',
      image: '/hero/hero-3.jpg',
      inclusions: ['Alpine Chalet Stays', 'Glacier Express Panoramic Train', 'Swiss Travel Pass Included', 'Visa Prep']
    },
    {
      id: 'pkg-6',
      title: 'Paris Romantic Escapes & Louvre Tour',
      location: 'Paris, France',
      duration: '5 Days, 4 Nights',
      badge: 'Top Rated',
      badgeColor: 'bg-purple-600',
      rating: 4.91,
      reviews: 164,
      price: '₹54,000',
      oldPrice: '₹62,000',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      inclusions: ['Central Boutique Hotel', 'Louvre Museum Guided Tour', 'Seine Dinner Cruise', 'Visa Guarantee']
    },
    {
      id: 'pkg-7',
      title: 'Bali Tropical Villas & Waterfalls Trek',
      location: 'Ubud, Indonesia',
      duration: '6 Days, 5 Nights',
      badge: '15% Off',
      badgeColor: 'bg-emerald-600',
      rating: 4.87,
      reviews: 215,
      price: '₹32,500',
      oldPrice: '₹38,000',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      inclusions: ['Private Pool Villa', 'Tegenungan Waterfall Trip', 'Chauffeured Transfers', 'Floating Breakfast']
    },
    {
      id: 'pkg-8',
      title: 'Dubai Desert Dunes & Burj Khalifa Sky',
      location: 'Dubai, UAE',
      duration: '5 Days, 4 Nights',
      badge: 'Fast Visa',
      badgeColor: 'bg-[#ff5500]',
      rating: 4.94,
      reviews: 240,
      price: '₹29,999',
      oldPrice: '₹35,000',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      inclusions: ['5-Star City Hotel', 'Desert 4x4 Dune Bashing', 'Burj Khalifa Level 124 Entry', 'Express E-Visa']
    }
  ];

  // 4. HIGHLY RATED TRAVEL EXPERIENCES (4 CARDS)
  const highlyRatedTours = [
    {
      id: 'hrt-1',
      title: 'Ancient Rome Colosseum Underbelly & Arena',
      location: 'Rome, Italy',
      duration: '3 Days',
      badge: 'Rare Access',
      rating: 4.98,
      reviews: 312,
      price: '₹28,500',
      image: '/hero/hero-1.jpg'
    },
    {
      id: 'hrt-2',
      title: 'Kyoto Hidden Geisha Districts & Tea Ceremony',
      location: 'Kyoto, Japan',
      duration: '4 Days',
      badge: 'Cultural Highlight',
      rating: 4.95,
      reviews: 189,
      price: '₹46,000',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hrt-3',
      title: 'Amalfi Coast Cliffside Cruise & Positano Day',
      location: 'Amalfi, Italy',
      duration: '4 Days',
      badge: 'Luxury Escape',
      rating: 4.96,
      reviews: 218,
      price: '₹52,000',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hrt-4',
      title: 'Dolomites Alpine Trek & Lake Reflection Stays',
      location: 'South Tyrol, Italy',
      duration: '5 Days',
      badge: 'Adventure',
      rating: 4.99,
      reviews: 145,
      price: '₹49,999',
      image: '/hero/hero-3.jpg'
    }
  ];

  // 5. TESTIMONIALS
  const testimonialsList = [
    {
      quote: "Our trip was completely seamless from the visa appointment booking in Mumbai to our private villa transfers in Santorini. Having 24/7 WhatsApp support gave my family absolute peace of mind.",
      author: "Aarav & Priya Sharma",
      role: "Honeymoon in Greece & Italy",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "Schengen visa approved in just 7 days! The documentation checklist they provided was so thorough that the German consulate had zero questions. Can't recommend OneLife enough.",
      author: "Vikram Singhania",
      role: "Solo Europe Tour (14 Days)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "Everything from our private Swiss chalets to the Glacier Express bookings was handled flawlessly. Truly the most stress-free holiday we've ever taken.",
      author: "Meera & Rajesh Patel",
      role: "Family Holiday in Switzerland",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ];

  // 6. INCREDIBLE TRAVEL DESTINATIONS (4 LARGE PHOTO CARDS)
  const incredibleDestinations = [
    {
      id: 'inc-1',
      title: 'Ancient Temples & Heritage',
      location: 'Ayutthaya, Thailand',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
      tag: 'Heritage Walk'
    },
    {
      id: 'inc-2',
      title: 'Historic Pagodas & Torii Gates',
      location: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      tag: 'Culture & Art'
    },
    {
      id: 'inc-3',
      title: 'Cobblestone Street Cafes',
      location: 'Old Havana, Cuba',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      tag: 'Vintage Vibes'
    },
    {
      id: 'inc-4',
      title: 'Gothic Cathedrals & Castles',
      location: 'Milan & Prague, Europe',
      image: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=800&q=80',
      tag: 'Architecture'
    }
  ];

  // 7. FEATURED TRAVEL ARTICLES (4 CARDS)
  const travelArticles = [
    {
      id: 'art-1',
      title: 'Essential Checklist for Your First Schengen Visa Appointment',
      category: 'Visa Tips',
      date: 'Oct 24, 2026',
      readTime: '4 min read',
      image: '/hero/hero-1.jpg'
    },
    {
      id: 'art-2',
      title: '10 Hidden Gems in Santorini Away from the Crowds',
      category: 'Travel Guide',
      date: 'Oct 18, 2026',
      readTime: '6 min read',
      image: '/hero/hero-2.jpg'
    },
    {
      id: 'art-3',
      title: 'How to Plan the Ultimate Glacier Express Train Route',
      category: 'Itinerary',
      date: 'Oct 12, 2026',
      readTime: '5 min read',
      image: '/hero/hero-3.jpg'
    },
    {
      id: 'art-4',
      title: 'Best Budget Boutique Hotels Across Northern Italy',
      category: 'Stays',
      date: 'Oct 08, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleHeroSearch = (e) => {
    e.preventDefault();
    openEnquiryModal({
      interest: searchParams.activity,
      destination: searchParams.destination || 'Global',
      notes: `Searching for ${searchParams.activity} in ${searchParams.destination || 'Any destination'} around ${searchParams.date || 'Flexible dates'}`
    });
  };

  return (
    <div className="bg-white min-h-screen text-neutral-900">
      
      {/* ==========================================
          1. HERO SECTION WITH 3-COLUMN MARQUEE
         ========================================== */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Subtitle, Search Capsule */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ff5500] text-xs font-bold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EXPLORE THE WORLD</span>
              </div>

              {/* Main Headline matching mockup */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.12]">
                Beautiful life <br />
                moments and <br />
                travel with us
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-lg">
                Discover handpicked holiday packages and expert visa consultancy. We take care of paperwork, reservations, and stays so you enjoy every moment.
              </p>

              {/* Floating Search Pill Bar */}
              <form 
                onSubmit={handleHeroSearch}
                className="bg-white rounded-2xl sm:rounded-full p-2.5 sm:p-2 border border-gray-200 shadow-xl shadow-neutral-100 flex flex-col sm:flex-row items-center gap-2 max-w-xl"
              >
                {/* Destination Field */}
                <div className="flex-1 flex items-center gap-2.5 px-3 py-2 w-full sm:w-auto">
                  <MapPin className="w-4 h-4 text-[#ff5500] shrink-0" />
                  <div className="flex-1">
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Destination</span>
                    <input
                      type="text"
                      value={searchParams.destination}
                      onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })}
                      placeholder="Where are you going?"
                      className="w-full text-xs sm:text-sm font-semibold text-neutral-900 bg-transparent focus:outline-none placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-gray-200" />

                {/* Activity Field */}
                <div className="flex-1 flex items-center gap-2.5 px-3 py-2 w-full sm:w-auto">
                  <Compass className="w-4 h-4 text-[#ff5500] shrink-0" />
                  <div className="flex-1">
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Activity</span>
                    <select
                      value={searchParams.activity}
                      onChange={(e) => setSearchParams({ ...searchParams, activity: e.target.value })}
                      className="w-full text-xs sm:text-sm font-semibold text-neutral-900 bg-transparent focus:outline-none cursor-pointer"
                    >
                      <option value="All Activities">All Activities</option>
                      <option value="Holiday Package">Holiday Package</option>
                      <option value="Visa Consultancy">Visa Consultancy</option>
                      <option value="Honeymoon Special">Honeymoon Special</option>
                      <option value="Family Tour">Family Tour</option>
                    </select>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-gray-200" />

                {/* Date Field */}
                <div className="flex-1 flex items-center gap-2.5 px-3 py-2 w-full sm:w-auto">
                  <Calendar className="w-4 h-4 text-[#ff5500] shrink-0" />
                  <div className="flex-1">
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">When?</span>
                    <input
                      type="text"
                      value={searchParams.date}
                      onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                      placeholder="Select dates"
                      className="w-full text-xs sm:text-sm font-semibold text-neutral-900 bg-transparent focus:outline-none placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  aria-label="Search trips"
                  className="w-12 h-12 rounded-full btn-orange-glow text-white flex items-center justify-center shrink-0 shadow-lg active:scale-95 transition-transform"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

            </div>

            {/* Right Column: 3-COLUMN OPPOSITE DIRECTION MARQUEE */}
            <div className="lg:col-span-6 relative">
              {/* Fade gradients top and bottom */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-20" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-20" />

              {/* 3-Column Marquee Container */}
              <div className="h-[480px] sm:h-[560px] overflow-hidden grid grid-cols-3 gap-3.5 sm:gap-4 px-2">
                
                {/* COLUMN 1: Scrolls DOWN (Top to Bottom) */}
                <div className="flex flex-col gap-3.5 sm:gap-4 animate-marquee-down">
                  {[...col1Images, ...col1Images].map((item, idx) => (
                    <div 
                      key={`c1-${idx}`} 
                      className="aspect-[4/5] sm:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-stone-100 group shrink-0"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                {/* COLUMN 2: Scrolls UP (Bottom to Top) */}
                <div className="flex flex-col gap-3.5 sm:gap-4 animate-marquee-up">
                  {[...col2Images, ...col2Images].map((item, idx) => (
                    <div 
                      key={`c2-${idx}`} 
                      className="aspect-[4/5] sm:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-stone-100 group shrink-0"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                {/* COLUMN 3: Scrolls DOWN (Top to Bottom) */}
                <div className="flex flex-col gap-3.5 sm:gap-4 animate-marquee-down-slow">
                  {[...col3Images, ...col3Images].map((item, idx) => (
                    <div 
                      key={`c3-${idx}`} 
                      className="aspect-[4/5] sm:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-stone-100 group shrink-0"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          2. 4-FEATURE VALUE PROPS STRIP
         ========================================== */}
      <section className="py-12 border-b border-gray-100 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#ff5500] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">Best Price Guarantee</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Competitive rates on all tours</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#ff5500] flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">Easy & Fast Booking</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Instant booking confirmation</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#ff5500] flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">24/7 Concierge Support</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Live WhatsApp travel helpline</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-[#ff5500] flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">Handpicked Stays</h4>
                <p className="text-xs text-neutral-500 mt-0.5">Vetted 4 & 5-star properties</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          3. "TRAVEL SMARTER AND EASIER WITH US"
         ========================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ff5500] text-xs font-bold tracking-wider uppercase">
                <span>ABOUT US</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Travel smarter <br />and easier with us
              </h2>

              <p className="text-base text-neutral-600 leading-relaxed">
                Most agencies either only process visas or sell packages. We integrate both under one dedicated roof — ensuring your travel documents, hotel vouchers, and flights are synchronized seamlessly.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Forensic Visa Advisory</h4>
                    <p className="text-xs text-neutral-500">99.2% approval track record for Schengen, USA, UK, and UAE visas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Boutique Luxury Accommodations</h4>
                    <p className="text-xs text-neutral-500">Every resort and city hotel is personally inspected and verified for quality.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">Transparent All-Inclusive Pricing</h4>
                    <p className="text-xs text-neutral-500">Zero hidden resort charges or surprise fees on arrival.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openEnquiryModal({ interest: 'Both' })}
                  className="btn-orange-glow text-white font-bold px-8 py-3.5 rounded-full text-sm shadow-md"
                >
                  Discover More
                </button>
              </div>
            </div>

            {/* Right Images (2 Asymmetric Rounded Cards Side by Side) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* Card 1: Tram in historic city */}
              <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-[3/4] bg-stone-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" 
                  alt="City tram journey"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card 2: Passport over tropical sea */}
              <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-[3/4] bg-stone-100 mt-8 sm:mt-12 group">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80" 
                  alt="Passport at beach"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          4. CIRCULAR DESTINATIONS
         ========================================== */}
      <section className="py-16 bg-neutral-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block mb-1">
                POPULAR REGIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Affordable holiday offers
              </h2>
            </div>
            <Link
              to="/tourism"
              className="text-xs sm:text-sm font-bold text-[#ff5500] hover:text-[#d94800] inline-flex items-center gap-1"
            >
              <span>View all destinations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 8 Circles Row */}
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6 text-center">
            {destinationCircles.map((dest) => (
              <div 
                key={dest.id}
                onClick={() => {
                  openEnquiryModal({
                    interest: 'Holiday Package',
                    destination: dest.name,
                    notes: `Looking for packages in ${dest.name}`
                  });
                }}
                className="cursor-pointer group flex flex-col items-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all p-1 bg-white border border-gray-100 group-hover:border-[#ff5500] mb-2.5">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-[#ff5500] transition-colors">
                  {dest.name}
                </h4>
                <span className="text-[11px] text-neutral-400 font-medium">
                  {dest.tours}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          5. 8 TOUR PACKAGE CARDS (4 COLS x 2 ROWS)
         ========================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block mb-1">
                SPECIAL DEALS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Affordable holiday offers
              </h2>
            </div>
            <Link
              to="/tourism"
              className="text-xs sm:text-sm font-bold text-[#ff5500] hover:text-[#d94800] inline-flex items-center gap-1"
            >
              <span>Explore full catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4-Column Grid (8 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {holidayPackages.map((pkg) => (
              <div 
                key={pkg.id}
                onClick={() => setSelectedPkg(pkg)}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  {/* Photo with Badge & Heart */}
                  <div className="relative h-52 overflow-hidden bg-stone-100">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-3 left-3 ${pkg.badgeColor} text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow`}>
                      {pkg.badge}
                    </div>
                    <button 
                      onClick={(e) => toggleLike(pkg.id, e)}
                      aria-label="Save package"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-700 hover:text-rose-500 shadow transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${likedCards[pkg.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    
                    {/* Rating & Location */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{pkg.rating}</span>
                        <span className="text-neutral-400 font-normal">({pkg.reviews})</span>
                      </div>
                      <span className="text-neutral-500 font-medium">{pkg.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ff5500] transition-colors mb-2 line-clamp-1">
                      {pkg.title}
                    </h3>

                    {/* Location */}
                    <p className="text-xs text-neutral-500 flex items-center gap-1 mb-4">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      <span>{pkg.location}</span>
                    </p>

                  </div>
                </div>

                {/* Footer with Price & Action */}
                <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 block font-normal">Starting from</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-[#ff5500]">{pkg.price}</span>
                      {pkg.oldPrice && (
                        <span className="text-xs text-neutral-400 line-through">{pkg.oldPrice}</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openEnquiryModal({
                        interest: 'Holiday Package',
                        destination: pkg.location,
                        notes: `Inquiry for ${pkg.title}`
                      });
                    }}
                    className="text-xs font-bold px-3.5 py-2 rounded-full bg-neutral-900 hover:bg-[#ff5500] text-white transition-colors"
                  >
                    Book Now
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          6. FULL-WIDTH PANORAMIC BANNER
         ========================================== */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center overflow-hidden">
        {/* Background photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1920&q=80')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-2xl space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a00]" />
              <span>UNFORGETTABLE JOURNEYS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Book Exciting Tours and Adventures.
            </h2>

            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed">
              Join over 25,000 satisfied travelers who trusted OneLife for seamless visa approvals, handpicked boutique stays, and unforgettable itineraries across the world.
            </p>

            <div className="pt-2">
              <Link
                to="/tourism"
                className="inline-flex items-center gap-2 btn-orange-glow text-white font-bold px-8 py-3.5 rounded-full text-sm shadow-xl"
              >
                <span>Explore All Tours</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          7. HIGHLY RATED EXPERIENCES & 2 PROMO BANNERS
         ========================================== */}
      <section className="py-20 lg:py-24 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block mb-1">
                  TOP PICKS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Highly Rated Travel Experiences
                </h2>
              </div>
              <Link
                to="/tourism"
                className="text-xs sm:text-sm font-bold text-[#ff5500] hover:text-[#d94800] inline-flex items-center gap-1"
              >
                <span>View all reviews</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlyRatedTours.map((t) => (
                <div 
                  key={t.id}
                  onClick={() => openEnquiryModal({ interest: 'Holiday Package', destination: t.location })}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden bg-stone-100">
                    <img 
                      src={t.image} 
                      alt={t.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#ff5500] text-white font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow">
                      {t.badge}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{t.rating}</span>
                        <span className="text-neutral-400 font-normal">({t.reviews})</span>
                      </div>
                      <span className="text-neutral-500">{t.duration}</span>
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#ff5500] transition-colors mb-2 line-clamp-1">
                      {t.title}
                    </h4>
                    <div className="flex items-baseline justify-between pt-2 border-t border-gray-100">
                      <span className="text-xs font-black text-[#ff5500]">{t.price}</span>
                      <span className="text-[11px] text-neutral-500">per person</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2 Dual Promotional Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Banner 1: 50% Off Promo */}
            <div className="relative rounded-3xl overflow-hidden min-h-[220px] flex items-center p-8 text-white shadow-lg group">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/65 to-neutral-950/30" />
              </div>
              <div className="relative z-10 space-y-3 max-w-sm">
                <span className="bg-rose-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                  50% OFF PROMO
                </span>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Summer Family Holiday Specials
                </h3>
                <p className="text-xs text-neutral-200">
                  Book 60 days in advance and save up to 50% on family villas in Bali, Maldives and Phuket.
                </p>
                <button 
                  onClick={() => openEnquiryModal({ interest: 'Holiday Package', notes: 'Inquiring about 50% Summer Promo' })}
                  className="btn-orange-glow text-white text-xs font-bold px-5 py-2.5 rounded-full"
                >
                  Claim Discount
                </button>
              </div>
            </div>

            {/* Banner 2: Study & Travel Abroad */}
            <div className="relative rounded-3xl overflow-hidden min-h-[220px] flex items-center p-8 text-white shadow-lg group">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/65 to-neutral-950/30" />
              </div>
              <div className="relative z-10 space-y-3 max-w-sm">
                <span className="bg-[#ff5500] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                  GLOBAL EXPEDITIONS
                </span>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Studying & Backpacking Abroad
                </h3>
                <p className="text-xs text-neutral-200">
                  Comprehensive student visa dossiers, youth hostel passes, and flight holding buffers handled for you.
                </p>
                <button 
                  onClick={() => openEnquiryModal({ interest: 'Visa Consultancy', notes: 'Student / youth travel visa help' })}
                  className="bg-white hover:bg-neutral-100 text-neutral-900 text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
                >
                  Explore Visas
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          8. TESTIMONIALS SECTION
         ========================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Rating, Avatar Stack, Controls */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block">
                TESTIMONIALS
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Smiles From Our <br />Wonderful Travelers.
              </h2>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Read authentic feedback from travelers who explored Europe, Southeast Asia, and the Middle East with OneLife.
              </p>

              {/* Rating summary */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-neutral-900">4.9 / 5.0</span>
                <span className="text-xs text-neutral-400">(2,800+ reviews)</span>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={() => setTestimonialIdx((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length)}
                  className="w-11 h-11 rounded-full border border-gray-200 hover:border-neutral-900 flex items-center justify-center text-neutral-700 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonialsList.length)}
                  className="w-11 h-11 rounded-full bg-neutral-900 hover:bg-[#ff5500] text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column: Featured Testimonial Card */}
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-orange-50/60 via-amber-50/30 to-stone-50 p-8 sm:p-12 rounded-[32px] border border-orange-100/80 shadow-md relative">
                <Quote className="w-12 h-12 text-[#ff5500]/20 absolute top-8 right-8" />
                <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-medium mb-8 relative z-10 italic">
                  "{testimonialsList[testimonialIdx].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={testimonialsList[testimonialIdx].avatar} 
                    alt={testimonialsList[testimonialIdx].author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#ff5500]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">
                      {testimonialsList[testimonialIdx].author}
                    </h4>
                    <p className="text-xs text-neutral-500">
                      {testimonialsList[testimonialIdx].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          9. TRUSTED PARTNER LOGOS STRIP
         ========================================== */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 block mb-6">
            TRUSTED BY LEADING GLOBAL TRAVEL PARTNERS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-lg font-black tracking-tighter text-neutral-800">Booking.com</span>
            <span className="text-lg font-extrabold tracking-tight text-neutral-800">TripAdvisor</span>
            <span className="text-lg font-black text-neutral-800">Expedia</span>
            <span className="text-lg font-bold text-neutral-800">Airbnb</span>
            <span className="text-lg font-black tracking-wide text-neutral-800">Skyscanner</span>
            <span className="text-lg font-bold text-neutral-800">Qatar Airways</span>
          </div>
        </div>
      </section>

      {/* ==========================================
          10. INCREDIBLE TRAVEL DESTINATIONS (4 LARGE PHOTO CARDS)
         ========================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block mb-1">
              GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Incredible travel destinations.
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              From ancient temples to modern cosmopolitan streets, immerse yourself in authentic culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {incredibleDestinations.map((item) => (
              <div 
                key={item.id}
                onClick={() => openEnquiryModal({ interest: 'Holiday Package', destination: item.location })}
                className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute bottom-5 inset-x-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md mb-2 inline-block">
                    {item.tag}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#ff7a00] transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#ff5500]" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          11. FEATURED TRAVEL ARTICLES (4 CARDS)
         ========================================== */}
      <section className="py-16 bg-neutral-50/60 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block mb-1">
                LATEST STORIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Incredible travel insights
              </h2>
            </div>
            <Link
              to="/tourism"
              className="text-xs sm:text-sm font-bold text-[#ff5500] hover:text-[#d94800] inline-flex items-center gap-1"
            >
              <span>View all articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelArticles.map((art) => (
              <div 
                key={art.id}
                onClick={() => openEnquiryModal({ interest: 'Both', notes: `Inquiry following article: ${art.title}` })}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="h-44 overflow-hidden bg-stone-100">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="font-bold text-[#ff5500] uppercase">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#ff5500] transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          12. "READY TO DOWNLOAD" APP PROMO BANNER
         ========================================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] bg-gradient-to-r from-orange-50 via-amber-50 to-rose-50 border border-orange-200/60 p-8 sm:p-14 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Heading & Store Buttons */}
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff5500] block">
                  MOBILE CONCIERGE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
                  Ready To <br />Download
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Get real-time visa status updates, on-trip itinerary vouchers, offline maps, and direct 24/7 WhatsApp concierge access in one pocket companion.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  {/* App Store button */}
                  <button 
                    onClick={() => openEnquiryModal({ interest: 'Both' })}
                    className="bg-neutral-900 hover:bg-black text-white px-5 py-3 rounded-2xl flex items-center gap-3 shadow transition-transform hover:-translate-y-0.5"
                  >
                    <Smartphone className="w-5 h-5 text-white" />
                    <div className="text-left">
                      <span className="block text-[9px] uppercase tracking-wider text-neutral-400 font-medium">Download on the</span>
                      <span className="block text-xs font-bold text-white">Apple App Store</span>
                    </div>
                  </button>

                  {/* Google Play button */}
                  <button 
                    onClick={() => openEnquiryModal({ interest: 'Both' })}
                    className="bg-neutral-900 hover:bg-black text-white px-5 py-3 rounded-2xl flex items-center gap-3 shadow transition-transform hover:-translate-y-0.5"
                  >
                    <Smartphone className="w-5 h-5 text-white" />
                    <div className="text-left">
                      <span className="block text-[9px] uppercase tracking-wider text-neutral-400 font-medium">Get it on</span>
                      <span className="block text-xs font-bold text-white">Google Play</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Center Column: 2 Overlapping Smartphone Mockups */}
              <div className="lg:col-span-4 flex items-center justify-center relative py-6">
                
                {/* Phone 1 */}
                <div className="w-48 sm:w-56 rounded-[32px] p-2 bg-neutral-900 shadow-2xl border-4 border-neutral-800 rotate-[-6deg] hover:rotate-0 transition-transform duration-500 z-10">
                  <div className="rounded-[24px] overflow-hidden aspect-[9/18] bg-neutral-950 relative">
                    <img 
                      src="/hero/hero-2.jpg" 
                      alt="App screen preview 1" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 p-3 flex flex-col justify-between">
                      <div className="w-12 h-3 bg-white/30 rounded-full mx-auto" />
                      <div>
                        <span className="text-[10px] font-bold text-[#ff7a00]">Santorini Flight</span>
                        <h5 className="text-xs font-bold text-white leading-tight">Boarding in 2h 15m</h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 (Overlapping behind) */}
                <div className="w-48 sm:w-56 rounded-[32px] p-2 bg-neutral-900 shadow-2xl border-4 border-neutral-800 rotate-[8deg] hover:rotate-0 transition-transform duration-500 -ml-16 sm:-ml-20">
                  <div className="rounded-[24px] overflow-hidden aspect-[9/18] bg-neutral-950 relative">
                    <img 
                      src="/hero/hero-3.jpg" 
                      alt="App screen preview 2" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 p-3 flex flex-col justify-between">
                      <div className="w-12 h-3 bg-white/30 rounded-full mx-auto" />
                      <div>
                        <span className="text-[10px] font-bold text-emerald-400">Visa Approved</span>
                        <h5 className="text-xs font-bold text-white leading-tight">Schengen Multi-Entry</h5>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: QR Code */}
              <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-6 bg-white/90 rounded-3xl border border-orange-100 shadow-sm">
                <div className="p-3 bg-white rounded-2xl shadow-inner border border-gray-100 mb-3">
                  <QrCode className="w-24 h-24 text-neutral-900" />
                </div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  Scan to Download
                </h4>
                <p className="text-[11px] text-neutral-500 mt-1">
                  Point your camera to install instant app
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE DETAILS POPUP MODAL */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl my-8">
            <button
              onClick={() => setSelectedPkg(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-neutral-700"
            >
              ✕
            </button>

            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedPkg.image}
                alt={selectedPkg.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute top-4 left-4 ${selectedPkg.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                {selectedPkg.badge}
              </div>
            </div>

            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-2xl font-extrabold text-neutral-900">{selectedPkg.title}</h3>
              <span className="text-sm font-bold text-[#ff5500]">{selectedPkg.duration}</span>
            </div>

            <p className="text-xs text-neutral-500 flex items-center gap-1 mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>{selectedPkg.location}</span>
            </p>

            {selectedPkg.inclusions && selectedPkg.inclusions.length > 0 && (
              <div className="mb-6 p-4 rounded-2xl bg-orange-50/50 border border-orange-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                  What's Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {selectedPkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-neutral-500 block">Starting from</span>
                <span className="text-2xl font-black text-[#ff5500]">
                  {selectedPkg.price}
                </span>
                <span className="text-xs text-neutral-500 ml-1">/ person</span>
              </div>
              <button
                onClick={() => {
                  const pkg = selectedPkg;
                  setSelectedPkg(null);
                  openEnquiryModal({
                    interest: 'Holiday Package',
                    destination: pkg.location || pkg.title,
                    notes: `Inquiry for ${pkg.title}`
                  });
                }}
                className="btn-orange-glow text-white px-8 py-3 rounded-full font-bold text-sm shadow transition-all"
              >
                Book / Request Quote
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
