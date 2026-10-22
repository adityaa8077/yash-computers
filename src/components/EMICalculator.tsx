import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, CreditCard, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

export const EMICalculator: React.FC = () => {
  const [laptopPrice, setLaptopPrice] = useState<number>(55000);
  const [downPayment, setDownPayment] = useState<number>(5000);
  const [tenureMonths, setTenureMonths] = useState<number>(6);

  // Interest rate assumption (e.g. zero cost EMI or standard 12% p.a. for extended tenure)
  const isZeroCost = tenureMonths <= 6;
  const annualInterestRate = isZeroCost ? 0 : 13.5;

  const loanAmount = Math.max(0, laptopPrice - downPayment);

  // Calculate monthly EMI
  const monthlyEmi = React.useMemo(() => {
    if (loanAmount <= 0) return 0;
    if (annualInterestRate === 0) {
      return Math.round(loanAmount / tenureMonths);
    }
    const monthlyRate = annualInterestRate / 12 / 100;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    return Math.round(emi);
  }, [loanAmount, tenureMonths, annualInterestRate]);

  const totalAmountPayable = downPayment + (monthlyEmi * tenureMonths);

  const emiWhatsAppMessage = encodeURIComponent(
    `Hello Yash Computers Rajgarh! I calculated EMI on your website:\nLaptop Budget: ₹${laptopPrice.toLocaleString('en-IN')}\nDown Payment: ₹${downPayment.toLocaleString('en-IN')}\nTenure: ${tenureMonths} Months\nCalculated EMI: ~₹${monthlyEmi.toLocaleString('en-IN')}/mo\nPlease let me know which documents are needed for approval.`
  );

  return (
    <section className="emi-section" id="emi-calc">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <CreditCard size={14} /> INSTANT EASY FINANCING
          </span>
          <h2 className="section-title">
            Zero & Low-Cost <span className="gradient-text">EMI Calculator</span>
          </h2>
          <p className="section-subtitle">
            Get your dream laptop today without breaking your monthly budget. Instant paperless approval in just 15 minutes at our Rajgarh showroom.
          </p>
        </div>

        <div className="emi-calculator-card glass-card">
          <div className="emi-grid">
            {/* Left: Interactive Controls */}
            <div className="emi-controls-col">
              {/* Price Slider */}
              <div className="emi-control-group">
                <div className="slider-label-row">
                  <label htmlFor="price-slider">Laptop Price (₹)</label>
                  <span className="slider-value-display">₹{laptopPrice.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  id="price-slider"
                  min={18000}
                  max={200000}
                  step={1000}
                  value={laptopPrice}
                  onChange={(e) => {
                    const newPrice = Number(e.target.value);
                    setLaptopPrice(newPrice);
                    if (downPayment > newPrice) setDownPayment(Math.floor(newPrice * 0.2));
                  }}
                  className="custom-range-slider"
                />
                <div className="slider-range-limits">
                  <span>₹18,000</span>
                  <span>₹2,00,000</span>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div className="emi-control-group">
                <div className="slider-label-row">
                  <label htmlFor="down-payment-slider">Down Payment (₹)</label>
                  <span className="slider-value-display">₹{downPayment.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  id="down-payment-slider"
                  min={0}
                  max={Math.min(laptopPrice * 0.8, 100000)}
                  step={1000}
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="custom-range-slider"
                />
                <div className="slider-range-limits">
                  <span>₹0 (Zero Down Payment)</span>
                  <span>Max: ₹{Math.min(laptopPrice * 0.8, 100000).toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Tenure Selector */}
              <div className="emi-control-group">
                <label className="tenure-label">Select Loan Tenure (Months)</label>
                <div className="tenure-buttons-grid">
                  {[3, 6, 9, 12, 18, 24].map((m) => (
                    <button
                      key={m}
                      onClick={() => setTenureMonths(m)}
                      className={`tenure-btn ${tenureMonths === m ? 'active' : ''}`}
                      id={`tenure-${m}-months`}
                    >
                      <span>{m} Months</span>
                      {m <= 6 && <span className="no-cost-tag">0% Interest</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Financing Partners */}
              <div className="emi-partners-box">
                <span className="partners-title">Approved EMI Partners at Yash Computers:</span>
                <div className="partners-tags">
                  <span className="partner-tag">Bajaj Finserv</span>
                  <span className="partner-tag">HDFC Bank SmartEMI</span>
                  <span className="partner-tag">TVS Credit</span>
                  <span className="partner-tag">IDFC FIRST Bank</span>
                  <span className="partner-tag">All Credit & Debit Cards</span>
                </div>
              </div>
            </div>

            {/* Right: Results Display Card */}
            <div className="emi-result-col">
              <div className="result-display-box">
                <div className="result-header">
                  <span className="result-header-tag">Estimated Monthly Installment</span>
                  <div className="calculated-emi-number">
                    ₹{monthlyEmi.toLocaleString('en-IN')}
                    <span className="per-month-text"> / month</span>
                  </div>
                  {isZeroCost ? (
                    <div className="badge badge-deal zero-cost-badge">
                      <Sparkles size={12} /> 0% Interest Applicable (No Cost EMI)
                    </div>
                  ) : (
                    <div className="badge badge-primary zero-cost-badge">
                      Low Interest Festive Scheme
                    </div>
                  )}
                </div>

                <div className="result-breakdown-table">
                  <div className="breakdown-row">
                    <span>Laptop Price:</span>
                    <strong>₹{laptopPrice.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="breakdown-row">
                    <span>Down Payment:</span>
                    <strong>₹{downPayment.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="breakdown-row">
                    <span>Financed Loan Amount:</span>
                    <strong>₹{loanAmount.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="breakdown-row">
                    <span>Tenure Period:</span>
                    <strong>{tenureMonths} Months</strong>
                  </div>
                  <div className="breakdown-row total-row">
                    <span>Total Net Outflow:</span>
                    <strong className="text-cyan">₹{totalAmountPayable.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                {/* Instant Eligibility Document Checklist */}
                <div className="eligibility-box">
                  <span className="eligibility-title">Required for 15-Minute Approval:</span>
                  <div className="eligibility-items">
                    <span><CheckCircle2 size={13} className="text-emerald" /> Aadhaar Card</span>
                    <span><CheckCircle2 size={13} className="text-emerald" /> PAN Card</span>
                    <span><CheckCircle2 size={13} className="text-emerald" /> Bank ATM Card or UPI</span>
                  </div>
                </div>

                {/* Action button */}
                <div className="result-actions">
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsapp}?text=${emiWhatsAppMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp result-cta-btn"
                    id="emi-check-whatsapp-btn"
                  >
                    <MessageSquare size={17} />
                    <span>Check Eligibility on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
