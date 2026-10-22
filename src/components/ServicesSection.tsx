import React from 'react';
import { SERVICES, STORE_INFO } from '../data/mockData';
import { Cpu, Zap, Monitor, ThermometerSnowflake, BatteryCharging, ShieldCheck, Clock, CheckCircle2, MessageSquare, Wrench } from 'lucide-react';

interface ServicesSectionProps {
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu size={26} className="text-cyan" />;
      case 'Zap':
        return <Zap size={26} className="text-amber" />;
      case 'Monitor':
        return <Monitor size={26} className="text-indigo" />;
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake size={26} className="text-cyan" />;
      case 'BatteryCharging':
        return <BatteryCharging size={26} className="text-emerald" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck size={26} className="text-rose" />;
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={14} /> CERTIFIED SERVICE & REPAIR LAB
          </span>
          <h2 className="section-title">
            Laptop Repairs & <span className="gradient-text">Performance Upgrades</span>
          </h2>
          <p className="section-subtitle">
            Don't let a slow or damaged laptop slow you down. Our Rajgarh workshop features microscopic chip repair tools, genuine parts, and expert certified engineers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {SERVICES.map((srv) => (
            <div key={srv.id} className="service-card glass-card">
              {srv.popular && (
                <span className="service-popular-badge">
                  MOST POPULAR IN RAJGARH
                </span>
              )}
              <div className="service-icon-box">
                {renderIcon(srv.iconName)}
              </div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.description}</p>

              <div className="service-meta-row">
                <div className="service-price-tag">
                  <span className="price-label">Cost</span>
                  <span className="price-number">{srv.price}</span>
                </div>
                <div className="service-time-tag">
                  <Clock size={13} className="text-muted" />
                  <span>{srv.turnaroundTime}</span>
                </div>
              </div>

              <div className="service-action-row">
                <button
                  onClick={() => onBookService(srv.title)}
                  className="btn btn-secondary btn-sm service-btn"
                  id={`book-srv-${srv.id}`}
                >
                  Book Service
                </button>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(`Hello Yash Computers Rajgarh, my laptop needs: *${srv.title}*. Please let me know estimated repair time and cost.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm service-wa-btn"
                  title="Direct WhatsApp Diagnostic"
                >
                  <MessageSquare size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Real In-House Workshop & Diagnostic Bench Spotlight */}
        <div className="workshop-spotlight-card glass-card">
          <div className="workshop-img-col">
            <img 
              src="/images/showroom/laptop-demo-testing-zone.jpg" 
              alt="Live Laptop Testing & Diagnostic Desk at Yash Computers Rajgarh" 
              className="workshop-real-img"
            />
            <div className="workshop-img-badge">
              <span className="live-dot pulse"></span>
              <span>Rajgarh In-Store Testing Lab</span>
            </div>
          </div>
          <div className="workshop-content-col">
            <span className="section-tag-sm">100% IN-FRONT-OF-YOU SERVICE</span>
            <h3 className="workshop-title">
              Microscopic Diagnostics & Transparent Repairs
            </h3>
            <p className="workshop-desc">
              Unlike online courier repair services where your laptop leaves town for weeks, Yash Computers handles chip-level diagnostics, thermal paste re-application, hinge fabrication, and screen replacements right here in our Rajgarh workshop.
            </p>
            <div className="workshop-perks-list">
              <div className="workshop-perk">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Immediate 15-Minute Free Diagnosis</span>
              </div>
              <div className="workshop-perk">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>100% Customer Data Privacy Guaranteed</span>
              </div>
              <div className="workshop-perk">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Original Brand Spare Parts with Warranty</span>
              </div>
            </div>
            <div className="workshop-cta-group">
              <button 
                onClick={() => onBookService("Free In-Store Diagnostic Check")} 
                className="btn btn-secondary"
              >
                Book Free Diagnosis
              </button>
              <a href="#showroom" className="workshop-tour-link">
                📸 View More Showroom Photos →
              </a>
            </div>
          </div>
        </div>

        {/* Upgrade Guarantee Box */}
        <div className="upgrade-promise-card glass-card">
          <div className="promise-content">
            <div className="promise-header">
              <Zap size={28} className="text-amber" />
              <h3>"Make Any Old Laptop 5x Faster" Guarantee</h3>
            </div>
            <p>
              Is your laptop taking 5 minutes to start or freezing during Excel & Chrome? Bring it to Yash Computers Rajgarh. We replace slow spinning hard drives with ultra-fast NVMe/SATA SSDs in 30 minutes with 100% data intact.
            </p>
            <div className="promise-badges">
              <span><CheckCircle2 size={15} className="text-emerald" /> 100% Data Safe & Cloned</span>
              <span><CheckCircle2 size={15} className="text-emerald" /> 3-Year SSD Warranty</span>
              <span><CheckCircle2 size={15} className="text-emerald" /> Free Windows & Drivers Installation</span>
            </div>
          </div>
          <div className="promise-action">
            <button
              onClick={() => onBookService("30-Minute SSD Speed Upgrade")}
              className="btn btn-primary"
            >
              Book 30-Min Upgrade
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
