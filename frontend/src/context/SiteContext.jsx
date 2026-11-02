import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialData } from '../data/initialData';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [settings, setSettings] = useState(initialData.settings);
  const [packages, setPackages] = useState(initialData.packages);
  const [visas, setVisas] = useState(initialData.visas);
  const [testimonials, setTestimonials] = useState(initialData.testimonials);
  const [enquiries, setEnquiries] = useState(initialData.enquiries);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Admin Auth State
  const [adminToken, setAdminToken] = useState(() => localStorage.getItem('onelife_admin_token') || null);
  const [adminUser, setAdminUser] = useState(() => {
    const saved = localStorage.getItem('onelife_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Modal State for Quick Enquiry
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState({
    interest: 'Both',
    destination: '',
    notes: ''
  });

  // Initial load
  const fetchData = async () => {
    setLoading(true);
    try {
      const [settingsRes, packagesRes, visasRes, testimonialsRes] = await Promise.all([
        fetch('/api/settings').then(r => r.json()),
        fetch('/api/packages').then(r => r.json()),
        fetch('/api/visas').then(r => r.json()),
        fetch('/api/testimonials').then(r => r.json())
      ]);

      setSettings(settingsRes);
      setPackages(packagesRes);
      setVisas(visasRes);
      setTestimonials(testimonialsRes);

      if (adminToken) {
        fetchEnquiries();
      }
      setError(null);
    } catch (err) {
      console.warn('Could not fetch from backend directly, using local state or retrying:', err);
      setError('Backend API not responding, running in offline fallback mode.');
    } finally {
      setLoading(false);
    }
  };

  const fetchEnquiries = async () => {
    try {
      const res = await fetch('/api/enquiries');
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data);
      }
    } catch (err) {
      console.error('Failed to fetch enquiries:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [adminToken]);

  // Admin Login
  const adminLogin = async (email, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setAdminToken(data.token);
        setAdminUser(data.user);
        localStorage.setItem('onelife_admin_token', data.token);
        localStorage.setItem('onelife_admin_user', JSON.stringify(data.user));
        fetchEnquiries();
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Invalid credentials' };
      }
    } catch (err) {
      // Offline fallback login for demo
      if (email === 'admin@onelife.com' && password === 'admin123') {
        const demoUser = { name: 'Super Admin', email: 'admin@onelife.com', role: 'admin' };
        const demoToken = 'local-token-' + Date.now();
        setAdminToken(demoToken);
        setAdminUser(demoUser);
        localStorage.setItem('onelife_admin_token', demoToken);
        localStorage.setItem('onelife_admin_user', JSON.stringify(demoUser));
        return { success: true };
      }
      return { success: false, message: 'Invalid credentials. Use admin@onelife.com / admin123' };
    }
  };

  const adminLogout = () => {
    setAdminToken(null);
    setAdminUser(null);
    localStorage.removeItem('onelife_admin_token');
    localStorage.removeItem('onelife_admin_user');
  };

  // Submit Enquiry
  const submitEnquiry = async (formData) => {
    const newEnq = {
      id: 'enq-' + Date.now(),
      ...formData,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        const data = await res.json();
        setEnquiries(prev => [data.enquiry, ...prev]);
        return { success: true, message: 'Thank you! We will reach out within 1 business day.' };
      }
    } catch (err) {
      // Local fallback
    }
    setEnquiries(prev => [newEnq, ...prev]);
    return { success: true, message: 'Thank you! We will reach out within 1 business day.' };
  };

  // Update Settings
  const updateSettings = async (newSettings) => {
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSettings)
      });
      if (res.ok) {
        const data = await res.json();
        setSettings(data.settings);
        return { success: true };
      }
    } catch (err) {
      // Local fallback
    }
    setSettings(newSettings);
    return { success: true };
  };

  // CRUD Packages
  const createPackage = async (pkgData) => {
    const newPkg = { id: 'pkg-' + Date.now(), ...pkgData };
    try {
      const res = await fetch('/api/packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pkgData)
      });
      if (res.ok) {
        const created = await res.json();
        setPackages(prev => [created, ...prev]);
        return { success: true };
      }
    } catch (err) {
      // Local fallback
    }
    setPackages(prev => [newPkg, ...prev]);
    return { success: true };
  };

  const updatePackage = async (id, pkgData) => {
    try {
      const res = await fetch(`/api/packages/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pkgData)
      });
      if (res.ok) {
        const updated = await res.json();
        setPackages(prev => prev.map(p => p.id === id ? updated : p));
        return { success: true };
      }
    } catch (err) {
      // Local fallback
    }
    setPackages(prev => prev.map(p => p.id === id ? { ...p, ...pkgData } : p));
    return { success: true };
  };

  const deletePackage = async (id) => {
    try {
      await fetch(`/api/packages/${id}`, { method: 'DELETE' });
    } catch (err) {}
    setPackages(prev => prev.filter(p => p.id !== id));
    return { success: true };
  };

  // CRUD Visas
  const createVisa = async (visaData) => {
    const newVisa = { id: 'visa-' + Date.now(), ...visaData };
    try {
      const res = await fetch('/api/visas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visaData)
      });
      if (res.ok) {
        const created = await res.json();
        setVisas(prev => [created, ...prev]);
        return { success: true };
      }
    } catch (err) {}
    setVisas(prev => [newVisa, ...prev]);
    return { success: true };
  };

  const updateVisa = async (id, visaData) => {
    try {
      const res = await fetch(`/api/visas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visaData)
      });
      if (res.ok) {
        const updated = await res.json();
        setVisas(prev => prev.map(v => v.id === id ? updated : v));
        return { success: true };
      }
    } catch (err) {}
    setVisas(prev => prev.map(v => v.id === id ? { ...v, ...visaData } : v));
    return { success: true };
  };

  const deleteVisa = async (id) => {
    try {
      await fetch(`/api/visas/${id}`, { method: 'DELETE' });
    } catch (err) {}
    setVisas(prev => prev.filter(v => v.id !== id));
    return { success: true };
  };

  // CRUD Testimonials
  const createTestimonial = async (item) => {
    const newItem = { id: 'test-' + Date.now(), ...item };
    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
      if (res.ok) {
        const created = await res.json();
        setTestimonials(prev => [created, ...prev]);
        return { success: true };
      }
    } catch (err) {}
    setTestimonials(prev => [newItem, ...prev]);
    return { success: true };
  };

  const updateTestimonial = async (id, item) => {
    try {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
      if (res.ok) {
        const updated = await res.json();
        setTestimonials(prev => prev.map(t => t.id === id ? updated : t));
        return { success: true };
      }
    } catch (err) {}
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, ...item } : t));
    return { success: true };
  };

  const deleteTestimonial = async (id) => {
    try {
      await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
    } catch (err) {}
    setTestimonials(prev => prev.filter(t => t.id !== id));
    return { success: true };
  };

  // Enquiries operations
  const updateEnquiryStatus = async (id, status, adminNotes) => {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, adminNotes })
      });
      if (res.ok) {
        const updated = await res.json();
        setEnquiries(prev => prev.map(e => e.id === id ? updated : e));
        return { success: true };
      }
    } catch (err) {}
    setEnquiries(prev => prev.map(e => e.id === id ? {
      ...e,
      ...(status ? { status } : {}),
      ...(adminNotes !== undefined ? { adminNotes } : {})
    } : e));
    return { success: true };
  };

  const deleteEnquiry = async (id) => {
    try {
      await fetch(`/api/enquiries/${id}`, { method: 'DELETE' });
    } catch (err) {}
    setEnquiries(prev => prev.filter(e => e.id !== id));
    return { success: true };
  };

  // Reset database to initial factory defaults
  const resetToFactoryDefaults = async () => {
    try {
      await fetch('/api/reset', { method: 'POST' });
    } catch (err) {}
    setSettings(initialData.settings);
    setPackages(initialData.packages);
    setVisas(initialData.visas);
    setTestimonials(initialData.testimonials);
    setEnquiries(initialData.enquiries);
    return { success: true };
  };

  const openEnquiryModal = (prefill = {}) => {
    setModalPrefill({
      interest: prefill.interest || 'Both',
      destination: prefill.destination || '',
      notes: prefill.notes || ''
    });
    setModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setModalOpen(false);
  };

  return (
    <SiteContext.Provider
      value={{
        settings,
        packages,
        visas,
        testimonials,
        enquiries,
        loading,
        error,
        adminToken,
        adminUser,
        adminLogin,
        adminLogout,
        submitEnquiry,
        updateSettings,
        createPackage,
        updatePackage,
        deletePackage,
        createVisa,
        updateVisa,
        deleteVisa,
        createTestimonial,
        updateTestimonial,
        deleteTestimonial,
        updateEnquiryStatus,
        deleteEnquiry,
        resetToFactoryDefaults,
        modalOpen,
        modalPrefill,
        openEnquiryModal,
        closeEnquiryModal,
        refreshData: fetchData
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);
