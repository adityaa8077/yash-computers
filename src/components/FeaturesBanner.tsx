import React from 'react';
import { ShieldCheck, BadgePercent, Wrench, Gift, Eye, Clock } from 'lucide-react';

export const FeaturesBanner: React.FC = () => {
  const features = [
    {
      icon: <Eye size={28} className="feat-icon text-cyan" />,
      title: "Hands-on Live Demo",
      description: "Touch, type, and test speed in person before spending a single rupee. No blind online buying."
    },
    {
      icon: <BadgePercent size={28} className="feat-icon text-amber" />,
      title: "Best Price in Rajgarh",
      description: "Guaranteed lower or matching rates compared to Bhopal & Indore shops with original GST bill."
    },
    {
      icon: <ShieldCheck size={28} className="feat-icon text-emerald" />,
      title: "100% Brand Warranty",
      description: "Official 1 to 3 years manufacturer warranty. Directly registered under your name on brand portal."
    },
    {
      icon: <Clock size={28} className="feat-icon text-indigo" />,
      title: "Zero Down Payment EMI",
      description: "Walk in with Aadhaar & PAN card, walk out with your dream laptop in just 15 minutes."
    },
    {
      icon: <Wrench size={28} className="feat-icon text-rose" />,
      title: "Local In-House Service",
      description: "Never send your laptop away for weeks. Fast diagnostic, SSD upgrade, and chip repairs in Rajgarh."
    },
    {
      icon: <Gift size={28} className="feat-icon text-primary" />,
      title: "₹3,500+ Free Gifts",
      description: "Quality laptop backpack, optical mouse, keyboard skin, and lifetime software installation free."
    }
  ];

  return (
    <section className="features-section" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">THE YASH COMPUTERS ADVANTAGE</span>
          <h2 className="section-title">
            Why Rajgarh Chooses <span className="gradient-text">Yash Computers</span>
          </h2>
          <p className="section-subtitle">
            Skip the risk of courier damage and fake sellers. Buy from your trusted local tech showroom with transparent pricing and lifetime support.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="feat-icon-wrapper">
                {feat.icon}
              </div>
              <h3 className="feat-title">{feat.title}</h3>
              <p className="feat-desc">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
