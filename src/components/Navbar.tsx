import React, { useState } from 'react';
import { Laptop, Phone, MessageSquare, MapPin, Menu, X, ShieldCheck, Search } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface NavbarProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchChange, searchQuery, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      {/* Top Announcement Bar - Amazon Orange */}
      <div className="top-banner">
        <div className="container top-banner-content">
          <div className="top-banner-left">
            <span className="fresh-pill">
              ⭐ 100% FRESH BOX-PACKED ONLY
            </span>
            <span className="location-pill">
              <MapPin size={13} /> Near Bus Stand, Main Market, Rajgarh
            </span>
            <span className="timing-pill">Open Today: 10:00 AM - 9:00 PM</span>
          </div>
          <div className="top-banner-right">
            <span className="offer-tag">✨ Festive & Student Discount: Up to ₹12,000 Off + Free Bag & Mouse</span>
            <a href={`tel:${STORE_INFO.phone}`} className="top-call-link">
              <Phone size={13} /> {STORE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#" className="brand-logo" id="brand-logo-link">
            <div className="logo-icon-box">
              <Laptop size={24} className="logo-icon" />
              <div className="logo-pulse"></div>
            </div>
            <div className="logo-text">
              <div className="brand-title">
                YASH <span className="highlight">COMPUTERS</span>
              </div>
              <div className="brand-tagline">
                <span>RAJGARH'S LAPTOP STORE</span>
                <span className="verify-badge"><ShieldCheck size={11} /> 100% Genuine Fresh</span>
              </div>
            </div>
          </a>

          {/* Search Box with Amazon Orange Search Button */}
          <div className="nav-search-box">
            <input
              type="text"
              id="global-laptop-search-input"
              placeholder="Search 100% fresh laptops (e.g. HP i5, ROG, MacBook, Asus)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="nav-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')} 
                className="search-clear-btn"
                title="Clear search"
                type="button"
              >
                <X size={14} />
              </button>
            )}
            <button className="nav-search-submit-btn" type="button" title="Search Yash Computers" aria-label="Search">
              <Search size={17} />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <a href="#laptops" className="nav-link">Fresh Laptops</a>
            <a href="#showroom" className="nav-link showroom-nav-highlight">📸 Showroom Tour</a>
            <a href="#services" className="nav-link">Repairs & Upgrades</a>
            <a href="#emi-calc" className="nav-link">0% EMI Plans</a>
            <a href="#store-visit" className="nav-link">Store Location</a>
          </div>

          {/* Right Action CTAs */}
          <div className="nav-actions">
            <button 
              id="book-demo-navbar-btn"
              onClick={onOpenInquiry}
              className="btn btn-secondary btn-sm nav-cta-desktop"
            >
              Book Store Visit
            </button>
            <a
              id="nav-whatsapp-cta"
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello Yash Computers Rajgarh, I would like to inquire about fresh laptops available at your showroom.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm nav-cta-desktop"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>

            {/* Quick Call Button for Mobile */}
            <a 
              href={`tel:${STORE_INFO.phone}`}
              className="mobile-quick-call-btn"
              title="Call Yash Computers"
              aria-label="Call Store"
            >
              <Phone size={18} />
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              id="mobile-menu-toggle-btn"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sub Navigation Strip (Amazon Sub-Header) */}
      <div className="sub-navbar">
        <div className="container sub-nav-container">
          <span className="subnav-pill subnav-pill-highlight">
            🛡️ 100% Brand New Box-Packed Only • Official Warranty
          </span>
          <div className="subnav-links-scroll">
            <a href="#laptops" className="subnav-link">All Fresh Laptops</a>
            <a href="#laptops" className="subnav-link">HP</a>
            <a href="#laptops" className="subnav-link">Dell</a>
            <a href="#laptops" className="subnav-link">ASUS ROG Gaming</a>
            <a href="#laptops" className="subnav-link">Lenovo</a>
            <a href="#laptops" className="subnav-link">Apple MacBook</a>
            <a href="#emi-calc" className="subnav-link">Zero Downpayment EMI</a>
            <a href="#services" className="subnav-link">Fast RAM & SSD Upgrades</a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop and Drawer */}
      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-drawer-backdrop" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">Menu & Quick Links</span>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                className="mobile-drawer-close"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mobile-search-wrapper">
              <Search size={18} className="mobile-search-icon" />
              <input
                type="text"
                placeholder="Search HP, Dell, Asus, MacBook..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="mobile-search-input"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')} 
                  className="mobile-search-clear"
                  type="button"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <div className="mobile-links">
              <a href="#laptops" onClick={() => setMobileMenuOpen(false)}>💻 All Fresh Laptops (100% Sealed)</a>
              <a href="#showroom" onClick={() => setMobileMenuOpen(false)}>📸 Real Showroom Tour (Photos)</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>🔧 Laptop Repair & SSD Upgrades</a>
              <a href="#emi-calc" onClick={() => setMobileMenuOpen(false)}>💳 Zero Downpayment EMI</a>
              <a href="#store-visit" onClick={() => setMobileMenuOpen(false)}>📍 Showroom Address & Timing</a>
            </div>
            <div className="mobile-cta-group">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenInquiry(); }}
                className="btn btn-primary btn-mobile-cta"
              >
                Book Free Store Demo
              </button>
              <a 
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Namaste Yash Computers Rajgarh, I am browsing your website and want to check laptop availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-mobile-cta"
              >
                <MessageSquare size={18} /> Chat on WhatsApp
              </a>
              <a 
                href={`tel:${STORE_INFO.phone}`}
                className="btn btn-secondary btn-mobile-cta"
              >
                <Phone size={18} /> Call {STORE_INFO.phone}
              </a>
            </div>
            <div className="mobile-drawer-footer">
              <MapPin size={13} /> Near Bus Stand, Main Market, Rajgarh
            </div>
          </div>
        </>
      )}
    </header>
  );
};
