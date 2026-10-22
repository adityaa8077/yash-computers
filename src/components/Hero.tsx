import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Star, PhoneCall, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface HeroProps {
  onOpenInquiry: () => void;
  onSelectFeatured: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onSelectFeatured }) => {
  return (
    <section className="hero-section">
      <div className="hero-glow-orb hero-glow-1"></div>
      <div className="hero-glow-orb hero-glow-2"></div>

      <div className="container hero-container">
        {/* Left Column: Copy & CTAs */}
        <div className="hero-copy">
          <div className="hero-badge-pill">
            <span className="live-dot"></span>
            <Award size={15} className="text-cyan" />
            <span>#1 Rated Laptop Showroom in Rajgarh</span>
          </div>

          <h1 className="hero-headline">
            Experience the Best in <br />
            <span className="gradient-text">Laptops & Technology</span> <br />
            Right Here in Rajgarh.
          </h1>

          <p className="hero-subtext">
            Welcome to <strong>Yash Computers</strong>. We bring the latest gaming rigs, sleek ultrabooks, 
            student laptops, and high-performance workstations directly to Rajgarh with 100% fresh box-packed inventory, 
            guaranteed best pricing, official manufacturer brand warranty, and instant 0% EMI.
          </p>

          {/* Quick Perks list */}
          <div className="hero-perks-grid">
            <div className="hero-perk-item">
              <CheckCircle2 size={16} className="perk-icon" />
              <span>Best Price Guarantee (Cheaper than Metro Cities)</span>
            </div>
            <div className="hero-perk-item">
              <CheckCircle2 size={16} className="perk-icon" />
              <span>Zero Down Payment EMI Available</span>
            </div>
            <div className="hero-perk-item">
              <CheckCircle2 size={16} className="perk-icon" />
              <span>Free Data Transfer, Software & Bag With Every Laptop</span>
            </div>
            <div className="hero-perk-item">
              <CheckCircle2 size={16} className="perk-icon" />
              <span>Instant Live Hands-on Demo at Showroom</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#laptops" className="btn btn-primary btn-hero" id="hero-browse-btn">
              <span>Explore Laptops</span>
              <ArrowRight size={18} />
            </a>

            <button 
              onClick={onOpenInquiry} 
              className="btn btn-secondary btn-hero"
              id="hero-inquiry-btn"
            >
              <span>Book Store Visit / Demo</span>
            </button>

            <a 
              href={`tel:${STORE_INFO.phone}`} 
              className="btn btn-icon-round"
              title="Call Yash Computers Now"
              id="hero-call-btn"
            >
              <PhoneCall size={19} />
            </a>
          </div>

          {/* Trust stats pill */}
          <div className="hero-trust-bar">
            <div className="trust-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
              ))}
              <span className="rating-score">4.9 / 5.0</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-text">
              Trusted by <strong>5,000+ students, teachers, & gamers</strong> across Rajgarh district
            </div>
          </div>

          {/* Real Showroom Quick Visual Proof Strip */}
          <a href="#showroom" className="hero-store-proof-strip">
            <div className="proof-avatar-stack">
              <img 
                src="/images/showroom/storefront-exterior.jpg" 
                alt="Yash Computers Storefront" 
                className="proof-avatar-img"
              />
              <img 
                src="/images/showroom/owner-founder-counter.jpg" 
                alt="Yash Computers Owner Counter" 
                className="proof-avatar-img"
              />
              <img 
                src="/images/showroom/asus-brand-zone.jpg" 
                alt="ASUS Experience Zone" 
                className="proof-avatar-img"
              />
            </div>
            <div className="proof-text-wrap">
              <div className="proof-title">
                <span>Physical Store in Rajgarh</span>
                <span className="badge badge-accent-sm">ASUS Channel Partner</span>
              </div>
              <span className="proof-subtitle">See real store photos, demo desks & lounge →</span>
            </div>
          </a>
        </div>

        {/* Right Column: Interactive Featured Showcase Card */}
        <div className="hero-visual">
          <div className="showcase-card glass-card">
            {/* Card Badge */}
            <div className="showcase-badge-bar">
              <span className="badge badge-hot">
                <Sparkles size={12} /> SHOWROOM SPECIAL DEAL
              </span>
              <span className="badge badge-primary">
                <ShieldCheck size={12} /> 100% Genuine Bill
              </span>
            </div>

            {/* Laptop Image Mockup Container */}
            <div className="showcase-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80" 
                alt="ASUS ROG Strix Gaming Laptop at Yash Computers Rajgarh" 
                className="showcase-img"
              />
              <div className="floating-spec-tag top-left">
                <span className="spec-label">Graphics Power</span>
                <span className="spec-val">RTX 4060 8GB GPU</span>
              </div>
              <div className="floating-spec-tag bottom-right">
                <span className="spec-label">Display Speed</span>
                <span className="spec-val">165Hz Smooth FHD+</span>
              </div>
            </div>

            {/* Laptop Quick Summary */}
            <div className="showcase-details">
              <div className="showcase-brand-line">
                <span className="brand-pill">ASUS ROG Series</span>
                <span className="stock-pill in-stock">● In Stock at Rajgarh</span>
              </div>
              <h3 className="showcase-title">ASUS ROG Strix G16 (2024 Gaming Rig)</h3>
              <p className="showcase-specs-mini">Intel i7 13th Gen • 16GB DDR5 • 1TB NVMe Gen4 SSD</p>

              <div className="showcase-price-row">
                <div>
                  <div className="price-tag-wrap">
                    <span className="current-price">₹1,19,990</span>
                    <span className="mrp-price">₹1,44,990</span>
                  </div>
                  <span className="emi-highlight">EMI from ₹5,190/month</span>
                </div>
                <button 
                  onClick={() => onSelectFeatured('lap-2')}
                  className="btn btn-primary btn-sm"
                  id="showcase-inspect-btn"
                >
                  View Details
                </button>
              </div>

              {/* Freebies included */}
              <div className="freebies-badge">
                <Zap size={14} className="text-amber" />
                <span>Includes Free: ROG Backpack + Gaming Mouse + Full Lifetime Office Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Brands Bar */}
      <div className="brand-ribbon">
        <div className="container brand-ribbon-content">
          <span className="ribbon-label">AUTHORISED & CERTIFIED PRODUCTS:</span>
          <div className="brand-logos-row">
            <span className="brand-logo-item">HP</span>
            <span className="brand-logo-item">DELL</span>
            <span className="brand-logo-item">LENOVO</span>
            <span className="brand-logo-item">ASUS</span>
            <span className="brand-logo-item">APPLE</span>
            <span className="brand-logo-item">ACER</span>
            <span className="brand-logo-item">MSI</span>
          </div>
        </div>
      </div>
    </section>
  );
};
