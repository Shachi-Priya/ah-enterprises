export interface Service {
  id: string
  name: string
  description: string
  subServices: SubService[]
  rating: number
  reviews: number
}

export interface SubService {
  id: string
  name: string
  description: string
}

export const services: Service[] = [
  {
    id: 'fibre-wrapping',
    name: 'Fibre Wrapping Services',
    description: 'Advanced fibre wrapping solutions for structural strengthening and retrofitting',
    rating: 4.8,
    reviews: 156,
    subServices: [
      {
        id: 'building-strengthening-glass',
        name: 'Building Strengthening Glass Fibre Wrapping Services',
        description: 'Glass fibre reinforcement for enhanced structural integrity'
      },
      {
        id: 'retrofitting-carbon',
        name: 'Retrofitting Carbon Fibre Wrapping Services',
        description: 'Carbon fibre solutions for structural retrofitting'
      },
      {
        id: 'building-strengthening-carbon',
        name: 'Building Strengthening Carbon Fibre Wrapping Services',
        description: 'Carbon fibre wrapping for comprehensive building strengthening'
      },
      {
        id: 'reinforced-polymer',
        name: 'Reinforced Polymer Fibre Wrapping Service',
        description: 'Polymer-based fibre reinforcement systems'
      },
      {
        id: 'building-renovation-carbon',
        name: 'Building Renovation Carbon Fibre Services',
        description: 'Carbon fibre solutions for building renovation projects'
      }
    ]
  },
  {
    id: 'grouting',
    name: 'Grouting Services',
    description: 'Professional grouting solutions for structural stability',
    rating: 4.7,
    reviews: 142,
    subServices: [
      {
        id: 'cement-grouting',
        name: 'Cement Grouting Service',
        description: 'Traditional cement-based grouting for foundations'
      },
      {
        id: 'epoxy-injection',
        name: 'Epoxy Injection Grouting Service',
        description: 'High-strength epoxy injection for structural repairs'
      },
      {
        id: 'pu-injection',
        name: 'PU Injection Grouting Service',
        description: 'Polyurethane injection for waterproofing and sealing'
      },
      {
        id: 'rebar-grouting',
        name: 'Rebar Grouting Service',
        description: 'Specialized grouting for reinforcement bars'
      }
    ]
  },
  {
    id: 'waterproofing',
    name: 'Waterproofing Services',
    description: 'Comprehensive waterproofing solutions for all structures',
    rating: 4.9,
    reviews: 203,
    subServices: [
      {
        id: 'polyuria-waterproofing',
        name: 'Polyuria Waterproofing Service',
        description: 'Advanced polyuria coating systems'
      },
      {
        id: 'cementitious-waterproofing',
        name: 'Cementitious Waterproofing Service',
        description: 'Cement-based waterproofing solutions'
      },
      {
        id: 'liquid-membrane',
        name: 'Liquid Membrane Waterproofing Service',
        description: 'Flexible liquid membrane applications'
      },
      {
        id: 'polyurethane-waterproofing',
        name: 'Polyurethane Waterproofing Service',
        description: 'Durable polyurethane waterproofing systems'
      }
    ]
  },
  {
    id: 'crack-repair',
    name: 'Crack Repair Services',
    description: 'Professional crack repair and structural restoration',
    rating: 4.6,
    reviews: 128,
    subServices: [
      {
        id: 'civil-structure-crack',
        name: 'Civil Structure Crack Repairing Service',
        description: 'Comprehensive crack repair for civil structures'
      },
      {
        id: 'wall-crack',
        name: 'Wall Crack Repairing Service',
        description: 'Specialized wall crack repair solutions'
      },
      {
        id: 'concrete-crack',
        name: 'Concrete Crack Repairing Service',
        description: 'Concrete crack repair and restoration'
      }
    ]
  },
  {
    id: 'structural-repair',
    name: 'Structural Repair Services',
    description: 'Advanced structural repair and reinforcement solutions',
    rating: 4.8,
    reviews: 167,
    subServices: [
      {
        id: 'concrete-jacket',
        name: 'Concrete Jacket Structural Repair Service',
        description: 'Concrete jacketing for structural enhancement'
      },
      {
        id: 'steel-jacketing',
        name: 'Steel Jacketing Structural Repair Service',
        description: 'Steel jacketing solutions for structural repairs'
      }
    ]
  },
  {
    id: 'civil-engineering',
    name: 'Civil Engineering Construction',
    description: 'Comprehensive civil engineering and construction services',
    rating: 4.7,
    reviews: 189,
    subServices: [
      {
        id: 'general-civil',
        name: 'General Civil Engineering Construction Work',
        description: 'Complete civil engineering construction solutions'
      }
    ]
  },
  {
    id: 'rebar-scanning',
    name: 'Rebar Scanning Rental Service',
    description: 'Professional rebar scanning equipment rental',
    rating: 4.5,
    reviews: 94,
    subServices: []
  },
  {
    id: 'suspended-platform',
    name: 'Suspended Platform Rental Service',
    description: 'Safe and reliable suspended platform rental',
    rating: 4.6,
    reviews: 87,
    subServices: []
  },
  {
    id: 'fibre-lamination',
    name: 'Fibre Lamination Services',
    description: 'Advanced fibre lamination solutions',
    rating: 4.8,
    reviews: 112,
    subServices: [
      {
        id: 'carbon-fibre-lamination',
        name: 'Carbon Fibre Lamination Services',
        description: 'Professional carbon fibre lamination applications'
      }
    ]
  },
  {
    id: 'polymer-mortar',
    name: 'Polymer Modified Mortar Service',
    description: 'Specialized polymer modified mortar solutions',
    rating: 4.7,
    reviews: 103,
    subServices: []
  }
]
