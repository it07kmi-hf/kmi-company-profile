export interface CategoryItem {
  id: number;
  name: string;
  slug: string;
  woodType: string;
  image: string;
}

export interface CollectionItem {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  wood: string;
  image: string;
}

export const COMPANY_INFO = {
  name: "PT Kayu Mebel Indonesia",
  shortName: "KMI",
  foundedYear: 2017,
  address: "Jl. Manunggal Jati No. KM 23, Sawah, Jatikalang, Kec. Krian, Kabupaten Sidoarjo, Jawa Timur 61262",
  city: "Sidoarjo",
  province: "Jawa Timur",
  country: "Indonesia",
  markets: ["Jepang (Japan)", "Amerika Serikat (USA)", "Eropa (Europe)"],
  timbers: ["White Oak", "White Ash", "Nyatoh", "Agathis", "Meranti"],
  machinery: "Modern Japanese & German CNC Woodworking Machinery",
  phone: "+62 31 898 5600",
  whatsapp: "6281234567890",
  email: "info@kayumebel.net",
  domain: "kayumebel.net",
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 1,
    name: "Interior & Living Furniture",
    slug: "interior-furniture",
    woodType: "White Oak, White Ash & Nyatoh",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Dining Tables & Chairs",
    slug: "dining-furniture",
    woodType: "Solid White Oak & Ash",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Housing Components",
    slug: "housing-components",
    woodType: "Nyatoh, Meranti & Agathis",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Profile Mouldings",
    slug: "profile-mouldings",
    woodType: "Precision Architectural Profiles",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Exterior & Garden Living",
    slug: "exterior-furniture",
    woodType: "Weather-Resistant Hardwoods",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Storage & Credenzas",
    slug: "storage-credenzas",
    woodType: "Solid Wood & Natural Veneer",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
  },
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 1,
    title: "Japan Export Series 2026/2027",
    subtitle: "Precision White Oak & White Ash",
    tagline: "Ultra-precise Japanese standard joinery, minimalist aesthetics, and natural organic oil finish.",
    wood: "Solid White Oak & White Ash",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "North America Architectural Line",
    subtitle: "Solid Housing Components & Mouldings",
    tagline: "Engineered timber components built for residential durability and dimensional stability.",
    wood: "Nyatoh, Meranti & Solid Ash",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Contemporary Minimalist Dining",
    subtitle: "Export Collection",
    tagline: "Ergonomic dining sets and living seating designed for modern international living spaces.",
    wood: "Selected Hardwoods & Veneer",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
  },
];

export const STATS = [
  { value: "2017", label: "Year Established", detail: "Krian, Sidoarjo Factory" },
  { value: "3+", label: "Primary Global Markets", detail: "Japan, USA & Europe" },
  { value: "100%", label: "SVLK & V-Legal", detail: "Certified sustainable timber" },
  { value: "CNC", label: "Japanese & German Tech", detail: "Precision woodworking" },
];
