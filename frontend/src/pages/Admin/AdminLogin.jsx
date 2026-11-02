import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Lock, Mail, Key, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AdminLogin({ onLoginSuccess }) {
  const { adminLogin } = useSite();
  const [email, setEmail] = useState('admin@onelife.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e?.preventDefault();
    setLoading(true);
    setError('');

    const res = await adminLogin(email, password);
    setLoading(false);
    if (res.success) {
      if (onLoginSuccess) onLoginSuccess();
    } else {
      setError(res.message || 'Invalid email or password');
    }
  };

  const handleQuickDemo = () => {
    setEmail('admin@onelife.com');
    setPassword('admin123');
    adminLogin('admin@onelife.com', 'admin123').then((res) => {
      if (res.success && onLoginSuccess) onLoginSuccess();
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-[#faf7f2]">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-200">
        
        {/* Logo / Badge */}
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="OneLife Tourism"
            className="h-14 w-auto mx-auto mb-4 object-contain"
          />
          <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
            Admin Management Portal
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Manage packages, visas, leads & site content in real time
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b00] bg-stone-50/50"
                placeholder="admin@onelife.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
              Password
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b00] bg-stone-50/50"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ff6b00] hover:bg-[#e65900] text-white font-bold py-3 rounded-full text-sm shadow transition-all flex items-center justify-center gap-2"
          >
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Demo Fast Track Button */}
        <div className="mt-6 pt-6 border-t border-stone-100 text-center">
          <p className="text-xs text-neutral-500 mb-2">Preloaded credentials:</p>
          <div className="bg-stone-50 p-2.5 rounded-xl text-xs font-mono text-neutral-700 mb-3 border border-stone-200">
            admin@onelife.com / admin123
          </div>
          <button
            type="button"
            onClick={handleQuickDemo}
            className="w-full bg-stone-100 hover:bg-stone-200 text-neutral-800 text-xs font-bold py-2.5 rounded-full transition-colors flex items-center justify-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>1-Click Auto Fill & Sign In</span>
          </button>
        </div>

      </div>
    </div>
  );
}

