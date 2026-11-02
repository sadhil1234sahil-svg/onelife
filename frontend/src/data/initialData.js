export const initialData = {
  settings: {
    brandName: "OneLife Tourism",
    logo: "/logo.png",
    tagline: "Visa consultancy and handpicked holiday packages — one team for your paperwork and your passport stamps.",
    slogan: "One life, endless adventures",
    heroBadge: "VISA CONSULTANCY + HOLIDAY PACKAGES",
    heroTitle: "One life. See it all.",
    heroSubtitle: "OneLife Tourism takes the paperwork and the guesswork out of travel — visas handled by experts, holidays handpicked by people who've been there.",
    heroImage: "/hero/hero-1.jpg",
    heroSlides: [
      {
        id: 1,
        image: "/hero/hero-1.jpg",
        location: "Rome, Italy",
        badge: "Ancient Wonders",
        desc: "Colosseum & Historic Europe"
      },
      {
        id: 2,
        image: "/hero/hero-2.jpg",
        location: "Santorini, Greece",
        badge: "Aegean Escapes",
        desc: "Cliffside Calderas & Azure Seas"
      },
      {
        id: 3,
        image: "/hero/hero-3.jpg",
        location: "Dolomites, Italy",
        badge: "Alpine Expeditions",
        desc: "Emerald Lakes & Mountain Horizons"
      }
    ],
    stats: [
      { id: 1, number: "40+", label: "destinations curated" },
      { id: 2, number: "15,000+", label: "visas processed" },
      { id: 3, number: "10 yrs", label: "of happy travelers" },
      { id: 4, number: "4.9/5", label: "traveler rating" }
    ],
    contact: {
      phone: "+91 98765 43210",
      phoneRaw: "+919876543210",
      whatsapp: "+919876543210",
      whatsappDisplay: "+91 98765 43210",
      email: "hello@onelifetourism.com",
      address: "Suite 402, Signature Tower, Link Road, Andheri West, Mumbai, Maharashtra 400053",
      addressShort: "Andheri West, Mumbai, India",
      officeHours: "Mon – Sat: 9:30 AM – 7:30 PM (IST)"
    },
    features: [
      "End-to-end planning",
      "Honest, upfront pricing",
      "24/7 on-trip support"
    ],
    whatWeDo: {
      tag: "WHAT WE DO",
      title: "Two crafts, one team",
      subtitle: "Most agencies either do visas or sell packages. We do both — so the paperwork never slows the holiday down.",
      visaCard: {
        title: "Visa consultancy",
        description: "Tourist, business and student visas — document checklist, appointment booking and application tracking for 40+ countries.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
        ctaText: "View services",
        link: "/visa"
      },
      packagesCard: {
        title: "Holiday packages",
        description: "Beaches, cities and mountains — curated itineraries with handpicked stays, transfers and sightseeing included.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        ctaText: "View packages",
        link: "/tourism"
      }
    },
    howItWorks: {
      tag: "HOW IT WORKS",
      title: "Four steps from idea to boarding pass",
      steps: [
        {
          number: "1",
          title: "Tell us your plan",
          description: "Share your destination, dates and budget — an online quick enquiry or one call is enough."
        },
        {
          number: "2",
          title: "Get a free assessment",
          description: "Within a working day our team gives a visa eligibility and curated stay options."
        },
        {
          number: "3",
          title: "Lock it in",
          description: "Approvals, bookings and every document handled by your dedicated consultant."
        },
        {
          number: "4",
          title: "Bon voyage",
          description: "Fly with a 24/7 on-trip helpline that stays with you until you're home."
        }
      ]
    },
    ctaSection: {
      tag: "START TODAY",
      title: "Ready when you are.",
      subtitle: "Send an enquiry and a travel consultant calls you back within one working day — or reach us straight away."
    }
  },

  packages: [
    {
      id: "pkg-1",
      title: "Maldives Escape",
      slug: "maldives-escape",
      duration: "4N/5D",
      badge: "Honeymoon favourite",
      badgeColor: "lime",
      price: 109999,
      currency: "₹",
      priceUnit: "per person",
      destination: "Maldives",
      category: "Honeymoon",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
      description: "Overwater villas, sunset dolphin cruises and candle-lit dinners on a private sandbank.",
      inclusions: [
        "4 Nights in Sunset Water Villa with Private Deck",
        "Round-trip Speedboat Airport Transfers",
        "All-Inclusive Gourmet Dining & Beverages",
        "Complimentary Sunset Dolphin Safari Cruise",
        "Free Snorkeling Gear & Non-motorized Water Sports",
        "Maldives Visa on Arrival Assistance"
      ],
      highlights: [
        "Private plunge pool overlooking turquoise lagoon",
        "Floating breakfast experience in villa pool",
        "Guided coral reef snorkel tour"
      ],
      featured: true
    },
    {
      id: "pkg-2",
      title: "Dubai City & Desert",
      slug: "dubai-city-desert",
      duration: "5N/6D",
      badge: "Family pick",
      badgeColor: "lime",
      price: 64999,
      currency: "₹",
      priceUnit: "per person",
      destination: "Dubai, UAE",
      category: "Family",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
      description: "Skyline views from Burj Khalifa, dune bashing in the evening desert and a Dubai Mall shopping spree.",
      inclusions: [
        "5 Nights in 4-Star Downtown Hotel with Breakfast",
        "Burj Khalifa 124th & 125th Floor Observation Deck",
        "Premium Desert Safari with 4x4 Dune Bashing & BBQ",
        "Marina Dhow Cruise Dinner with Live Entertainment",
        "Dubai Frame & Miracle Garden entry tickets",
        "UAE Tourist Visa with Insurance Included"
      ],
      highlights: [
        "Watch the Dubai Fountain show from VIP spots",
        "Camel ride & sandboarding in golden dunes",
        "Private luxury airport transfers"
      ],
      featured: true
    },
    {
      id: "pkg-3",
      title: "Bali Bliss",
      slug: "bali-bliss",
      duration: "6N/7D",
      badge: "Best seller",
      badgeColor: "lime",
      price: 74999,
      currency: "₹",
      priceUnit: "per person",
      destination: "Bali, Indonesia",
      category: "Adventure",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
      description: "Rice-terrace mornings, Ubud's cafes and beach clubs along the Seminyak coast.",
      inclusions: [
        "3 Nights Private Pool Villa in Ubud + 3 Nights Beachfront Seminyak",
        "Daily Breakfast + Floating Breakfast at Ubud Villa",
        "Tegallalang Rice Terrace & Bali Swing Experience",
        "Full Day Nusa Penida Island Speedboat Tour & Snorkeling",
        "Uluwatu Sunset Temple & Kecak Fire Dance",
        "Private Air-Conditioned Vehicle with English-speaking Chauffeur"
      ],
      highlights: [
        "Instagrammable Bali Swing & Kanto Lampo Waterfall",
        "Sunset dinner at Jimbaran Bay seafood beach",
        "Free Indonesia Visa assistance"
      ],
      featured: true
    },
    {
      id: "pkg-4",
      title: "Swiss Alps & Paris Romance",
      slug: "swiss-paris",
      duration: "7N/8D",
      badge: "Trending",
      badgeColor: "orange",
      price: 189999,
      currency: "₹",
      priceUnit: "per person",
      destination: "Switzerland & France",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80",
      description: "Panoramic alpine trains across Jungfraujoch, Swiss chalets and Eiffel Tower romantic dinners.",
      inclusions: [
        "4 Nights Interlaken/Lucerne + 3 Nights Central Paris Hotel",
        "Consecutive 4-Day Swiss Travel Pass 1st Class",
        "Jungfraujoch – Top of Europe Cogwheel Train Excursion",
        "Paris Seine River Sightseeing Dinner Cruise",
        "Eiffel Tower 2nd Floor Access",
        "Complete Schengen Visa End-to-End Processing"
      ],
      highlights: [
        "Glacier ice palace exploration at 3,454m altitude",
        "Stroll along Champs-Élysées and Montmartre",
        "Daily European buffet breakfast"
      ],
      featured: true
    },
    {
      id: "pkg-5",
      title: "Vietnam Heritage & Halong Bay",
      slug: "vietnam-heritage",
      duration: "5N/6D",
      badge: "Top value",
      badgeColor: "lime",
      price: 52999,
      currency: "₹",
      priceUnit: "per person",
      destination: "Vietnam",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
      description: "Overnight luxury cruise on Halong Bay, Hanoi Old Quarter street food and lantern-lit Hoi An.",
      inclusions: [
        "2 Nights Hanoi + 1 Night 5-Star Halong Bay Cruise + 2 Nights Hoi An",
        "All Meals during 5-Star Cruise (Breakfast, Lunch, Dinner)",
        "Kayaking through limestone caves and swimming",
        "Hoi An Ancient Town guided walking tour",
        "Vietnam E-Visa Approval Letter and Processing"
      ],
      highlights: [
        "Sunset party and cooking class on cruise sundeck",
        "Lantern making workshop in Hoi An",
        "Authentic egg coffee tasting tour in Hanoi"
      ],
      featured: false
    },
    {
      id: "pkg-6",
      title: "Tokyo & Kyoto Sakura Journey",
      slug: "japan-sakura",
      duration: "6N/7D",
      badge: "Exclusive",
      badgeColor: "orange",
      price: 154999,
      currency: "₹",
      priceUnit: "per person",
      destination: "Japan",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
      description: "Tokyo neon lights, Mt. Fuji views from Hakone and serene bamboo groves in Kyoto.",
      inclusions: [
        "3 Nights Shinjuku Tokyo + 3 Nights Gion Kyoto 4-Star Hotel",
        "Shinkansen Bullet Train Ticket (Tokyo to Kyoto)",
        "Mt. Fuji & Lake Ashi Sightseeing Day Tour with Cable Car",
        "Kyoto Arashiyama Bamboo Grove & Fushimi Inari Shrine Tour",
        "7-Day Pocket Wi-Fi Router with unlimited data",
        "Japan Tourist Single Entry Visa filing"
      ],
      highlights: [
        "Bullet train ride at 300 km/h past Mount Fuji",
        "Traditional tea ceremony experience in Kyoto",
        "Guided Shibuya Crossing and Harajuku walk"
      ],
      featured: false
    }
  ],

  visas: [
    {
      id: "visa-1",
      country: "Europe (Schengen)",
      region: "Europe",
      flag: "🇪🇺",
      type: "Tourist & Business",
      processingTime: "15 - 20 working days",
      validity: "Up to 5 years (Multiple Entry)",
      govtFee: "€90 (~₹8,200)",
      serviceFee: "₹3,999",
      popular: true,
      description: "Access 27 European countries (France, Germany, Italy, Switzerland, Spain, etc.) with a single visa.",
      requirements: [
        "Valid Passport with minimum 2 blank pages & 6 months validity",
        "Bank statements of the last 6 months stamped by the bank",
        "Income Tax Returns (ITR-V) for the last 3 assessment years",
        "Confirmed round-trip flight reservations & hotel bookings",
        "Detailed day-wise travel itinerary & cover letter",
        "Travel medical insurance covering minimum €30,000"
      ]
    },
    {
      id: "visa-2",
      country: "United Kingdom",
      region: "Europe",
      flag: "🇬🇧",
      type: "Standard Visitor Visa",
      processingTime: "10 - 15 working days",
      validity: "6 Months, 2 Years or 5 Years",
      govtFee: "£115 (~₹12,200)",
      serviceFee: "₹3,499",
      popular: true,
      description: "Fast-track UK tourist and business visitor visa processing with accurate financial dossier curation.",
      requirements: [
        "Original Passport (valid for 6 months beyond intended stay)",
        "Employment confirmation letter, salary slips for last 3 months",
        "6-month bank statement showing sufficient liquid funds",
        "Proof of accommodation and flight itinerary in the UK"
      ]
    },
    {
      id: "visa-3",
      country: "United States (USA)",
      region: "Americas",
      flag: "🇺🇸",
      type: "B1/B2 Visitor Visa",
      processingTime: "Slot dependent (Fast-track tracking)",
      validity: "10 Years (Multiple Entry)",
      govtFee: "$185 (~₹15,400)",
      serviceFee: "₹4,999",
      popular: true,
      description: "Specialized DS-160 application drafting, early appointment slot monitoring, and 1-on-1 mock interview.",
      requirements: [
        "Original Passport with validity of at least 6 months",
        "Confirmation page of application form DS-160",
        "Appointment confirmation letter",
        "Financial & property documents demonstrating strong home ties",
        "Employment records, tax returns, and travel plan"
      ]
    },
    {
      id: "visa-4",
      country: "United Arab Emirates (Dubai)",
      region: "Middle East",
      flag: "🇦🇪",
      type: "Tourist E-Visa (30/60 Days)",
      processingTime: "24 - 48 hours",
      validity: "30 or 60 Days Single/Multiple",
      govtFee: "₹6,800 (including mandatory insurance)",
      serviceFee: "₹999",
      popular: true,
      description: "100% paperless electronic visa issued directly in your email inbox within 1 to 2 business days.",
      requirements: [
        "Color scan of passport first and last page (min 6 months validity)",
        "Recent passport-size photo with white background",
        "Confirmed return flight ticket"
      ]
    },
    {
      id: "visa-5",
      country: "Singapore",
      region: "Asia",
      flag: "🇸🇬",
      type: "Tourist E-Visa",
      processingTime: "3 - 5 working days",
      validity: "30 Days to 2 Years Multiple",
      govtFee: "SGD 30 (~₹1,900)",
      serviceFee: "₹1,499",
      popular: false,
      description: "Direct submission through Singapore authorized visa partner agency with high approval rate.",
      requirements: [
        "Clear scanned copy of passport bio pages",
        "Passport photo 35mm x 45mm matte finish white background",
        "Confirmed return air tickets & hotel booking confirmation",
        "Bank statement of last 3 months with bank seal"
      ]
    },
    {
      id: "visa-6",
      country: "Australia",
      region: "Oceania",
      flag: "🇦🇺",
      type: "Visitor Subclass 600",
      processingTime: "15 - 25 working days",
      validity: "3 Months, 6 Months or 1 Year",
      govtFee: "AUD 190 (~₹10,500)",
      serviceFee: "₹3,999",
      popular: false,
      description: "Australian online immigration account management, biometric advice, and document validation.",
      requirements: [
        "Original passport copy of all stamped pages",
        "Bank statements for last 6 months + Income tax returns 3 yrs",
        "Employment proof / business registration documents",
        "Leave sanction letter from employer"
      ]
    },
    {
      id: "visa-7",
      country: "Japan",
      region: "Asia",
      flag: "🇯🇵",
      type: "Tourist & Business",
      processingTime: "5 - 7 working days",
      validity: "Single or Double Entry (3 Months)",
      govtFee: "₹500 Govt + VFS Fee",
      serviceFee: "₹2,499",
      popular: true,
      description: "Hassle-free Japan tourist visa with day-by-day travel plan (Keirohyo) drafting in embassy format.",
      requirements: [
        "Valid passport with at least 2 blank pages",
        "Completed visa application form with 2x2 photo",
        "Official itinerary in Japan format (Schedule of Stay)",
        "Last 1 year ITR and 6-month bank statements"
      ]
    }
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Rohit & Ananya Verma",
      role: "Honeymooners, Maldives",
      comment: "OneLife handled both our Maldives luxury package and all documentation seamlessly. The overwater villa recommended by their consultant was out of this world!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      trip: "Maldives Escape"
    },
    {
      id: "test-2",
      name: "Siddharth Mehta",
      role: "Family of 4, Dubai",
      comment: "Our UAE visas arrived in 24 hours, and our Burj Khalifa VIP tickets + desert safari were handled without a single hiccup. Truly honest pricing with no hidden charges.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      trip: "Dubai City & Desert"
    },
    {
      id: "test-3",
      name: "Pooja Kulkarni",
      role: "Solo Traveler, Schengen Visa",
      comment: "I had two previous Schengen visa rejections from other agencies. OneLife restructured my entire cover letter and financial documents. My French Schengen visa was granted for 2 years!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      trip: "France & Swiss Alps"
    }
  ],

  enquiries: [
    {
      id: "enq-101",
      fullName: "Aarav Sharma",
      phone: "+91 98765 43210",
      email: "aarav.sharma@gmail.com",
      interest: "Both (Visa + Package)",
      destination: "Maldives, Dubai, Europe",
      travelDate: "2026-11-20",
      travelers: "2",
      notes: "Honeymoon in late November, budget around 2.5 lakhs.",
      status: "New",
      createdAt: "2026-10-31T09:30:00.000Z"
    },
    {
      id: "enq-102",
      fullName: "Neha Kapoor",
      phone: "+91 98111 22334",
      email: "neha.k@outlook.com",
      interest: "Visa",
      destination: "Schengen / Switzerland",
      travelDate: "2026-12-15",
      travelers: "1",
      notes: "Need urgent appointment for Switzerland tourist visa for December vacation.",
      status: "In Progress",
      createdAt: "2026-10-30T14:15:00.000Z"
    }
  ]
};

