import React, { useState, useMemo } from 'react';
import type {
  CalculatorState,
  CustomerSegment,
  DiscomType,
} from '../types/solar';
import { calculateSolarMetrics, formatInr, MUMBAI_DISCOMS } from '../utils/solarCalculator';
import {
  Zap,
  Building,
  Home,
  Factory,
  ArrowRight,
  MessageSquare,
  Award,
  CloudSun,
  ShieldAlert,
} from 'lucide-react';

interface SolarCalculatorProps {
  onOpenLeadModal: (note?: string) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onOpenLeadModal }) => {
  const [segment, setSegment] = useState<CustomerSegment>('society');
  const [discom, setDiscom] = useState<DiscomType>('adani');
  const [monthlyBill, setMonthlyBill] = useState<number>(45000);

  // Dynamic bill defaults when changing segment
  const handleSegmentChange = (newSegment: CustomerSegment) => {
    setSegment(newSegment);
    if (newSegment === 'residential') {
      setMonthlyBill(8500);
    } else if (newSegment === 'society') {
      setMonthlyBill(55000);
    } else {
      setMonthlyBill(150000);
    }
  };

  const calculatorState: CalculatorState = useMemo(() => {
    return {
      segment,
      discom,
      monthlyBill,
      roofAreaSqFt: 500, // will be validated in calculations
    };
  }, [segment, discom, monthlyBill]);

  const results = useMemo(() => {
    return calculateSolarMetrics(calculatorState);
  }, [calculatorState]);

  const currentDiscom = MUMBAI_DISCOMS[discom];

  const billRange = useMemo(() => {
    if (segment === 'residential') {
      return { min: 2500, max: 50000, step: 500 };
    }
    if (segment === 'society') {
      return { min: 15000, max: 300000, step: 2500 };
    }
    return { min: 50000, max: 800000, step: 5000 };
  }, [segment]);

  const whatsappMessage = encodeURIComponent(
    `Hi AuraSun Mumbai! I just calculated solar savings for my ${
      segment === 'society' ? 'Housing Society (CHS)' : segment === 'residential' ? 'Bungalow / Home' : 'Commercial Facility'
    } in Mumbai.\n\n` +
      `• DISCOM: ${currentDiscom.name}\n` +
      `• Monthly Electricity Bill: ₹${monthlyBill.toLocaleString('en-IN')}\n` +
      `• Recommended Capacity: ${results.systemSizeKw} kWp\n` +
      `• Estimated Net Investment: ${formatInr(results.netInvestment)}\n` +
      `• Estimated Annual Savings: ${formatInr(results.annualSavings)}\n` +
      `• Payback Period: ~${results.paybackPeriodYears} Yrs ${results.paybackPeriodMonths} Mos\n\n` +
      `I would like to schedule a free 3D site survey.`
  );

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            Mumbai Solar ROI & Subsidy Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Solar Capacity, Subsidy & Payback
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real-time calculations tailored for Mumbai’s high tariff slabs, 4 local DISCOMs, and the Central Government PM Surya Ghar scheme.
          </p>
        </div>

        {/* Segment Selector Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 max-w-2xl w-full">
            <button
              onClick={() => handleSegmentChange('society')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                segment === 'society'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building className="w-4 h-4 text-amber-500" />
              <span>Housing Society (CHS)</span>
            </button>

            <button
              onClick={() => handleSegmentChange('residential')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                segment === 'residential'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Home className="w-4 h-4 text-emerald-600" />
              <span>Villa / Bungalow</span>
            </button>

            <button
              onClick={() => handleSegmentChange('commercial')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                segment === 'commercial'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Factory className="w-4 h-4 text-blue-600" />
              <span>Commercial & Industrial</span>
            </button>
          </div>
        </div>

        {/* Main Calculator Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            
            {/* Step 1: Select DISCOM */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. Select Your Mumbai Electricity Provider (DISCOM)
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {(Object.keys(MUMBAI_DISCOMS) as DiscomType[]).map((key) => {
                  const d = MUMBAI_DISCOMS[key];
                  const isSelected = discom === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setDiscom(key)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        isSelected
                          ? 'bg-white border-amber-500 ring-2 ring-amber-500/20 shadow-xs'
                          : 'bg-white/80 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-bold text-slate-900">{d.name}</div>
                      <div className="text-[11px] text-slate-500 truncate mt-0.5">{d.serviceAreas.split(',')[0]}</div>
                    </button>
                  );
                })}
              </div>
              <div className="mt-2 text-xs text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Active Net-Metering: {currentDiscom.fullName}</span>
              </div>
            </div>

            {/* Step 2: Monthly Electricity Bill Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. Average Monthly Electricity Bill
                </label>
                <div className="text-xl sm:text-2xl font-black text-slate-900 bg-white px-3.5 py-1 rounded-xl border border-slate-200 shadow-2xs">
                  ₹{monthlyBill.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min={billRange.min}
                max={billRange.max}
                step={billRange.step}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>₹{billRange.min.toLocaleString('en-IN')}</span>
                <span>₹{((billRange.min + billRange.max) / 2).toLocaleString('en-IN')}</span>
                <span>₹{billRange.max.toLocaleString('en-IN')}+</span>
              </div>

              {/* Quick Preset Buttons */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {(segment === 'residential'
                  ? [5000, 10000, 18000, 30000]
                  : segment === 'society'
                  ? [35000, 65000, 120000, 200000]
                  : [100000, 250000, 500000]
                ).map((val) => (
                  <button
                    key={val}
                    onClick={() => setMonthlyBill(val)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      monthlyBill === val
                        ? 'bg-amber-400 text-slate-900 border-amber-500'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    ₹{val.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Usable Area Requirement Badge */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500">Usable Terrace Area Needed</span>
                <div className="text-base font-bold text-slate-900">
                  ~{results.areaRequiredSqFt.toLocaleString('en-IN')} sq. ft.
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {segment === 'society' ? 'Walkable Pergola Compatible' : 'Standard Rooftop'}
                </span>
                <div className="text-[11px] text-slate-400 mt-0.5">~90 sq.ft per kWp</div>
              </div>
            </div>

            {/* Mumbai specific note */}
            <div className="mt-5 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-900 flex items-start gap-2.5">
              <Award className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong>High Mumbai Tariff Advantage:</strong> At ~₹{currentDiscom.baseTariff.toFixed(2)}/unit, rooftop solar in Mumbai breaks even in just <strong>~{results.paybackPeriodYears} years</strong>, yielding pure free electricity for the remaining 22+ years.
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Live Calculation Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-br from-white via-white to-amber-50/30 p-6 sm:p-8 border-2 border-amber-300/80 shadow-lg relative overflow-hidden">
              
              {/* Top Recommended Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Recommended Solar Capacity
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 mt-0.5 flex items-baseline gap-2">
                    {results.systemSizeKw} <span className="text-lg font-bold text-amber-600">kWp</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <Zap className="w-3.5 h-3.5 text-emerald-600" />
                    Payback: {results.paybackPeriodYears} Yrs {results.paybackPeriodMonths} Mos
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1">Faster than FD or Real Estate</p>
                </div>
              </div>

              {/* Financial Breakdown Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                
                {/* Total Cost vs Subsidy */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-medium text-slate-500">Gross Turnkey System</span>
                  <div className="text-xl font-bold text-slate-900 mt-1">
                    {formatInr(results.totalCostEstimate)}
                  </div>
                  <span className="text-[11px] text-slate-400">Includes Structure & Net-Meter</span>
                </div>

                {/* Direct Govt Subsidy */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <span className="text-xs font-semibold text-emerald-800">
                    {segment === 'commercial' ? 'Tax Depreciation Shield' : 'PM Surya Ghar Subsidy'}
                  </span>
                  <div className="text-xl font-extrabold text-emerald-700 mt-1">
                    -{formatInr(results.subsidyEstimate)}
                  </div>
                  <span className="text-[11px] text-emerald-700/80 font-medium">
                    {segment === 'commercial' ? '40% Accelerated' : 'Direct Bank Credit'}
                  </span>
                </div>

                {/* Net Out-of-Pocket Investment */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <span className="text-xs font-semibold text-amber-900">Net Payable After Subsidy</span>
                  <div className="text-xl sm:text-2xl font-black text-amber-950 mt-1">
                    {formatInr(results.netInvestment)}
                  </div>
                  <span className="text-[11px] text-amber-800 font-medium">Zero-Cost EMI available</span>
                </div>

                {/* Monthly & Annual Savings */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white">
                  <span className="text-xs font-medium text-amber-400">Annual Electricity Saved</span>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">
                    {formatInr(results.annualSavings)}
                  </div>
                  <span className="text-[11px] text-slate-400">~{formatInr(results.monthlySavings)} / month</span>
                </div>

              </div>

              {/* 25-Year Wealth Created */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500">25-Year Net Wealth Created</span>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">
                    {formatInr(results.lifetimeSavings25Yr)}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                    <CloudSun className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-800">{results.co2OffsetTonsPerYear} Tons CO2/yr</div>
                    <div className="text-[11px] text-slate-500">≈ {results.treesPlantedEquivalent} trees planted</div>
                  </div>
                </div>
              </div>

              {/* Subsidy Note Badge */}
              <div className="mt-4 text-xs text-slate-600 bg-slate-100/80 p-3 rounded-xl flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{results.subsidyDescription}</span>
              </div>

              {/* Conversion Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() =>
                    onOpenLeadModal(
                      `Calculated ${results.systemSizeKw} kWp for ${segment} with ₹${monthlyBill.toLocaleString('en-IN')}/mo on ${currentDiscom.name}`
                    )
                  }
                  className="flex-1 py-3.5 px-4 rounded-xl font-extrabold text-slate-900 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-500 hover:to-amber-400 shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Book Free 3D Site Survey
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/918850845149?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 rounded-xl font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  WhatsApp Quote
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
