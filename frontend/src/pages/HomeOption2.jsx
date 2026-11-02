import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { 
  Compass, 
  MapPin, 
  Star, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  Twitter, 
  Globe, 
  Calendar,
  Sparkles,
  Search,
  CheckCircle2,
  Share2
} from 'lucide-react';

export default function HomeOption2() {
  const { openEnquiryModal, packages } = useSite();

  // Active step in booking section
  const [activeStep, setActiveStep] = useState(1);

  // Horizontal carousel scroll ref & progress
  const carouselRef = useRef(null);
  const [carouselProgress, setCarouselProgress] = useState(25);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateProgress, 300);
    }
  };

  const updateProgress = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const total = scrollWidth - clientWidth;
      const progress = total > 0 ? (scrollLeft / total) * 100 : 0;
      setCarouselProgress(Math.min(100, Math.max(10, progress)));
    }
  };

  // Selected package for modal popup
  const [selectedPkg, setSelectedPkg] = useState(null);

  // 1. HERO THUMBNAILS (Bottom Right row in Hero)
  const heroThumbnails = [
    {
      id: 'h1',
      title: 'Sunrise Caldera Ridge',
      location: 'Mount Bromo',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
      badge: 'Jeep 4x4 Tour'
    },
    {
      id: 'h2',
      title: 'Whispering Sand Sea',
      location: 'Pasir Berbisik',
      image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h3',
      title: 'King Kong Viewpoint',
      location: 'East Java',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h4',
      title: 'Penanjakan Summit',
      location: 'Bromo Tengger',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // 2. MOMENTS LIST (Section 2 - Horizontal Carousel)
  const momentsList = [
    {
      id: 'm1',
      title: 'Watching First Light Ignite the Caldera',
      location: 'Mount Bromo Crater',
      badge: 'Sunrise',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm2',
      title: 'Crater Rim Trek Above the Clouds',
      location: 'Volcano Rim',
      badge: 'Trekking',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm3',
      title: 'Golden Hour Rest by the Ridge Fence',
      location: 'Cemoro Lawang',
      badge: 'Scenic View',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm4',
      title: 'Jeep Safari Roof Sunset Chill',
      location: 'Sea of Sand',
      badge: 'Jeep Adventure',
      author: 'Sarah & David Miller',
      date: 'Bromo Crater Sunrise • Oct 2024',
      image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80',
      hasCard: true
    },
    {
      id: 'm5',
      title: 'Cruising the Volcanic Plains in Land Cruiser',
      location: 'Pasir Berbisik',
      badge: '4x4 Expedition',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'm6',
      title: 'Stargazing Milky Way Over Active Volcano',
      location: 'King Kong Hill',
      badge: 'Milky Way',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // 3. BENTO ADVENTURES (Section 3 - 1 Tall + 4 Grid)
  const bentoPackages = [
    {
      id: 'b1',
      title: 'Sunrise Viewpoint 1 Trek',
      tag: 'Most Popular',
      desc: 'Early morning hike to Penanjakan summit for golden hour panorama above sea of clouds.',
      price: '$89',
      period: 'person',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'b2',
      title: 'Madakaripura Waterfall Trek',
      tag: 'Nature Walk',
      desc: 'Walk through deep canyons surrounded by 200m towering curtain waterfalls.',
      price: '$75',
      period: 'person',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'b3',
      title: 'Night Starry Sky Safari',
      tag: 'Astrophotography',
      desc: 'Midnight 4x4 expedition capturing the Milky Way arching over active crater steam.',
      price: '$110',
      period: 'person',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'b4',
      title: 'Teletubbies Savanna Hill',
      tag: 'Eco Trail',
      desc: 'Explore emerald green rolling savanna hills surrounding southern Bromo basin.',
      price: '$65',
      period: 'person',
      image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // 4. POLAROID REVIEWS (Section 4 - 5 Realistic Polaroid Cards)
  const polaroids = [
    {
      id: 'p1',
      name: 'Elena Rostova',
      country: 'Munich, Germany',
      rating: 5,
      review: 'Standing on the crater rim as the sun rose above the mist was genuinely the most magical morning of my life. Everything from 4x4 pickup to the hot tea was flawless.',
      tilt: '-rotate-2 sm:-rotate-3',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'p2',
      name: 'James Chen',
      country: 'Singapore',
      rating: 5,
      review: 'The Land Cruiser driver knew every secret viewpoint away from tourist crowds. OneLife made our visa process and travel totally effortless.',
      tilt: '-rotate-1',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'p3',
      name: 'Anya Sharma',
      country: 'Mumbai, India',
      rating: 5,
      review: 'I was nervous about the cold and altitude, but our OneLife guide was warm, attentive, and took National Geographic-level photos for us.',
      tilt: 'rotate-0 scale-105 z-10 shadow-2xl',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'p4',
      name: 'Marcus Vance',
      country: 'Sydney, Australia',
      rating: 5,
      review: 'Madakaripura waterfall and the volcanic sunrise in one single tour. Completely surpassed all my expectations. 10/10 service!',
      tilt: 'rotate-1 sm:rotate-2',
      image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'p5',
      name: 'Sophie Dubois',
      country: 'Paris, France',
      rating: 5,
      review: 'The milky way at midnight over the whispering sands was breathtaking. OneLife took care of every single permit and transport detail.',
      tilt: 'rotate-2 sm:rotate-3',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=500&q=80'
    }
  ];

  // 5. BOOKING STEPS (Section 5)
  const steps = [
    {
      number: '01',
      title: 'Choose a Package',
      desc: 'Select your preferred Bromo sunrise viewpoint, jeep safari route, or customized private itinerary.'
    },
    {
      number: '02',
      title: 'Check Availability',
      desc: 'Pick your expedition departure date and check immediate guide and 4x4 cruiser slots.'
    },
    {
      number: '03',
      title: 'Make a Reservation',
      desc: 'Submit guest details and receive prompt visa validation, national park permits, and pickup schedules.'
    },
    {
      number: '04',
      title: 'Enjoy Your Adventure',
      desc: 'Relax as our certified expedition leaders handle transport, hot breakfast, photography, and safety.'
    }
  ];

  return (
    <div className="bg-[#eceff3] text-neutral-900 min-h-screen py-4 sm:py-6 px-3 sm:px-6 lg:px-8 selection:bg-[#ff5500] selection:text-white">
      
      <div className="max-w-[1400px] mx-auto space-y-16 sm:space-y-24">

        {/* =========================================================
            1. HERO SECTION (Panoramic Card with Exact Mockup Replica)
           ========================================================= */}
        <section className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden min-h-[720px] sm:min-h-[780px] lg:min-h-[820px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 text-white shadow-2xl">
          
          {/* Panoramic Mount Bromo Sunset Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2000&q=85')` }}
          >
            {/* Top Dusk Sky Gradient for Header Contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/65 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
          </div>

          {/* Top Header Row (Exact Copy: Logo on Left, Center Glass Capsule, Right Glass Button) */}
          <div className="relative z-30 flex items-center justify-between gap-4 w-full">
            
            {/* Left: Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-9 h-9 rounded-full border border-white/40 bg-white/10 backdrop-blur-md flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <Compass className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white drop-shadow">
                One<span className="text-[#ff7a00]">Life</span>
              </span>
            </Link>

            {/* Center: Standalone Floating Glass Capsule Navbar */}
            <nav 
              className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
              style={{
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                backdropFilter: 'blur(20px) saturate(180%)'
              }}
            >
              <Link 
                to="/option-2" 
                className="px-4 py-1.5 rounded-full text-xs font-bold text-neutral-900 bg-white shadow-sm transition-all"
              >
                Home
              </Link>
              <Link 
                to="/tourism" 
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white/95 hover:text-white hover:bg-white/10 transition-colors"
              >
                Destinations
              </Link>
              <Link 
                to="/tourism" 
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white/95 hover:text-white hover:bg-white/10 transition-colors"
              >
                Holiday Packages
              </Link>
              <Link 
                to="/visa" 
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white/95 hover:text-white hover:bg-white/10 transition-colors"
              >
                Visa Services
              </Link>
              <Link 
                to="/about" 
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white/95 hover:text-white hover:bg-white/10 transition-colors"
              >
                About Us
              </Link>
            </nav>

            {/* Right: Standalone Floating Glass Pill Button with Circle Arrow */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => openEnquiryModal({ interest: 'Both' })}
                className="flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 text-white text-xs font-semibold shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
                style={{
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  backdropFilter: 'blur(20px) saturate(180%)'
                }}
              >
                <span>Book a Tour</span>
                <span className="w-6 h-6 rounded-full bg-white text-neutral-900 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-900" />
                </span>
              </button>
            </div>

          </div>

          {/* Hero Center Content (Centered Pill Badge + Centered Large Title) */}
          <div className="relative z-20 max-w-4xl mx-auto my-auto text-center space-y-4 py-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold uppercase tracking-widest shadow-sm">
              <span className="text-white/60">//</span>
              <span>SUNRISE EXPERIENCE</span>
              <span className="text-white/60">//</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light sm:font-normal tracking-tight text-white drop-shadow-lg leading-[1.12]">
              Unforgettable Mount Bromo <br />
              <span className="font-semibold">Sunrise Experience</span>
            </h1>

          </div>

          {/* Hero Bottom Row: Left Social Proof Card & Right 4 Thumbnails */}
          <div className="relative z-20 flex flex-col lg:flex-row items-end justify-between gap-6 pt-4">
            
            {/* Left Frosted Social Proof Card */}
            <div 
              className="bg-black/35 backdrop-blur-xl border border-white/20 p-5 rounded-2xl max-w-sm w-full shadow-2xl text-white space-y-3"
              style={{
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                backdropFilter: 'blur(20px) saturate(180%)'
              }}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2 shrink-0">
                  <img src="/hero/hero-1.jpg" alt="Traveler" className="w-8 h-8 rounded-full object-cover border-2 border-white/80" />
                  <img src="/hero/hero-2.jpg" alt="Traveler" className="w-8 h-8 rounded-full object-cover border-2 border-white/80" />
                  <img src="/hero/hero-3.jpg" alt="Traveler" className="w-8 h-8 rounded-full object-cover border-2 border-white/80" />
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <span>★ 4.9</span>
                  <span className="text-white/80 font-normal text-[11px]">(1.2k+ Reviews)</span>
                </div>
              </div>
              <p className="text-xs text-neutral-200 leading-relaxed font-normal">
                Experience unforgettable sunrise moments across Mount Bromo and volcanic ridges with OneLife certified expedition leaders.
              </p>
              <button 
                onClick={() => openEnquiryModal({ interest: 'Both' })}
                className="inline-flex items-center gap-2 pl-3 pr-1.5 py-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold transition-all group"
              >
                <span>Explore More</span>
                <span className="w-5 h-5 rounded-full bg-white text-neutral-900 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-neutral-900" />
                </span>
              </button>
            </div>

            {/* Right Horizontal Row of 4 Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full lg:w-auto">
              {heroThumbnails.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => openEnquiryModal({ interest: 'Holiday Package', destination: item.location })}
                  className="w-28 sm:w-32 h-40 sm:h-48 rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:border-[#ff5500] hover:scale-105 transition-all duration-300 cursor-pointer relative shrink-0 group"
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 inset-x-2.5 text-white">
                    {idx === 0 && (
                      <span className="inline-block text-[9px] font-bold text-white bg-black/50 backdrop-blur-xs px-1.5 py-0.5 rounded mb-1">
                        Jeep 4x4 Tour
                      </span>
                    )}
                    <p className="text-[10px] font-bold text-[#ff7a00] uppercase tracking-wider truncate">{item.location}</p>
                    <h5 className="text-xs font-bold leading-tight truncate">{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* =========================================================
            2. "UNFORGETTABLE MOMENTS IN THE HEART OF MOUNT BROMO"
           ========================================================= */}
        <section className="space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              // GALLERY //
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Unforgettable Moments in the Heart of Mount Bromo
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Capture real candid memories from our travelers as they explore majestic volcanic vistas and sunrises.
            </p>
          </div>

          {/* Interactive Horizontal Scroll Strip */}
          <div className="relative">
            <div 
              ref={carouselRef}
              onScroll={updateProgress}
              className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar scroll-smooth"
            >
              {momentsList.map((m) => (
                <div
                  key={m.id}
                  onClick={() => openEnquiryModal({ interest: 'Holiday Package', destination: m.location })}
                  className="w-64 sm:w-72 aspect-[4/5] rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 shrink-0 cursor-pointer relative group bg-stone-100 hover:scale-[1.03]"
                >
                  <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/25 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {m.badge}
                  </div>

                  {/* Featured White Floating Info Tag on Card 4 */}
                  {m.hasCard && (
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-white text-neutral-900 flex items-center gap-2">
                      <Instagram className="w-3.5 h-3.5 text-[#ff5500]" />
                      <div className="text-[10px] leading-tight">
                        <p className="font-bold">{m.author}</p>
                        <p className="text-neutral-500 text-[9px]">{m.date}</p>
                      </div>
                    </div>
                  )}

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

            {/* Slider Navigation Controls (Arrow Left, Progress Line, Arrow Right) */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center shadow-xs"
                aria-label="Previous moments"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-48 sm:w-64 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-neutral-900 rounded-full transition-all duration-300"
                  style={{ width: `${carouselProgress}%` }}
                />
              </div>

              <button
                onClick={() => scrollCarousel('right')}
                className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center shadow-xs"
                aria-label="Next moments"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </section>

        {/* =========================================================
            3. "DISCOVER THE BEST BROMO ADVENTURES" (Bento Grid)
           ========================================================= */}
        <section className="space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              // PACKAGES //
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Discover the Best Bromo Adventures for Every Kind of Traveler
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Curated expedition itineraries across Bromo caldera, waterfalls, and active volcanic craters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Full-Height Feature Card (Tall) */}
            <div 
              onClick={() => openEnquiryModal({ interest: 'Holiday Package', destination: 'Mount Bromo Crater' })}
              className="lg:col-span-5 rounded-[32px] overflow-hidden min-h-[460px] lg:min-h-[560px] relative shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group flex flex-col justify-end p-8 text-white"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="relative z-10 space-y-3">
                <span className="inline-block text-xs font-bold tracking-wider uppercase text-[#ff7a00] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  Featured Destination
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Discover the Untamed Beauty of Bromo
                </h3>
                <p className="text-sm text-neutral-300 line-clamp-2">
                  Hike the crater rim, hear the rumbling sulfur vents, and witness golden dawn illumination.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#ff5500] hover:bg-[#ff6b00] px-5 py-2.5 rounded-full shadow transition-all">
                    <span>Explore Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Grid of 4 Adventure Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {bentoPackages.map((b) => (
                <div
                  key={b.id}
                  onClick={() => openEnquiryModal({ interest: 'Holiday Package', destination: b.title })}
                  className="bg-white rounded-[28px] overflow-hidden border border-neutral-100 shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
                      <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                        {b.tag}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ff5500] transition-colors leading-snug">
                        {b.title}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                        {b.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-black text-neutral-900">{b.price}</span>
                      <span className="text-xs text-neutral-400 font-medium"> /{b.period}</span>
                    </div>
                    <span className="text-xs font-bold text-[#ff5500] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Book Now</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* =========================================================
            4. "CAPTURE YOUR MOUNT BROMO JOURNEY FOREVER" (Polaroids)
           ========================================================= */}
        <section className="space-y-10 py-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              // TESTIMONIALS //
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Capture Your Mount Bromo Journey Forever
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              See why over 1,200 adventurers gave our Mount Bromo sunrise expeditions a flawless 5-star rating.
            </p>
          </div>

          {/* 5 Realistic Polaroid Photo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4 items-center">
            {polaroids.map((p) => (
              <div
                key={p.id}
                className={`bg-white p-3.5 pb-6 rounded-2xl shadow-xl border border-neutral-200/80 transform transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-20 cursor-default ${p.tilt}`}
              >
                {/* Photo top */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3.5 shadow-inner bg-neutral-100">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                
                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-amber-400 mb-2">
                  {[...Array(p.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Name & Country */}
                <h5 className="text-sm font-black text-neutral-900 leading-tight">
                  {p.name}
                </h5>
                <p className="text-[11px] text-neutral-400 mb-2 font-medium">
                  {p.country}
                </p>

                {/* Handwritten feel quote */}
                <p className="text-xs text-neutral-600 italic leading-relaxed line-clamp-3">
                  "{p.review}"
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* =========================================================
            5. "HOW TO BOOK YOUR TOUR" (Accordion Steps & Visual)
           ========================================================= */}
        <section className="bg-white rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 lg:p-16 shadow-lg border border-neutral-100 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              How to Book Your Tour
            </h2>
            
            {/* Horizontal Sub-tabs */}
            <div className="hidden sm:flex items-center justify-center gap-3 text-xs text-neutral-500 font-medium pt-2">
              <span className="text-[#ff5500] font-bold">1. Destination</span>
              <span>•</span>
              <span>2. Tour Type</span>
              <span>•</span>
              <span>3. Date & Guests</span>
              <span>•</span>
              <span>4. Visa Check</span>
              <span>•</span>
              <span>5. Instant Confirmation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Visual Card */}
            <div className="lg:col-span-6 rounded-[28px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] relative shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80" 
                alt="Booking preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 inset-x-5 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#ff7a00] font-bold uppercase tracking-wider">OneLife Guarantee</p>
                  <h4 className="text-base font-bold">Certified Local Guide Included</h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Check className="w-5 h-5 text-[#ff7a00]" />
                </div>
              </div>
            </div>

            {/* Right Steps Accordion */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                EASY PROCESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                Book Your Tour in 4 Easy Steps
              </h3>

              <div className="space-y-3 pt-2">
                {steps.map((st, i) => {
                  const isCurrent = activeStep === i + 1;
                  return (
                    <div
                      key={st.number}
                      onClick={() => setActiveStep(i + 1)}
                      className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                        isCurrent
                          ? 'bg-neutral-50/90 border-neutral-300 shadow-sm'
                          : 'bg-white border-neutral-100 hover:border-neutral-200 hover:bg-neutral-50/40'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isCurrent
                            ? 'bg-neutral-900 text-white'
                            : 'bg-neutral-100 text-neutral-600'
                        }`}>
                          {st.number}
                        </div>
                        <div className="space-y-1">
                          <h4 className={`text-base font-bold ${isCurrent ? 'text-neutral-950' : 'text-neutral-800'}`}>
                            {st.title}
                          </h4>
                          <p className="text-xs text-neutral-500 leading-relaxed">
                            {st.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openEnquiryModal({ interest: 'Both' })}
                  className="btn-orange-glow text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-lg transition-all"
                >
                  Start Booking Now
                </button>
              </div>

            </div>

          </div>

        </section>

        {/* =========================================================
            6. "EXPERIENCE THE MAGIC OF MOUNT BROMO TODAY" (CTA Card)
           ========================================================= */}
        <section className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center justify-center p-8 sm:p-14 text-center text-white shadow-2xl">
          
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2000&q=85')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/70" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Experience the Magic of Mount Bromo Today
            </h2>
            <p className="text-sm sm:text-base text-neutral-200 max-w-xl mx-auto">
              Bespoke sunrise expeditions, private 4x4 land cruisers, and certified visa advisory with OneLife Tourism.
            </p>
            <div className="pt-4">
              <button
                onClick={() => openEnquiryModal({ interest: 'Both' })}
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 text-white text-sm font-bold shadow-xl transition-all transform hover:scale-105"
                style={{
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  backdropFilter: 'blur(20px) saturate(180%)'
                }}
              >
                <span>Book Your Tour Now</span>
                <span className="w-8 h-8 rounded-full bg-white text-neutral-900 flex items-center justify-center font-bold shadow">
                  <ArrowRight className="w-4 h-4 text-neutral-900" />
                </span>
              </button>
            </div>
          </div>

        </section>

        {/* =========================================================
            7. MINIMALIST CLEAN WHITE FOOTER (Exact Mockup Replica)
           ========================================================= */}
        <footer className="bg-white rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 border border-neutral-100 shadow-sm space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Logo & Info */}
            <div className="md:col-span-4 space-y-3">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#ff5500] flex items-center justify-center text-white shadow-md">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-black tracking-tight text-neutral-900">
                  One<span className="text-[#ff5500]">Life</span>
                </span>
              </Link>
              <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                OneLife Tourism cures your wanderlust with handpicked alpine lakes, caldera sunrises, and verified visa advisory.
              </p>
            </div>

            {/* Quick Info */}
            <div className="md:col-span-2 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Quick Info</h5>
              <ul className="space-y-1.5 text-xs text-neutral-500">
                <li><Link to="/tourism" className="hover:text-[#ff5500] transition-colors">Tours</Link></li>
                <li><Link to="/tourism" className="hover:text-[#ff5500] transition-colors">Destinations</Link></li>
                <li><Link to="/visa" className="hover:text-[#ff5500] transition-colors">Visa Services</Link></li>
                <li><Link to="/about" className="hover:text-[#ff5500] transition-colors">About Us</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-3 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Contact Us</h5>
              <div className="space-y-1.5 text-xs text-neutral-500">
                <p>support@onelifetours.com</p>
                <p>+91 98765 43210</p>
                <p>Connaught Place, New Delhi</p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="md:col-span-3 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Newsletter</h5>
              <p className="text-xs text-neutral-500">Subscribe for secret sunrise deals & itineraries.</p>
              <div className="flex items-center gap-1.5 pt-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-neutral-100 text-xs px-3.5 py-2.5 rounded-full border border-neutral-200 flex-1 focus:outline-none focus:ring-1 focus:ring-[#ff5500]"
                />
                <button
                  onClick={() => alert('Subscribed to OneLife newsletter!')}
                  className="bg-neutral-900 text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#ff5500] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Socials */}
          <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <p>© {new Date().getFullYear()} OneLife Tourism. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-neutral-900 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-neutral-900 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-neutral-900 transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

        </footer>

      </div>

      {/* Floating Design Switcher Pill (Fixed in bottom right for instant 1-click toggling) */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-950/90 hover:bg-black text-white text-xs font-semibold backdrop-blur-xl border border-white/20 shadow-2xl transition-all transform hover:scale-105 active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
          <span>Switch to Option 1</span>
        </Link>
      </div>

    </div>
  );
}
