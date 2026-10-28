import React from 'react';
import { Sun, Phone, Mail, MapPin, ShieldCheck, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-400 flex items-center justify-center shadow-md">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Aura<span className="text-amber-400">Sun</span> Mumbai
                </span>
                <span className="block text-xs text-slate-400">
                  Engineering-First Clean Energy EPC
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering Mumbai’s housing societies, luxury residences, and commercial facilities with high-efficiency rooftop solar systems, 10-ft elevated pergolas, and seamless net-metering across all 4 Mumbai DISCOMs.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-amber-400 text-xs font-semibold border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5" /> MNRE Empanelled
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-emerald-400 text-xs font-semibold border border-slate-700">
                ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-blue-400 text-xs font-semibold border border-slate-700">
                BIS Certified
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">Housing Societies (CHS)</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">Residential Villas & Bungalows</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-400 transition-colors">Commercial & Industrial (C&I)</a>
              </li>
              <li>
                <a href="#pergolas" className="hover:text-amber-400 transition-colors">10-Ft Walkable Pergolas</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">Mumbai Solar Calculator</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Supported DISCOMs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Mumbai DISCOMs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Adani Electricity (AEML)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Tata Power Company
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                MSEDCL (Mahavitaran)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                BEST Undertaking
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Mumbai Office
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Peninsula Business Park, Tower B, Lower Parel, Mumbai, Maharashtra 400013</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+918850845149" className="hover:text-white transition-colors">
                  +91 88508 45149
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:support@aurasun.in" className="hover:text-white transition-colors">
                  support@aurasun.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} AuraSun Energy Solutions Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#faqs" className="hover:text-slate-400 transition-colors">PM Surya Ghar Guidelines</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Floating Sticky WhatsApp Button */}
      <a
        href="https://wa.me/918850845149?text=Hi%20AuraSun%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20rooftop%20solar%20for%20my%20Mumbai%20property."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-all hover:scale-105 active:scale-95"
        title="Chat with a Solar Engineer on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-xs pr-1">Chat on WhatsApp</span>
      </a>
    </footer>
  );
};
