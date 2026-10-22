import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, Calendar, User, Laptop } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledLaptop?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  prefilledLaptop = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('New Laptop Purchase');
  const [modelOrService, setModelOrService] = useState(prefilledLaptop);
  const [preferredDay, setPreferredDay] = useState('Today / Tomorrow');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledLaptop) {
      setModelOrService(prefilledLaptop);
      setInquiryType('Specific Laptop Demo');
    }
  }, [prefilledLaptop]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generatedWhatsAppUrl = () => {
    const text = `*New Customer Inquiry via Yash Computers Rajgarh Website*:\n\n👤 *Name*: ${name}\n📞 *Phone*: ${phone}\n📌 *Requirement*: ${inquiryType}\n💻 *Model / Details*: ${modelOrService || 'General Inquiry'}\n🗓️ *Preferred Visit*: ${preferredDay}\n📝 *Notes*: ${notes || 'None'}`;
    return `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} id="inquiry-modal-backdrop">
      <div 
        className="modal-content glass-card modal-inquiry"
        onClick={(e) => e.stopPropagation()}
        id="inquiry-form-modal"
      >
        <button 
          onClick={handleResetAndClose} 
          className="modal-close-btn"
          id="close-inquiry-modal-btn"
          aria-label="Close booking modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-form-header">
              <span className="badge badge-primary">YASH COMPUTERS SHOWROOM VISIT</span>
              <h3 className="inquiry-modal-title">Book a Free Hands-on Demo or Service</h3>
              <p className="inquiry-modal-subtitle">
                Reserve your favorite laptop for a hands-on live test drive at our Rajgarh store. No advance payment required!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="inquiry-form">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="inquiry-name">Your Full Name *</label>
                <div className="input-with-icon">
                  <User size={16} className="input-icon" />
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="inquiry-phone">WhatsApp / Contact Mobile Number *</label>
                <div className="input-with-icon">
                  <Phone size={16} className="input-icon" />
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    placeholder="e.g. 98260 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="inquiry-type">What are you looking for?</label>
                  <select
                    id="inquiry-type"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                  >
                    <option value="New Laptop Purchase">Buy Brand New Laptop (Box-Packed)</option>
                    <option value="Fresh Budget / Student Laptop">Fresh Budget / Student Laptop (₹28k - ₹45k)</option>
                    <option value="Gaming Rig / PC Build">Gaming Laptop / Custom PC</option>
                    <option value="Laptop Repair or SSD Upgrade">Laptop Repair / Speed Upgrade</option>
                    <option value="0% EMI Finance Inquiry">0% EMI Loan Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-preferred-day">When would you like to visit?</label>
                  <div className="input-with-icon">
                    <Calendar size={16} className="input-icon" />
                    <select
                      id="inquiry-preferred-day"
                      value={preferredDay}
                      onChange={(e) => setPreferredDay(e.target.value)}
                    >
                      <option value="Today (Urgent)">Today</option>
                      <option value="Tomorrow">Tomorrow</option>
                      <option value="This Weekend (Saturday/Sunday)">This Weekend</option>
                      <option value="Just inquiring online">Just inquiring online first</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Specific Model or Issue */}
              <div className="form-group">
                <label htmlFor="inquiry-model">Model Name or Specific Requirement</label>
                <div className="input-with-icon">
                  <Laptop size={16} className="input-icon" />
                  <input
                    id="inquiry-model"
                    type="text"
                    placeholder="e.g. HP Pavilion Core i5, Dell Latitude, ASUS ROG, or RAM upgrade"
                    value={modelOrService}
                    onChange={(e) => setModelOrService(e.target.value)}
                  />
                </div>
              </div>

              {/* Special notes */}
              <div className="form-group">
                <label htmlFor="inquiry-notes">Any questions for Yash Computers team (Optional)</label>
                <textarea
                  id="inquiry-notes"
                  rows={2}
                  placeholder="Ask about discounts, exchange offer for your old laptop, or specific software needs..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              {/* Submit CTA */}
              <div className="form-submit-row">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  id="submit-inquiry-btn"
                >
                  <Send size={16} /> Confirm & Connect with Rajgarh Showroom
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="inquiry-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={54} className="text-emerald" />
            </div>
            <h3>Thank You, {name || 'Customer'}!</h3>
            <p>
              Your demo & inquiry request has been received by <strong>Yash Computers Rajgarh</strong>.
              We are holding your preferred configuration preview for you.
            </p>

            <div className="success-action-card">
              <p>For fastest response and instant model reservation on WhatsApp, tap below:</p>
              <a
                href={generatedWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', marginTop: '0.8rem' }}
                id="inquiry-success-whatsapp-link"
              >
                <MessageSquare size={18} />
                Send Inquiry to Yash Computers WhatsApp Now
              </a>
            </div>

            <button
              onClick={handleResetAndClose}
              className="btn btn-secondary btn-sm"
              style={{ marginTop: '1rem' }}
            >
              Done & Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
