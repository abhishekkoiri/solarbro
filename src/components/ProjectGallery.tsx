import React, { useState } from 'react';
import type { CustomerSegment } from '../types/solar';
import { MUMBAI_CASE_STUDIES } from '../data/solarData';
import { formatInr } from '../utils/solarCalculator';
import { Building2, Home, Factory, MapPin, Zap, CheckCircle2, Quote, ArrowRight } from 'lucide-react';

interface ProjectGalleryProps {
  onOpenLeadModal: (note?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenLeadModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | CustomerSegment>('all');

  const filteredProjects = MUMBAI_CASE_STUDIES.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            Proven Track Record Across MMR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Mumbai Solar Case Studies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real installations across Goregaon, Worli, Juhu, Lower Parel, and Turbhe delivering verified electricity bill reductions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Projects ({MUMBAI_CASE_STUDIES.length})
          </button>

          <button
            onClick={() => setActiveFilter('society')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeFilter === 'society'
                ? 'bg-amber-400 text-slate-900 shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            Housing Societies (CHS)
          </button>

          <button
            onClick={() => setActiveFilter('residential')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeFilter === 'residential'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            Villas & Bungalows
          </button>

          <button
            onClick={() => setActiveFilter('commercial')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeFilter === 'commercial'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Factory className="w-3.5 h-3.5" />
            Commercial & Industrial
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-50/70 border border-slate-200/90 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all group"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                    {project.category === 'society'
                      ? 'Housing Society'
                      : project.category === 'residential'
                      ? 'Residential Villa'
                      : 'C&I Industrial'}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {project.paybackYears} Yrs Payback
                  </span>
                </div>

                {/* Project Title & Location */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <div className="mt-1.5 flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{project.location} • {project.discom}</span>
                </div>

                {/* Key Capacity & Savings Bento */}
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200">
                    <span className="text-[11px] font-semibold text-slate-400">Solar Plant</span>
                    <div className="text-lg font-black text-slate-900">{project.capacityKw} kWp</div>
                  </div>

                  <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/60">
                    <span className="text-[11px] font-semibold text-amber-800">Annual Saved</span>
                    <div className="text-lg font-black text-amber-900">{formatInr(project.annualSavingsInr)}</div>
                  </div>
                </div>

                {/* Structure info badge */}
                <div className="mt-4 p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="font-medium truncate">{project.structureType}</span>
                </div>

                {/* Highlights List */}
                <div className="mt-4 space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Client Quote Box */}
                <div className="mt-5 p-3.5 rounded-2xl bg-slate-100/80 text-xs italic text-slate-700 relative">
                  <Quote className="w-4 h-4 text-slate-400 mb-1" />
                  "{project.clientQuote}"
                  <div className="mt-2 not-italic font-bold text-slate-900 text-[11px]">
                    — {project.clientName}, <span className="text-slate-500 font-normal">{project.clientDesignation}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <button
                  onClick={() =>
                    onOpenLeadModal(`Interested in case study like ${project.title} (${project.capacityKw} kWp)`)
                  }
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Request Similar Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
