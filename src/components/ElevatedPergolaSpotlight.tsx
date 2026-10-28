import type { FC } from 'react';
import { Building2, Wind, Droplets, ThermometerSnowflake, CheckCircle2, ArrowRight } from 'lucide-react';

interface ElevatedPergolaSpotlightProps {
  onOpenLeadModal: (note?: string) => void;
}

export const ElevatedPergolaSpotlight: FC<ElevatedPergolaSpotlightProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="pergolas" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Architectural Diagram Card */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-9 shadow-xl relative overflow-hidden">
              {/* Subtle architectural grid pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
                  <Building2 className="w-3.5 h-3.5" />
                  Mumbai Terrace Engineering
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  10-Ft High Elevated Walkable Pergola
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Turn your building roof into an illuminated, shaded green terrace pavilion that powers your entire common infrastructure.
                </p>

                {/* Interactive Diagram Features */}
                <div className="mt-8 space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                      <ThermometerSnowflake className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">4°C to 6°C Cooling For Top-Floor Flats</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        The solar canopy acts as a thermal umbrella, drastically reducing heat conduction through the roof slab into penthouse apartments.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-400/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Zero-Leakage Chemical Anchoring Protocol</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        No mechanical slab penetration. We use Hilti chemical anchors with elastomeric waterproof pedestals backed by a 10-year leakproof guarantee.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-400/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Wind className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">160 km/h Arabian Sea Wind Load Certified</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        Structural stability vetted by licensed chartered civil engineers to withstand cyclonic coastal gale-force monsoon winds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spec Bar */}
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div>Clearance: <strong className="text-white">10 Feet (3.05 m)</strong></div>
                  <div>Steel: <strong className="text-white">80-Micron Hot-Dip Galvanized</strong></div>
                  <div>Slab Integrity: <strong className="text-emerald-400">100% Intact</strong></div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Problem Solved for Mumbai Societies */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              Overcoming Mumbai's #1 Solar Barrier
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Keep 100% of Your Usable Terrace Space.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              In dense Mumbai real estate, terrace space is prime community property. Traditional ground-level panels turn the roof into an inaccessible hazard. Our elevated pergola structures preserve every square foot for your society.
            </p>

            <div className="mt-6 space-y-3.5 text-slate-700 text-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Morning walks, yoga, and evening community gatherings remain unhindered.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Overhead water tanks, lift machine rooms, and satellite dishes remain easily accessible.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Provides a beautiful shaded canopy during harsh summer afternoons.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Complies with municipal building bylaws and fire department clearance rules.</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenLeadModal('Inquiring about 10-ft Walkable Pergola')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 shadow-sm transition-all"
              >
                <span>Request Terrace 3D Design Model</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
              >
                View Mumbai Society Case Studies
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
