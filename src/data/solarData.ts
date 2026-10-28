import type { FaqItem, ProjectCaseStudy } from '../types/solar';

export const MUMBAI_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'kalpataru-goregaon',
    title: 'Kalpataru Vista Heights CHS',
    category: 'society',
    location: 'Goregaon West, Mumbai',
    discom: 'Adani Electricity (AEML)',
    capacityKw: 48,
    annualSavingsInr: 720000,
    paybackYears: 2.9,
    structureType: '10ft Elevated Walkable Pergola (Zero Terrace Loss)',
    clientQuote: 'Our society common meter bill dropped by 84%. The elevated pergola allows our senior citizens to continue their morning walks under the solar shade.',
    clientName: 'Rajesh K. Mehta',
    clientDesignation: 'Secretary, Managing Committee',
    highlights: [
      'Powers 4 high-speed passenger elevators & lobby ACs',
      'Water pressure pumps and basement lighting 100% solarized',
      '10-foot hot-dip galvanized elevated structure',
    ],
  },
  {
    id: 'worli-sea-breeze',
    title: 'Sea Breeze Luxury Apartments',
    category: 'society',
    location: 'Worli Sea Face, Mumbai',
    discom: 'Tata Power',
    capacityKw: 35,
    annualSavingsInr: 540000,
    paybackYears: 3.1,
    structureType: 'Marine-Grade Anodized Structure (160 km/h Wind Rated)',
    clientQuote: 'Given our proximity to the Arabian Sea, corrosion was our #1 fear. True engineering quality with marine-grade fasteners resolved all our committee concerns.',
    clientName: 'Dr. Cyrus Bharucha',
    clientDesignation: 'Chairman',
    highlights: [
      'Marine-grade 80-micron galvanized framing',
      'Non-penetrating chemical anchoring with zero slab leaks',
      'Real-time IoT cloud monitoring for all committee members',
    ],
  },
  {
    id: 'juhu-villa',
    title: 'The Juhu Beach Haven Villa',
    category: 'residential',
    location: 'Juhu Tara Road, Mumbai',
    discom: 'Adani Electricity (AEML)',
    capacityKw: 14,
    annualSavingsInr: 215000,
    paybackYears: 3.2,
    structureType: 'Architectural Black-Frame Bifacial Canopy',
    clientQuote: 'Our monthly ₹22,000 summer AC bill is virtually down to the minimum fixed meter charge of ₹450. Plus received the ₹78,000 subsidy directly in our bank account.',
    clientName: 'Vivek & Ritu Singhania',
    clientDesignation: 'Homeowners',
    highlights: [
      '₹78,000 PM Surya Ghar Central Subsidy disbursed in 28 days',
      'Bi-directional net meter installed by Adani Electricity',
      'Enphase microinverter system with zero shading losses',
    ],
  },
  {
    id: 'alibaug-estate',
    title: 'Mandwa Coastline Luxury Estate',
    category: 'residential',
    location: 'Mandwa / Alibaug',
    discom: 'MSEDCL (Mahavitaran)',
    capacityKw: 20,
    annualSavingsInr: 310000,
    paybackYears: 3.0,
    structureType: 'Custom Tile-Roof Ballast Solar Mount',
    clientQuote: 'Off-grid resilience with on-grid net-metering. The seamless switch between solar, battery backup, and MSEDCL grid ensures uninterrupted air-conditioning.',
    clientName: 'Ananya Deshmukh',
    clientDesignation: 'Villa Owner',
    highlights: [
      'Hybrid battery inverter for coastal grid brownout immunity',
      '550W Tier-1 Monocrystalline Bifacial solar modules',
      'Complete net-metering documentation handled end-to-end',
    ],
  },
  {
    id: 'turbhe-logistics',
    title: 'Continental Cold Chain & Logistics Hub',
    category: 'commercial',
    location: 'Turbhe MIDC, Navi Mumbai',
    discom: 'MSEDCL Industrial',
    capacityKw: 240,
    annualSavingsInr: 3450000,
    paybackYears: 2.7,
    structureType: 'Shed-Mounted Klip-Lok Non-Penetrating Clamps',
    clientQuote: 'Industrial power tariff was cutting into our cold storage margins. The 40% accelerated depreciation delivered immense first-year tax savings alone.',
    clientName: 'Mahendra Patel',
    clientDesignation: 'Managing Director',
    highlights: [
      '3.4 Lakh units generated annually for refrigeration compressors',
      'Zero sheet puncture Klip-Lok clamps preserving roof warranty',
      'HT Net-metering approval with high-tension transformer sync',
    ],
  },
  {
    id: 'lower-parel-commercial',
    title: 'Peninsula Executive Chambers',
    category: 'commercial',
    location: 'Lower Parel, Mumbai',
    discom: 'BEST Undertaking',
    capacityKw: 85,
    annualSavingsInr: 1320000,
    paybackYears: 2.8,
    structureType: 'Elevated Rooftop Terrace Pergola with EV Charging',
    clientQuote: 'We transformed an underutilized commercial terrace into an ESG milestone that charges our corporate fleet and powers our HVAC chiller plant.',
    clientName: 'Sanjay Advani',
    clientDesignation: 'Head of Facilities & ESG',
    highlights: [
      'Direct integration with commercial fleet EV fast-chargers',
      'ESG carbon reporting certified metrics for stakeholders',
      'Full clearance from BEST electrical inspectorate',
    ],
  },
];

export const MUMBAI_FAQS: FaqItem[] = [
  {
    category: 'subsidy',
    question: 'How does the PM Surya Ghar: Muft Bijli Yojana subsidy work in Mumbai?',
    answer:
      'For individual residential homeowners (bungalows, row houses, independent roofs), the Central Government provides a direct direct-benefit transfer (DBT) subsidy into your bank account: ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a maximum of ₹78,000 for 3 kW and above. Cooperative Housing Societies (CHS) are eligible for ₹18,000 per kW (up to 500 kW) for common amenities (lifts, water pumps, common lighting, and EV chargers). We manage 100% of the National Portal registration and DISCOM documentation for you.',
  },
  {
    category: 'discom',
    question: 'How long does net-metering take across Tata Power, Adani, MSEDCL, and BEST?',
    answer:
      'Turnaround times typically range between 25 to 40 days depending on the utility. Adani Electricity (AEML) and Tata Power generally process rooftop net-metering approvals in 25–30 days. MSEDCL and BEST take approximately 30–45 days. Our dedicated DISCOM liaison team handles the entire technical feasibility application, meter testing, and final bi-directional meter commissioning.',
  },
  {
    category: 'society',
    question: 'Can our Housing Society residents still use the terrace after installing solar?',
    answer:
      'Yes, absolutely! We specialize in Elevated Walkable Pergola Structures with 8 to 10 feet of headroom clearance. This leaves 100% of the terrace floor completely free for morning walks, yoga, clothes drying, and society gatherings. The solar canopy even acts as an umbrella, reducing heat transfer into top-floor penthouses by 4°C to 6°C.',
  },
  {
    category: 'technical',
    question: 'Will panel installation pierce our terrace slab and cause water leakage during monsoon?',
    answer:
      'No. We adhere to a strict Zero-Leakage Engineering Protocol. We employ heavy-density pre-cast civil ballast foundations or non-penetrating chemical grouting with multi-layer elastomeric waterproofing sealant. Your building structural integrity and waterproofing warranty remain 100% untouched.',
  },
  {
    category: 'technical',
    question: 'How much electricity is generated during Mumbai heavy monsoon months (July-August)?',
    answer:
      'Even on overcast and rainy days, modern Monocrystalline Bifacial solar panels absorb diffuse ambient daylight. During peak monsoon months, generation operates at approximately 35% to 50% of peak summer levels. Across the entire 12-month calendar, Mumbai receives over 300 sunny days, resulting in an annual yield of 1,400 to 1,450 units per kWp.',
  },
  {
    category: 'society',
    question: 'How do we get our Housing Society Managing Committee and AGM to approve solar?',
    answer:
      'We provide complete AGM/SGM Assistance Packs: a customized financial feasibility report, 3D shadow layout models, architectural 3D terrace walkthroughs, and step-by-step resolution draft templates under Maharashtra Co-operative Societies Act guidelines. Our senior engineers also attend your committee or general body meetings to address member queries directly.',
  },
];
