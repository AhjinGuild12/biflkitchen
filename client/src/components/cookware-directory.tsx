import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Menu, Search, ExternalLink } from 'lucide-react';
import { brands, countryData, type Brand } from '@/lib/brands-data';

const CookwareDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'budget' | 'mid' | 'premium' | 'luxury'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredBrands = useMemo(() => {
    return brands.filter(brand => {
      const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           brand.heritage.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           brand.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = selectedFilter === 'all' || brand.category === selectedFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {Object.entries(countryData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--bifl-primary)' }}
              >
                {data.emoji} {data.title.split(' ')[0]}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t" style={{ borderColor: 'var(--bifl-border)' }}>
            <div className="container mx-auto px-4 py-4 space-y-2">
              {Object.entries(countryData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="block w-full text-left py-2 font-medium transition-colors hover:opacity-80"
                  style={{ color: 'var(--bifl-primary)' }}
                >
                  {data.emoji} {data.title}
                </button>
              ))}
            </div>
          </div>
        )}
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
            
            {/* Search Box */}
            <div className="mb-8 relative">
              <Input
                type="text"
                placeholder="Search brands (e.g., Le Creuset, Wüsthof, Staub, Sabatier...)"
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
                      {brand.type === 'knives' && (
                        <div className="absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-bold text-white bg-gray-600">
                          🔪 KNIVES
                        </div>
                      )}
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
            
            <p className="font-semibold mb-6" style={{ color: 'var(--bifl-secondary)' }}>
              Made with ❤️ for the r/BuyItForLife community
            </p>
            
            <div className="border-t border-white/20 pt-6">
              <p className="text-white/70">
                © 2025 BIFL Cookware Directory | Last Updated: June 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CookwareDirectory;
