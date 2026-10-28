import type { FC } from 'react';
import { Scan, Compass, FileCheck2, Wrench, Smartphone, ArrowRight } from 'lucide-react';

interface TurnkeyProcessProps {
  onOpenLeadModal: (note?: string) => void;
}

export const TurnkeyProcess: FC<TurnkeyProcessProps> = ({ onOpenLeadModal }) => {
  const steps = [
    {
      number: '01',
      icon: Scan,
      title: '3D Drone & Shadow Analysis',
      description:
        'We capture millimeter-accurate LiDAR 3D scans of your rooftop to model shadow paths cast by adjacent Mumbai high-rises throughout the 365-day solar calendar.',
      badge: 'Zero Guesswork',
    },
    {
      number: '02',
      icon: Compass,
      title: 'Structural Civil & Electrical SLD',
      description:
        'Licensed chartered structural engineers design custom hot-dip galvanized elevated superstructures rated for 160 km/h coastal winds with zero slab leaks.',
      badge: 'Certified Drawings',
    },
    {
      number: '03',
      icon: FileCheck2,
      title: 'DISCOM Liaison & Subsidy Filing',
      description:
        'We handle 100% of the statutory documentation for Adani, Tata Power, MSEDCL, or BEST, plus National Portal registration for the PM Surya Ghar grant.',
      badge: 'Zero Bureaucracy',
    },
    {
      number: '04',
      icon: Wrench,
      title: 'Precision Turnkey Installation',
      description:
        'Rapid execution using Tier-1 Monocrystalline Bifacial modules, BIS-certified smart inverters, IP67 junction boxes, and dual chemical grounding rods.',
      badge: 'Tier-1 Standards',
    },
    {
      number: '05',
      icon: Smartphone,
      title: 'Net-Metering Sync & 24/7 IoT App',
      description:
        'The DISCOM bi-directional net-meter is commissioned. Society committee members and homeowners monitor real-time daily generation directly from their smartphones.',
      badge: 'Live Cloud Data',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            End-to-End Execution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The 5-Step Turnkey Solar Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From initial drone site mapping to statutory net-metering synchronization, our in-house engineering team manages every detail.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-3xl bg-white p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-500/80 font-mono">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Ready to see what solar looks like on your roof?
            </h4>
            <p className="text-sm text-slate-500 mt-1">
              We conduct a complimentary 3D drone shadow assessment and provide a full feasibility report.
            </p>
          </div>
          <button
            onClick={() => onOpenLeadModal('Requested Drone Assessment')}
            className="px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 shadow-xs transition-all flex items-center gap-2 shrink-0 text-sm"
          >
            Schedule Free Drone Survey
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
