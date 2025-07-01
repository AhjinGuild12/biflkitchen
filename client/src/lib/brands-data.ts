export interface Brand {
  id: string;
  name: string;
  founded: string;
  category: 'budget' | 'mid' | 'premium' | 'luxury';
  heritage: string;
  specialty: string;
  country: 'french' | 'german' | 'belgian' | 'italian' | 'nordic' | 'british' | 'australian' | 'canadian' | 'austrian' | 'thai' | 'dutch' | 'swiss' | 'spanish' | 'japanese' | 'global';
  type?: 'cookware' | 'knives' | 'glassware';
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
  global: {
    emoji: '🌍',
    title: 'Global Heritage Brands',
    description: 'International excellence spanning continents and culinary traditions'
  }
};
