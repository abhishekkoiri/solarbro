export type DiscomType = 'adani' | 'tata' | 'msedcl' | 'best';

export type CustomerSegment = 'society' | 'residential' | 'commercial';

export interface DiscomInfo {
  id: DiscomType;
  name: string;
  fullName: string;
  serviceAreas: string;
  baseTariff: number; // INR per unit
  netMeterPortal: string;
}

export interface CalculatorState {
  segment: CustomerSegment;
  discom: DiscomType;
  monthlyBill: number; // in INR
  roofAreaSqFt: number;
}

export interface CalculatorResult {
  systemSizeKw: number;
  areaRequiredSqFt: number;
  totalCostEstimate: number;
  subsidyEstimate: number;
  netInvestment: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriodYears: number;
  paybackPeriodMonths: number;
  lifetimeSavings25Yr: number;
  co2OffsetTonsPerYear: number;
  treesPlantedEquivalent: number;
  subsidyDescription: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: CustomerSegment;
  location: string;
  discom: string;
  capacityKw: number;
  annualSavingsInr: number;
  paybackYears: number;
  structureType: string;
  clientQuote: string;
  clientName: string;
  clientDesignation: string;
  highlights: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'subsidy' | 'technical' | 'society' | 'discom';
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  pinCode: string;
  locality: string;
  segment: CustomerSegment;
  discom: DiscomType;
  monthlyBill: number;
  calculatedKw?: number;
  additionalNotes?: string;
}
