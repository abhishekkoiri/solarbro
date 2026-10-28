import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Sun, Phone, MessageSquare, Menu, X, ShieldCheck, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenLeadModal: (initialNote?: string) => void;
}

export const Navbar: FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Solar Calculator', href: '#calculator' },
    { label: 'Walkable Pergolas', href: '#pergolas' },
    { label: 'Process', href: '#process' },
    { label: 'Mumbai Projects', href: '#projects' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top micro-bar for Mumbai credibility */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              MNRE & DISCOM Empanelled Partner
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-400" />
              Lower Parel, Mumbai (Covering All MMR)
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline">Approved for Tata Power • Adani • MSEDCL • BEST</span>
            <a
              href="tel:+918850845149"
              className="flex items-center gap-1 hover:text-amber-400 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              +91 88508 45149
            </a>
          </div>
        </div>
      </div>

      {/* Main Frosted Glass Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-emerald-400 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Aura<span className="text-amber-600">Sun</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200/60">
                  Mumbai
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-tight">
                Rooftop Solar EPC & Engineering
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/918850845149?text=Hi%20AuraSun%20Team%2C%20I%20would%20like%20to%20inquire%20about%20rooftop%20solar%20for%20my%20property%20in%20Mumbai."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200/60 transition-all shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              WhatsApp
            </a>

            <button
              onClick={() => onOpenLeadModal()}
              className="px-4 py-2 text-xs font-bold text-slate-900 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-500 hover:to-amber-400 rounded-lg shadow-sm shadow-amber-400/30 hover:shadow-md transition-all active:scale-95"
            >
              Book 3D Site Survey
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-700 hover:text-amber-600 py-1"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2 border-slate-100" />
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="https://wa.me/918850845149?text=Hi%20AuraSun%20Team%2C%20I%20would%20like%20to%20inquire%20about%20rooftop%20solar%20for%20my%20property%20in%20Mumbai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Chat on WhatsApp (+91 88508 45149)
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLeadModal();
                  }}
                  className="w-full py-2.5 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-sm"
                >
                  Book Free 3D Site Survey
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
