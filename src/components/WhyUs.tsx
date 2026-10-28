import type { FC } from 'react';
import { ShieldCheck, Wind, Award, Clock, Cpu, Headphones, Check } from 'lucide-react';

export const WhyUs: FC = () => {
  const differentiators = [
    {
      icon: Cpu,
      title: 'Tier-1 Bifacial Technology',
      desc: 'We exclusively deploy Tier-1 550W+ TopCon and Mono PERC Bifacial modules that generate power from both front and reflected rear sunlight.',
      badge: 'Up to 22.5% Efficiency',
    },
    {
      icon: Wind,
      title: '160 km/h Wind Load Certified',
      desc: 'Structures are custom-calculated by chartered structural engineers using hot-dip galvanized steel (80 microns) to resist severe Arabian Sea cyclones.',
      badge: 'Coastal Marine Grade',
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Leakage Chemical Anchors',
      desc: 'We never drill through structural terrace waterproofing slabs. We employ pre-cast ballasts and non-invasive Hilti chemical anchoring with elastomeric seals.',
      badge: '10-Yr Leakproof Guarantee',
    },
    {
      icon: Clock,
      title: '4-DISCOM Fast-Track Liaison',
      desc: 'Direct liaison with Adani, Tata Power, MSEDCL, and BEST. We expedite technical feasibility, meter testing, and final synchronization in 25–35 days.',
      badge: 'Single Window Clearance',
    },
    {
      icon: Award,
      title: '25-Year Performance Warranty',
      desc: 'Linear power output guarantee backed by global manufacturers: minimum 90% generation at Year 10, and 84.8% performance at Year 25.',
      badge: '25-Yr Manufacturer Backed',
    },
    {
      icon: Headphones,
      title: '24/7 IoT App & 5-Yr Free O&M',
      desc: 'Every system is cloud-connected. If any string or inverter reports an anomaly, our local Mumbai service engineers dispatch within 24 hours.',
      badge: 'Rapid Response Team',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            Engineering-First Quality
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Mumbai Property Owners Choose AuraSun
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We don't just sell solar panels. We engineer durable rooftop energy assets built to last 30+ years in Mumbai's coastal climate.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-2">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Standard on all Mumbai installations</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
