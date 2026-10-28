import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MapPin, Phone, User } from 'lucide-react';
import type { CustomerSegment, DiscomType } from '../types/solar';
import { MUMBAI_DISCOMS } from '../utils/solarCalculator';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNote?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, initialNote }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('');
  const [segment, setSegment] = useState<CustomerSegment>('society');
  const [discom, setDiscom] = useState<DiscomType>('adani');
  const [monthlyBill, setMonthlyBill] = useState('50000');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello AuraSun Mumbai! I would like to book a Free 3D Drone Site Survey & Feasibility Report.\n\n` +
        `• Name: ${fullName}\n` +
        `• Phone: +91 ${phone}\n` +
        `• Mumbai Locality: ${locality || 'Mumbai'}\n` +
        `• Property Type: ${
          segment === 'society' ? 'Housing Society (CHS)' : segment === 'residential' ? 'Residential Bungalow' : 'Commercial Facility'
        }\n` +
        `• Electricity Provider: ${MUMBAI_DISCOMS[discom].name}\n` +
        `• Monthly Bill: ₹${monthlyBill}\n` +
        (initialNote ? `• Note: ${initialNote}\n` : '') +
        `\nPlease connect with me to schedule the survey.`
    );

    // Open WhatsApp in new tab
    window.open(`https://wa.me/918850845149?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            Zero-Obligation Site Survey
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Book Free 3D Drone Survey
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Get an engineering shadow study, financial ROI report, and PM Surya Ghar subsidy estimate for your Mumbai property.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Survey Request Initiated!</h4>
              <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                Thank you, <strong>{fullName}</strong>. We have opened WhatsApp with your pre-filled inquiry details for instant confirmation.
              </p>
              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={onClose}
                  className="w-full py-3 px-4 rounded-xl font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {initialNote && (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                  {initialNote}
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Mehta"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Locality in Mumbai */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mumbai Locality / Area *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Andheri West, Thane, Juhu"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Monthly Electricity Bill (₹)
                  </label>
                  <input
                    type="number"
                    min="1000"
                    placeholder="e.g. 45000"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
                  />
                </div>
              </div>

              {/* Segment & DISCOM */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Property Segment
                  </label>
                  <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value as CustomerSegment)}
                    className="w-full px-3 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
                  >
                    <option value="society">Housing Society (CHS)</option>
                    <option value="residential">Villa / Bungalow</option>
                    <option value="commercial">Commercial / Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mumbai DISCOM Provider
                  </label>
                  <select
                    value={discom}
                    onChange={(e) => setDiscom(e.target.value as DiscomType)}
                    className="w-full px-3 py-2.5 rounded-xl text-sm border border-slate-300 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-hidden"
                  >
                    <option value="adani">Adani Electricity (AEML)</option>
                    <option value="tata">Tata Power</option>
                    <option value="msedcl">MSEDCL (Mahavitaran)</option>
                    <option value="best">BEST Undertaking</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-500 hover:to-amber-400 shadow-md shadow-amber-400/25 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4 text-slate-900" />
                  <span>Confirm Survey on WhatsApp</span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  🔒 We respect your privacy. No spam. Direct technical coordination only.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
