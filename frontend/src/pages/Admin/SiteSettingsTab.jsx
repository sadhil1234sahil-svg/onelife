import React, { useState, useEffect } from 'react';
import { useSite } from '../../context/SiteContext';
import { Save, RotateCcw, Check, Sparkles, Phone, MapPin, Image } from 'lucide-react';

export default function SiteSettingsTab() {
  const { settings, updateSettings, resetToFactoryDefaults } = useSite();

  const [formData, setFormData] = useState({
    brandName: '',
    tagline: '',
    heroBadge: '',
    heroTitle: '',
    heroSubtitle: '',
    heroImage: '',
    heroSlides: [
      { id: 1, image: '/hero/hero-1.jpg', location: 'Rome, Italy', badge: 'Ancient Wonders', desc: 'Colosseum & Historic Europe' },
      { id: 2, image: '/hero/hero-2.jpg', location: 'Santorini, Greece', badge: 'Aegean Escapes', desc: 'Cliffside Calderas & Azure Seas' },
      { id: 3, image: '/hero/hero-3.jpg', location: 'Dolomites, Italy', badge: 'Alpine Expeditions', desc: 'Emerald Lakes & Mountain Horizons' }
    ],
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    addressShort: '',
    officeHours: '',
    stat1Num: '40+',
    stat1Label: 'destinations curated',
    stat2Num: '15,000+',
    stat2Label: 'visas processed',
    stat3Num: '10 yrs',
    stat3Label: 'of happy travelers',
    stat4Num: '4.9/5',
    stat4Label: 'traveler rating'
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (settings) {
      setFormData({
        brandName: settings.brandName || 'OneLife Tourism',
        tagline: settings.tagline || '',
        heroBadge: settings.heroBadge || '',
        heroTitle: settings.heroTitle || '',
        heroSubtitle: settings.heroSubtitle || '',
        heroImage: settings.heroImage || '',
        heroSlides: settings.heroSlides || [
          { id: 1, image: '/hero/hero-1.jpg', location: 'Rome, Italy', badge: 'Ancient Wonders', desc: 'Colosseum & Historic Europe' },
          { id: 2, image: '/hero/hero-2.jpg', location: 'Santorini, Greece', badge: 'Aegean Escapes', desc: 'Cliffside Calderas & Azure Seas' },
          { id: 3, image: '/hero/hero-3.jpg', location: 'Dolomites, Italy', badge: 'Alpine Expeditions', desc: 'Emerald Lakes & Mountain Horizons' }
        ],
        phone: settings.contact?.phone || '',
        whatsapp: settings.contact?.whatsapp || '',
        email: settings.contact?.email || '',
        address: settings.contact?.address || '',
        addressShort: settings.contact?.addressShort || '',
        officeHours: settings.contact?.officeHours || '',
        stat1Num: settings.stats?.[0]?.number || '40+',
        stat1Label: settings.stats?.[0]?.label || 'destinations curated',
        stat2Num: settings.stats?.[1]?.number || '15,000+',
        stat2Label: settings.stats?.[1]?.label || 'visas processed',
        stat3Num: settings.stats?.[2]?.number || '10 yrs',
        stat3Label: settings.stats?.[2]?.label || 'of happy travelers',
        stat4Num: settings.stats?.[3]?.number || '4.9/5',
        stat4Label: settings.stats?.[3]?.label || 'traveler rating'
      });
    }
  }, [settings]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSavedSuccess(false);

    const updated = {
      ...settings,
      brandName: formData.brandName,
      tagline: formData.tagline,
      heroBadge: formData.heroBadge,
      heroTitle: formData.heroTitle,
      heroSubtitle: formData.heroSubtitle,
      heroImage: formData.heroImage,
      heroSlides: formData.heroSlides,
      contact: {
        ...settings?.contact,
        phone: formData.phone,
        phoneRaw: formData.phone.replace(/[^0-9+]/g, ''),
        whatsapp: formData.whatsapp,
        whatsappDisplay: formData.whatsapp,
        email: formData.email,
        address: formData.address,
        addressShort: formData.addressShort,
        officeHours: formData.officeHours
      },
      stats: [
        { id: 1, number: formData.stat1Num, label: formData.stat1Label },
        { id: 2, number: formData.stat2Num, label: formData.stat2Label },
        { id: 3, number: formData.stat3Num, label: formData.stat3Label },
        { id: 4, number: formData.stat4Num, label: formData.stat4Label }
      ]
    };

    const res = await updateSettings(updated);
    setSaving(false);
    if (res.success) {
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  const handleReset = async () => {
    if (window.confirm('Reset all site settings, packages, and visas back to initial defaults?')) {
      await resetToFactoryDefaults();
      alert('Data reset to default successfully!');
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-neutral-900">Site Content & Settings Editor</h3>
          <p className="text-xs text-neutral-500">Edit hero headlines, stats counters, and contact details</p>
        </div>

        <button
          onClick={handleReset}
          className="text-xs font-semibold px-4 py-2 rounded-full border border-stone-300 text-stone-600 hover:bg-stone-100 flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset to Defaults</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Settings saved and published successfully! Check your website to see the changes live.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section 1: Hero & Brand Copy */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#ff6b00] flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Homepage Hero Banner</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-neutral-700 font-bold mb-1">Brand Name</label>
              <input
                type="text"
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
              />
            </div>
            <div>
              <label className="block text-neutral-700 font-bold mb-1">Hero Pill / Tagline</label>
              <input
                type="text"
                value={formData.heroBadge}
                onChange={(e) => setFormData({ ...formData, heroBadge: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="block text-neutral-700 font-bold mb-1">Main Hero Headline</label>
            <input
              type="text"
              value={formData.heroTitle}
              onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00] text-sm font-semibold"
            />
          </div>

          <div className="text-xs">
            <label className="block text-neutral-700 font-bold mb-1">Hero Subtitle</label>
            <textarea
              rows="2"
              value={formData.heroSubtitle}
              onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
            ></textarea>
          </div>

          <div className="text-xs">
            <label className="block text-neutral-700 font-bold mb-1">Hero Fallback Image URL</label>
            <input
              type="text"
              value={formData.heroImage}
              onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
            />
          </div>

          {/* Hero Background Slider Manager */}
          <div className="pt-2 border-t border-stone-200/80">
            <label className="block text-neutral-800 font-bold text-xs uppercase tracking-wider mb-2">
              Hero Background Slider Images ({formData.heroSlides?.length || 0} Slides)
            </label>
            <div className="space-y-3">
              {(formData.heroSlides || []).map((slide, sIdx) => (
                <div key={slide.id || sIdx} className="p-3 bg-stone-50 rounded-2xl border border-stone-200/80 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <div className="w-20 h-14 rounded-xl overflow-hidden bg-neutral-900 border border-stone-300 shrink-0 shadow-inner">
                    <img 
                      src={slide.image} 
                      alt={`Slide ${sIdx + 1}`} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full text-xs">
                    <div>
                      <span className="text-[10px] text-neutral-500 font-semibold block mb-0.5">Image Path / URL</span>
                      <input
                        type="text"
                        value={slide.image}
                        onChange={(e) => {
                          const updated = [...formData.heroSlides];
                          updated[sIdx] = { ...updated[sIdx], image: e.target.value };
                          setFormData({ ...formData, heroSlides: updated });
                        }}
                        className="w-full p-2 rounded-lg border border-stone-200 text-xs font-mono"
                        placeholder="/hero/hero-1.jpg"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 font-semibold block mb-0.5">Location Name</span>
                      <input
                        type="text"
                        value={slide.location}
                        onChange={(e) => {
                          const updated = [...formData.heroSlides];
                          updated[sIdx] = { ...updated[sIdx], location: e.target.value };
                          setFormData({ ...formData, heroSlides: updated });
                        }}
                        className="w-full p-2 rounded-lg border border-stone-200 text-xs"
                        placeholder="Rome, Italy"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 font-semibold block mb-0.5">Description / Tagline</span>
                      <input
                        type="text"
                        value={slide.desc}
                        onChange={(e) => {
                          const updated = [...formData.heroSlides];
                          updated[sIdx] = { ...updated[sIdx], desc: e.target.value };
                          setFormData({ ...formData, heroSlides: updated });
                        }}
                        className="w-full p-2 rounded-lg border border-stone-200 text-xs"
                        placeholder="Colosseum & Historic Europe"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Stats Strip */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#ff6b00]">
            Key Performance Metrics (Stats Bar)
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
              <label className="block text-neutral-500 font-bold mb-1">Stat 1</label>
              <input
                type="text"
                value={formData.stat1Num}
                onChange={(e) => setFormData({ ...formData, stat1Num: e.target.value })}
                className="w-full p-2 rounded-lg border border-stone-200 font-bold mb-1"
              />
              <input
                type="text"
                value={formData.stat1Label}
                onChange={(e) => setFormData({ ...formData, stat1Label: e.target.value })}
                className="w-full p-1.5 rounded-lg border border-stone-200 text-neutral-600 text-[11px]"
              />
            </div>

            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
              <label className="block text-neutral-500 font-bold mb-1">Stat 2</label>
              <input
                type="text"
                value={formData.stat2Num}
                onChange={(e) => setFormData({ ...formData, stat2Num: e.target.value })}
                className="w-full p-2 rounded-lg border border-stone-200 font-bold mb-1"
              />
              <input
                type="text"
                value={formData.stat2Label}
                onChange={(e) => setFormData({ ...formData, stat2Label: e.target.value })}
                className="w-full p-1.5 rounded-lg border border-stone-200 text-neutral-600 text-[11px]"
              />
            </div>

            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
              <label className="block text-neutral-500 font-bold mb-1">Stat 3</label>
              <input
                type="text"
                value={formData.stat3Num}
                onChange={(e) => setFormData({ ...formData, stat3Num: e.target.value })}
                className="w-full p-2 rounded-lg border border-stone-200 font-bold mb-1"
              />
              <input
                type="text"
                value={formData.stat3Label}
                onChange={(e) => setFormData({ ...formData, stat3Label: e.target.value })}
                className="w-full p-1.5 rounded-lg border border-stone-200 text-neutral-600 text-[11px]"
              />
            </div>

            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
              <label className="block text-neutral-500 font-bold mb-1">Stat 4</label>
              <input
                type="text"
                value={formData.stat4Num}
                onChange={(e) => setFormData({ ...formData, stat4Num: e.target.value })}
                className="w-full p-2 rounded-lg border border-stone-200 font-bold mb-1"
              />
              <input
                type="text"
                value={formData.stat4Label}
                onChange={(e) => setFormData({ ...formData, stat4Label: e.target.value })}
                className="w-full p-1.5 rounded-lg border border-stone-200 text-neutral-600 text-[11px]"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Contact & Business Details */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#ff6b00] flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Contact Information & Hours</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-neutral-700 font-bold mb-1">Phone Number</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
              />
            </div>
            <div>
              <label className="block text-neutral-700 font-bold mb-1">WhatsApp Number</label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
              />
            </div>
            <div>
              <label className="block text-neutral-700 font-bold mb-1">Email Desk</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-neutral-700 font-bold mb-1">Short Address (for Footer)</label>
              <input
                type="text"
                value={formData.addressShort}
                onChange={(e) => setFormData({ ...formData, addressShort: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
              />
            </div>
            <div>
              <label className="block text-neutral-700 font-bold mb-1">Office Operating Hours</label>
              <input
                type="text"
                value={formData.officeHours}
                onChange={(e) => setFormData({ ...formData, officeHours: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="block text-neutral-700 font-bold mb-1">Full Office Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
            />
          </div>
        </div>

        {/* Submit Bar */}
        <div className="sticky bottom-4 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-200 flex items-center justify-between">
          <span className="text-xs text-neutral-500">
            Clicking Save will update the live site instantly without code rebuilds.
          </span>
          <button
            type="submit"
            disabled={saving}
            className="bg-[#ff6b00] hover:bg-[#e65900] text-white font-bold px-8 py-3 rounded-full text-xs shadow transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save & Publish Changes'}</span>
          </button>
        </div>

      </form>
    </div>
  );
}

