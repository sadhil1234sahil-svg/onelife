import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Plus, Edit2, Trash2, Star } from 'lucide-react';

export default function TestimonialsTab() {
  const { testimonials, createTestimonial, updateTestimonial, deleteTestimonial } = useSite();
  const [editingItem, setEditingItem] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    comment: '',
    rating: 5,
    avatar: '',
    trip: ''
  });

  const openAdd = () => {
    setFormData({
      name: '',
      role: 'Family Vacation, Dubai',
      comment: '',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      trip: 'Dubai City & Desert'
    });
    setEditingItem(null);
    setIsAdding(true);
  };

  const openEdit = (item) => {
    setFormData({
      name: item.name || '',
      role: item.role || '',
      comment: item.comment || '',
      rating: item.rating || 5,
      avatar: item.avatar || '',
      trip: item.trip || ''
    });
    setEditingItem(item);
    setIsAdding(false);
  };

  const closeModal = () => {
    setIsAdding(false);
    setEditingItem(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await updateTestimonial(editingItem.id, formData);
    } else {
      await createTestimonial(formData);
    }
    closeModal();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this client review?')) {
      await deleteTestimonial(id);
    }
  };

  return (
    <div className="space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-neutral-900">Client Reviews & Testimonials</h3>
          <p className="text-xs text-neutral-500">Manage traveler reviews shown on the homepage</p>
        </div>
        <button
          onClick={openAdd}
          className="bg-[#ff6b00] hover:bg-[#e65900] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow"
        >
          <Plus className="w-4 h-4" />
          <span>Add Review</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(item.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs text-neutral-700 italic leading-relaxed mb-4">
                "{item.comment}"
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 pt-3 border-t border-stone-100 mb-3">
                <img
                  src={item.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
                  alt={item.name}
                  className="w-9 h-9 rounded-full object-cover border border-stone-200"
                />
                <div>
                  <h5 className="text-xs font-bold text-neutral-900">{item.name}</h5>
                  <p className="text-[11px] text-neutral-500">{item.role}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                <button
                  onClick={() => openEdit(item)}
                  className="text-xs font-bold text-neutral-600 hover:text-black flex items-center gap-1"
                >
                  <Edit2 className="w-3 h-3" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(isAdding || editingItem) && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
              <h3 className="text-lg font-bold text-neutral-900">
                {editingItem ? 'Edit Testimonial' : 'Add Testimonial'}
              </h3>
              <button onClick={closeModal} className="text-neutral-400">✕</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Traveler Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rohit Verma"
                    className="w-full p-2.5 rounded-xl border border-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Role / Trip *</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Honeymooners, Maldives"
                    className="w-full p-2.5 rounded-xl border border-stone-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-700 font-bold mb-1">Review Comment *</label>
                <textarea
                  rows="3"
                  required
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-stone-200"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Rating (Stars)</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-xl border border-stone-200"
                  >
                    <option value="5">5 Stars (Excellent)</option>
                    <option value="4">4 Stars (Good)</option>
                    <option value="3">3 Stars (Average)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-700 font-bold mb-1">Avatar Image URL</label>
                  <input
                    type="url"
                    value={formData.avatar}
                    onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-200"
                  />
                </div>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#ff6b00] text-white font-bold py-2.5 rounded-xl shadow"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2.5 bg-stone-100 rounded-xl"
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

