import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { 
  Search, 
  Trash2, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

export default function EnquiriesTab() {
  const { enquiries, updateEnquiryStatus, deleteEnquiry } = useSite();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [adminNoteInput, setAdminNoteInput] = useState('');

  const statuses = ['All', 'New', 'In Progress', 'Contacted', 'Converted', 'Closed'];

  const filtered = enquiries.filter(item => {
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    const s = search.toLowerCase();
    const matchesSearch = 
      item.fullName?.toLowerCase().includes(s) ||
      item.phone?.toLowerCase().includes(s) ||
      item.destination?.toLowerCase().includes(s) ||
      item.email?.toLowerCase().includes(s);
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = async (id, newStatus) => {
    await updateEnquiryStatus(id, newStatus);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      await deleteEnquiry(id);
      if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
    }
  };

  const handleSaveNote = async (id) => {
    await updateEnquiryStatus(id, undefined, adminNoteInput);
    if (selectedEnquiry) {
      setSelectedEnquiry({ ...selectedEnquiry, adminNotes: adminNoteInput });
    }
    alert('Note saved!');
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'In Progress':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Contacted':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Converted':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Closed':
        return 'bg-stone-100 text-stone-600 border-stone-200';
      default:
        return 'bg-stone-100 text-stone-700';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Filters and search */}
      <div className="bg-white rounded-2xl p-4 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {statuses.map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                statusFilter === st
                  ? 'bg-neutral-900 text-white'
                  : 'bg-stone-100 text-neutral-600 hover:bg-stone-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads by name, phone..."
            className="w-full pl-9 pr-3 py-1.5 rounded-full text-xs bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
          />
        </div>
      </div>

      {/* Main Grid: Enquiries List & Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Table / List */}
        <div className={`space-y-3 ${selectedEnquiry ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200">
              <p className="text-neutral-500 text-sm">No enquiries match your search.</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedEnquiry(item);
                  setAdminNoteInput(item.adminNotes || '');
                }}
                className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all cursor-pointer hover:shadow-md ${
                  selectedEnquiry?.id === item.id 
                    ? 'border-[#ff6b00] ring-2 ring-[#ff6b00]/10' 
                    : 'border-stone-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h4 className="text-base font-bold text-neutral-900">{item.fullName}</h4>
                    <p className="text-xs text-neutral-500 flex items-center gap-2 mt-0.5">
                      <span>{item.phone}</span>
                      {item.email && <span>• {item.email}</span>}
                    </p>
                  </div>

                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${getStatusBadge(item.status)}`}>
                    {item.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 mt-3 pt-3 border-t border-stone-100">
                  <span className="font-semibold text-neutral-800 bg-stone-100 px-2 py-0.5 rounded">
                    {item.interest}
                  </span>
                  {item.destination && (
                    <span className="text-neutral-500">
                      Destination: <strong className="text-neutral-700">{item.destination}</strong>
                    </span>
                  )}
                  {item.travelers && (
                    <span className="text-neutral-500">
                      Pax: <strong className="text-neutral-700">{item.travelers}</strong>
                    </span>
                  )}
                  <span className="ml-auto text-[11px] text-neutral-400">
                    {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Recent'}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Detail Panel */}
        {selectedEnquiry && (
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-stone-200 shadow-sm sticky top-28 self-start space-y-6">
            <div className="flex items-start justify-between pb-4 border-b border-stone-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Enquiry #{selectedEnquiry.id}
                </span>
                <h3 className="text-xl font-bold text-neutral-900">{selectedEnquiry.fullName}</h3>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="text-neutral-400 hover:text-neutral-600 p-1 text-sm"
              >
                ✕
              </button>
            </div>

            {/* Quick Actions (Call, WhatsApp, Status) */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Change Status
                </label>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) => {
                    const st = e.target.value;
                    handleStatusChange(selectedEnquiry.id, st);
                    setSelectedEnquiry({ ...selectedEnquiry, status: st });
                  }}
                  className="w-full text-xs font-semibold px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
                >
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Converted">Converted</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div className="flex gap-2">
                <a
                  href={`tel:${selectedEnquiry.phone}`}
                  className="flex-1 bg-neutral-900 hover:bg-black text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Lead</span>
                </a>
                <a
                  href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(selectedEnquiry.fullName)},%20this%20is%20OneLife%20Tourism%20regarding%20your%20recent%20travel%20inquiry.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Enquiry Details Grid */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100 text-xs space-y-2.5">
              <div>
                <span className="text-neutral-400 block text-[11px]">Email</span>
                <span className="font-semibold text-neutral-800">{selectedEnquiry.email || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[11px]">Destination</span>
                <span className="font-semibold text-neutral-800">{selectedEnquiry.destination || 'Open to recommendations'}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[11px]">Travel Date</span>
                <span className="font-semibold text-neutral-800">{selectedEnquiry.travelDate || 'Flexible'}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[11px]">Number of Travelers</span>
                <span className="font-semibold text-neutral-800">{selectedEnquiry.travelers || '2'}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[11px]">Customer Notes</span>
                <p className="mt-1 p-2.5 rounded-lg bg-white border border-stone-200 text-neutral-700 leading-relaxed">
                  {selectedEnquiry.notes || 'No extra notes.'}
                </p>
              </div>
            </div>

            {/* Admin Internal Notes */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Internal Staff Notes
              </label>
              <textarea
                rows="3"
                value={adminNoteInput}
                onChange={(e) => setAdminNoteInput(e.target.value)}
                placeholder="e.g. Called on 31 Oct, requested Schengen appointment for late Nov..."
                className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b00] bg-stone-50 resize-none"
              ></textarea>
              <button
                onClick={() => handleSaveNote(selectedEnquiry.id)}
                className="mt-2 text-xs font-bold bg-[#ff6b00] text-white px-4 py-1.5 rounded-lg hover:bg-[#e65900]"
              >
                Save Note
              </button>
            </div>

            <div className="pt-3 border-t border-stone-100 flex justify-end">
              <button
                onClick={() => handleDelete(selectedEnquiry.id)}
                className="text-xs text-red-600 hover:text-red-800 font-semibold flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Lead</span>
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

