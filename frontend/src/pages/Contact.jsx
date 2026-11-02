import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';

export default function Contact() {
  const { settings, submitEnquiry } = useSite();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interest: 'Both (Visa + Package)',
    destination: '',
    travelDate: '',
    travelers: '2',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const brandPhone = settings?.contact?.phone || '+91 98765 43210';
  const brandPhoneRaw = settings?.contact?.phoneRaw || '+919876543210';
  const email = settings?.contact?.email || 'hello@onelifetourism.com';
  const address = settings?.contact?.address || 'Suite 402, Signature Tower, Link Road, Andheri West, Mumbai, Maharashtra 400053';
  const officeHours = settings?.contact?.officeHours || 'Mon – Sat: 9:30 AM – 7:30 PM (IST)';
  const whatsappNum = settings?.contact?.whatsapp?.replace(/[^0-9]/g, '') || '919876543210';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and phone number.');
      return;
    }
    setSubmitting(true);
    setErrorMsg('');

    const res = await submitEnquiry(formData);
    setSubmitting(false);
    if (res.success) {
      setSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        interest: 'Both (Visa + Package)',
        destination: '',
        travelDate: '',
        travelers: '2',
        notes: ''
      });
    } else {
      setErrorMsg(res.message || 'Submission failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf6] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ff6b00] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Building2 className="w-4 h-4 text-[#ff6b00]" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
            We're here to help your journey begin.
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Drop by our Mumbai office for a personalized coffee consultation, chat with our visa desk on WhatsApp, or send an enquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
              <h3 className="text-xl font-bold text-neutral-900">
                Direct Channels
              </h3>

              <div className="space-y-5 text-sm">
                <a
                  href={`tel:${brandPhoneRaw}`}
                  className="flex items-start gap-4 group p-3 rounded-2xl hover:bg-stone-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff6b00] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block font-medium">Call Us</span>
                    <span className="text-base font-bold text-neutral-900 group-hover:text-[#ff6b00] transition-colors">
                      {brandPhone}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsappNum}?text=Hi%20OneLife%20Tourism,%20I%20would%20like%20to%20inquire%20about%20a%20trip.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 group p-3 rounded-2xl hover:bg-stone-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block font-medium">WhatsApp Helpdesk</span>
                    <span className="text-base font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors">
                      Chat on WhatsApp
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-4 group p-3 rounded-2xl hover:bg-stone-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block font-medium">Email Desk</span>
                    <span className="text-sm font-bold text-neutral-900 group-hover:text-blue-600 transition-colors break-all">
                      {email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-2xl bg-stone-50 border border-stone-100">
                  <div className="w-10 h-10 rounded-xl bg-stone-200 text-neutral-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block font-medium">Office Hours</span>
                    <span className="text-xs font-semibold text-neutral-800">
                      {officeHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-[#141210] text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#26221f]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#bbf451] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>HEADQUARTERS</span>
              </div>
              <h4 className="text-lg font-bold mb-2">OneLife Tourism Experience Centre</h4>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                {address}
              </p>
              <div className="p-3 rounded-xl bg-[#1f1c19] text-xs text-stone-400 flex items-center gap-2 border border-[#332e29]">
                <ShieldCheck className="w-4 h-4 text-[#bbf451] shrink-0" />
                <span>Walk-ins welcome for Schengen & UK biometric document audits.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80">
              <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">
                Send an Enquiry
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Tell us about your travel plans or visa query. Our destination specialists respond within one business day.
              </p>

              {submitted ? (
                <div className="bg-[#bbf451]/20 p-8 rounded-3xl text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-2xl font-bold text-neutral-900">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
                    Thank you. We have logged your request in our system. A travel consultant will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-neutral-900 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00] bg-stone-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00] bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-1">
                        Email Address <span className="text-neutral-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00] bg-stone-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-1">
                        I am inquiring about
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00] bg-stone-50/50"
                      >
                        <option value="Both (Visa + Package)">Both (Visa + Holiday Package)</option>
                        <option value="Visa Consultancy">Visa Consultancy only</option>
                        <option value="Holiday Package">Holiday Package only</option>
                        <option value="Corporate / Group Travel">Corporate / Group Travel</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-1">
                        Preferred Destination
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Maldives, Switzerland, Dubai"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00] bg-stone-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-semibold mb-1">
                        Approximate Travel Date
                      </label>
                      <input
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00] bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-1">
                      Your Message / Specific Requirements
                    </label>
                    <textarea
                      rows="4"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share details like number of travelers, budget preferences, or specific visa requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00] bg-stone-50/50 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-[#ff7a00] to-[#ff5500] hover:from-[#ff8800] hover:to-[#ff4500] text-white font-bold py-3.5 rounded-full shadow-[0_4px_18px_rgba(255,107,0,0.32)] hover:shadow-[0_6px_24px_rgba(255,107,0,0.45)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

