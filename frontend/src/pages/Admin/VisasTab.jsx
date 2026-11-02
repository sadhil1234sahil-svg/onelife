import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Plus, Edit2, Trash2, Clock, Calendar, Check, Globe } from 'lucide-react';

export default function VisasTab() {
  const { visas, createVisa, updateVisa, deleteVisa } = useSite();
  const [editingVisa, setEditingVisa] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState({
    country: '',
    region: 'Europe',
    flag: '🌍',
    type: 'Tourist & Business',
    processingTime: '10 - 15 working days',
    validity: 'Up to 5 years',
    govtFee: '€90 (~₹8,200)',
    serviceFee: '₹3,999',
    popular: false,
    description: '',
    requirements: ''
  });

  const openAddModal = () => {
    setFormData({
      country: '',
      region: 'Europe',
      flag: '🌍',
      type: 'Tourist & Business',
      processingTime: '10 - 15 working days',
      validity: '6 Months',
      govtFee: '₹5,000',
      serviceFee: '₹2,499',
      popular: false,
      description: '',
      requirements: 'Valid Passport (min 6 months)\n6-Month Bank Statement with seal\nConfirmed flight reservations\nHotel vouchers\nTravel Insurance'
    });
    setEditingVisa(null);
    setIsAdding(true);
  };

  const openEditModal = (visa) => {
    setFormData({
      country: visa.country || '',
      region: visa.region || 'Europe',
      flag: visa.flag || '🌍',
      type: visa.type || 'Tourist & Business',
      processingTime: visa.processingTime || '',
      validity: visa.validity || '',
      govtFee: visa.govtFee || '',
      serviceFee: visa.serviceFee || '',
      popular: !!visa.popular,
      description: visa.description || '',
      requirements: Array.isArray(visa.requirements) ? visa.requirements.join('\n') : ''
    });
    setEditingVisa(visa);
    setIsAdding(false);
  };

  const closeModal = () => {
    setIsAdding(false);
    setEditingVisa(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const visaPayload = {
      country: formData.country,
      region: formData.region,
      flag: formData.flag,
      type: formData.type,
      processingTime: formData.processingTime,
      validity: formData.validity,
      govtFee: formData.govtFee,
      serviceFee: formData.serviceFee,
      popular: formData.popular,
      description: formData.description,
      requirements: formData.requirements.split('\n').map(s => s.trim()).filter(Boolean)
    };

    if (editingVisa) {
      await updateVisa(editingVisa.id, visaPayload);
    } else {
      await createVisa(visaPayload);
    }
    closeModal();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this visa service?')) {
      await deleteVisa(id);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-neutral-900">Visa Services</h3>
          <p className="text-xs text-neutral-500">Configure country visas, checklists, and embassy pricing</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-[#ff6b00] hover:bg-[#e65900] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Visa Country</span>
        </button>
      </div>

      {/* Visas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div
            key={visa.id}
            className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{visa.flag || '🌍'}</span>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900">{visa.country}</h4>
                    <span className="text-[11px] text-neutral-500">{visa.type} • {visa.region}</span>
                  </div>
                </div>
                {visa.popular && (
                  <span className="bg-[#bbf451] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              <p className="text-xs text-neutral-600 line-clamp-2 mb-4 leading-relaxed">
                {visa.description}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs bg-stone-50 p-2.5 rounded-xl border border-stone-100 mb-4">
                <div>
                  <span className="text-neutral-400 block text-[10px]">Processing</span>
                  <span className="font-semibold text-neutral-800">{visa.processingTime}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px]">Service Fee</span>
                  <span className="font-bold text-[#ff6b00]">{visa.serviceFee}</span>
                </div>
              </div>

              <div className="text-[11px] text-neutral-500">
                <span>{visa.requirements?.length || 0} documents in checklist</span>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => openEditModal(visa)}
                className="text-xs font-bold text-neutral-700 hover:text-black flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-stone-200"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(visa.id)}
                className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-red-50"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Visa Modal */}
      {(isAdding || editingVisa) && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl my-8">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-stone-100">
              <h3 className="text-xl font-bold text-neutral-900">
                {editingVisa ? `Edit: ${editingVisa.country}` : 'Add New Visa Service'}
              </h3>
              <button onClick={closeModal} className="text-neutral-400 hover:text-neutral-600">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-neutral-700 font-bold mb-1">Country Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Germany (Schengen)"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Flag Emoji</label>
                  <input
                    type="text"
                    value={formData.flag}
                    onChange={(e) => setFormData({ ...formData, flag: e.target.value })}
                    placeholder="🇩🇪"
                    className="w-full p-2.5 rounded-xl border border-stone-200 text-center text-lg focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Region</label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  >
                    <option value="Europe">Europe</option>
                    <option value="Middle East">Middle East</option>
                    <option value="Asia">Asia</option>
                    <option value="Americas">Americas</option>
                    <option value="Oceania">Oceania</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Visa Type</label>
                  <input
                    type="text"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    placeholder="Tourist & Business"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Processing Time</label>
                  <input
                    type="text"
                    value={formData.processingTime}
                    onChange={(e) => setFormData({ ...formData, processingTime: e.target.value })}
                    placeholder="10 - 15 working days"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Validity</label>
                  <input
                    type="text"
                    value={formData.validity}
                    onChange={(e) => setFormData({ ...formData, validity: e.target.value })}
                    placeholder="Up to 5 years"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Consultancy Fee (Service)</label>
                  <input
                    type="text"
                    value={formData.serviceFee}
                    onChange={(e) => setFormData({ ...formData, serviceFee: e.target.value })}
                    placeholder="₹3,999"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Govt / Embassy Fee</label>
                  <input
                    type="text"
                    value={formData.govtFee}
                    onChange={(e) => setFormData({ ...formData, govtFee: e.target.value })}
                    placeholder="€90 (~₹8,200)"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="popCheck"
                  checked={formData.popular}
                  onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                  className="w-4 h-4 text-[#ff6b00] rounded"
                />
                <label htmlFor="popCheck" className="text-neutral-700 font-semibold cursor-pointer">
                  Mark as Popular Visa (Highlight with Lime badge)
                </label>
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Description</label>
                <textarea
                  rows="2"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Fast-track appointment scheduling and document auditing..."
                  className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                ></textarea>
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Document Checklist (1 per line)</label>
                <textarea
                  rows="4"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Original Passport (valid 6 months)&#10;Bank Statement 6 months&#10;Income Tax Returns 3 years"
                  className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                ></textarea>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#ff6b00] hover:bg-[#e65900] text-white font-bold py-2.5 rounded-xl shadow"
                >
                  {editingVisa ? 'Save Changes' : 'Create Visa'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 rounded-xl text-neutral-700 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

