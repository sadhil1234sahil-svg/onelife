import React, { useState, useEffect } from 'react';
import { useSite } from '../context/SiteContext';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';

export default function EnquiryModal() {
  const { modalOpen, modalPrefill, closeEnquiryModal, submitEnquiry } = useSite();

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
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (modalPrefill) {
      setFormData(prev => ({
        ...prev,
        interest: modalPrefill.interest || 'Both (Visa + Package)',
        destination: modalPrefill.destination || '',
        notes: modalPrefill.notes || ''
      }));
    }
    if (modalOpen) {
      setSuccess(false);
      setErrorMsg('');
    }
  }, [modalOpen, modalPrefill]);

  if (!modalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }
    setSubmitting(true);
    setErrorMsg('');

    const res = await submitEnquiry(formData);
    setSubmitting(false);
    if (res.success) {
      setSuccess(true);
    } else {
      setErrorMsg(res.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-100 transition-all transform animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeEnquiryModal}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#bbf451]/20 text-lime-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">Enquiry Received!</h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. One of our dedicated visa and travel consultants will call you within one business day.
            </p>
            <div className="pt-4">
              <button
                onClick={closeEnquiryModal}
                className="bg-neutral-900 hover:bg-black text-white px-8 py-3 rounded-full text-sm font-semibold shadow transition-all"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-brand-orange mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personalized Consultation</span>
              </div>
              <h3 className="text-2xl font-extrabold text-neutral-900">Plan my trip</h3>
              <p className="text-xs text-neutral-500 mt-1">
                Free assessment. No spam, ever. We take care of paperwork & stays.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    Full name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-neutral-400 bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-neutral-400 bg-stone-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-1">
                  Email <span className="text-neutral-400 font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-neutral-400 bg-stone-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    I'm interested in
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-neutral-400 bg-stone-50/50"
                  >
                    <option value="Both (Visa + Package)">Both (Visa + Package)</option>
                    <option value="Visa Consultancy">Visa Consultancy only</option>
                    <option value="Holiday Package">Holiday Package only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    Destination <span className="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="Maldives, Dubai, Europe..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-neutral-400 bg-stone-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    Travel around <span className="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-neutral-400 bg-stone-50/50"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    Travellers <span className="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-neutral-400 bg-stone-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-1">
                  Anything else? <span className="text-neutral-400 font-normal">(optional)</span>
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Honeymoon in late Nov, budget ₹1.5L per person..."
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-neutral-400 bg-stone-50/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#bbf451] hover:bg-[#a6e23b] text-neutral-950 font-bold py-3.5 rounded-full shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
              >
                {submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send my enquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

