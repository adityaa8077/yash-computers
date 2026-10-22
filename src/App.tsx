import React, { useState } from 'react';
import './App.css';
import { LAPTOPS, STORE_INFO } from './data/mockData';
import type { Laptop } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesBanner } from './components/FeaturesBanner';
import { LaptopCatalog } from './components/LaptopCatalog';
import { LaptopDetailModal } from './components/LaptopDetailModal';
import { ShowroomGallery } from './components/ShowroomGallery';
import { ServicesSection } from './components/ServicesSection';
import { EMICalculator } from './components/EMICalculator';
import { Testimonials } from './components/Testimonials';
import { StoreLocationSection } from './components/StoreLocationSection';
import { InquiryModal } from './components/InquiryModal';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLaptop, setSelectedLaptop] = useState<Laptop | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryPrefill, setInquiryPrefill] = useState('');

  const handleOpenInquiry = (prefillItem: string = '') => {
    setInquiryPrefill(prefillItem);
    setIsInquiryOpen(true);
  };

  const handleSelectFeatured = (laptopId: string) => {
    const found = LAPTOPS.find((l) => l.id === laptopId);
    if (found) {
      setSelectedLaptop(found);
    }
  };

  return (
    <div className="app-root">
      {/* Navigation */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenInquiry={() => handleOpenInquiry('Showroom Visit')}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section with Showcase Deal */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry('General Demo Request')}
          onSelectFeatured={handleSelectFeatured}
        />

        {/* Core Value Pillars / Features */}
        <FeaturesBanner />

        {/* Live Laptop Catalog with Filters & Search */}
        <LaptopCatalog
          laptops={LAPTOPS}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectLaptop={(lap) => setSelectedLaptop(lap)}
        />

        {/* Real Showroom Photography & Virtual Store Tour */}
        <ShowroomGallery
          onOpenInquiry={(prefill) => handleOpenInquiry(prefill || 'Showroom Visit')}
        />

        {/* Certified Repairs, Upgrades & Chip-Level Services */}
        <ServicesSection
          onBookService={(serviceName) => handleOpenInquiry(serviceName)}
        />

        {/* Interactive 0% EMI Calculator for Customers */}
        <EMICalculator />

        {/* Real Customer Experiences from Rajgarh */}
        <Testimonials />

        {/* Store Location, Timings, & Direction Pin */}
        <StoreLocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Laptop Detail Modal */}
      <LaptopDetailModal
        laptop={selectedLaptop}
        onClose={() => setSelectedLaptop(null)}
        onOpenInquiry={(laptopName) => handleOpenInquiry(laptopName)}
      />

      {/* Booking / Inquiry Lead Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        prefilledLaptop={inquiryPrefill}
      />

      {/* Floating Action Buttons for Instant WhatsApp & Phone */}
      <div className="floating-widget">
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="floating-btn floating-call"
          title="Call Yash Computers Rajgarh"
          id="floating-call-btn"
        >
          <PhoneCall size={22} />
        </a>
        <a
          href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Namaste Yash Computers Rajgarh, I would like to inquire about laptops.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-whatsapp"
          title="Chat with Yash Computers on WhatsApp"
          id="floating-wa-btn"
        >
          <MessageSquare size={24} />
        </a>
      </div>

      {/* AI Chatbot Assistant (Bilingual Hindi & English) */}
      <AIChatbot
        onSelectLaptop={(lap) => setSelectedLaptop(lap)}
        onOpenInquiry={(subject) => handleOpenInquiry(subject)}
      />
    </div>
  );
};

export default App;
