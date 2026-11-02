import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Plus, Edit2, Trash2, Check, Star, Image, MapPin, Tag } from 'lucide-react';

export default function PackagesTab() {
  const { packages, createPackage, updatePackage, deletePackage } = useSite();
  const [editingPkg, setEditingPkg] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    destination: '',
    duration: '4N/5D',
    price: 69999,
    currency: '₹',
    priceUnit: 'per person',
    badge: 'Featured',
    category: 'Honeymoon',
    image: '',
    description: '',
    inclusions: '',
    highlights: '',
    featured: false
  });

  const openAddModal = () => {
    setFormData({
      title: '',
      destination: '',
      duration: '4N/5D',
      price: 59999,
      currency: '₹',
      priceUnit: 'per person',
      badge: 'Popular',
      category: 'Honeymoon',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      description: '',
      inclusions: '4-Star Luxury Stay\nBreakfast Included\nAirport Transfers\nSightseeing Tour',
      highlights: 'Private beach access\nChauffeured car',
      featured: false
    });
    setEditingPkg(null);
    setIsAdding(true);
  };

  const openEditModal = (pkg) => {
    setFormData({
      title: pkg.title || '',
      destination: pkg.destination || '',
      duration: pkg.duration || '4N/5D',
      price: pkg.price || 0,
      currency: pkg.currency || '₹',
      priceUnit: pkg.priceUnit || 'per person',
      badge: pkg.badge || '',
      category: pkg.category || 'Honeymoon',
      image: pkg.image || '',
      description: pkg.description || '',
      inclusions: Array.isArray(pkg.inclusions) ? pkg.inclusions.join('\n') : '',
      highlights: Array.isArray(pkg.highlights) ? pkg.highlights.join('\n') : '',
      featured: !!pkg.featured
    });
    setEditingPkg(pkg);
    setIsAdding(false);
  };

  const closeModal = () => {
    setIsAdding(false);
    setEditingPkg(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pkgPayload = {
      title: formData.title,
      destination: formData.destination,
      duration: formData.duration,
      price: Number(formData.price),
      currency: formData.currency,
      priceUnit: formData.priceUnit,
      badge: formData.badge,
      category: formData.category,
      image: formData.image,
      description: formData.description,
      inclusions: formData.inclusions.split('\n').map(s => s.trim()).filter(Boolean),
      highlights: formData.highlights.split('\n').map(s => s.trim()).filter(Boolean),
      featured: formData.featured
    };

    if (editingPkg) {
      await updatePackage(editingPkg.id, pkgPayload);
    } else {
      await createPackage(pkgPayload);
    }
    closeModal();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this holiday package?')) {
      await deletePackage(id);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-neutral-900">Holiday Packages</h3>
          <p className="text-xs text-neutral-500">Manage all packages displayed on Home and Tourism pages</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-[#ff6b00] hover:bg-[#e65900] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Package</span>
        </button>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 bg-stone-100">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-[#bbf451] text-black font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                  {pkg.badge || pkg.category}
                </div>
                {pkg.featured && (
                  <div className="absolute top-3 right-3 bg-neutral-900 text-[#bbf451] font-bold text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Home Featured</span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-bold text-neutral-900">{pkg.title}</h4>
                  <span className="text-xs font-bold text-stone-500">{pkg.duration}</span>
                </div>
                <p className="text-xs text-neutral-500 mb-2">{pkg.destination} • {pkg.category}</p>
                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                  {pkg.description}
                </p>

                <div className="text-base font-extrabold text-[#ff6b00]">
                  {pkg.currency}{pkg.price?.toLocaleString()} <span className="text-xs font-normal text-neutral-400">/ person</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => openEditModal(pkg)}
                className="text-xs font-bold text-neutral-700 hover:text-black flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-stone-200 transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(pkg.id)}
                className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {(isAdding || editingPkg) && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl my-8">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-stone-100">
              <h3 className="text-xl font-bold text-neutral-900">
                {editingPkg ? `Edit: ${editingPkg.title}` : 'Add New Holiday Package'}
              </h3>
              <button onClick={closeModal} className="text-neutral-400 hover:text-neutral-600">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Package Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Maldives Escape"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Destination *</label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Maldives"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Duration *</label>
                  <input
                    type="text"
                    required
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="4N/5D"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Price (₹) *</label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  >
                    <option value="Honeymoon">Honeymoon</option>
                    <option value="Family">Family</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Culture">Culture</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Badge Tag</label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    placeholder="e.g. Honeymoon favourite, Best seller"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  />
                </div>
                <div className="flex items-center pt-5 gap-2">
                  <input
                    type="checkbox"
                    id="featCheck"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 text-[#ff6b00] rounded"
                  />
                  <label htmlFor="featCheck" className="text-neutral-700 font-semibold cursor-pointer">
                    Feature on Homepage (Top 3)
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Image URL *</label>
                <input
                  type="url"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Description *</label>
                <textarea
                  rows="2"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Overwater villas, sunset dolphin cruises..."
                  className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Inclusions (1 per line)</label>
                  <textarea
                    rows="3"
                    value={formData.inclusions}
                    onChange={(e) => setFormData({ ...formData, inclusions: e.target.value })}
                    placeholder="4 Nights Villa&#10;Speedboat transfer&#10;Daily breakfast"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Highlights (1 per line)</label>
                  <textarea
                    rows="3"
                    value={formData.highlights}
                    onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                    placeholder="Floating breakfast&#10;Coral reef snorkel"
                    className="w-full p-2.5 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#ff6b00]"
                  ></textarea>
                </div>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#ff6b00] hover:bg-[#e65900] text-white font-bold py-2.5 rounded-xl shadow"
                >
                  {editingPkg ? 'Save Changes' : 'Create Package'}
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

