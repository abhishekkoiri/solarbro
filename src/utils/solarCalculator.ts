import type { CalculatorResult, CalculatorState, DiscomInfo, DiscomType } from '../types/solar';

export const MUMBAI_DISCOMS: Record<DiscomType, DiscomInfo> = {
  adani: {
    id: 'adani',
    name: 'Adani Electricity',
    fullName: 'Adani Electricity Mumbai Limited (AEML)',
    serviceAreas: 'Western Suburbs (Bandra to Dahisar), Eastern Suburbs (Kurla to Vikhroli)',
    baseTariff: 10.45,
    netMeterPortal: 'AEML Renewable Energy Portal',
  },
  tata: {
    id: 'tata',
    name: 'Tata Power',
    fullName: 'The Tata Power Company Limited',
    serviceAreas: 'South Mumbai, Chembur, Malad, Borivali, C&I clusters',
    baseTariff: 10.15,
    netMeterPortal: 'Tata Power Customer Portal',
  },
  msedcl: {
    id: 'msedcl',
    name: 'MSEDCL (Mahavitaran)',
    fullName: 'Maharashtra State Electricity Distribution Co. Ltd.',
    serviceAreas: 'Navi Mumbai, Thane, Mulund, Bhandup, Kalyan, Panvel, Mira-Bhayandar',
    baseTariff: 11.20,
    netMeterPortal: 'MSEDCL RTS Portal',
  },
  best: {
    id: 'best',
    name: 'BEST Undertaking',
    fullName: 'Brihanmumbai Electric Supply & Transport',
    serviceAreas: 'Colaba to Sion/Mahim (Island City of Mumbai)',
    baseTariff: 9.90,
    netMeterPortal: 'BEST Net-Metering Desk',
  },
};

/**
 * Calculates rooftop solar metrics based on Mumbai solar irradiance and tariffs
 */
export function calculateSolarMetrics(state: CalculatorState): CalculatorResult {
  const { segment, discom, monthlyBill } = state;
  const discomInfo = MUMBAI_DISCOMS[discom] || MUMBAI_DISCOMS.adani;

  // Blended tariff based on segment and Mumbai DISCOM
  let effectiveTariff = discomInfo.baseTariff;
  if (segment === 'society') {
    // Societies face high common-meter commercial/residential cross-subsidies
    effectiveTariff += 1.8;
  } else if (segment === 'commercial') {
    effectiveTariff += 2.5;
  }

  // Monthly and annual consumption units (kWh)
  const monthlyUnits = monthlyBill / effectiveTariff;
  const annualUnits = monthlyUnits * 12;

  // In Mumbai, 1 kWp produces ~1,400 kWh/year (approx 3.8-4.2 units/day)
  const annualKwhPerKw = 1400;
  
  // Calculate recommended system size
  let calculatedKw = annualUnits / annualKwhPerKw;
  
  // Clamp system size logically according to segment
  if (segment === 'residential') {
    calculatedKw = Math.max(1, Math.min(25, calculatedKw));
  } else if (segment === 'society') {
    calculatedKw = Math.max(10, Math.min(200, calculatedKw));
  } else {
    calculatedKw = Math.max(15, Math.min(500, calculatedKw));
  }

  const systemSizeKw = Math.round(calculatedKw * 10) / 10;
  
  // Usable terrace area: ~90 sq. ft. per kW (for modern high-efficiency 550W+ Mono PERC Bifacial)
  const areaRequiredSqFt = Math.round(systemSizeKw * 90);

  // Turnkey EPC cost benchmark per kW in Mumbai (including elevated structure & DISCOM metering)
  let costPerKw = 62000;
  if (segment === 'society') {
    // Societies often choose elevated 10ft pergola structures + higher capacity inverters
    costPerKw = 58000;
  } else if (segment === 'commercial') {
    costPerKw = 52000;
  }

  const totalCostEstimate = Math.round(systemSizeKw * costPerKw);

  // Government Subsidy (PM Surya Ghar: Muft Bijli Yojana)
  let subsidyEstimate = 0;
  let subsidyDescription = '';

  if (segment === 'residential') {
    if (systemSizeKw < 1.8) {
      subsidyEstimate = 30000;
      subsidyDescription = '₹30,000 for up to 1 kW system';
    } else if (systemSizeKw < 2.8) {
      subsidyEstimate = 60000;
      subsidyDescription = '₹60,000 for up to 2 kW system';
    } else {
      subsidyEstimate = 78000;
      subsidyDescription = 'Maximum ₹78,000 central subsidy under PM Surya Ghar';
    }
  } else if (segment === 'society') {
    // Housing societies get ₹18,000 per kW up to 500 kW for common facilities (EV charging, lifts, pumps)
    subsidyEstimate = Math.min(systemSizeKw * 18000, 78000 * 50); // capped per guideline
    subsidyDescription = '₹18,000/kW subsidy for CHS common services (pumps, lifts, lighting)';
  } else {
    // Commercial gets 40% accelerated depreciation (tax shield ~25% effective of asset value in year 1)
    subsidyEstimate = Math.round(totalCostEstimate * 0.25);
    subsidyDescription = '40% Accelerated Depreciation tax benefit (~25% net tax shield)';
  }

  // Net investment after subsidy
  const netInvestment = Math.max(10000, totalCostEstimate - subsidyEstimate);

  // Bill reduction (typical 85% to 92% offset, saving the rest for minimum grid connectivity fees)
  const monthlySavings = Math.round(monthlyBill * 0.88);
  const annualSavings = monthlySavings * 12;

  // Payback period
  const rawPaybackYears = netInvestment / annualSavings;
  const paybackPeriodYears = Math.floor(rawPaybackYears);
  const paybackPeriodMonths = Math.round((rawPaybackYears - paybackPeriodYears) * 12);

  // 25-Year cumulative savings (assuming 3% annual utility tariff escalation, 0.5% module degradation)
  let cumulativeSavings = 0;
  let currentYearSavings = annualSavings;
  for (let y = 1; y <= 25; y++) {
    cumulativeSavings += currentYearSavings;
    currentYearSavings = currentYearSavings * 1.025; // 2.5% net growth after degradation
  }
  const lifetimeSavings25Yr = Math.round(cumulativeSavings - netInvestment);

  // Environmental Metrics
  // 1 unit solar = ~0.82 kg CO2 reduction
  const annualUnitsGenerated = systemSizeKw * annualKwhPerKw;
  const co2OffsetTonsPerYear = Math.round((annualUnitsGenerated * 0.82) / 1000 * 10) / 10;
  // 1 tree absorbs ~21.7 kg CO2 per year
  const treesPlantedEquivalent = Math.round((co2OffsetTonsPerYear * 1000) / 21.7);

  return {
    systemSizeKw,
    areaRequiredSqFt,
    totalCostEstimate,
    subsidyEstimate,
    netInvestment,
    monthlySavings,
    annualSavings,
    paybackPeriodYears,
    paybackPeriodMonths,
    lifetimeSavings25Yr,
    co2OffsetTonsPerYear,
    treesPlantedEquivalent,
    subsidyDescription,
  };
}

export function formatInr(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} Lakh`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}
