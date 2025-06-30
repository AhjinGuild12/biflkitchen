export interface Brand {
  id: string;
  name: string;
  founded: string;
  category: 'budget' | 'mid' | 'premium' | 'luxury';
  heritage: string;
  specialty: string;
  country: 'french' | 'german' | 'belgian' | 'italian' | 'nordic' | 'global';
  links: Array<{
    icon: string;
    label: string;
    url: string;
  }>;
}

export const brands: Brand[] = [
  // French Heritage Brands
  {
    id: 'le-creuset',
    name: 'Le Creuset',
    founded: 'Founded 1925',
    category: 'premium',
    heritage: 'French enameled cast iron perfection since 1925',
    specialty: 'Iconic Dutch ovens and colorful enamelware that becomes family heirlooms',
    country: 'french',
    links: [
      { icon: '🏪', label: 'Official Le Creuset Store', url: 'https://www.lecreuset.com' },
      { icon: '🛍️', label: 'Williams Sonoma Collection', url: 'https://www.williams-sonoma.com/shop/cookware/cookware-le-creuset/' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/3GgJ06R' }
    ]
  },
  {
    id: 'de-buyer',
    name: 'De Buyer',
    founded: 'Founded 1830',
    category: 'mid',
    heritage: 'French carbon steel mastery for nearly 200 years',
    specialty: 'Professional-grade carbon steel and non-stick pans used by Michelin chefs',
    country: 'french',
    links: [
      { icon: '🏪', label: 'Official De Buyer Store', url: 'https://www.debuyer-brandshop.com/en' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/444favr' }
    ]
  },
  {
    id: 'mauviel',
    name: 'Mauviel',
    founded: 'Founded 1830',
    category: 'luxury',
    heritage: 'French copper craftsmanship since 1830',
    specialty: 'Hand-hammered copper cookware for professional chefs and culinary enthusiasts',
    country: 'french',
    links: [
      { icon: '🛍️', label: 'Williams Sonoma Collection', url: 'https://www.williams-sonoma.com/shop/cookware/cookware-mauviel/' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/3Te198b' }
    ]
  },
  {
    id: 'staub',
    name: 'Staub',
    founded: 'Founded 1974',
    category: 'premium',
    heritage: 'French cast iron with German precision engineering',
    specialty: 'Matte black enamel Dutch ovens and cocottes with self-basting lids',
    country: 'french',
    links: [
      { icon: '🏪', label: 'Shop Staub Collection', url: 'https://thehomestore.co.nz/collections/staub' },
      { icon: '🛒', label: 'Cast Iron Collection', url: 'https://amzn.to/3I33PDp' }
    ]
  },
  {
    id: 'cristel',
    name: 'Cristel',
    founded: 'Founded 1968',
    category: 'mid',
    heritage: 'French modular stainless steel innovation',
    specialty: 'Removable handle system and tri-ply construction for space-saving storage',
    country: 'french',
    links: [
      { icon: '🇺🇸', label: 'Cristel USA Official', url: 'https://www.cristelusa.com' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/4khzG0y' }
    ]
  },
  
  // German Engineering Excellence
  {
    id: 'fissler',
    name: 'Fissler',
    founded: 'Founded 1845',
    category: 'premium',
    heritage: 'German precision engineering since 1845',
    specialty: 'World-renowned pressure cookers and premium stainless steel cookware',
    country: 'german',
    links: [
      { icon: '🏪', label: 'Shop Fissler Collection', url: 'https://thelivingstyles.co.nz/brands/fissler/' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/3Tkdg3E' }
    ]
  },
  {
    id: 'zwilling',
    name: 'Zwilling J.A. Henckels',
    founded: 'Founded 1731',
    category: 'mid',
    heritage: 'Nearly 300 years of German craftsmanship tradition',
    specialty: 'Premium stainless steel cookware and professional knife sets',
    country: 'german',
    links: [
      { icon: '🔪', label: 'Chef Shop Collection', url: 'https://www.chefshop.co.nz/product-category/shop-by-brands/zwilling-j-a-henckels-cookware/' }
    ]
  },
  
  // Belgian Craftsmanship
  {
    id: 'demeyere',
    name: 'Demeyere',
    founded: 'Founded 1908',
    category: 'premium',
    heritage: 'Belgian stainless steel perfection since 1908',
    specialty: 'Multi-layer stainless steel with perfect heat distribution technology',
    country: 'belgian',
    links: [
      { icon: '🏪', label: 'Shop Demeyere Online', url: 'https://www.kitchenknives.co.uk/by-brand/demeyere/' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/40vAQya' }
    ]
  },
  
  // Italian Culinary Tradition
  {
    id: 'lagostina',
    name: 'Lagostina',
    founded: 'Founded 1901',
    category: 'mid',
    heritage: 'Italian stainless steel tradition over 120 years',
    specialty: 'Premium pressure cookers and pasta pots for authentic Italian cooking',
    country: 'italian',
    links: [
      { icon: '🏪', label: 'Shop Lagostina', url: 'https://www.u-buy.co.nz/brand/lagostina' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/44HmMUM' }
    ]
  },
  {
    id: 'bialetti',
    name: 'Bialetti',
    founded: 'Founded 1919',
    category: 'budget',
    heritage: 'Italian coffee culture icon since 1919',
    specialty: 'Iconic moka pots and aluminum cookware for authentic espresso',
    country: 'italian',
    links: [
      { icon: '☕', label: 'Official Bialetti Store', url: 'https://www.bialetti.co.nz/collections' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/4lzOCbt' }
    ]
  },
  
  // Nordic Durability & Design
  {
    id: 'fiskars',
    name: 'Fiskars',
    founded: 'Founded 1649',
    category: 'mid',
    heritage: 'Finnish craftsmanship since 1649 - older than America itself',
    specialty: 'Hard-wearing non-stick and cast iron with Scandinavian design',
    country: 'nordic',
    links: [
      { icon: '🏪', label: 'Shop Fiskars', url: 'https://www.stevens.co.nz/brands/fiskars' }
    ]
  },
  {
    id: 'iittala',
    name: 'Iittala',
    founded: 'Founded 1881',
    category: 'premium',
    heritage: 'Finnish design excellence since 1881',
    specialty: 'Modern Scandinavian design meets functional cooking performance',
    country: 'nordic',
    links: [
      { icon: '🏪', label: 'FinnStyle Collection', url: 'https://www.finnstyle.com/iittala-cookware.html' }
    ]
  },
  {
    id: 'scanpan',
    name: 'Scanpan',
    founded: 'Founded 1956 🇩🇰',
    category: 'mid',
    heritage: 'Danish non-stick innovation since 1956',
    specialty: 'PFOA-free ceramic titanium non-stick for healthier cooking',
    country: 'nordic',
    links: [
      { icon: '🏪', label: 'Spotlight Stores', url: 'https://www.spotlightstores.com/nz/scanpan' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/4l9C36O' }
    ]
  },
  
  // Global Heritage Brands
  {
    id: 'valira',
    name: 'Valira',
    founded: 'Founded 1942 🇪🇸',
    category: 'mid',
    heritage: 'Spanish cookware tradition since 1942',
    specialty: 'Stainless steel and pressure cooking for Mediterranean cuisine',
    country: 'global',
    links: [
      { icon: '🏪', label: 'The Home Store', url: 'https://thehomestore.co.nz/collections/valira' }
    ]
  },
  {
    id: 'ronneby-bruk',
    name: 'Ronneby Bruk',
    founded: 'Founded 1834 🇸🇪',
    category: 'mid',
    heritage: 'Swedish cast iron tradition since 1834',
    specialty: 'Scandinavian cast iron and enamelware with timeless design',
    country: 'global',
    links: [
      { icon: '🏪', label: 'Coozina Store', url: 'https://coozina.com/brands/ronneby_bruk?ntsta_brand=3514' }
    ]
  },
  {
    id: 'tramontina',
    name: 'Tramontina',
    founded: 'Founded 1911 🇧🇷',
    category: 'budget',
    heritage: 'Brazilian quality accessible to all since 1911',
    specialty: 'Affordable stainless steel and non-stick without compromising durability',
    country: 'global',
    links: [
      { icon: '🛒', label: 'Walmart Collection', url: 'https://www.walmart.com/browse/home/tramontina/4044_623679_8140341_5999849' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/45KHwMC' }
    ]
  }
];

export const countryData = {
  french: {
    emoji: '🇫🇷',
    title: 'French Heritage Brands',
    description: 'Legendary French craftsmanship combining artisanal traditions with modern excellence'
  },
  german: {
    emoji: '🇩🇪',
    title: 'German Engineering Excellence',
    description: 'Precision engineering and innovative design for the most demanding culinary professionals'
  },
  belgian: {
    emoji: '🇧🇪',
    title: 'Belgian Craftsmanship',
    description: 'Innovative stainless steel technology with meticulous attention to detail'
  },
  italian: {
    emoji: '🇮🇹',
    title: 'Italian Culinary Tradition',
    description: 'Passionate Italian design meeting authentic cooking traditions'
  },
  nordic: {
    emoji: '🇫🇮',
    title: 'Nordic Durability & Design',
    description: 'Scandinavian minimalism meets uncompromising functionality'
  },
  global: {
    emoji: '🌍',
    title: 'Global Heritage Brands',
    description: 'International excellence spanning continents and culinary traditions'
  }
};
