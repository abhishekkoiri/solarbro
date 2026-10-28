import React from 'react';
import { Building2, Home, Factory, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface SolutionsProps {
  onOpenLeadModal: (category: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="solutions" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            Tailored Engineering for Mumbai
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Rooftop Solar Solutions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From high-rise cooperative housing societies to luxury standalone coastal villas, engineered for maximum energy yield and zero structural compromises.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Cooperative Housing Societies (CHS) */}
          <div className="rounded-3xl bg-white p-7 sm:p-8 border-2 border-amber-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-bl-full -z-0 pointer-events-none group-hover:scale-110 transition-transform" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-6">
                <Building2 className="w-6 h-6 text-amber-600" />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 mb-2">
                #1 in Mumbai
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Cooperative Housing Societies (CHS)
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Slash common-area maintenance bills by 75% to 90%. Powers elevators, lobby lighting, underground water pumps, and EV chargers.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>10-Ft Walkable Pergola:</strong> Retain 100% usable terrace space for morning walks & events.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>AGM Resolution Pack:</strong> Ready-to-vote financial reports & legal drafts for committee approvals.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>CAPEX or Zero-Investment RESCO:</strong> Flexible financing tailored for society sinking funds.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Subsidies for Common Meters:</strong> ₹18,000/kW central grant under PM Surya Ghar.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
              <button
                onClick={() => onOpenLeadModal('Housing Society (CHS) Solution')}
                className="w-full py-3 px-4 rounded-xl font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 transition-all flex items-center justify-center gap-2 text-sm shadow-xs"
              >
                <span>Get Society Feasibility Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Luxury Villas & Standalone Bungalows */}
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-bl-full -z-0 pointer-events-none group-hover:scale-110 transition-transform" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-6">
                <Home className="w-6 h-6 text-emerald-600" />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-2">
                Up to ₹78,000 Subsidy
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Villas & Independent Homes
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Engineered for luxury residences in Juhu, Bandra, Chembur, Alibaug, and Lonavala. Complete net-zero lifestyle with battery backups.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Electricity Bills:</strong> Net-metering sync ensures solar credits offset air-conditioning loads.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>₹78,000 PM Surya Ghar Grant:</strong> Direct Benefit Transfer straight into homeowner bank account.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>All-Black Premium Aesthetics:</strong> High-efficiency sleek Bifacial panels that match architectural facades.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Microinverter Precision:</strong> Per-panel output tracking with Enphase for zero shading drops.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
              <button
                onClick={() => onOpenLeadModal('Residential Villa Solution')}
                className="w-full py-3 px-4 rounded-xl font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Book Home Solar Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Commercial & Industrial (C&I) */}
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/40 rounded-bl-full -z-0 pointer-events-none group-hover:scale-110 transition-transform" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-6">
                <Factory className="w-6 h-6 text-blue-600" />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-2">
                40% Tax Depreciation
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Commercial & Industrial (C&I)
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Scale your manufacturing facility, warehouse, hospital, or commercial building in Thane, Navi Mumbai, Rabale, or Bhiwandi.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Accelerated Tax Shield:</strong> Write off 40% depreciation in Year 1 for substantial tax reductions.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Peak Tariff Hedge:</strong> Protect corporate margins from continuous commercial tariff hikes.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>HT Net-Metering & CEIG:</strong> End-to-end statutory approvals from Electrical Inspectorates.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Klip-Lok Metal Non-Puncture:</strong> Clamping tech protecting pre-engineered steel buildings (PEB).</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
              <button
                onClick={() => onOpenLeadModal('Commercial C&I Solution')}
                className="w-full py-3 px-4 rounded-xl font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Request Commercial Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
