import React, { useState, useEffect } from 'react';
import { SHOWROOM_GALLERY, STORE_INFO } from '../data/mockData';
import type { ShowroomPhoto } from '../types';
import { 
  Camera, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  MapPin, 
  MessageSquare, 
  Navigation,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ShowroomGalleryProps {
  onOpenInquiry?: (prefill?: string) => void;
}

export const ShowroomGallery: React.FC<ShowroomGalleryProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'storefront', label: 'Store Front & Entrance' },
    { id: 'asus', label: 'ASUS Certified Zone' },
    { id: 'demo', label: 'Live Demo & Testing' },
    { id: 'accessories', label: 'Original Accessories' },
    { id: 'lounge', label: 'Customer Lounge' },
    { id: 'team', label: 'Owner & Team' },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? SHOWROOM_GALLERY
    : SHOWROOM_GALLERY.filter((p) => p.category === activeCategory);

  const selectedPhoto: ShowroomPhoto | null = selectedPhotoIndex !== null 
    ? filteredPhotos[selectedPhotoIndex] ?? null
    : null;

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  return (
    <section className="showroom-gallery-section" id="showroom">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Camera size={14} /> REAL SHOWROOM PHOTOGRAPHS
          </div>
          <h2 className="section-title">
            Take a Virtual Tour of <span className="gradient-text">Yash Computers Rajgarh</span>
          </h2>
          <div className="hindi-badge-pill">
            <span>यश कम्प्यूटर्स शोरूम — मेन मार्केट रोड, राजगढ़ (म.प्र.)</span>
          </div>
          <p className="section-subtitle">
            Authentic, unedited photographs of our showroom. Inspect our official ASUS display counter, live laptop testing zone, genuine parts showcase, and customer lounge.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="gallery-filter-tabs">
          {categories.map((cat) => {
            const count = cat.id === 'all' 
              ? SHOWROOM_GALLERY.length 
              : SHOWROOM_GALLERY.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedPhotoIndex(null);
                }}
                className={`gallery-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <span>{cat.label}</span>
                <span className="gallery-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="showroom-photo-grid">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              className="gallery-photo-card glass-card"
              onClick={() => setSelectedPhotoIndex(idx)}
              role="button"
              tabIndex={0}
              aria-label={`View ${photo.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedPhotoIndex(idx);
                }
              }}
            >
              <div className="photo-card-img-wrapper">
                <img
                  src={photo.image}
                  alt={`${photo.title} - Yash Computers Rajgarh`}
                  loading="lazy"
                  className="gallery-card-image"
                />
                <div className="photo-badge-overlay">
                  <span className="badge badge-accent">
                    <Sparkles size={11} /> {photo.badge}
                  </span>
                </div>
                <div className="photo-hover-scrim">
                  <span className="photo-view-action">
                    <Eye size={18} /> Click to Enlarge
                  </span>
                </div>
              </div>

              <div className="photo-card-body">
                <h3 className="photo-card-title">{photo.title}</h3>
                <p className="photo-card-desc">{photo.description}</p>
                {photo.highlightSpecs && (
                  <div className="photo-specs-chips">
                    {photo.highlightSpecs.map((spec, sIdx) => (
                      <span key={sIdx} className="photo-spec-chip">
                        <CheckCircle2 size={12} className="text-cyan" /> {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner Callout */}
        <div className="showroom-trust-callout glass-card">
          <div className="trust-callout-left">
            <div className="trust-callout-icon">
              <ShieldCheck size={32} className="text-cyan" />
            </div>
            <div>
              <div className="trust-callout-tag">GOVERNMENT REGISTERED & AUTHORIZED DEALER</div>
              <h3 className="trust-callout-title">
                100% Transparent Shopping Experience in Rajgarh
              </h3>
              <p className="trust-callout-text">
                GSTIN: <strong>{STORE_INFO.gstin}</strong> • Official ASUS Certified Channel Partner. 
                Visit our physical store to touch, feel, test laptops on our diagnostic bench, and receive free data transfer with genuine GST tax invoices.
              </p>
            </div>
          </div>

          <div className="trust-callout-actions">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Yash Computers, Main Market, Rajgarh")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Navigation size={17} />
              <span>Get Directions</span>
            </a>
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Namaste Yash Computers, I saw your showroom photos online. Can I visit today to see laptops in person?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={17} />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="photo-lightbox-backdrop" onClick={() => setSelectedPhotoIndex(null)}>
          <div 
            className="photo-lightbox-modal glass-card" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="lightbox-close-btn"
              title="Close (Esc)"
            >
              <X size={22} />
            </button>

            {/* Lightbox Media Box */}
            <div className="lightbox-media-wrapper">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="lightbox-full-img"
              />

              {/* Prev / Next controls */}
              <button
                onClick={handlePrev}
                className="lightbox-nav-btn btn-prev"
                title="Previous photo (Left arrow)"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="lightbox-nav-btn btn-next"
                title="Next photo (Right arrow)"
              >
                <ChevronRight size={24} />
              </button>

              <div className="lightbox-counter">
                {(selectedPhotoIndex ?? 0) + 1} / {filteredPhotos.length}
              </div>
            </div>

            {/* Lightbox Details Drawer */}
            <div className="lightbox-content-drawer">
              <div className="lightbox-badge-row">
                <span className="badge badge-accent">
                  <Sparkles size={12} /> {selectedPhoto.badge}
                </span>
                <span className="lightbox-location-tag">
                  <MapPin size={12} /> Yash Computers Showroom, Rajgarh (MP)
                </span>
              </div>

              <h2 className="lightbox-title">{selectedPhoto.title}</h2>
              <p className="lightbox-desc">{selectedPhoto.description}</p>

              {selectedPhoto.highlightSpecs && (
                <div className="lightbox-specs-grid">
                  {selectedPhoto.highlightSpecs.map((item, idx) => (
                    <div key={idx} className="lightbox-spec-pill">
                      <CheckCircle2 size={13} className="text-cyan" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="lightbox-action-row">
                <button
                  onClick={() => {
                    setSelectedPhotoIndex(null);
                    onOpenInquiry?.(`Demo Request for ${selectedPhoto.title}`);
                  }}
                  className="btn btn-primary"
                >
                  <span>Book Demo at This Counter</span>
                </button>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(`Hello Yash Computers, I'm viewing this showroom photo on your website: ${selectedPhoto.title}. I want to visit and check available laptop models.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={16} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
