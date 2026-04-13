export interface Brand {
  id: string;
  name: string;
  founded: string;
  category: 'budget' | 'mid' | 'premium' | 'luxury';
  heritage: string;
  specialty: string;
  country: 'french' | 'german' | 'belgian' | 'italian' | 'nordic' | 'british' | 'australian' | 'canadian' | 'austrian' | 'thai' | 'dutch' | 'swiss' | 'spanish' | 'japanese' | 'american' | 'global';
  type?: 'cookware' | 'knives' | 'glassware' | 'coffee';
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
    id: 'matfer-bourgeat',
    name: 'Matfer Bourgeat',
    founded: 'Founded 1814',
    category: 'premium',
    heritage: 'French professional-grade cookware supplier to Michelin kitchens since 1814',
    specialty: 'Pro carbon steel frypans and black-steel cookware — the quiet peer to De Buyer in commercial French kitchens',
    country: 'french',
    links: [
      { icon: '🏪', label: 'Matfer Bourgeat USA', url: 'https://www.matferbourgeatusa.com' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/4cDox9E' }
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
  {
    id: 'emile-henry',
    name: 'Emile Henry',
    founded: 'Founded 1850',
    category: 'premium',
    heritage: 'French ceramic cookware using proprietary Burgundy clay since 1850',
    specialty: 'Freezer-to-oven safe ceramic cookware from mineral-rich limestone soils',
    country: 'french',
    links: [
      { icon: '🇺🇸', label: 'Official USA', url: 'https://www.emilehenryusa.com' },
      { icon: '🇪🇺', label: 'Official EU', url: 'https://www.emilehenry.com' },
      { icon: '🏪', label: 'Peters Kensington', url: 'https://www.petersofkensington.com.au/brands/emile-henry/' }
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
  {
    id: 'wmf',
    name: 'WMF',
    founded: 'Founded 1853',
    category: 'premium',
    heritage: 'German precision engineering and innovative design since 1853',
    specialty: 'Pioneered stainless steel cookware with "Cromargan" stainless steel technology',
    country: 'german',
    links: [
      { icon: '🏪', label: 'Official Germany', url: 'https://www.wmf.com/de' },
      { icon: '🇺🇸', label: 'USA Store', url: 'https://www.dasallas.com/collections/wmf' },
      { icon: '🏪', label: 'Singapore Metro', url: 'https://www.metro.com.sg/productlist/brand/WMF' }
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
  {
    id: 'skeppshult',
    name: 'Skeppshult',
    founded: 'Founded 1906 🇸🇪',
    category: 'premium',
    heritage: 'Swedish handcrafted cast iron using wind and hydropower since 1906',
    specialty: 'Ultra-lightweight cast iron 40% lighter than traditional while maintaining performance',
    country: 'nordic',
    links: [
      { icon: '🏪', label: 'Official Sweden', url: 'https://www.skeppshult.com/en/' },
      { icon: '🇺🇸', label: 'Pleasant Hill Grain', url: 'https://pleasanthillgrain.com/shop-by-brand/skeppshult/' },
      { icon: '🇬🇧', label: 'UK Store', url: 'https://www.skeppshult.uk' }
    ]
  },
  {
    id: 'ronneby-bruk',
    name: 'Ronneby Bruk',
    founded: 'Founded 1705 🇸🇪',
    category: 'mid',
    heritage: 'Swedish cast iron production with over 300 years of heritage',
    specialty: 'Sustainable pre-seasoned cast iron with award-winning Maestro series',
    country: 'nordic',
    links: [
      { icon: '🏪', label: 'COOZINA EU', url: 'https://coozina.com/brands/ronneby_bruk' },
      { icon: '🇺🇸', label: 'Pfannenprofis', url: 'https://www.pfannenprofis.com/en/collections/ronneby-bruk' }
    ]
  },
  
  // British Craftsmanship
  {
    id: 'samuel-groves',
    name: 'Samuel Groves',
    founded: 'Founded 1817',
    category: 'premium',
    heritage: 'British handcrafted cookware manufacturing since 1817',
    specialty: 'Handcrafted British cookware with the iconic "Mermaid" brand heritage',
    country: 'british',
    links: [
      { icon: '🏪', label: 'Official Store', url: 'https://www.samuelgroves.com' },
      { icon: '🔪', label: 'UK Kitchen Knives', url: 'https://www.kitchenknives.co.uk/by-brand/samuel-groves/' }
    ]
  },
  {
    id: 'netherton-foundry',
    name: 'Netherton Foundry',
    founded: 'Founded 2011',
    category: 'premium',
    heritage: 'British ironwork heritage from the birthplace of the Industrial Revolution',
    specialty: 'Sustainable cast and spun iron cookware using traditional methods',
    country: 'british',
    links: [
      { icon: '🏪', label: 'Official UK', url: 'https://www.netherton-foundry.co.uk' },
      { icon: '🇪🇺', label: 'ABASK EU', url: 'https://www.abask.com/en-au/collections/netherton-foundry' },
      { icon: '🇺🇸', label: 'Borough Kitchen', url: 'https://www.boroughkitchen.com/collections/netherton-foundry' }
    ]
  },
  
  // Australian Innovation
  {
    id: 'solidteknics',
    name: 'Solidteknics',
    founded: 'Founded 2014',
    category: 'premium',
    heritage: 'Australian sustainable engineering with centuries-long guarantees',
    specialty: 'Seamless one-piece wrought iron cookware from single sheets of Australian iron',
    country: 'australian',
    links: [
      { icon: '🏪', label: 'Official Australia', url: 'https://www.solidteknics.com' },
      { icon: '🇺🇸', label: 'USA Line', url: 'https://solidteknicsusa.com' },
      { icon: '🇪🇺', label: 'EU BuyMeOnce', url: 'https://buymeonce.com/products/solidteknics' }
    ]
  },
  
  // Canadian Quality
  {
    id: 'meyer-canada',
    name: 'Meyer Canada',
    founded: 'Founded 1951',
    category: 'mid',
    heritage: 'Canada\'s only cookware manufacturer with global innovation heritage',
    specialty: 'Prince Edward Island facility producing innovative cookware solutions',
    country: 'canadian',
    links: [
      { icon: '🏪', label: 'Meyer Canada', url: 'https://meyercanada.ca' },
      { icon: '🛍️', label: 'Gourmet Warehouse', url: 'https://gourmetwarehouse.ca/meyer/' },
      { icon: '🏪', label: 'Kitchen Stuff Plus', url: 'https://www.kitchenstuffplus.com/meyer' }
    ]
  },
  {
    id: 'paderno-canada',
    name: 'Paderno Canada',
    founded: 'Founded 1979',
    category: 'mid',
    heritage: 'Canadian tri-ply stainless steel expertise on Prince Edward Island',
    specialty: 'Tri-ply stainless steel construction with magnetic bases for induction',
    country: 'canadian',
    links: [
      { icon: '🏪', label: 'Official Canada', url: 'https://www.paderno.com' },
      { icon: '🛒', label: 'Walmart Canada', url: 'https://www.walmart.ca/en/c/brand/paderno' },
      { icon: '🏪', label: 'Canadian Tire', url: 'https://www.canadiantire.ca/en/all-brands/paderno.html' }
    ]
  },
  
  // Austrian Heritage
  {
    id: 'riess',
    name: 'Riess',
    founded: 'Founded 1550',
    category: 'mid',
    heritage: 'Austrian family business with over 470 years of enamelware tradition',
    specialty: 'CO2-neutral enamelware production powered by hydraulic power since the 1920s',
    country: 'austrian',
    links: [
      { icon: '🇪🇺', label: 'Official EU Store', url: 'https://www.riess-markenshop.de/en' },
      { icon: '🇦🇺', label: 'Australia Store', url: 'https://simplebeautifulthings.com.au/collections/riess-enamelware' },
      { icon: '🇺🇸', label: 'Liberty London', url: 'https://www.libertylondon.com/us/brands/e/emile-henry/' }
    ]
  },
  
  // Thai Manufacturing
  {
    id: 'zebra-thailand',
    name: 'Zebra',
    founded: 'Founded 1966 🇹🇭',
    category: 'budget',
    heritage: 'Thailand\'s first stainless steel kitchenware manufacturer since 1966',
    specialty: 'ISO certified stainless steel cookware with international quality standards',
    country: 'thai',
    links: [
      { icon: '🇦🇺', label: 'Australia Drifta', url: 'https://www.drifta.com.au/product/zebra-food-pan-32cm/' },
      { icon: '🇦🇺', label: 'Survival Supplies', url: 'https://www.survivalsupplies.com.au/brand/zebra-stainless-steel-cookware' },
      { icon: '🇲🇾', label: 'Malaysia Store', url: 'https://www.khianhenn.com.my/ourproducts/cid/473289/cat/zebra-thailand/' }
    ]
  },
  
  // Dutch Sustainability
  {
    id: 'skottsberg',
    name: 'Skottsberg',
    founded: 'Founded 2019',
    category: 'premium',
    heritage: 'Dutch sustainable cookware innovation by the Wegter family since 1916',
    specialty: 'Natural non-stick coatings without synthetic materials for sustainable cooking',
    country: 'dutch',
    links: [
      { icon: '🇪🇺', label: 'Official EU', url: 'https://www.skottsberg.com/en/pans/' },
      { icon: '🇺🇸', label: 'Knivesandtools', url: 'https://www.knivesandtools.com/en/ct/skottsberg-pans.htm' }
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
    id: 'tramontina',
    name: 'Tramontina',
    founded: 'Founded 1911 🇧🇷',
    category: 'budget',
    heritage: 'Brazilian international success story since 1911 - now in 120+ countries',
    specialty: 'Affordable quality from Brazil - proving durability doesn\'t require luxury pricing',
    country: 'global',
    links: [
      { icon: '🇺🇸', label: 'USA Official', url: 'https://www.tramontina-usa.com' },
      { icon: '🇦🇺', label: 'Australia', url: 'https://tramontinaaustralia.com.au' },
      { icon: '🛒', label: 'Walmart Collection', url: 'https://www.walmart.com/browse/home/tramontina/4044_623679_8140341_5999849' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/45KHwMC' }
    ]
  },

  // American Craftsmanship
  {
    id: 'all-clad',
    name: 'All-Clad',
    founded: 'Founded 1971',
    category: 'premium',
    heritage: 'American stainless steel cookware hand-assembled in Pennsylvania since 1971',
    specialty: 'Bonded tri-ply and copper-core stainless loved by Thomas Keller, David Chang, and r/BuyItForLife',
    country: 'american',
    links: [
      { icon: '🏪', label: 'All-Clad Official', url: 'https://www.all-clad.com' },
      { icon: '🛍️', label: 'Williams Sonoma Collection', url: 'https://www.williams-sonoma.com/shop/cookware/cookware-all-clad/' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/4vr5Ugz' }
    ]
  },
  {
    id: 'lodge',
    name: 'Lodge',
    founded: 'Founded 1896',
    category: 'budget',
    heritage: 'America\'s oldest family-owned cast iron foundry in South Pittsburg, Tennessee since 1896',
    specialty: 'Pre-seasoned cast iron and enameled Dutch ovens with a lifetime warranty at accessible prices',
    country: 'american',
    links: [
      { icon: '🏪', label: 'Lodge Cast Iron Official', url: 'https://www.lodgecastiron.com' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/41uudfN' }
    ]
  },
  {
    id: 'smithey',
    name: 'Smithey Ironware',
    founded: 'Founded 2015',
    category: 'premium',
    heritage: 'Charleston, SC cast iron revival — heirloom skillets with hand-polished glassy-smooth cooking surfaces',
    specialty: 'Boutique US cast iron that arrives pre-seasoned and mirror-smooth — The Kitchn\'s "best for most" pick above Lodge',
    country: 'american',
    links: [
      { icon: '🏪', label: 'Smithey Official', url: 'https://www.smithey.com' }
    ]
  },
  {
    id: 'field-company',
    name: 'Field Company',
    founded: 'Founded 2016',
    category: 'premium',
    heritage: 'American cast iron reimagined — Wisconsin and Indiana foundries making lighter, smoother skillets',
    specialty: 'Precision-machined lightweight cast iron (4.3 lbs for 10.25") — r/castiron\'s daily-driver favorite',
    country: 'american',
    links: [
      { icon: '🏪', label: 'Field Company Official', url: 'https://fieldcompany.com' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/4tM6eF6' }
    ]
  },
  {
    id: 'usa-pan',
    name: 'USA Pan',
    founded: 'Founded 1959',
    category: 'mid',
    heritage: 'American-made aluminized steel bakeware from Pennsylvania since 1959',
    specialty: 'Sheet pans, loaf pans, and muffin tins with silicone non-stick — Prudent Reviews\' top sheet-pan pick',
    country: 'american',
    links: [
      { icon: '🏪', label: 'USA Pan Official', url: 'https://www.usapan.com' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/4syT4dF' }
    ]
  },
  {
    id: 'nordic-ware',
    name: 'Nordic Ware',
    founded: 'Founded 1946',
    category: 'mid',
    heritage: 'Minneapolis family-owned bakeware pioneer since 1946 — inventor of the Bundt pan',
    specialty: 'Pure aluminum sheet pans and cast aluminum Bundt/specialty molds — the BIFL value pick for bakers',
    country: 'american',
    links: [
      { icon: '🏪', label: 'Nordic Ware Official', url: 'https://www.nordicware.com' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/4sO1NJ7' }
    ]
  },

  // KNIFE BRANDS

  // German Knife Masters
  {
    id: 'wusthof',
    name: 'Wüsthof',
    founded: 'Founded 1814',
    category: 'premium',
    heritage: 'German knife mastery from Solingen\'s "City of Blades" for over 200 years',
    specialty: 'Forged chef\'s knives with the famous trident trademark - 7 generations of family craftsmanship',
    country: 'german',
    type: 'knives',
    links: [
      { icon: '🏪', label: 'Crate & Barrel US', url: 'https://www.crateandbarrel.com/shop-by-brand/wusthof/' },
      { icon: '🇦🇺', label: 'Kitchenware Australia', url: 'https://www.kitchenware.com.au/wusthof.html' },
      { icon: '🌍', label: 'Cutlery and More', url: 'https://cutleryandmore.com/pages/wusthof' }
    ]
  },
  {
    id: 'henckels',
    name: 'Henckels (Zwilling)',
    founded: 'Founded 1731',
    category: 'premium',
    heritage: 'One of the world\'s oldest companies with iconic twin logo from 1731',
    specialty: 'German precision knives from the Cutlers\' Guild of Solingen with 300+ years of heritage',
    country: 'german',
    type: 'knives',
    links: [
      { icon: '🇺🇸', label: 'Zwilling Official US', url: 'https://www.zwilling.com/us/knives/' },
      { icon: '🇦🇺', label: 'Victoria\'s Basement', url: 'https://www.victoriasbasement.com.au/brands/zwilling-j-a-henckels/' },
      { icon: '🇩🇪', label: 'Zwilling Germany', url: 'https://www.zwilling.com/de/' }
    ]
  },
  {
    id: 'f-dick',
    name: 'F. Dick',
    founded: 'Founded 1778',
    category: 'premium',
    heritage: 'German precision sharpening and butcher tools since 1778',
    specialty: 'Professional butcher\'s knives and sharpening steels with the arrow trademark',
    country: 'german',
    type: 'knives',
    links: [
      { icon: '🇺🇸', label: 'Knife Merchant US', url: 'https://knifemerchant.com/knives/brands/friedrich-dick-knives/' },
      { icon: '🇦🇺', label: 'Chef\'s Essentials', url: 'https://www.chefsessentials.com.au/brands/fdick/' },
      { icon: '🇩🇪', label: 'Official Dick Germany', url: 'https://www.dick.de/messer/en/cutting/series/activecut' }
    ]
  },
  
  // French Artisan Knives
  {
    id: 'sabatier',
    name: 'Sabatier',
    founded: 'Founded 1810',
    category: 'premium',
    heritage: 'French artisan knives from Thiers - synonymous with French cuisine for 200+ years',
    specialty: 'Precise cutting tools with metallurgy expertise from K-Sabatier family heritage',
    country: 'french',
    type: 'knives',
    links: [
      { icon: '🏪', label: 'Official Sabatier Shop', url: 'https://www.sabatier-shop.com' },
      { icon: '🇺🇸', label: 'Bernal Cutlery', url: 'https://bernalcutlery.com/en-au/collections/k-sabatier' },
      { icon: '🇦🇺', label: 'Peter\'s of Kensington', url: 'https://www.petersofkensington.com.au/brands/sabatier/' }
    ]
  },
  {
    id: 'opinel',
    name: 'Opinel',
    founded: 'Founded 1890',
    category: 'budget',
    heritage: 'French working man\'s knife with iconic wooden handle and Virobloc safety lock',
    specialty: 'Pocket knives with "crowned hand" trademark - 15 million sold annually worldwide',
    country: 'french',
    type: 'knives',
    links: [
      { icon: '🇺🇸', label: 'Opinel USA', url: 'https://www.opinel-usa.com' },
      { icon: '🇫🇷', label: 'Opinel France', url: 'https://www.opinel.com/en' },
      { icon: '🇦🇺', label: 'Opinel Australia', url: 'https://opinel.com.au' }
    ]
  },
  {
    id: 'laguiole',
    name: 'Laguiole',
    founded: 'Founded 1829',
    category: 'premium',
    heritage: 'French shepherd knives from Aveyron with distinctive bee decoration',
    specialty: 'Traditional French folding knives inspired by Spanish navaja with café culture heritage',
    country: 'french',
    type: 'knives',
    links: [
      { icon: '🌍', label: 'Laguiole Imports', url: 'https://www.laguiole-imports.com/en-au/collections/laguiole-knives' },
      { icon: '🇪🇺', label: 'Laguiole French Knives', url: 'https://www.laguiole-french-knives.com/en/' }
    ]
  },
  
  // Scandinavian Craftsmanship
  {
    id: 'helle',
    name: 'Helle',
    founded: 'Founded 1932',
    category: 'premium',
    heritage: 'Norwegian knife craftsmanship from brothers who learned from village blacksmith',
    specialty: 'Handcrafted knives from family farm blacksmith shop - Norway\'s leading manufacturer',
    country: 'nordic',
    type: 'knives',
    links: [
      { icon: '🇺🇸', label: 'Helle US Store', url: 'https://us.helle.com' },
      { icon: '🇳🇴', label: 'Helle Norway', url: 'https://www.helle.com' },
      { icon: '🇦🇺', label: 'Knife Shop Australia', url: 'https://www.knifeshopaustralia.com.au/brand/helle/' }
    ]
  },
  {
    id: 'mora',
    name: 'Mora Knives',
    founded: 'Founded 1891',
    category: 'mid',
    heritage: 'Swedish knife-making heritage with Royal Warrant from King of Sweden since 2011',
    specialty: 'Traditional Swedish craftsmanship producing 4 million knives annually',
    country: 'nordic',
    type: 'knives',
    links: [
      { icon: '🇺🇸', label: 'Knives of the North', url: 'https://www.knivesofthenorth.com/collections/mora-knives' },
      { icon: '🇦🇺', label: 'BNR Industrial', url: 'https://www.bnrindustrial.com.au/collections/morakniv-knives' },
      { icon: '🇦🇺', label: 'Survival Supplies', url: 'https://www.survivalsupplies.com.au/brand/morakniv-knives' }
    ]
  },
  
  // Swiss Precision
  {
    id: 'victorinox',
    name: 'Victorinox',
    founded: 'Founded 1884',
    category: 'mid',
    heritage: 'Swiss precision with 500 million Swiss Army Knives produced since 1884',
    specialty: 'Iconic multi-tool pocket knives - 60,000 produced daily with Swiss engineering excellence',
    country: 'swiss',
    type: 'knives',
    links: [
      { icon: '🇺🇸', label: 'Victorinox US', url: 'https://www.swissarmy.com' },
      { icon: '🌍', label: 'Store Locator', url: 'https://www.victorinox.com/en/Victorinox/Victorinox-Stores/cms/our-stores/' },
      { icon: '🇦🇺', label: 'Allgoods Australia', url: 'https://allgoods.com.au/collections/victorinox' }
    ]
  },
  
  // Spanish Heritage
  {
    id: 'pallares',
    name: 'Pallarés Solsona',
    founded: 'Founded 1917',
    category: 'premium',
    heritage: 'Spanish knife-making tradition from Solsona\'s 16th-century guild heritage',
    specialty: 'Hand-sharpened knives from the sole surviving testimony to Solsona\'s renowned industry',
    country: 'spanish',
    type: 'knives',
    links: [
      { icon: '🇪🇸', label: 'Official Spain', url: 'https://www.pallaressolsona.com/en/' },
      { icon: '🇺🇸', label: 'Knife Merchant', url: 'https://knifemerchant.com/knives/brands/pallares' },
      { icon: '🇦🇺', label: 'Mr Kitly', url: 'https://mrkitly.com.au/collections/pallares-solsona' }
    ]
  },
  
  // Japanese Precision
  {
    id: 'mac-knives',
    name: 'MAC Knives',
    founded: 'Founded 1965',
    category: 'premium',
    heritage: 'Japanese innovation born from chef\'s accidental discovery in 1954 Chicago',
    specialty: 'Precision Japanese steel with over 30 million MAC knives sold worldwide',
    country: 'japanese',
    type: 'knives',
    links: [
      { icon: '🇺🇸', label: 'Cutlery & More', url: 'https://cutleryandmore.com/pages/mac' },
      { icon: '🇦🇺', label: 'Kitchenware Australia', url: 'https://www.kitchenware.com.au/mac-knives.html' },
      { icon: '🇪🇺', label: 'Berondi Europe', url: 'https://berondi.com' }
    ]
  },
  {
    id: 'okatsune',
    name: 'Okatsune',
    founded: 'Founded 1940s',
    category: 'luxury',
    heritage: 'Japanese blacksmith mastery using Izumo Yasugi steel from Samurai Katana tradition',
    specialty: 'Unrivaled Rockwell hardness of 60.0-61.0 with red and white happiness symbol handles',
    country: 'japanese',
    type: 'knives',
    links: [
      { icon: '🇺🇸', label: 'Niwaki US', url: 'https://www.niwaki.com/okatsune-secateurs/' },
      { icon: '🇪🇺', label: 'Daitool Europe', url: 'https://daitool.com/collections/okatsune' },
      { icon: '🇦🇺', label: 'NQ Trees', url: 'https://nqtrees.com.au/product/okatsune-pruning-shear-180mm-200mm-210mm/' }
    ]
  },
  {
    id: 'tojiro',
    name: 'Tojiro',
    founded: 'Founded 1953',
    category: 'mid',
    heritage: 'Niigata\'s Fujitora Industry — engineering-led Japanese knife makers since 1953',
    specialty: 'DP series VG-10 steel gyutos — Reddit\'s near-universal "best value Japanese knife" under $100',
    country: 'japanese',
    type: 'knives',
    links: [
      { icon: '🏪', label: 'Tojiro Global', url: 'https://tojiro.net/en/' },
      { icon: '🇺🇸', label: 'Chef Knives To Go', url: 'https://www.chefknivestogo.com/tojiro.html' },
      { icon: '🛒', label: 'Amazon Knife Collection', url: 'https://amzn.to/3Oce0ZN' }
    ]
  },
  {
    id: 'shun',
    name: 'Shun',
    founded: 'Founded 1908 (Kai Corp)',
    category: 'premium',
    heritage: 'Kai Corporation\'s premium line from Seki City — blending traditional Japanese craftsmanship with modern steel technology',
    specialty: 'Damascus-clad VG-MAX and SG2 gyutos with lacquered pakkawood handles — the most recognized Japanese knife in the West',
    country: 'japanese',
    type: 'knives',
    links: [
      { icon: '🏪', label: 'Shun Official', url: 'https://shun.kaiusa.com' },
      { icon: '🛍️', label: 'Williams Sonoma', url: 'https://www.williams-sonoma.com/shop/cutlery/cutlery-shun/' },
      { icon: '🔪', label: 'Premier 8" Chef\'s Knife', url: 'https://amzn.to/4cn3dUH' },
      { icon: '🛒', label: 'Amazon Collection', url: 'https://amzn.to/48GYjR4' }
    ]
  },
  {
    id: 'masamoto',
    name: 'Masamoto',
    founded: 'Founded 1845',
    category: 'luxury',
    heritage: 'Tokyo\'s legendary Tsukiji-district knife maker — supplying Michelin-starred sushi chefs since 1845',
    specialty: 'Hand-forged Honyaki and Kasumi single-bevel blades (yanagiba, deba, usuba) — the gold standard for traditional Japanese cuisine',
    country: 'japanese',
    type: 'knives',
    links: [
      { icon: '🏪', label: 'Masamoto Official', url: 'https://www.masamoto-sohonten.co.jp/en/' },
      { icon: '🇺🇸', label: 'Korin', url: 'https://korin.com/collections/masamoto' },
      { icon: '🌍', label: 'Japanny', url: 'https://japanny.com/collections/masamoto' }
    ]
  },

  // GLASSWARE BRANDS
  
  // French Glass Innovation
  {
    id: 'duralex',
    name: 'Duralex',
    founded: 'Founded 1945',
    category: 'premium',
    heritage: 'Revolutionary inventors of glass tempering process in France - heating to 600°C for 2.5x impact resistance',
    specialty: 'Iconic Picardie tumbler and Gigogne glass with unbreakable tempered glass technology',
    country: 'french',
    type: 'glassware',
    links: [
      { icon: '🇦🇺', label: 'Harris Scarfe', url: 'https://www.harrisscarfe.com.au/dalx/DALX' },
      { icon: '🇦🇺', label: 'Kitchenware Australia', url: 'https://www.kitchenware.com.au/duralex.html' },
      { icon: '🌏', label: 'Cedar Hospitality Asia', url: 'https://cedarhospitality.com/brand/duralex/' }
    ]
  },
  
  // Finnish Design Excellence
  {
    id: 'fiskars-glass',
    name: 'Fiskars',
    founded: 'Founded 1649',
    category: 'premium',
    heritage: 'One of world\'s oldest companies (375+ years) - from ironworks to modern glass design excellence',
    specialty: 'Finnish design tradition from 1649 with distinctive craftsmanship and innovation',
    country: 'nordic',
    type: 'glassware',
    links: [
      { icon: '🌍', label: 'Global Locations', url: 'https://fiskarsgroup.com/contact-us/our-locations/' },
      { icon: '🇺🇸', label: 'Amazon Official Store', url: 'https://www.amazon.com/stores/Fiskars' },
      { icon: '🌏', label: 'Asia Distributors', url: 'https://fiskarsgroup.com/contact-us/our-locations/' }
    ]
  },
  {
    id: 'iittala',
    name: 'Iittala',
    founded: 'Founded 1881',
    category: 'luxury',
    heritage: 'Finnish glassmaking heritage with 17 Swedish glassblowers producing first objects in 1881',
    specialty: 'Iconic Alvar Aalto Savoy Vase and collaborations with renowned Nordic designers',
    country: 'nordic',
    type: 'glassware',
    links: [
      { icon: '🇺🇸', label: 'FinnStyle US', url: 'https://www.finnstyle.com/iittala-shop-online.html' },
      { icon: '🇬🇧', label: 'Iittala UK', url: 'https://www.iittala.com/en-gb' },
      { icon: '🇦🇺', label: 'Gift & Co Australia', url: 'https://thegiftandco.com.au/collections/iittala' }
    ]
  },
  
  // German Precision Glass
  {
    id: 'schott-zwiesel',
    name: 'Schott Zwiesel',
    founded: 'Founded 1884',
    category: 'luxury',
    heritage: 'Founded by glass chemist Otto Schott with physicist Ernst Abbe and optician Carl Zeiss',
    specialty: 'Scientific glass innovation transformed into precision crystal wine glasses',
    country: 'german',
    type: 'glassware',
    links: [
      { icon: '🇦🇺', label: 'Williams Sonoma AU', url: 'https://www.williams-sonoma.com.au/pure-bordeaux-glasses' },
      { icon: '🇪🇺', label: 'Wine & Barrels EU', url: 'https://www.wineandbarrels.eu/shop/344-schott-zwiesel/' },
      { icon: '🇦🇺', label: 'Nisbets Australia', url: 'https://www.nisbets.com.au/schott-zwiesel-pure-riesling-glass-300ml/dd230' }
    ]
  },
  
  // Italian Artisan Glass
  {
    id: 'bormioli-rocco',
    name: 'Bormioli Rocco',
    founded: 'Founded 1825',
    category: 'premium',
    heritage: 'Italian glass-making tradition from 1300 AD in Altare, with Luigi Bormioli founding in 1825',
    specialty: 'Traditional Italian glass artistry combined with modern manufacturing excellence',
    country: 'italian',
    type: 'glassware',
    links: [
      { icon: '🇺🇸', label: 'Official US Store', url: 'https://bormioliroccous.com' },
      { icon: '🇪🇺', label: 'Europe Site', url: 'https://bormiolirocco.com' },
      { icon: '🇦🇺', label: 'Peter\'s of Kensington', url: 'https://www.petersofkensington.com.au/brands/bormioli-rocco/' }
    ]
  },
  
  // Swedish Porcelain Heritage
  {
    id: 'rorstrand',
    name: 'Rörstrand',
    founded: 'Founded 1726',
    category: 'luxury',
    heritage: 'Founded at Rörstrand Castle in Stockholm - Sweden\'s only porcelain factory until 1785',
    specialty: 'Nearly 300 years of Scandinavian porcelain tradition for European nobility',
    country: 'nordic',
    type: 'glassware',
    links: [
      { icon: '🌍', label: 'Nordic Nest Global', url: 'https://www.nordicnest.com/brands/rorstrand/' },
      { icon: '🇺🇸', label: 'Finnish Design Shop', url: 'https://www.finnishdesignshop.com/en-gb/manufacturer/rorstrand' },
      { icon: '🇦🇺', label: 'Pamono Australia', url: 'https://www.pamono.com.au/makers/roerstrand/tableware' }
    ]
  },

  // COFFEE EQUIPMENT BRANDS
  
  // German Engineering Excellence
  {
    id: 'ecm',
    name: 'ECM Coffee Machines',
    founded: 'Founded 1996',
    category: 'luxury',
    heritage: 'German precision engineering with Italian design - handmade dual-boiler systems near Heidelberg',
    specialty: 'Cafe-quality espresso through advanced PID temperature control and commercial-grade components',
    country: 'german',
    type: 'coffee',
    links: [
      { icon: '🇺🇸', label: 'Whole Latte Love', url: 'https://www.wholelattelove.com/collections/ecm' },
      { icon: '🇺🇸', label: 'Pro Coffee Gear', url: 'https://procoffeegear.com/collections/ecm' },
      { icon: '🇦🇺', label: 'Coffee Machine Warehouse', url: 'https://coffeemachinewarehouse.com.au/collections/ecm' }
    ]
  },
  {
    id: 'profitec',
    name: 'Profitec',
    founded: 'Founded 1985',
    category: 'luxury',
    heritage: 'Premium handmade espresso machines combining German engineering with Italian design',
    specialty: 'Creating "magic you can drink" through purist design and high-performance brewing systems',
    country: 'german',
    type: 'coffee',
    links: [
      { icon: '🇨🇦', label: 'Home Coffee Solutions', url: 'https://www.homecoffeesolutions.com/products/profitec-pro-500-espresso-machine-with-pid' },
      { icon: '🇩🇪', label: 'Magazin Germany', url: 'https://en.magazin.com/profitec-go-a211214/' },
      { icon: '🇦🇺', label: 'Eastlink Espresso', url: 'https://eastlinkespresso.com.au/product/profitec-pro-500/' }
    ]
  },
  
  // Swiss Precision Innovation
  {
    id: 'jura',
    name: 'JURA',
    founded: 'Founded 1931',
    category: 'luxury',
    heritage: 'Swiss automatic espresso pioneer with 9-year average service life - 3 years above industry standard',
    specialty: 'Fully automatic espresso concept with integrated grinding, dosing, tamping, and brewing',
    country: 'swiss',
    type: 'coffee',
    links: [
      { icon: '🇺🇸', label: 'JURA USA Official', url: 'https://us.jura.com/en/homeproducts/machines' },
      { icon: '🏪', label: 'Williams Sonoma', url: 'https://www.williams-sonoma.com/shop/electrics/electrics-jura/' },
      { icon: '🇦🇺', label: 'JURA Australia', url: 'https://au.jura.com/en/homeproducts/machines' }
    ]
  },
  
  // Swedish Innovation
  {
    id: 'threetemp',
    name: '3TEMP',
    founded: 'Founded 2014',
    category: 'premium',
    heritage: 'Swedish innovation winning "Best All-Round Filter Brewer" at London Coffee Festival 2022',
    specialty: 'Three-temperature brewing system with tankless design consuming only 3.9 watts when idle',
    country: 'nordic',
    type: 'coffee',
    links: [
      { icon: '🇨🇦', label: 'Genius Equipment', url: 'https://www.geniusequipment.com/collections/3temp' },
      { icon: '🇪🇺', label: '3TEMP Europe', url: 'https://3temp.com/buy-a-3temp-brewer/europe/' },
      { icon: '🌍', label: 'Official Website', url: 'https://3temp.com' }
    ]
  },
  
  // Italian Heritage & Tradition
  {
    id: 'la-pavoni',
    name: 'La Pavoni',
    founded: 'Founded 1905',
    category: 'luxury',
    heritage: 'Pioneer of espresso industry with first machine "Ideale" and domestic Europiccola in 1961',
    specialty: 'True Italian tradition through artistic excellence in reliable espresso machine design',
    country: 'italian',
    type: 'coffee',
    links: [
      { icon: '🇺🇸', label: 'Coffeeionado', url: 'https://www.coffeeionado.com/products/copy-of-la-pavoni-dia-2-group' },
      { icon: '🌍', label: 'Store Locator', url: 'https://www.lapavoni.com/en/store-locator' },
      { icon: '🇦🇺', label: 'Euroespresso', url: 'https://www.euroespresso.com.au' }
    ]
  },
  {
    id: 'bialetti',
    name: 'Bialetti',
    founded: 'Founded 1919',
    category: 'budget',
    heritage: 'Revolutionary 1933 Moka Express found in 90% of Italian households - 300+ million units sold',
    specialty: 'Octagonal aluminum stovetop espresso maker representing essence of Italian coffee culture',
    country: 'italian',
    type: 'coffee',
    links: [
      { icon: '🇪🇺', label: 'Piccantino International', url: 'https://www.piccantino.com/bialetti' },
      { icon: '🇦🇺', label: 'Finnish Design Shop', url: 'https://www.finnishdesignshop.com/en-au/product/moka-express-oceana-espresso-maker-2-cups' },
      { icon: '🇦🇺', label: 'My Coffee Shop', url: 'https://mycoffeeshop.com.au/collections/bialetti-coffee-makers-coffee' }
    ]
  },
  
  // American Innovation
  {
    id: 'chemex',
    name: 'Chemex',
    founded: 'Founded 1941',
    category: 'premium',
    heritage: 'Invented by German chemist Dr. Peter Schlumbohm - one of 100 best designed products of modern times',
    specialty: 'Hourglass glass vessel with special bonded filters removing fats, bitterness, and sediments',
    country: 'global',
    type: 'coffee',
    links: [
      { icon: '🇺🇸', label: 'Chemex Official', url: 'https://chemexcoffeemaker.com/products/six-cup-classic-chemex' },
      { icon: '🏪', label: 'Williams Sonoma', url: 'https://www.williams-sonoma.com/chemex-wood-collar-glass-coffeemaker' },
      { icon: '🇦🇺', label: 'Coffee Supreme', url: 'https://shopau.coffeesupreme.com/products/chemex-coffee-maker-classic-series' }
    ]
  },
  
  // Canadian Sustainability
  {
    id: 'canadiano',
    name: 'Canadiano',
    founded: 'Founded 2010s',
    category: 'premium',
    heritage: 'B Corp certified sustainable coffee maker carved from single blocks of Canadian hardwood',
    specialty: 'Zero-waste, zero-plastic pour-over requiring no paper filters with wood memory technology',
    country: 'canadian',
    type: 'coffee',
    links: [
      { icon: '🌍', label: 'Canadiano Official', url: 'https://canadiano.co' },
      { icon: '🏪', label: 'Faire Wholesale', url: 'https://www.faire.com/brand/b_6uamoekldt' }
    ]
  },
  
  // Netherlands Precision
  {
    id: 'moccamaster',
    name: 'Technivorm Moccamaster',
    founded: 'Founded 1964',
    category: 'premium',
    heritage: 'Dutch handmade perfection since 1964 - one of few brewers certified by Specialty Coffee Association',
    specialty: 'Copper heating elements maintaining 195-205°F for Golden Cup Standard filter coffee',
    country: 'dutch',
    type: 'coffee',
    links: [
      { icon: '🇺🇸', label: 'Technivorm Official', url: 'https://thetechnivorm.com' },
      { icon: '🏪', label: 'Williams Sonoma', url: 'https://www.williams-sonoma.com/shop/electrics/electrics-technivorm/' },
      { icon: '🇦🇺', label: 'Coffee Parts', url: 'https://www.coffeeparts.com.au/brands/moccamaster' }
    ]
  },
  
  // Danish Design Excellence
  {
    id: 'bodum',
    name: 'Bodum',
    founded: 'Founded 1944',
    category: 'mid',
    heritage: 'Danish design heritage from Copenhagen with revolutionary Chambord French press',
    specialty: 'Environmentally friendly reusable brewing eliminating paper waste while enhancing flavor',
    country: 'nordic',
    type: 'coffee',
    links: [
      { icon: '🇺🇸', label: 'Bodum Official', url: 'https://www.bodum.com' },
      { icon: '🏪', label: 'MoMA Design Store', url: 'https://store.moma.org/products/bodum-special-edition-french-press-set-of-11' },
      { icon: '🇦🇺', label: 'Minimax', url: 'https://www.minimax.com.au/products/bodum-chambord-french-press-coffee-maker-12cup' }
    ]
  },
  
  // Japanese Coffee Equipment
  {
    id: 'hario',
    name: 'Hario',
    founded: 'Founded 1921',
    category: 'premium',
    heritage: 'Japanese heat-resistant glassware specialist with V60 dripper synonymous with pour-over culture',
    specialty: 'Precision brewing equipment allowing complete control over extraction variables',
    country: 'japanese',
    type: 'coffee',
    links: [
      { icon: '🇺🇸', label: 'Hario USA', url: 'https://www.hario-usa.com' },
      { icon: '🌍', label: 'Global Store Locator', url: 'https://global.hario.com/wheretobuy/' },
      { icon: '🇦🇺', label: 'Everyday Coffee', url: 'https://everyday-coffee.com/products/hario-v60-pour-over' }
    ]
  },
  {
    id: 'kalita',
    name: 'Kalita',
    founded: 'Founded 1958',
    category: 'premium',
    heritage: 'Japanese Wave dripper trusted by top specialty cafes and professional competition baristas',
    specialty: 'Innovative flat-bottom geometry with three-hole drainage system for temperature stability',
    country: 'japanese',
    type: 'coffee',
    links: [
      { icon: '🇬🇧', label: 'Machina Coffee UK', url: 'https://machina-coffee.com/products/kalita-wave-dripper-185-metal' },
      { icon: '🇦🇺', label: 'Brew Methods', url: 'https://brewmethods.com.au/products/kalita-wave-glass-dripper' },
      { icon: '🇦🇺', label: 'Coffee Parts', url: 'https://www.coffeeparts.com.au/brands/kalita' }
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
  british: {
    emoji: '🇬🇧',
    title: 'British Craftsmanship',
    description: 'Traditional British engineering with handcrafted excellence and heritage'
  },
  australian: {
    emoji: '🇦🇺',
    title: 'Australian Innovation',
    description: 'Modern Australian engineering focused on sustainability and performance'
  },
  canadian: {
    emoji: '🇨🇦',
    title: 'Canadian Quality',
    description: 'North American precision manufacturing with tri-ply stainless steel expertise'
  },
  austrian: {
    emoji: '🇦🇹',
    title: 'Austrian Heritage',
    description: 'Traditional Austrian craftsmanship with sustainable enamelware production'
  },
  thai: {
    emoji: '🇹🇭',
    title: 'Thai Manufacturing',
    description: 'Asian precision with international quality standards and stainless steel expertise'
  },
  dutch: {
    emoji: '🇳🇱',
    title: 'Dutch Sustainability',
    description: 'Modern Dutch innovation focused on natural materials and eco-friendly cookware'
  },
  swiss: {
    emoji: '🇨🇭',
    title: 'Swiss Precision',
    description: 'Swiss engineering excellence with legendary precision and reliability'
  },
  spanish: {
    emoji: '🇪🇸',
    title: 'Spanish Heritage',
    description: 'Traditional Spanish craftsmanship with centuries of blade-making expertise'
  },
  japanese: {
    emoji: '🇯🇵',
    title: 'Japanese Precision',
    description: 'Legendary Japanese steel craftsmanship and innovative cutting technology'
  },
  american: {
    emoji: '🇺🇸',
    title: 'American Craftsmanship',
    description: 'Iconic American cookware heritage — from Pennsylvania stainless to Tennessee cast iron'
  },
  global: {
    emoji: '🌍',
    title: 'Global Heritage Brands',
    description: 'International excellence spanning continents and culinary traditions'
  }
};
