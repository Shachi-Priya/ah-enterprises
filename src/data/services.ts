export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  subServices: SubService[];
  rating: number;
  reviews: number;
  highlights: string[];
}

export interface SubService {
  id: string;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'fibre-wrapping',
    name: 'Fibre Wrapping Services',
    description:
      'Advanced fibre wrapping solutions for structural strengthening and retrofitting of buildings and infrastructure.',
    longDescription:
      'Our fibre wrapping services utilize cutting-edge composite materials—carbon fibre, glass fibre, and reinforced polymer systems—to dramatically enhance the load-bearing capacity and seismic resistance of existing structures. Ideal for aging infrastructure, seismic retrofitting, and structural upgrades without demolition.',
    icon: '🔬',
    rating: 4.8,
    reviews: 156,
    highlights: [
      'Non-invasive application',
      'Extends structure lifespan 30+ years',
      'Seismic resistance upgrade',
      'ISO-certified process',
    ],
    subServices: [
      {
        id: 'building-strengthening-glass',
        name: 'Building Strengthening Glass Fibre Wrapping',
        description:
          'High-tensile glass fibre reinforcement systems for enhanced structural integrity—ideal for columns, beams, and slabs.',
      },
      {
        id: 'retrofitting-carbon',
        name: 'Retrofitting Carbon Fibre Wrapping',
        description:
          'Aerospace-grade carbon fibre solutions for structural retrofitting with minimal weight addition and maximum strength.',
      },
      {
        id: 'building-strengthening-carbon',
        name: 'Building Strengthening Carbon Fibre Wrapping',
        description:
          'Comprehensive carbon fibre wrapping for critical structural elements requiring immediate load-capacity enhancement.',
      },
      {
        id: 'reinforced-polymer',
        name: 'Reinforced Polymer Fibre Wrapping',
        description:
          'Advanced FRP (Fibre Reinforced Polymer) systems for corrosion-resistant, lightweight structural reinforcement.',
      },
      {
        id: 'building-renovation-carbon',
        name: 'Building Renovation Carbon Fibre Services',
        description:
          'Specialized carbon fibre applications for heritage and commercial building renovation without structural compromise.',
      },
    ],
  },
  {
    id: 'grouting',
    name: 'Grouting Services',
    description:
      'Professional grouting solutions for foundation stabilization, leak sealing, and structural void filling.',
    longDescription:
      'Our grouting expertise spans cement, epoxy, and polyurethane injection systems—engineered for every scenario from micro-crack sealing to large-scale foundation underpinning. We deploy precision injection equipment and proprietary techniques for permanent, structurally-sound repairs.',
    icon: '🏗️',
    rating: 4.7,
    reviews: 142,
    highlights: [
      'Precision injection technology',
      'Foundation stabilization',
      'Permanent waterproof seal',
      'Zero structural disruption',
    ],
    subServices: [
      {
        id: 'cement-grouting',
        name: 'Cement Grouting Service',
        description:
          'High-strength cementitious grout injection for soil stabilization, foundation repair, and void filling.',
      },
      {
        id: 'epoxy-injection',
        name: 'Epoxy Injection Grouting',
        description:
          'Structural-grade epoxy injection for crack bonding, restoring monolithic integrity to concrete elements.',
      },
      {
        id: 'pu-injection',
        name: 'PU Injection Grouting',
        description:
          'Expanding polyurethane injection for active water leak sealing and flexible joint waterproofing.',
      },
      {
        id: 'rebar-grouting',
        name: 'Rebar Grouting Service',
        description:
          'Specialized high-flow grout for rebar anchoring, post-tensioning ducts, and reinforcement continuity.',
      },
    ],
  },
  {
    id: 'waterproofing',
    name: 'Waterproofing Services',
    description:
      'Comprehensive waterproofing solutions for basements, rooftops, wet areas, and underground structures.',
    longDescription:
      'From polyurea rapid-cure coatings to crystalline cementitious systems, our waterproofing division delivers permanent moisture protection. We handle everything from terrace waterproofing and basement tanking to industrial floor protection and water tank lining with industry-leading materials and a 10-year warranty.',
    icon: '💧',
    rating: 4.9,
    reviews: 203,
    highlights: [
      '10-year performance warranty',
      'Rapid cure polyurea systems',
      'Below-grade & above-grade',
      'Green building compatible',
    ],
    subServices: [
      {
        id: 'polyuria-waterproofing',
        name: 'Polyurea Waterproofing',
        description:
          'Ultra-fast cure polyurea spray systems—trafficable in hours, chemical resistant, and seamless.',
      },
      {
        id: 'cementitious-waterproofing',
        name: 'Cementitious Waterproofing',
        description:
          'Crystalline cement-based waterproofing that becomes an integral part of the concrete substrate.',
      },
      {
        id: 'liquid-membrane',
        name: 'Liquid Membrane Waterproofing',
        description:
          'Flexible liquid-applied membranes for complex geometries, terraces, and wet areas.',
      },
      {
        id: 'polyurethane-waterproofing',
        name: 'Polyurethane Waterproofing',
        description:
          'Premium PU-based waterproofing for rooftops, balconies, and exposed decks with UV stability.',
      },
    ],
  },
  {
    id: 'crack-repair',
    name: 'Crack Repair Services',
    description:
      'Professional crack diagnosis, repair, and structural restoration for all concrete and masonry structures.',
    longDescription:
      'Cracks in structures can signal anything from cosmetic settling to critical structural distress. Our crack repair division combines advanced diagnostic tools (UPV testing, rebar scanning) with precision repair techniques including epoxy injection, micro-stitching, and carbon fibre reinforcement to restore full structural integrity.',
    icon: '🔧',
    rating: 4.6,
    reviews: 128,
    highlights: [
      'Advanced crack diagnostics',
      'Structural-grade epoxy bonding',
      'Root-cause analysis',
      'Preventive treatment plans',
    ],
    subServices: [
      {
        id: 'civil-structure-crack',
        name: 'Civil Structure Crack Repair',
        description:
          'Comprehensive crack analysis and repair for bridges, flyovers, and large civil infrastructure.',
      },
      {
        id: 'wall-crack',
        name: 'Wall Crack Repair',
        description:
          'Internal and external wall crack treatment using flexible fillers, mesh reinforcement, and injection systems.',
      },
      {
        id: 'concrete-crack',
        name: 'Concrete Crack Repair',
        description:
          'Precision epoxy and polyurethane injection for structural and non-structural concrete cracks.',
      },
    ],
  },
  {
    id: 'structural-repair',
    name: 'Structural Repair & Rehabilitation',
    description:
      'Advanced structural repair, jacketing, and reinforcement solutions for distressed buildings and infrastructure.',
    longDescription:
      'When structures show signs of distress—spalling concrete, exposed rebar, excessive deflection—our structural rehabilitation team steps in with engineered solutions. From concrete jacketing and steel plating to full structural health monitoring, we restore buildings to their original capacity and beyond.',
    icon: '🏛️',
    rating: 4.8,
    reviews: 167,
    highlights: [
      'Structural health assessment',
      'Concrete & steel jacketing',
      'Load capacity restoration',
      'NDT testing capability',
    ],
    subServices: [
      {
        id: 'concrete-jacket',
        name: 'Concrete Jacketing',
        description:
          'Reinforced concrete jacketing for columns, beams, and foundations—increasing cross-section and load capacity.',
      },
      {
        id: 'steel-jacketing',
        name: 'Steel Jacketing',
        description:
          'Precision steel plate bonding and jacketing for rapid structural strengthening with minimal intervention.',
      },
    ],
  },
  {
    id: 'civil-engineering',
    name: 'Civil Engineering Construction',
    description:
      'Full-spectrum civil engineering from ground-up construction to complex industrial and commercial projects.',
    longDescription:
      'Our civil engineering division handles projects from conception to completion—site preparation, foundation engineering, structural framing, and finishing. We serve commercial, industrial, and institutional sectors with a focus on quality, timeline adherence, and cost efficiency.',
    icon: '🏢',
    rating: 4.7,
    reviews: 189,
    highlights: [
      'End-to-end project delivery',
      'Commercial & industrial focus',
      'Strict timeline adherence',
      'Quality-certified processes',
    ],
    subServices: [
      {
        id: 'general-civil',
        name: 'General Civil Construction',
        description:
          'Complete civil engineering construction from foundation to finishing—commercial, industrial, and institutional.',
      },
    ],
  },
  {
    id: 'rebar-scanning',
    name: 'Rebar Scanning & NDT Services',
    description:
      'Non-destructive testing and rebar scanning equipment rental with expert operator support.',
    longDescription:
      'Accurate knowledge of embedded rebar location, cover depth, and concrete quality is critical before any repair or modification work. Our GPR (Ground Penetrating Radar) and electromagnetic rebar scanners provide precise mapping, and our NDT division offers UPV testing, half-cell potential, and rebound hammer surveys.',
    icon: '📡',
    rating: 4.5,
    reviews: 94,
    highlights: [
      'GPR & electromagnetic scanning',
      'Cover depth mapping',
      'UPV & half-cell testing',
      'Expert operators included',
    ],
    subServices: [],
  },
  {
    id: 'suspended-platform',
    name: 'Suspended Platform Rental',
    description:
      'Safe, certified suspended platform and cradle systems for high-rise maintenance and construction access.',
    longDescription:
      'Our fleet of suspended platforms (ZLP series) and gondola systems provides safe, efficient access for facade maintenance, painting, waterproofing, and repair work on high-rise structures. All equipment is certified, regularly inspected, and operated by trained personnel.',
    icon: '🏗️',
    rating: 4.6,
    reviews: 87,
    highlights: [
      'Certified ZLP platforms',
      'Trained operators',
      'Regular safety inspections',
      'Flexible rental terms',
    ],
    subServices: [],
  },
  {
    id: 'fibre-lamination',
    name: 'Fibre Lamination Services',
    description:
      'Advanced fibre lamination for structural plates, strips, and specialized composite applications.',
    longDescription:
      'Our fibre lamination services focus on the application of pre-cured carbon and glass fibre strips and plates for structural strengthening. These high-modulus laminates are factory-produced for consistent quality, then precisely installed on-site for beam strengthening, slab upgrades, and shear reinforcement.',
    icon: '🔩',
    rating: 4.8,
    reviews: 112,
    highlights: [
      'Factory-cured laminates',
      'Beam & slab strengthening',
      'Shear reinforcement',
      'Consistent quality assurance',
    ],
    subServices: [
      {
        id: 'carbon-fibre-lamination',
        name: 'Carbon Fibre Lamination',
        description:
          'Pre-cured carbon fibre plate and strip lamination for precision structural strengthening applications.',
      },
    ],
  },
  {
    id: 'polymer-mortar',
    name: 'Polymer Modified Mortar',
    description:
      'High-performance polymer modified mortar for concrete repair, overlay, and protective coating applications.',
    longDescription:
      'Our polymer modified mortar systems combine Portland cement with advanced polymer additives to create repair mortars with superior adhesion, flexibility, and durability. Perfect for concrete patch repair, structural re-profiling, and protective overlays in aggressive environments.',
    icon: '🧱',
    rating: 4.7,
    reviews: 103,
    highlights: [
      'Superior bond strength',
      'Crack-bridging capability',
      'Chemical resistance',
      'Rapid strength development',
    ],
    subServices: [],
  },
];
