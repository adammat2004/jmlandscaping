// Real project content migrated from the ~23 legacy per-page project files.
// Two legacy clusters were literal copy-paste duplicates (same job, same photos,
// filed under more than one category folder) and were collapsed to one entry
// each here; every legacy URL still resolves via `legacyPaths` -> next.config.ts redirects.

export type ProjectCategory =
  | "landscaping-services"
  | "paving"
  | "garden-patios"
  | "walling"
  | "gazebos"
  | "waterfeatures";

export type ProjectTemplate = "editorial" | "gallery";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectSection {
  heading: string;
  images: ProjectImage[];
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  services: string[];
  description: string[];
  coverImage: ProjectImage;
  video?: { src: string };
  gallery: ProjectImage[];
  extraSections?: ProjectSection[];
  template: ProjectTemplate;
  featured: boolean;
  /** Every URL this project has ever lived at. First entry is the pre-redesign canonical path. */
  legacyPaths: string[];
}

export const projects: Project[] = [
  {
    slug: "full-outdoor-transformation-collinstown",
    title: "Complete Outdoor Transformation",
    location: "Collinstown, Westmeath",
    category: "landscaping-services",
    services: ["Landscaping", "Paving", "Walling", "Water Features"],
    description: [
      "We recently completed a full landscaping and paving transformation for this stunning countryside property. The project included a natural stone waterfall, tiered garden beds, a granite patio area at the side of the house, paving at the front and back of the property, and a walled circular patio beside the water feature that brings structure and elegance to the space, while carefully placed planting areas soften the layout.",
      "Lawns, kerbing and front entrance paving were also completed to enhance the overall aesthetic and functionality of the property.",
    ],
    coverImage: {
      src: "/newjob/pic_2.jpg",
      alt: "Complete outdoor transformation with natural stone waterfall and landscaping in Collinstown, Westmeath",
    },
    video: { src: "/newjob/waterfall_vid.mp4" },
    gallery: [
      { src: "/newjob/pic_9.jpg", alt: "Granite patio and tiered garden beds at Collinstown, Westmeath" },
      { src: "/newjob/pic_4.jpg", alt: "Natural stone waterfall feature with landscaping in Collinstown, Westmeath" },
      { src: "/newjob/pic_5.jpg", alt: "Walled circular patio and water feature landscaping in Collinstown, Westmeath" },
      { src: "/newjob/pic_7.jpg", alt: "Front entrance paving and landscaping in Collinstown, Westmeath" },
      { src: "/newjob/pic_1.jpg", alt: "Lawns and kerbing at Collinstown, Westmeath" },
      { src: "/newjob/pic_3.jpg", alt: "Back garden paving and landscaping in Collinstown, Westmeath" },
    ],
    template: "editorial",
    featured: true,
    legacyPaths: ["/full-service-landscaping-paving-meath"],
  },
  {
    slug: "paving-landscaping-inchicore",
    title: "Paving & Landscaping",
    location: "Inchicore, Dublin",
    category: "landscaping-services",
    services: ["Paving", "Landscaping"],
    description: [
      "All paving and landscaping completed by us at a large apartment development in Inchicore.",
    ],
    coverImage: { src: "/landscaping2/frontimage.jpg", alt: "Commercial paving and landscaping project in Inchicore, Dublin" },
    gallery: [
      { src: "/landscaping2/IMG-6533.jpg", alt: "Commercial landscaping at apartment development in Inchicore, Dublin" },
      { src: "/landscaping2/IMG-6532.jpg", alt: "Paved path at apartment development in Inchicore, Dublin" },
      { src: "/landscaping2/IMG-6536.jpg", alt: "Patio paving at apartment development in Inchicore, Dublin" },
      { src: "/landscaping2/IMG-6938.jpg", alt: "Commercial paving detail in Inchicore, Dublin" },
      { src: "/landscaping2/IMG-6930.jpg", alt: "Landscaped grounds at apartment development in Inchicore, Dublin" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/landscaping-services/commercial2"],
  },
  {
    slug: "patio-landscaping-donaghpatrick",
    title: "Patio & Landscaping",
    location: "Donaghpatrick, Meath",
    category: "landscaping-services",
    services: ["Paving", "Landscaping"],
    description: [
      "All paving and landscaping completed by us at a large modern home in Donaghpatrick, Meath.",
    ],
    coverImage: { src: "/donaghpatrick/IMG-2039.jpg", alt: "Modern garden patio and landscaping project in Donaghpatrick, Meath" },
    gallery: [
      { src: "/donaghpatrick/IMG-2037.jpg", alt: "Landscaped garden at modern home in Donaghpatrick, Meath" },
      { src: "/donaghpatrick/IMG-2036.jpg", alt: "Patio and planting at modern home in Donaghpatrick, Meath" },
      { src: "/donaghpatrick/IMG-2044.jpg", alt: "Paved garden path in Donaghpatrick, Meath" },
      { src: "/donaghpatrick/IMG-2041.jpg", alt: "Patio paving detail in Donaghpatrick, Meath" },
      { src: "/donaghpatrick/IMG-2038.jpg", alt: "Garden path at modern home in Donaghpatrick, Meath" },
      { src: "/donaghpatrick/IMG-2045.jpg", alt: "Patio and landscaping detail in Donaghpatrick, Meath" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/landscaping-services/moderngarden"],
  },
  {
    slug: "paving-landscaping-clonsilla",
    title: "Paving & Landscaping",
    location: "Clonsilla, Dublin",
    category: "landscaping-services",
    services: ["Paving", "Landscaping"],
    description: [
      "All paving and landscaping completed by us at a large apartment development in Clonsilla.",
    ],
    coverImage: { src: "/paving2/IMG-4669.jpg", alt: "Commercial paving and landscaping project at apartment development in Clonsilla, Dublin" },
    gallery: [
      { src: "/mainImages/IMG_6073.jpg", alt: "Commercial paving installation at apartment development in Clonsilla, Dublin" },
      { src: "/paving2/IMG-4668.jpg", alt: "Paved garden path at commercial landscaping project in Clonsilla, Dublin" },
      { src: "/paving2/IMG-4671.jpg", alt: "Commercial patio paving installation in Clonsilla, Dublin" },
    ],
    extraSections: [
      {
        heading: "Progress Pictures",
        images: [
          { src: "/paving2/IMG-2712.jpg", alt: "Paving progress photo showing garden path installation in Clonsilla, Dublin" },
          { src: "/paving2/IMG-2723.jpg", alt: "Paving progress photo showing patio installation in Clonsilla, Dublin" },
        ],
      },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/landscaping-services/commerciallandscaping", "/paving/commercialpaving"],
  },
  {
    slug: "circular-paving-castletown",
    title: "Circular Paving",
    location: "Castletown, Meath",
    category: "paving",
    services: ["Paving", "Walling"],
    description: [
      "A backyard complete with circular paving and a walled seating area.",
    ],
    coverImage: { src: "/paving3/frontimage.jpg", alt: "Circular paving project with walled seating area in Castletown, Meath" },
    gallery: [
      { src: "/paving3/IMG-1020.jpg", alt: "Circular paving path detail in Castletown, Meath" },
      { src: "/paving3/IMG-1021.jpg", alt: "Walled patio seating area in Castletown, Meath" },
      { src: "/paving3/IMG-1022.jpg", alt: "Circular paving pattern detail in Castletown, Meath" },
      { src: "/paving3/IMG-1024.jpg", alt: "Paved backyard seating area in Castletown, Meath" },
      { src: "/paving3/IMG-1025.jpg", alt: "Circular paving path in backyard, Castletown, Meath" },
      { src: "/paving3/IMG-1027.jpg", alt: "Walled circular patio in Castletown, Meath" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/paving/circlepaving"],
  },
  {
    slug: "garden-paths-wilkinstown",
    title: "Garden Paths",
    location: "Wilkinstown, Meath",
    category: "paving",
    services: ["Paving", "Walling", "Landscaping"],
    description: [
      "A path through the back garden leading to a paved patio area with walling and planting.",
    ],
    coverImage: { src: "/paving5/mainimage.jpg", alt: "Garden path and patio project in Wilkinstown, Meath" },
    gallery: [
      { src: "/paving5/IMG-1679.jpg", alt: "Garden path leading to paved patio in Wilkinstown, Meath" },
      { src: "/paving5/IMG-1667.jpg", alt: "Paved garden path detail in Wilkinstown, Meath" },
      { src: "/paving5/IMG-1668.jpg", alt: "Patio paving in Wilkinstown, Meath" },
      { src: "/paving5/IMG-1675.jpg", alt: "Garden path and walling in Wilkinstown, Meath" },
      { src: "/paving5/IMG-1678.jpg", alt: "Patio and planting in Wilkinstown, Meath" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/paving/gardenpath"],
  },
  {
    slug: "paving-walling-johnstown",
    title: "Paving & Walling",
    location: "Johnstown, Meath",
    category: "paving",
    services: ["Paving", "Walling"],
    description: [
      "Back garden paved with shrub beds built around the garden.",
    ],
    coverImage: { src: "/paving1/IMG_7696.jpg", alt: "Paving and walling project in Johnstown, Meath" },
    gallery: [
      { src: "/paving1/IMG_7698.jpg", alt: "Paved garden with gazebo area in Johnstown, Meath" },
      { src: "/paving1/IMG_7694.jpg", alt: "Paved garden path in Johnstown, Meath" },
      { src: "/paving1/IMG_7695.jpg", alt: "Patio paving with shrub beds in Johnstown, Meath" },
    ],
    extraSections: [
      {
        heading: "Before",
        images: [
          { src: "/paving1/IMG_7663.jpg", alt: "Back garden before paving and walling work in Johnstown, Meath" },
          { src: "/paving1/IMG_7664.jpg", alt: "Garden before patio installation in Johnstown, Meath" },
        ],
      },
    ],
    template: "gallery",
    featured: false,
    legacyPaths: ["/paving/pavedgarden"],
  },
  {
    slug: "paving-steps-navan",
    title: "Paving & Steps",
    location: "Navan, Meath",
    category: "paving",
    services: ["Paving"],
    description: [
      "A backyard complete with paving and granite steps up to the lawn area.",
    ],
    coverImage: { src: "/paving4/frontimage.jpg", alt: "Paving and granite steps project in Navan, Meath" },
    gallery: [
      { src: "/paving4/IMG-0981.jpg", alt: "Granite steps and paving detail in Navan, Meath" },
      { src: "/paving4/IMG-0982.jpg", alt: "Backyard patio paving in Navan, Meath" },
      { src: "/paving4/IMG-0978.jpg", alt: "Paved path with granite steps in Navan, Meath" },
      { src: "/paving4/IMG-0979.jpg", alt: "Patio and steps detail in Navan, Meath" },
      { src: "/paving4/IMG-0983.jpg", alt: "Granite steps leading to lawn area in Navan, Meath" },
      { src: "/paving4/IMG-0984.jpg", alt: "Backyard paving and steps in Navan, Meath" },
    ],
    template: "gallery",
    featured: false,
    legacyPaths: ["/paving/pavingsteps"],
  },
  {
    slug: "patio-steps-tallaght",
    title: "Patio & Steps",
    location: "Tallaght, Dublin",
    category: "garden-patios",
    services: ["Paving", "Walling"],
    description: [
      "Granite patio and steps along with new fencing.",
    ],
    coverImage: { src: "/patio4/IMG_8075.jpg", alt: "Granite patio and steps project in Tallaght, Dublin" },
    gallery: [
      { src: "/patio4/IMG_8077.jpg", alt: "Granite steps and gazebo area in Tallaght, Dublin" },
      { src: "/patio4/IMG_8079.jpg", alt: "Paved path in Tallaght, Dublin" },
      { src: "/patio4/IMG_8074.jpg", alt: "Granite patio detail in Tallaght, Dublin" },
      { src: "/patio4/IMG_8078.jpg", alt: "Planting alongside granite patio and steps in Tallaght, Dublin" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/garden-patios/granite-patio-dublin"],
  },
  {
    slug: "townhouse-patio-drogheda",
    title: "Townhouse Patio & Planting",
    location: "Drogheda, Louth",
    category: "garden-patios",
    services: ["Paving", "Walling", "Landscaping"],
    description: [
      "The back garden of a townhouse completed with granite slabs, walling and planting.",
    ],
    coverImage: { src: "/patio1/IMG-1737.jpg", alt: "Townhouse patio and planting project in Drogheda, Louth" },
    gallery: [
      { src: "/patio1/IMG-1735.jpg", alt: "Granite slab patio at townhouse in Drogheda, Louth" },
      { src: "/patio1/IMG-1736.jpg", alt: "Patio and walling detail in Drogheda, Louth" },
      { src: "/patio1/IMG-1738.jpg", alt: "Townhouse back garden patio in Drogheda, Louth" },
    ],
    template: "gallery",
    featured: false,
    legacyPaths: ["/garden-patios/granite-patio-louth"],
  },
  {
    slug: "circular-patio-kells",
    title: "Circular Patio",
    location: "Kells, Meath",
    category: "garden-patios",
    services: ["Paving", "Landscaping"],
    description: [
      "A circular granite patio surrounded by pebbled shrub beds and planting.",
    ],
    coverImage: { src: "/patio3/IMG_8576.jpg", alt: "Circular granite patio surrounded by pebbled shrub beds in Kells, Meath" },
    gallery: [
      { src: "/patio3/IMG_8580.jpg", alt: "Circular granite patio with surrounding planting in Kells, Meath" },
      { src: "/patio3/IMG_8577.jpg", alt: "Granite patio detail showing pebbled shrub bed border in Kells, Meath" },
      { src: "/patio3/IMG_8578.jpg", alt: "Circular granite patio installation detail in Kells, Meath" },
      { src: "/patio3/IMG_8575.jpg", alt: "Garden planting and shrub beds around circular granite patio in Kells, Meath" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/garden-patios/granite-patio-meath"],
  },
  {
    slug: "porcelain-patio-navan",
    title: "Porcelain Patio",
    location: "Navan, Meath",
    category: "garden-patios",
    services: ["Paving"],
    description: [
      "A porcelain patio with kerbing around it and a roll-out grass lawn.",
    ],
    coverImage: { src: "/patio5/IMG_7905.jpg", alt: "Porcelain patio project in Navan, Meath" },
    gallery: [
      { src: "/patio5/IMG_7914.jpg", alt: "Porcelain patio and gazebo area in Navan, Meath" },
      { src: "/patio5/IMG_7907.jpg", alt: "Porcelain patio path detail in Navan, Meath" },
      { src: "/patio5/IMG_7900.jpg", alt: "Porcelain patio with kerbing in Navan, Meath" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/garden-patios/porcelain-patio-meath"],
  },
  {
    slug: "fencing-walling-cortown",
    title: "Fencing & Walling",
    location: "Cortown, Meath",
    category: "walling",
    services: ["Walling"],
    description: [
      "We removed a hedge at the back of this house and replaced it with walling and fencing, complete with hedging.",
    ],
    coverImage: { src: "/walling2/IMG-1259.jpg", alt: "Fencing and walling project in Cortown, Meath" },
    gallery: [
      { src: "/walling2/IMG-1260.jpg", alt: "New fencing and walling replacing hedge in Cortown, Meath" },
      { src: "/walling2/IMG-1262.jpg", alt: "Walling and fencing path detail in Cortown, Meath" },
      { src: "/walling2/IMG-1263.jpg", alt: "Walling and hedging detail in Cortown, Meath" },
    ],
    extraSections: [
      {
        heading: "Progress Photos",
        images: [
          { src: "/walling2/IMG-1256.jpg", alt: "Fencing and walling installation in progress in Cortown, Meath" },
          { src: "/walling2/IMG-1257.jpg", alt: "Walling construction in progress in Cortown, Meath" },
        ],
      },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/walling/fencedwalling"],
  },
  {
    slug: "patio-walling-clonee",
    title: "Patio & Walling",
    location: "Clonee, Dublin",
    category: "walling",
    services: ["Paving", "Walling"],
    description: [
      "A limestone patio and walling project.",
    ],
    coverImage: { src: "/walling1/IMG-0148.jpg", alt: "Limestone patio and walling project in Clonee, Dublin" },
    gallery: [
      { src: "/walling1/IMG-0142.jpg", alt: "Limestone patio and gazebo area in Clonee, Dublin" },
      { src: "/walling1/IMG-0145.jpg", alt: "Limestone patio path detail in Clonee, Dublin" },
      { src: "/walling1/IMG-0140.jpg", alt: "Patio and walling detail in Clonee, Dublin" },
      { src: "/walling1/IMG-0143.jpg", alt: "Planting alongside limestone patio and walling in Clonee, Dublin" },
    ],
    template: "gallery",
    featured: false,
    legacyPaths: ["/walling/patiowalling"],
  },
  {
    slug: "paved-gazebo-donore",
    title: "Paved Gazebo",
    location: "Donore, Meath",
    category: "gazebos",
    services: ["Gazebos", "Paving"],
    description: [
      "A paved gazebo built for use as an outdoor BBQ and sitting area.",
    ],
    coverImage: { src: "/gazebo3/IMG-7632.jpg", alt: "Paved gazebo and BBQ area project in Donore, Meath" },
    gallery: [
      { src: "/gazebo3/IMG-7486.jpg", alt: "Paved gazebo path detail in Donore, Meath" },
      { src: "/gazebo3/IMG-7488.jpg", alt: "Paved gazebo patio in Donore, Meath" },
    ],
    extraSections: [
      {
        heading: "Progress Photos",
        images: [
          { src: "/gazebo3/IMG-7464.jpg", alt: "Paved gazebo construction in progress in Donore, Meath" },
          { src: "/gazebo3/IMG-7466.jpg", alt: "Gazebo and patio installation in progress in Donore, Meath" },
        ],
      },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/gazebos/bbqarea"],
  },
  {
    slug: "gazebo-spa-castletown",
    title: "Gazebo Spa",
    location: "Castletown, Meath",
    category: "gazebos",
    services: ["Gazebos", "Paving", "Walling", "Landscaping"],
    description: [
      "A gazebo built to be used as a BBQ and spa area. All construction of the gazebo was completed by us along with the paving, walling and landscaping around it.",
    ],
    coverImage: { src: "/ourgazebo/IMG_8691.jpg", alt: "Custom gazebo built for BBQ and spa area with paving and landscaping in Castletown, Meath" },
    gallery: [
      { src: "/ourgazebo/IMG-4092.jpg", alt: "Custom timber gazebo construction for BBQ and spa area in Castletown, Meath" },
      { src: "/ourgazebo/IMG_8693.jpg", alt: "Paving and landscaping around gazebo spa area in Castletown, Meath" },
      { src: "/ourgazebo/IMG_8694.jpg", alt: "Patio paving around custom gazebo in Castletown, Meath" },
      { src: "/ourgazebo/IMG_8692.jpg", alt: "Gazebo spa area with surrounding patio and walling in Castletown, Meath" },
      { src: "/ourgazebo/IMG-4077.jpg", alt: "Garden planting and landscaping around gazebo spa area in Castletown, Meath" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/gazebos/gazebospa"],
  },
  {
    slug: "park-beo-wilkinstown",
    title: "Park Beo",
    location: "Wilkinstown, Meath",
    category: "gazebos",
    services: ["Gazebos"],
    description: [
      "We constructed Park Beo in Wilkinstown, Meath, which included the build of this gazebo seating area.",
    ],
    coverImage: { src: "/parkbeo/IMG-5566.jpg", alt: "Park Beo gazebo project in Wilkinstown, Meath" },
    gallery: [
      { src: "/parkbeo/IMG-5746.jpg", alt: "Gazebo seating area path detail at Park Beo, Wilkinstown, Meath" },
      { src: "/parkbeo/IMG-5567.jpg", alt: "Gazebo seating area at Park Beo, Wilkinstown, Meath" },
      { src: "/parkbeo/IMG-5743.jpg", alt: "Park Beo gazebo construction detail, Wilkinstown, Meath" },
      { src: "/parkbeo/IMG-5744.jpg", alt: "Gazebo seating area at Park Beo, Wilkinstown, Meath" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/gazebos/parkbeo"],
  },
  {
    slug: "patio-gazebo-dunshaughlin",
    title: "Patio & Gazebo",
    location: "Dunshaughlin, Meath",
    category: "gazebos",
    services: ["Gazebos", "Paving", "Landscaping"],
    description: [
      "We designed and built a large granite patio and custom timber gazebo for this garden in Meath. The project also included surrounding shrub beds for a natural finish and improved outdoor flow.",
    ],
    coverImage: { src: "/dunshauglingazebo/IMG_5111(1).jpg", alt: "Custom patio and gazebo project in Dunshaughlin, Meath" },
    gallery: [
      { src: "/dunshauglingazebo/IMG_5107.jpg", alt: "Custom timber gazebo in Dunshaughlin, Meath" },
      { src: "/dunshauglingazebo/IMG_5116.jpg", alt: "Granite patio path detail in Dunshaughlin, Meath" },
      { src: "/dunshauglingazebo/IMG_5117.jpg", alt: "Granite patio in Dunshaughlin, Meath" },
      { src: "/dunshauglingazebo/IMG_5118.jpg", alt: "Granite patio and gazebo in Dunshaughlin, Meath" },
      { src: "/dunshauglingazebo/IMG_5113.jpg", alt: "Shrub bed planting around patio and gazebo in Dunshaughlin, Meath" },
    ],
    extraSections: [
      {
        heading: "Progress Pictures",
        images: [
          { src: "/dunshauglingazebo/IMG-4718.jpg", alt: "Patio and gazebo construction in progress in Dunshaughlin, Meath" },
          { src: "/dunshauglingazebo/IMG-4864.jpg", alt: "Granite patio installation in progress in Dunshaughlin, Meath" },
          { src: "/dunshauglingazebo/IMG-4783.jpg", alt: "Gazebo construction in progress in Dunshaughlin, Meath" },
        ],
      },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: [
      "/gazebos/custom-gazebo-meath",
      "/garden-patios/patio-gazebo-meath",
      "/landscaping-services/patiogazebo",
    ],
  },
  {
    slug: "pond-patio-carlanstown",
    title: "Pond & Patio",
    location: "Carlanstown, Meath",
    category: "waterfeatures",
    services: ["Water Features", "Paving", "Walling"],
    description: [
      "A patio with walling and steps throughout it, complete with a pond.",
    ],
    coverImage: { src: "/waterfall1/IMG-1965.jpg", alt: "Pond and patio project in Carlanstown, Meath" },
    gallery: [
      { src: "/waterfall1/IMG-1966.jpg", alt: "Pond and patio walling detail in Carlanstown, Meath" },
      { src: "/waterfall1/IMG-1967.jpg", alt: "Patio steps beside pond in Carlanstown, Meath" },
      { src: "/waterfall1/IMG-1964.jpg", alt: "Pond and patio in Carlanstown, Meath" },
      { src: "/waterfall1/IMG-1963.jpg", alt: "Planting around pond and patio in Carlanstown, Meath" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/waterfeatures/naturalpond"],
  },
  {
    slug: "waterfall-castletown",
    title: "Waterfall",
    location: "Castletown, Meath",
    category: "waterfeatures",
    services: ["Water Features", "Landscaping"],
    description: [
      "A sandstone water feature completed with landscaping around it.",
    ],
    coverImage: { src: "/waterfall2/mainimage.jpg", alt: "Sandstone waterfall feature project in Castletown, Meath" },
    gallery: [
      { src: "/waterfall.jpg", alt: "Sandstone waterfall feature in Castletown, Meath" },
      { src: "/waterfall2/IMG-1266.jpg", alt: "Waterfall feature path detail in Castletown, Meath" },
      { src: "/waterfall2/IMG-0902.jpg", alt: "Patio beside sandstone waterfall in Castletown, Meath" },
      { src: "/waterfall2/IMG-1192.jpg", alt: "Sandstone waterfall and landscaping in Castletown, Meath" },
      { src: "/waterfall2/IMG-0539.jpg", alt: "Waterfall feature path in Castletown, Meath" },
      { src: "/waterfall2/IMG-0540.jpg", alt: "Patio beside waterfall feature in Castletown, Meath" },
    ],
    template: "gallery",
    featured: true,
    legacyPaths: ["/waterfeatures/tranquilpond"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
