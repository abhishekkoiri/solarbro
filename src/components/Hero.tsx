import type { FC } from 'react';
import { ArrowRight, Calculator, CheckCircle2, Zap, Building2, Sun, TrendingUp, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: (note?: string) => void;
}

export const Hero: FC<HeroProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-amber-50/40 via-white to-slate-50">
      {/* Decorative subtle sunbeam background glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-32 left-10 -z-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>PM Surya Ghar Muft Bijli Yojana — Up to ₹78,000 Subsidy Available</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Turn High Mumbai Electricity Bills into a{' '}
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
                Guaranteed 25-Year Asset
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Engineering-first rooftop solar EPC for <strong>Mumbai Housing Societies (CHS)</strong>, 
              luxury villas, and commercial facilities. We handle 100% of the paperwork, 3D shadow engineering, and net-metering across <strong>Adani, Tata Power, MSEDCL & BEST</strong>.
            </p>

            {/* Key Mumbai Highlights Checkmarks */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>10-Ft Elevated Walkable Pergolas (Zero Space Loss)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fast 2.8 – 3.2 Year Payback in Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>160 km/h Cyclone & Coastal Sea-Wind Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-Leakage Terrace Grouting Guarantee</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-500 hover:to-amber-400 shadow-md shadow-amber-400/25 hover:shadow-lg transition-all active:scale-95 text-base"
              >
                <Calculator className="w-5 h-5 text-slate-900" />
                Calculate Mumbai Savings
              </a>
              
              <button
                onClick={() => onOpenLeadModal('Requested from Hero')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all text-base"
              >
                Book Free 3D Site Survey
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            {/* Quick DISCOM recognition */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 w-full">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Empanelled Net-Metering Across All 4 Mumbai Utilities
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-bold text-slate-600">
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Adani Electricity</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Tata Power</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">MSEDCL Mahavitaran</span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">BEST Undertaking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Light Architectural Card Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="rounded-3xl bg-white p-4 sm:p-6 shadow-xl border border-slate-200/80 relative">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Live Mumbai CHS Solar Generation</h4>
                      <p className="text-xs text-slate-500">Oberoi Exquisite • 52 kWp Rooftop System</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Active
                  </span>
                </div>

                {/* Metric Bento Inside Preview */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs font-medium text-slate-500">Today's Generation</span>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">246.8 <span className="text-xs font-normal text-slate-500">kWh</span></div>
                    <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> +18% vs grid baseline
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100">
                    <span className="text-xs font-medium text-amber-800">Monthly Common Savings</span>
                    <div className="text-xl sm:text-2xl font-black text-amber-900 mt-0.5">₹68,400</div>
                    <div className="text-[11px] text-amber-700 font-semibold mt-1">
                      Offsetting 82% of lifts & pumps
                    </div>
                  </div>
                </div>

                {/* Architectural Elevated Pergola Graphic Card */}
                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        Terrace Innovation
                      </span>
                      <h5 className="text-base font-bold text-white mt-1">
                        10-Ft High Walkable Pergola
                      </h5>
                      <p className="text-xs text-slate-300 mt-1 max-w-xs leading-relaxed">
                        Retains 100% usable terrace floor for walking, yoga, and community events while shading top-floor penthouses.
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md">
                      <Building2 className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span>Height: 10 ft (3.05 m)</span>
                    <span>Structure: HDG Steel</span>
                    <span className="text-emerald-400 font-semibold">100% Usable Floor</span>
                  </div>
                </div>

                {/* Bottom Trust Stamp */}
                <div className="mt-4 flex items-center justify-between px-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Sun className="w-4 h-4 text-amber-500" /> 25-Year Performance Warranty
                  </span>
                  <span className="font-semibold text-slate-700">Tier-1 Bifacial Tech</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white rounded-2xl p-3 shadow-lg border border-slate-200/90 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-700 flex items-center justify-center font-bold text-sm">
                  ₹78k
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Direct Subsidy</div>
                  <div className="text-[11px] text-slate-500">Govt. Direct Bank Transfer</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Stats Bento Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-amber-300 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">15+ MWp</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Installed Across MMR</div>
            <div className="text-xs text-slate-400 mt-0.5">High-rises & commercial hubs</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-amber-300 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">140+ CHS</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Housing Societies Energized</div>
            <div className="text-xs text-slate-400 mt-0.5">Common meter bill reductions</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-amber-300 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">2.8–3.2 Yrs</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Average Payback Period</div>
            <div className="text-xs text-slate-400 mt-0.5">Accelerated by high Mumbai tariffs</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-amber-300 transition-all">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">160 km/h</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Cyclone Wind-Load Rated</div>
            <div className="text-xs text-slate-400 mt-0.5">Coastal sea-weather resilience</div>
          </div>
        </div>

      </div>
    </section>
  );
};
