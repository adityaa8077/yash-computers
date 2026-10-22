import React from 'react';
import type { Laptop } from '../types';
import { Cpu, HardDrive, Monitor, MessageSquare, Eye, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface LaptopCardProps {
  laptop: Laptop;
  onSelect: (laptop: Laptop) => void;
}

export const LaptopCard: React.FC<LaptopCardProps> = ({ laptop, onSelect }) => {
  const getBadgeClass = (tag?: string) => {
    switch (tag) {
      case 'Hot Deal':
        return 'badge-hot';
      case 'New Arrival':
        return 'badge-deal';
      case 'Budget King':
        return 'badge-gold';
      default:
        return 'badge-primary';
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Yash Computers Rajgarh! I am interested in buying/checking stock for:\n*${laptop.name}*\nPrice: ₹${laptop.price.toLocaleString('en-IN')}\nCategory: ${laptop.category}\nIs this model currently available at your showroom?`
  );

  return (
    <div className="laptop-card glass-card" id={`laptop-card-${laptop.id}`}>
      {/* Top Media & Tags */}
      <div className="laptop-image-container">
        {laptop.tag && (
          <span className={`laptop-tag-badge badge ${getBadgeClass(laptop.tag)}`}>
            {laptop.tag}
          </span>
        )}
        <span className="laptop-brand-badge">{laptop.brand}</span>

        <img 
          src={laptop.image} 
          alt={`${laptop.name} at Yash Computers Rajgarh`} 
          className="laptop-card-img" 
          loading="lazy"
        />

        <div className="image-overlay-actions">
          <button 
            onClick={() => onSelect(laptop)} 
            className="btn btn-secondary btn-sm overlay-btn"
            id={`inspect-${laptop.id}`}
          >
            <Eye size={15} /> Quick View
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="laptop-card-body">
        {/* Category & Rating */}
        <div className="laptop-meta-row">
          <span className="laptop-category-text">{laptop.category}</span>
          <div className="rating-pill">
            ★ {laptop.rating} <span className="review-count">({laptop.reviewCount})</span>
          </div>
        </div>

        {/* Laptop Title */}
        <h3 className="laptop-title" title={laptop.name}>
          {laptop.name}
        </h3>

        {/* Specs Grid */}
        <div className="specs-mini-grid">
          <div className="spec-mini-item" title={laptop.specs.processor}>
            <Cpu size={14} className="spec-icon" />
            <span className="spec-text">{laptop.specs.processor}</span>
          </div>
          <div className="spec-mini-item" title={`${laptop.specs.ram} | ${laptop.specs.storage}`}>
            <HardDrive size={14} className="spec-icon" />
            <span className="spec-text">{laptop.specs.ram} • {laptop.specs.storage}</span>
          </div>
          <div className="spec-mini-item" title={laptop.specs.display}>
            <Monitor size={14} className="spec-icon" />
            <span className="spec-text">{laptop.specs.display}</span>
          </div>
        </div>

        {/* Highlighted Feature */}
        <div className="warranty-highlight">
          <ShieldCheck size={14} className="warranty-icon text-emerald" />
          <span>{laptop.warranty}</span>
        </div>

        {/* Pricing Bar */}
        <div className="laptop-price-section">
          <div className="price-stack">
            <div className="price-top">
              <span className="price-val">₹{laptop.price.toLocaleString('en-IN')}</span>
              {laptop.originalPrice > laptop.price && (
                <span className="original-price-val">₹{laptop.originalPrice.toLocaleString('en-IN')}</span>
              )}
            </div>
            <div className="price-sub">
              <span className="discount-chip">{laptop.discountPercentage}% OFF</span>
              <span className="emi-tag">EMI starts ₹{laptop.emiStartsAt.toLocaleString('en-IN')}/mo</span>
            </div>
          </div>
        </div>

        {/* Card CTAs */}
        <div className="laptop-action-buttons">
          <button 
            onClick={() => onSelect(laptop)} 
            className="btn btn-secondary card-action-btn"
            id={`view-specs-btn-${laptop.id}`}
          >
            <span>Full Specs</span>
          </button>

          <a 
            href={`https://wa.me/${STORE_INFO.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp card-action-btn"
            id={`wa-inquire-btn-${laptop.id}`}
          >
            <MessageSquare size={16} />
            <span>Inquire / Buy</span>
          </a>
        </div>

        {/* Stock Status Bar */}
        <div className="stock-indicator-bar">
          <span className="in-stock-dot"></span>
          <span>In Stock at Rajgarh Showroom • Instant Demo Ready</span>
        </div>
      </div>
    </div>
  );
};
