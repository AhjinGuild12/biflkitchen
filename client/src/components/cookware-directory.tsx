import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Menu, Search, ExternalLink, ChevronDown } from 'lucide-react';
import { brands, countryData, type Brand } from '@/lib/brands-data';

const CookwareDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'budget' | 'mid' | 'premium' | 'luxury'>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<'cookware' | 'knives' | 'glassware' | 'coffee'>('cookware');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredBrands = useMemo(() => {
    return brands.filter(brand => {
      const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           brand.heritage.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           brand.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = selectedFilter === 'all' || brand.category === selectedFilter;
      const matchesCountry = selectedCountry === 'all' || brand.country === selectedCountry;
      const matchesCategory = (activeCategory === 'cookware' && !brand.type) || 
                             (activeCategory === 'knives' && brand.type === 'knives') ||
                             (activeCategory === 'glassware' && brand.type === 'glassware') ||
                             (activeCategory === 'coffee' && brand.type === 'coffee');
      
      return matchesSearch && matchesFilter && matchesCountry && matchesCategory;
    });
  }, [searchTerm, selectedFilter, selectedCountry, activeCategory]);

  const brandsByCountry = useMemo(() => {
    const grouped: Record<string, Brand[]> = {};
    filteredBrands.forEach(brand => {
      if (!grouped[brand.country]) {
        grouped[brand.country] = [];
      }
      grouped[brand.country].push(brand);
    });
    return grouped;
  }, [filteredBrands]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const getPriceBadgeClass = (category: string) => {
    switch (category) {
      case 'budget': return 'price-badge-budget';
      case 'mid': return 'price-badge-mid';
      case 'premium': return 'price-badge-premium';
      case 'luxury': return 'price-badge-luxury';
      default: return 'price-badge-mid';
    }
  };

  const getPriceLabel = (category: string) => {
    switch (category) {
      case 'budget': return '$ Budget';
      case 'mid': return '$$ Mid Range';
      case 'premium': return '$$$ Premium';
      case 'luxury': return '$$$$ Luxury';
      default: return '$$ Mid Range';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bifl-cream)' }}>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm" style={{ borderColor: 'var(--bifl-border)' }}>
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🍳</span>
            <h1 className="text-xl font-bold font-serif" style={{ color: 'var(--bifl-primary)' }}>BIFL Kitchen</h1>
          </div>
          
          {/* Country Dropdown */}
          <div className="flex items-center space-x-4">
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">🌍 All Countries</SelectItem>
                {Object.entries(countryData).map(([key, data]) => (
                  <SelectItem key={key} value={key}>
                    {data.emoji} {data.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
            alt="Heritage cookware collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" style={{ backgroundColor: 'var(--bifl-primary)' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
              Buy It For Life Kitchen Directory
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
              Stop Replacing. Start Investing. Find Heritage Kitchen Tools That Last Generations.
            </p>
            <Button
              onClick={() => scrollToSection('controls')}
              className="px-8 py-4 text-lg font-semibold button-shine"
              style={{ 
                background: `linear-gradient(to right, var(--bifl-secondary), hsl(22, 82%, 45%))`,
                color: 'white'
              }}
            >
              <span className="mr-2">🔍</span>
              Explore Heritage Kitchen Tools
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Controls */}
      <section id="controls" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-center mb-8" style={{ color: 'var(--bifl-primary)' }}>
              Find Your Perfect Heritage Kitchen Tools
            </h2>
            
            {/* Category Tabs */}
            <Tabs value={activeCategory} onValueChange={(value) => setActiveCategory(value as 'cookware' | 'knives' | 'glassware' | 'coffee')} className="mb-8">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4">
                <TabsTrigger value="cookware" className="flex items-center gap-2">
                  🍳 Cookware
                </TabsTrigger>
                <TabsTrigger value="knives" className="flex items-center gap-2">
                  🔪 Knives
                </TabsTrigger>
                <TabsTrigger value="glassware" className="flex items-center gap-2">
                  🥃 Glassware
                </TabsTrigger>
                <TabsTrigger value="coffee" className="flex items-center gap-2">
                  ☕ Coffee
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Search Box */}
            <div className="mb-8 relative">
              <Input
                type="text"
                placeholder={
                  activeCategory === 'cookware' ? 
                    "Search cookware brands (e.g., Le Creuset, Staub, Fissler...)" : 
                  activeCategory === 'knives' ?
                    "Search knife brands (e.g., Wüsthof, Sabatier, Henckels...)" :
                  activeCategory === 'glassware' ?
                    "Search glassware brands (e.g., Iittala, Duralex, Schott Zwiesel...)" :
                    "Search coffee equipment (e.g., JURA, Chemex, Hario, La Pavoni...)"
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 focus:border-blue-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6" style={{ color: 'var(--bifl-text-light)' }} />
            </div>
            
            {/* Price Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { key: 'all', label: 'All Prices' },
                { key: 'budget', label: '$ Budget ($0-100)' },
                { key: 'mid', label: '$$ Mid Range ($100-300)' },
                { key: 'premium', label: '$$$ Premium ($300-600)' },
                { key: 'luxury', label: '$$$$ Luxury ($600+)' }
              ].map(({ key, label }) => (
                <Button
                  key={key}
                  onClick={() => setSelectedFilter(key as any)}
                  variant={selectedFilter === key ? "default" : "secondary"}
                  className="px-6 py-3 font-semibold"
                  style={selectedFilter === key ? {
                    backgroundColor: 'var(--bifl-primary)',
                    color: 'white'
                  } : {}}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Sections */}
      <main className="py-16" style={{ backgroundColor: 'var(--bifl-cream)' }}>
        <div className="container mx-auto px-4">
          {Object.entries(countryData).map(([countryKey, countryInfo]) => {
            const countryBrands = brandsByCountry[countryKey] || [];
            
            if (countryBrands.length === 0) return null;
            
            return (
              <section key={countryKey} id={countryKey} className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-serif mb-4 flex items-center justify-center gap-3" style={{ color: 'var(--bifl-primary)' }}>
                    <span className="text-5xl">{countryInfo.emoji}</span>
                    {countryInfo.title}
                  </h2>
                  <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--bifl-text-light)' }}>
                    {countryInfo.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {countryBrands.map((brand) => (
                    <Card key={brand.id} className="card-hover relative overflow-hidden bg-white shadow-lg">
                      <div className="absolute top-4 right-4 bifl-badge px-3 py-1 rounded-full text-sm font-bold text-white" style={{ backgroundColor: 'var(--bifl-secondary)' }}>
                        BIFL
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold font-serif" style={{ color: 'var(--bifl-primary)' }}>{brand.name}</h3>
                          <Badge className={`${getPriceBadgeClass(brand.category)} px-3 py-1 text-sm font-semibold`}>
                            {getPriceLabel(brand.category)}
                          </Badge>
                        </div>
                        <p className="text-sm mb-2" style={{ color: 'var(--bifl-text-light)' }}>{brand.founded}</p>
                        <p className="text-gray-600 italic mb-4">{brand.heritage}</p>
                        <p className="text-gray-700 mb-6">{brand.specialty}</p>
                        <div className="space-y-3">
                          {brand.links.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center px-4 py-3 text-white rounded-lg font-semibold transition-all duration-300 button-shine"
                              style={{
                                background: index === 0 
                                  ? `linear-gradient(to right, var(--bifl-primary), hsl(207, 39%, 25%))`
                                  : `linear-gradient(to right, var(--bifl-accent), hsl(204, 70%, 45%))`
                              }}
                            >
                              <span className="mr-2">{link.icon}</span>
                              {link.label}
                              <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t" style={{ borderColor: 'var(--bifl-border)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold font-serif mb-8" style={{ color: 'var(--bifl-primary)' }}>
              Directory Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bifl-cream)' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--bifl-primary)' }}>
                  {brands.filter(b => !b.type).length}
                </div>
                <div className="text-lg font-semibold">🍳 Cookware</div>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bifl-cream)' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--bifl-primary)' }}>
                  {brands.filter(b => b.type === 'knives').length}
                </div>
                <div className="text-lg font-semibold">🔪 Knives</div>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bifl-cream)' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--bifl-primary)' }}>
                  {brands.filter(b => b.type === 'glassware').length}
                </div>
                <div className="text-lg font-semibold">🥃 Glassware</div>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bifl-cream)' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--bifl-primary)' }}>
                  {brands.filter(b => b.type === 'coffee').length}
                </div>
                <div className="text-lg font-semibold">☕ Coffee</div>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bifl-cream)' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--bifl-primary)' }}>
                  {Object.keys(countryData).length}
                </div>
                <div className="text-lg font-semibold">🌍 Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-white" style={{ backgroundColor: 'var(--bifl-primary)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl">🍳</span>
              <h2 className="text-2xl font-bold font-serif">BIFL Kitchen Directory</h2>
            </div>
            
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Curated by Buy It For Life enthusiasts for those who believe in purchasing quality once rather than replacing items multiple times.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <p className="font-semibold" style={{ color: 'var(--bifl-secondary)' }}>
                Made by Jan M.
              </p>
              <span className="text-white/40">|</span>
              <a 
                href="https://x.com/jannotjohnn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                style={{ color: 'var(--bifl-secondary)' }}
              >
                <span>🐦</span>
                <span>Follow on X</span>
              </a>
            </div>
            
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/70">
                © 2025 BIFL Kitchen Directory | Last Updated: July 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CookwareDirectory;
