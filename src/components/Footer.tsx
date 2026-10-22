import React from 'react';
import { Laptop, Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Demo Customization Guidance Banner */}
      <div className="demo-notice-bar">
        <div className="container demo-notice-content">
          <span className="badge badge-primary">FRONT-END DEMO PREVIEW</span>
          <p>
            This website is engineered for <strong>Yash Computers Rajgarh</strong> using <strong>React 19 & modern TypeScript</strong>. 
            All product specifications, pricing, brand inventory, and images can be updated anytime with your actual showroom stock and photographs!
          </p>
        </div>
      </div>

      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-brand-col">
            <div className="brand-logo footer-logo">
              <div className="logo-icon-box">
                <Laptop size={22} className="logo-icon" />
              </div>
              <div className="logo-text">
                <div className="brand-title">
                  YASH <span className="highlight">COMPUTERS</span>
                </div>
                <div className="brand-tagline">
                  <span>RAJGARH'S LAPTOP STORE</span>
                </div>
              </div>
            </div>

            <p className="footer-about-text">
              Rajgarh's premier destination for brand new & certified pre-owned laptops, high-performance gaming rigs, computer accessories, and chip-level motherboard servicing.
            </p>

            <div className="footer-trust-chips">
              <span className="trust-chip"><ShieldCheck size={14} className="text-cyan" /> 100% Genuine Tax Invoice</span>
              <span className="trust-chip"><ShieldCheck size={14} className="text-emerald" /> Official Brand Warranty</span>
              <span className="trust-chip"><ShieldCheck size={14} className="text-amber" /> 0% EMI via Bajaj & Banks</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Laptop Categories</h4>
            <ul className="footer-links-list">
              <li><a href="#laptops">Gaming Laptops (RTX 4050/4060)</a></li>
              <li><a href="#laptops">Student & Office Laptops</a></li>
              <li><a href="#laptops">Ultrabooks & Slim Laptops</a></li>
              <li><a href="#laptops">100% Brand New Box-Packed Laptops</a></li>
              <li><a href="#laptops">Apple MacBook Air & Pro</a></li>
              <li><a href="#emi-calc">No Cost EMI Calculator</a></li>
            </ul>
          </div>

          {/* Col 3: Services & Repairs */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Showroom Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">30-Min Fast SSD & RAM Upgrades</a></li>
              <li><a href="#services">Chip-Level Motherboard Diagnostics</a></li>
              <li><a href="#services">Laptop Screen & Hinge Replacement</a></li>
              <li><a href="#services">Original Laptop Battery & Adapters</a></li>
              <li><a href="#services">Thermal Paste & Fan Overheating Clean</a></li>
              <li><a href="#services">Windows 11 OS & Antivirus Setup</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Showroom */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Showroom in Rajgarh</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <MapPin size={17} className="text-cyan" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={17} className="text-emerald" />
                <div>
                  <a href={`tel:${STORE_INFO.phone}`}>{STORE_INFO.phone}</a>
                  <span style={{ margin: '0 6px', color: '#64748b' }}>(Call & WhatsApp)</span>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={17} className="text-indigo" />
                <a href={`mailto:${STORE_INFO.email}`}>{STORE_INFO.email}</a>
              </div>
            </div>

            <div className="footer-timing-badge">
              <strong>Timings:</strong> 10:00 AM - 09:00 PM (Monday to Sunday)
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Yash Computers Rajgarh. All rights reserved.
          </p>
          <div className="footer-sub-links">
            <span>Serving Rajgarh, Biaora, Sarangpur & nearby tehsils</span>
            <button 
              onClick={scrollToTop} 
              className="scroll-top-btn"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
