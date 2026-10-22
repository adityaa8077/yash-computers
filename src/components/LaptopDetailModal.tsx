import React, { useEffect } from 'react';
import type { Laptop } from '../types';
import { X, CheckCircle2, ShieldCheck, MessageSquare, Cpu, HardDrive, Monitor, Battery, Laptop as LaptopIcon, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface LaptopDetailModalProps {
  laptop: Laptop | null;
  onClose: () => void;
  onOpenInquiry: (laptopName: string) => void;
}

export const LaptopDetailModal: React.FC<LaptopDetailModalProps> = ({
  laptop,
  onClose,
  onOpenInquiry
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (laptop) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [laptop, onClose]);

  if (!laptop) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Yash Computers Rajgarh!\nI want to book an in-store demo or purchase:\n*${laptop.name}*\nPrice: ₹${laptop.price.toLocaleString('en-IN')}\nSpecs: ${laptop.specs.processor}, ${laptop.specs.ram}, ${laptop.specs.storage}\nPlease share available stock and payment offers.`
  );

  return (
    <div className="modal-backdrop" onClick={onClose} id="laptop-detail-modal-backdrop">
      <div 
        className="modal-content glass-card modal-laptop-detail"
        onClick={(e) => e.stopPropagation()}
        id="laptop-detail-modal"
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="modal-close-btn"
          id="close-laptop-modal-btn"
          aria-label="Close details modal"
        >
          <X size={20} />
        </button>

        <div className="modal-inner-grid">
          {/* Left Column: Visual Showcase */}
          <div className="modal-visual-col">
            <div className="modal-img-container">
              <img 
                src={laptop.image} 
                alt={laptop.name} 
                className="modal-main-img" 
              />
              {laptop.tag && (
                <span className="modal-tag-badge badge badge-hot">
                  <Sparkles size={13} /> {laptop.tag}
                </span>
              )}
            </div>

            {/* In-Store Demo Assurance */}
            <div className="demo-assurance-box">
              <div className="demo-icon-box">
                <ShieldCheck size={24} className="text-cyan" />
              </div>
              <div className="demo-assurance-text">
                <strong>Showroom Demo Available</strong>
                <p>Inspect this physical unit at our Rajgarh showroom before finalizing payment.</p>
              </div>
            </div>

            {/* Included in Box */}
            <div className="inbox-package-box">
              <span className="inbox-title">🎁 Complimentary Package Included:</span>
              <ul className="inbox-list">
                <li><CheckCircle2 size={14} className="text-emerald" /> Original OEM Fast Charger & Power Cord</li>
                <li><CheckCircle2 size={14} className="text-emerald" /> Heavy-duty Waterproof Laptop Backpack</li>
                <li><CheckCircle2 size={14} className="text-emerald" /> Wireless Optical Mouse + Smooth Mousepad</li>
                <li><CheckCircle2 size={14} className="text-emerald" /> Genuine Windows License + MS Office Pre-installed</li>
                <li><CheckCircle2 size={14} className="text-emerald" /> Lifetime Free First Diagnostic & Data Backup Service</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Specs & Booking */}
          <div className="modal-specs-col">
            <div className="modal-header-meta">
              <span className="brand-chip">{laptop.brand}</span>
              <span className="category-chip">{laptop.category}</span>
              <span className="rating-chip">★ {laptop.rating} ({laptop.reviewCount} customer reviews)</span>
            </div>

            <h2 className="modal-laptop-title">{laptop.name}</h2>

            {/* Price Box */}
            <div className="modal-price-box">
              <div className="modal-price-row">
                <span className="modal-current-price">₹{laptop.price.toLocaleString('en-IN')}</span>
                {laptop.originalPrice > laptop.price && (
                  <span className="modal-mrp-price">₹{laptop.originalPrice.toLocaleString('en-IN')}</span>
                )}
                <span className="modal-save-chip">Save {laptop.discountPercentage}%</span>
              </div>
              <p className="modal-tax-note">Inclusive of all taxes + GST invoice available for business claims</p>
              
              <div className="modal-emi-banner">
                <span>💳 0% Interest EMI Available: <strong>₹{laptop.emiStartsAt.toLocaleString('en-IN')} / month</strong></span>
              </div>
            </div>

            {/* Full Technical Specifications */}
            <div className="specs-table-wrapper">
              <h4 className="specs-table-heading">Technical Specifications</h4>
              <div className="specs-table">
                <div className="spec-row">
                  <span className="spec-col-label"><Cpu size={15} /> Processor</span>
                  <span className="spec-col-value">{laptop.specs.processor}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-col-label"><HardDrive size={15} /> Memory (RAM)</span>
                  <span className="spec-col-value">{laptop.specs.ram}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-col-label"><HardDrive size={15} /> Internal Storage</span>
                  <span className="spec-col-value">{laptop.specs.storage}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-col-label"><LaptopIcon size={15} /> Graphics / GPU</span>
                  <span className="spec-col-value">{laptop.specs.graphics}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-col-label"><Monitor size={15} /> Display</span>
                  <span className="spec-col-value">{laptop.specs.display}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-col-label"><Battery size={15} /> Battery & Charger</span>
                  <span className="spec-col-value">{laptop.specs.battery}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-col-label">Operating System</span>
                  <span className="spec-col-value">{laptop.specs.os}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-col-label">Weight & Build</span>
                  <span className="spec-col-value">{laptop.specs.weight}</span>
                </div>
              </div>
            </div>

            {/* Key Features List */}
            <div className="modal-features-section">
              <h4 className="specs-table-heading">Key Highlights</h4>
              <div className="feature-tags-wrap">
                {laptop.features.map((feat, idx) => (
                  <span key={idx} className="feature-tag-item">
                    <CheckCircle2 size={13} className="text-cyan" /> {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Warranty Callout */}
            <div className="modal-warranty-box">
              <ShieldCheck size={18} className="text-emerald" />
              <span><strong>Official Warranty:</strong> {laptop.warranty}</span>
            </div>

            {/* Modal Actions */}
            <div className="modal-cta-buttons">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp modal-action-btn"
                id="modal-wa-buy-btn"
              >
                <MessageSquare size={18} />
                <span>Order / Inquire on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry(laptop.name);
                }}
                className="btn btn-primary modal-action-btn"
                id="modal-book-demo-btn"
              >
                <span>Book Free Store Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
