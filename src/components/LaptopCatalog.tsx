import React, { useState, useMemo } from 'react';
import type { Laptop } from '../types';
import { LaptopCard } from './LaptopCard';
import { Search, SlidersHorizontal, Sparkles, RefreshCw, PhoneCall } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface LaptopCatalogProps {
  laptops: Laptop[];
  searchQuery: string;
  onSearchChange: (val: string) => void;
  onSelectLaptop: (laptop: Laptop) => void;
}

const CATEGORIES = [
  'All Laptops',
  'Gaming',
  'Student & Office',
  'Ultrabook',
  'Creator & Workstation'
];

const BRANDS = ['All Brands', 'HP', 'Dell', 'Lenovo', 'Apple', 'ASUS', 'Acer'];

export const LaptopCatalog: React.FC<LaptopCatalogProps> = ({
  laptops,
  searchQuery,
  onSearchChange,
  onSelectLaptop
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Laptops');
  const [selectedBrand, setSelectedBrand] = useState<string>('All Brands');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Filter logic
  const filteredLaptops = useMemo(() => {
    return laptops
      .filter((lap) => {
        // Search
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          lap.name.toLowerCase().includes(query) ||
          lap.brand.toLowerCase().includes(query) ||
          lap.category.toLowerCase().includes(query) ||
          lap.specs.processor.toLowerCase().includes(query) ||
          lap.specs.graphics.toLowerCase().includes(query);

        // Category
        const matchesCategory =
          selectedCategory === 'All Laptops' || lap.category === selectedCategory;

        // Brand
        const matchesBrand =
          selectedBrand === 'All Brands' || lap.brand === selectedBrand;

        return matchesSearch && matchesCategory && matchesBrand;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured original order
      });
  }, [laptops, searchQuery, selectedCategory, selectedBrand, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('All Laptops');
    setSelectedBrand('All Brands');
    setSortBy('featured');
    onSearchChange('');
  };

  return (
    <section className="catalog-section" id="laptops">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> LIVE SHOWROOM INVENTORY
          </span>
          <h2 className="section-title">
            Explore Laptops at <span className="gradient-text">Yash Computers</span>
          </h2>
          <p className="section-subtitle">
            Find the perfect machine for college, business, coding, or high-octane gaming. All units ready for hands-on inspection in Rajgarh.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="catalog-controls glass-card">
          {/* Top row: Categories */}
          <div className="category-tabs-scroll">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="controls-lower-row">
            {/* Brand Filter Pills */}
            <div className="brand-pills-row">
              <span className="filter-label">Brand:</span>
              <div className="brand-pills-scroll">
                {BRANDS.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`brand-pill-btn ${selectedBrand === brand ? 'active' : ''}`}
                    id={`brand-filter-${brand.toLowerCase()}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort & Result count */}
            <div className="sort-group">
              <div className="sort-box">
                <SlidersHorizontal size={15} className="sort-icon" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="sort-select"
                  id="catalog-sort-select"
                >
                  <option value="featured">Featured / Best Deals</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Summary */}
        <div className="filter-summary-row">
          <div className="results-counter">
            Showing <strong>{filteredLaptops.length}</strong> available laptops in Rajgarh
            {searchQuery && <span> for "<strong>{searchQuery}</strong>"</span>}
          </div>
          {(selectedCategory !== 'All Laptops' || selectedBrand !== 'All Brands' || searchQuery) && (
            <button onClick={resetFilters} className="btn-reset-filters">
              <RefreshCw size={13} /> Clear All Filters
            </button>
          )}
        </div>

        {/* Catalog Grid */}
        {filteredLaptops.length > 0 ? (
          <div className="laptops-grid">
            {filteredLaptops.map((laptop) => (
              <LaptopCard
                key={laptop.id}
                laptop={laptop}
                onSelect={onSelectLaptop}
              />
            ))}
          </div>
        ) : (
          <div className="empty-catalog-state glass-card">
            <Search size={48} className="empty-icon text-muted" />
            <h3>No laptops match your criteria</h3>
            <p>
              Looking for a custom model not listed above? We source any laptop model from Apple, Dell, HP, Lenovo or Asus within 24 to 48 hours directly from authorized distributors.
            </p>
            <div className="empty-actions">
              <button onClick={resetFilters} className="btn btn-primary">
                View All Available Laptops
              </button>
              <a 
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello Yash Computers, I am looking for a specific laptop model that wasn't in the list:")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Inquire Special Order
              </a>
            </div>
          </div>
        )}

        {/* Special Custom Request Banner */}
        <div className="custom-order-banner glass-card" id="custom-orders">
          <div className="custom-banner-left">
            <span className="badge badge-gold">SPECIAL DEMAND SERVICE</span>
            <h3>Looking for a specific configuration or bulk college order?</h3>
            <p>
              We provide institutional orders for schools, coaching centers, cyber cafes, and offices in Rajgarh with wholesale tax invoice and on-site deployment.
            </p>
          </div>
          <div className="custom-banner-right">
            <a 
              href={`tel:${STORE_INFO.phone}`} 
              className="btn btn-secondary"
            >
              <PhoneCall size={16} /> Call Showroom
            </a>
            <a 
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Namaste, I need custom price quotation for bulk/special laptops.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Get Bulk Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
