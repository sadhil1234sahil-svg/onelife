import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Users, 
  CheckCircle, 
  Compass, 
  HeartHandshake, 
  ArrowRight 
} from 'lucide-react';

export default function About() {
  const { settings, openEnquiryModal } = useSite();

  const brandName = settings?.brandName || 'OneLife Tourism';

  const team = [
    {
      name: "Kabir Malhotra",
      role: "Co-Founder & Head of Visa Operations",
      bio: "12+ years in consular documentation and immigration advisory. Former Schengen and UK dossier auditor.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Tara Singhania",
      role: "Co-Founder & Chief Experience Curator",
      bio: "Has traveled to 38 countries. Personally vets boutique luxury stays, private yacht charters, and local dining experiences.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Rohan Deshmukh",
      role: "Lead Schengen & US Visa Specialist",
      bio: "Expert in complex financial profiles, freelance portfolios, and US DS-160 interview preparation.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Ananya Sen",
      role: "Senior Holiday Itinerary Designer",
      bio: "Specializes in tailor-made honeymoon journeys across Maldives, Switzerland, and Japanese cultural explorations.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf6] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ff6b00] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-[#ff6b00]" />
            <span>OUR MISSION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight mb-6">
            Two crafts, one team.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            We founded OneLife Tourism with a single conviction: travel should be exhilarating, not buried under bureaucratic anxiety. Visas handled with forensic precision, holidays designed with authentic passion.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200/80 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                Why most agencies break down — and why we do both
              </h2>
              <p>
                In the conventional travel industry, there is a giant disconnect: you book a holiday package with a tour operator, only to be handed off to an outsourced visa agent who doesn't understand your flight schedule, your family's financial profile, or your hotel vouchers.
              </p>
              <p>
                A single typo on a visa application can ruin a non-refundable ₹3,00,000 holiday.
              </p>
              <p>
                At <strong>OneLife Tourism</strong>, our visa consultants and holiday planners work in sync at the very same table. When your holiday is designed, the visa requirements are accounted for from day one — the appointment slots, financial thresholds, embassy rules, and flight holding buffers.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="OneLife team working together"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#bbf451] text-neutral-950 font-bold p-4 rounded-2xl shadow-md text-xs sm:text-sm">
                "One team for your paperwork <br/>and your passport stamps."
              </div>
            </div>

          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#ff6b00] flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              Forensic Dossier Quality
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We never use shady dummy tickets or generic cover letters. Every application is submitted with verified reservations and thorough financial proofs for maximum approval rates.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-lime-100 text-lime-800 flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              Handpicked Stays & Partners
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We don't sell cookie-cutter 50-person bus tours. Our packages feature boutique villas, verified 4/5-star properties, and licensed English-speaking private chauffeurs.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              24/7 On-Trip Concierge
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              When you take off, you receive a direct WhatsApp hotline to your dedicated trip manager who monitors flight gates, transfers, and reservations until you touch down back home.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ff6b00] text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
              <Users className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>MEET THE SPECIALISTS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900">
              The people behind your journeys
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-base font-bold text-neutral-900">{member.name}</h4>
                  <p className="text-xs font-semibold text-[#ff6b00] mb-2">{member.role}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-[#141210] text-white rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to plan your next chapter?
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto mb-8">
            Tell us where you want to travel, and our team will get your visa eligibility assessment and curated itinerary ready within 24 hours.
          </p>
          <button
            onClick={() => openEnquiryModal({ interest: 'Both' })}
            className="bg-[#bbf451] hover:bg-[#a6e23b] text-neutral-950 px-8 py-3.5 rounded-full font-bold text-sm shadow transition-all"
          >
            Start Your Free Consultation
          </button>
        </div>

      </div>
    </div>
  );
}

