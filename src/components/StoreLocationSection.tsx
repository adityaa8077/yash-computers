import React, { useState } from 'react';
import { STORE_INFO } from '../data/mockData';
import { MapPin, Phone, Clock, Mail, Navigation, MessageSquare, Check, Car } from 'lucide-react';

export const StoreLocationSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(STORE_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section className="location-section" id="store-visit">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <MapPin size={14} /> VISIT OUR SHOWROOM
          </span>
          <h2 className="section-title">
            Come Visit <span className="gradient-text">Yash Computers Rajgarh</span>
          </h2>
          <p className="section-subtitle">
            Experience our full line of gaming rigs, ultrabooks, and fresh box-packed laptops. Conveniently located near the central Bus Stand with ample parking.
          </p>
        </div>

        <div className="location-main-grid glass-card">
          {/* Left Column: Store Details & Landmark Info */}
          <div className="location-info-col">
            <div className="store-badge-live">
              <span className="live-dot pulse"></span>
              <span>Open Today: 10:00 AM - 9:00 PM</span>
            </div>

            <h3 className="store-name-title">{STORE_INFO.name}</h3>
            <p className="store-tagline-text">{STORE_INFO.tagline}</p>

            <div className="store-contact-list">
              {/* Address */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <MapPin size={20} className="text-cyan" />
                </div>
                <div className="contact-detail-text">
                  <strong>Showroom Address</strong>
                  <p>{STORE_INFO.address}</p>
                  <span className="landmark-tip">Landmark: Opposite City Medical Store, 2 mins walk from Rajgarh Bus Stand</span>
                </div>
              </div>

              {/* Timing */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Clock size={20} className="text-amber" />
                </div>
                <div className="contact-detail-text">
                  <strong>Store Timings</strong>
                  <p>{STORE_INFO.timing}</p>
                  <span className="landmark-tip">Open on Sundays & National Holidays</span>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Phone size={20} className="text-emerald" />
                </div>
                <div className="contact-detail-text">
                  <strong>Showroom Contact & WhatsApp</strong>
                  <div className="phone-numbers-group">
                    <a href={`tel:${STORE_INFO.phone}`} className="phone-link">
                      {STORE_INFO.phone}
                    </a>
                    <span className="badge badge-accent-sm">Call & WhatsApp</span>
                  </div>
                  <button onClick={copyPhoneNumber} className="copy-phone-btn">
                    {copiedPhone ? <><Check size={12} /> Copied to clipboard</> : 'Click to copy number'}
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Mail size={20} className="text-indigo" />
                </div>
                <div className="contact-detail-text">
                  <strong>Email Support & Invoicing</strong>
                  <a href={`mailto:${STORE_INFO.email}`} className="email-link">
                    {STORE_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Visit Perks */}
            <div className="visit-amenities">
              <span className="amenity-chip"><Car size={14} className="text-cyan" /> Free Two-Wheeler & Car Parking</span>
              <span className="amenity-chip">⚡ Free High-Speed WiFi for Laptop Setup</span>
              <span className="amenity-chip">☕ Refreshments for Visiting Customers</span>
            </div>

            {/* Navigation buttons */}
            <div className="location-cta-group">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Yash Computers, Bus Stand Market, Rajgarh")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="get-directions-btn"
              >
                <Navigation size={17} />
                <span>Get Google Maps Directions</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Namaste Yash Computers, I am on my way to your Rajgarh showroom. Is it currently open?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                id="location-wa-btn"
              >
                <MessageSquare size={17} />
                <span>WhatsApp Location Pin</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Store Photos & Interactive Location Card */}
          <div className="location-map-col">
            <div className="map-visual-container">
              {/* Real Store Photo Card with Toggle */}
              <div className="store-real-photo-card">
                <div className="store-photo-header">
                  <div className="photo-title-pill">
                    <span className="live-dot pulse"></span>
                    <span>Actual Storefront & Showroom</span>
                  </div>
                  <span className="badge badge-accent">GSTIN: {STORE_INFO.gstin}</span>
                </div>

                <div className="store-photo-preview-box">
                  <img
                    src="/images/showroom/storefront-exterior.jpg"
                    alt="Yash Computers Rajgarh Storefront & Exterior Board"
                    className="store-facade-img"
                  />
                  <div className="store-facade-overlay">
                    <span className="facade-landmark-tag">
                      <MapPin size={13} /> Opp. City Medical Store, Near Bus Stand, Rajgarh
                    </span>
                    <a href="#showroom" className="facade-gallery-link">
                      📸 View 10+ Showroom Photos
                    </a>
                  </div>
                </div>

                <div className="store-photo-meta-grid">
                  <div className="store-meta-pill">
                    <strong>ASUS Certified</strong>
                    <span>Official Channel Partner</span>
                  </div>
                  <div className="store-meta-pill">
                    <strong>Hindi Board</strong>
                    <span>यश कम्प्यूटर्स शोरूम</span>
                  </div>
                  <div className="store-meta-pill">
                    <strong>Parking</strong>
                    <span>Free Front Parking</span>
                  </div>
                </div>
              </div>

              {/* Styled interactive map graphic / preview */}
              <div className="map-frame-wrapper">
                <div className="map-grid-overlay"></div>
                <div className="map-center-pin">
                  <div className="pin-pulse"></div>
                  <div className="pin-marker">
                    <MapPin size={26} color="#ffffff" />
                  </div>
                  <div className="pin-card-preview">
                    <strong>{STORE_INFO.name} ({STORE_INFO.hindiName})</strong>
                    <span>Main Market, Rajgarh (MP) - 465661</span>
                    <span className="rating-mini">★ 4.9 (500+ Local Reviews)</span>
                  </div>
                </div>

                {/* Nearby towns served */}
                <div className="surrounding-coverage-box">
                  <span className="coverage-title">Proudly Serving Rajgarh & Surrounding Tehsils:</span>
                  <div className="coverage-tags">
                    <span>Biaora</span>
                    <span>Sarangpur</span>
                    <span>Khilchipur</span>
                    <span>Jeerapur</span>
                    <span>Narsinghgarh</span>
                    <span>Machalpur</span>
                    <span>Chhapera</span>
                  </div>
                </div>
              </div>

              {/* Direct Call / Visit Invitation Box */}
              <div className="store-welcome-note">
                <p>
                  "We believe that buying a laptop is an investment for your education or career. You deserve to test the keyboard feel, screen brightness, and sound quality yourself. We welcome you to visit our Rajgarh showroom and try as many models as you like before deciding!"
                </p>
                <div className="proprietor-signature">
                  <strong>— Management & Tech Team, Yash Computers Rajgarh</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
