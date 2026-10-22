import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Star size={14} className="text-amber" /> LOCAL RAJGARH EXPERIENCES
          </span>
          <h2 className="section-title">
            Loved by Over <span className="gradient-text">5,000+ Customers</span>
          </h2>
          <p className="section-subtitle">
            See what students, business professionals, and government employees in Rajgarh have to say about their experience with Yash Computers.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card glass-card">
              <Quote size={28} className="quote-icon" />

              <div className="test-rating-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="test-comment">"{item.comment}"</p>

              <div className="test-product-bought">
                <CheckCircle2 size={13} className="text-emerald" />
                <span>Verified Purchase: <strong>{item.purchasedModel}</strong></span>
              </div>

              <div className="test-author-row">
                <div className="test-avatar">
                  {item.name.charAt(0)}
                </div>
                <div className="test-author-info">
                  <h4 className="test-name">{item.name}</h4>
                  <div className="test-meta">
                    <span>{item.role}</span>
                    <span className="dot">•</span>
                    <span className="test-location"><MapPin size={11} /> {item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
