import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  Laptop as LaptopIcon
} from 'lucide-react';
import { STORE_INFO, LAPTOPS } from '../data/mockData';
import type { Laptop } from '../types';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  recommendations?: Laptop[];
  quickActions?: { label: string; action: () => void; isWhatsApp?: boolean; isCall?: boolean }[];
}

interface AIChatbotProps {
  onSelectLaptop: (laptop: Laptop) => void;
  onOpenInquiry: (subject: string) => void;
}

export const AIChatbot: React.FC<AIChatbotProps> = ({ onSelectLaptop, onOpenInquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialGreeting: Message = {
    id: 'msg-init',
    sender: 'ai',
    text: `🙏 **नमस्ते! Welcome to Yash Computers Rajgarh AI Assistant.**\n\nमैं यश कम्प्यूटर्स का AI सहायक हूँ। I can help you find the perfect laptop, check 0% EMI schemes, store timings, or laptop repair prices!\n\n*Feel free to ask in English or हिन्दी / Hinglish.*`,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    quickActions: [
      {
        label: '💬 Chat on WhatsApp',
        action: () => window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Namaste Yash Computers, I was talking to your AI assistant on the website and want to ask a question.")}`, '_blank'),
        isWhatsApp: true
      },
      {
        label: `📞 Call Showroom (${STORE_INFO.phone})`,
        action: () => window.open(`tel:${STORE_INFO.phone}`, '_self'),
        isCall: true
      }
    ]
  };

  const [messages, setMessages] = useState<Message[]>([initialGreeting]);

  const quickChips = [
    { label: '💻 Best under ₹50,000', query: 'Best laptop under 50000 for college and office' },
    { label: '🎮 RTX Gaming Laptops', query: 'Show me best gaming laptops with dedicated graphics' },
    { label: '💳 0% EMI & Documents', query: 'How does 0% EMI work and what documents are required?' },
    { label: '📍 Store Timing & Address', query: 'What is the showroom address, landmark and open timing?' },
    { label: '🚀 SSD & RAM Upgrade', query: 'Laptop repair and SSD upgrade price in Rajgarh' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // AI Response Generator with bilingual NLP intent analysis
  const processUserQuery = (query: string): { text: string; recommendations?: Laptop[]; quickActions?: Message['quickActions'] } => {
    const q = query.toLowerCase();

    // 1. EMI & Financing Queries
    if (q.includes('emi') || q.includes('kist') || q.includes('किश्त') || q.includes('finance') || q.includes('bajaj') || q.includes('credit card') || q.includes('down payment')) {
      return {
        text: `💳 **Zero & Low-Cost EMI at Yash Computers Rajgarh:**\n\n• **Instant 0% Interest EMI** available on 3 & 6-month tenures.\n• **Financing Partners:** Bajaj Finserv, HDFC Bank, IDFC First, and all Major Credit/Debit cards.\n• **Zero Down Payment** schemes available for eligible models!\n• **Required Documents:**\n  1. Aadhaar Card\n  2. PAN Card\n  3. Bank Passbook / Cheque\n\n⚡ Approval takes just **10-15 minutes** right at our showroom counter!`,
        quickActions: [
          {
            label: '💳 Calculate EMI Now',
            action: () => {
              setIsOpen(false);
              document.getElementById('emi-calc')?.scrollIntoView({ behavior: 'smooth' });
            }
          },
          {
            label: '💬 Check EMI Approval on WhatsApp',
            action: () => window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Namaste Yash Computers, I want to check my EMI eligibility for laptop purchase.")}`, '_blank'),
            isWhatsApp: true
          }
        ]
      };
    }

    // 2. Gaming Laptops & RTX Graphics
    if (q.includes('gaming') || q.includes('game') || q.includes('गेम') || q.includes('rtx') || q.includes('gtx') || q.includes('graphics') || q.includes('pubg') || q.includes('gta') || q.includes('tuf') || q.includes('rog')) {
      const gamingLaptops = LAPTOPS.filter(l => l.category === 'Gaming' || l.specs.graphics.includes('RTX') || l.specs.graphics.includes('GeForce'));
      return {
        text: `🎮 **High-Performance Gaming Machines in Rajgarh:**\n\nWe stock high-refresh rate laptops equipped with NVIDIA GeForce RTX graphics (RTX 3050, 4050, 4060) and high-airflow cooling systems. Tested and ready for GTA V, Valorant, Call of Duty, Cyberpunk, and 4K video editing.\n\n✨ **Showroom Gift:** Free heavy-duty gaming backpack, gaming mouse + mousepad with every gaming rig!`,
        recommendations: gamingLaptops.slice(0, 3),
        quickActions: [
          {
            label: '💬 Inquire Gaming Stock on WhatsApp',
            action: () => window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello Yash Computers, please tell me which gaming laptops with RTX graphics are in ready showroom stock today.")}`, '_blank'),
            isWhatsApp: true
          }
        ]
      };
    }

    // 3. Apple MacBook Queries
    if (q.includes('macbook') || q.includes('apple') || q.includes('mac') || q.includes('मैकबुक') || q.includes('ios')) {
      const macs = LAPTOPS.filter(l => l.brand === 'Apple');
      return {
        text: `🍎 **Apple MacBook at Yash Computers Rajgarh:**\n\n• **100% Genuine Sealed Indian Retail Stock** (Apple India Bill + 1 Year Official Apple Warranty).\n• Powered by the breakthrough **Apple M-Series chips** (M2 / M3) offering up to 18 hours of battery life and silent operation.\n• **Student & Festive Discount:** Flat discounts up to ₹10,000 + free original laptop sleeve & adapter setup.`,
        recommendations: macs,
        quickActions: [
          {
            label: '💬 Book MacBook Demo on WhatsApp',
            action: () => window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello Yash Computers, I am interested in buying an Apple MacBook Air in Rajgarh. Please share price offers.")}`, '_blank'),
            isWhatsApp: true
          }
        ]
      };
    }

    // 4. Budget Specific: Under ₹35,000 - ₹50,000
    if (q.includes('50000') || q.includes('50k') || q.includes('50,000') || q.includes('40000') || q.includes('40k') || q.includes('budget') || q.includes('सस्ता') || q.includes('बजट') || q.includes('student') || q.includes('college')) {
      const budgetLaptops = LAPTOPS.filter(l => l.price <= 60000).sort((a, b) => a.price - b.price);
      return {
        text: `🎓 **Best Laptops for Students, Teachers & Office (Under ₹50,000 - ₹60,000):**\n\nHere are our most reliable everyday performers with fast SSD storage, backlit keyboards, FHD anti-glare screens, and genuine pre-activated Windows 11 + MS Office Lifetime License!\n\n🎁 **Free Student Combo:** Backpack, Wireless Optical Mouse, Keyboard Protector, and Antivirus with every purchase.`,
        recommendations: budgetLaptops.slice(0, 3),
        quickActions: [
          {
            label: '🔍 View All Laptops',
            action: () => {
              setIsOpen(false);
              document.getElementById('laptops')?.scrollIntoView({ behavior: 'smooth' });
            }
          }
        ]
      };
    }

    // 5. Store Address, Location & Timings
    if (q.includes('address') || q.includes('location') || q.includes('timing') || q.includes('open') || q.includes('kaha') || q.includes('kidhar') || q.includes('पता') || q.includes('समय') || q.includes('दुकान') || q.includes('store') || q.includes('showroom')) {
      return {
        text: `📍 **Yash Computers Showroom Location & Timings:**\n\n• **Address:** ${STORE_INFO.address}\n• **Landmark:** Main Market Road, Near Central Bus Stand, Rajgarh (MP) - 465661\n• **Timings:** Open **All 7 Days** from **10:00 AM to 09:00 PM**\n• **Proprietor:** Authorized ASUS Channel Partner (GST Registered & Verified)\n• **Phone:** ${STORE_INFO.phone}`,
        quickActions: [
          {
            label: '🗺️ Open in Google Maps',
            action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(STORE_INFO.address)}`, '_blank')
          },
          {
            label: `📞 Call Store (${STORE_INFO.phone})`,
            action: () => window.open(`tel:${STORE_INFO.phone}`, '_self'),
            isCall: true
          }
        ]
      };
    }

    // 6. Repair, Upgrade & Service Queries
    if (q.includes('repair') || q.includes('service') || q.includes('ssd') || q.includes('ram') || q.includes('hang') || q.includes('slow') || q.includes('screen') || q.includes('battery') || q.includes('सुधार') || q.includes('अपग्रेड') || q.includes('सर्विस')) {
      return {
        text: `🔧 **Yash Computers Laptop Clinic & Workshop in Rajgarh:**\n\n• **High-Speed SSD Upgrade:** Make your slow or hanging laptop 10x faster in just 30 minutes with genuine Kingston/Crucial SSDs.\n• **RAM Expansion:** DDR4 & DDR5 RAM chips in ready stock.\n• **Screen & Hinge Replacement:** OEM replacement displays for HP, Dell, Lenovo, Asus, and Acer.\n• **Motherboard & Chip-Level Diagnostics:** Advanced microscope soldering and liquid-damage repair.\n• **Free Service:** 100% Free First Diagnostic & Data Backup Consultation!`,
        quickActions: [
          {
            label: '🔧 Book Repair / Upgrade',
            action: () => {
              setIsOpen(false);
              onOpenInquiry('Laptop Repair / SSD Upgrade');
            }
          },
          {
            label: '💬 Chat with Technician on WhatsApp',
            action: () => window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Hello Yash Computers, my laptop needs repair/upgrade. Please let me know the cost estimate.")}`, '_blank'),
            isWhatsApp: true
          }
        ]
      };
    }

    // 7. Brand Inquiries: HP, Dell, Lenovo, Asus
    if (q.includes('hp') || q.includes('dell') || q.includes('lenovo') || q.includes('asus') || q.includes('acer')) {
      let matchedBrand = 'HP';
      if (q.includes('dell')) matchedBrand = 'Dell';
      if (q.includes('lenovo')) matchedBrand = 'Lenovo';
      if (q.includes('asus')) matchedBrand = 'ASUS';
      if (q.includes('acer')) matchedBrand = 'Acer';

      const brandLaptops = LAPTOPS.filter(l => l.brand.toLowerCase() === matchedBrand.toLowerCase());
      return {
        text: `⭐ **Official ${matchedBrand} Laptops in Stock at Yash Computers Rajgarh:**\n\nAll units are **100% fresh, box-packed with factory seal intact** and direct manufacturer brand warranty. You can inspect the physical machine, test the screen and keyboard at our demo counter before taking it home!`,
        recommendations: brandLaptops.slice(0, 3),
        quickActions: [
          {
            label: `💬 Check Best Price for ${matchedBrand}`,
            action: () => window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(`Hello Yash Computers, what is the best deal and price for ${matchedBrand} laptops in Rajgarh today?`)}`, '_blank'),
            isWhatsApp: true
          }
        ]
      };
    }

    // 8. Offers, Gifts & Discounts
    if (q.includes('offer') || q.includes('discount') || q.includes('gift') || q.includes('free') || q.includes('छूट') || q.includes('ऑफर') || q.includes('उपहार')) {
      return {
        text: `🎁 **Current Special Offers at Yash Computers:**\n\n1. **Festive & Student Cash Discount:** Up to ₹12,000 Off on MRP.\n2. **Free Starter Tech Kit with every laptop:**\n   • Heavy-duty waterproof laptop backpack\n   • Wireless optical mouse + smooth mousepad\n   • Keyboard dust protector & screen clean kit\n   • 1 Year Licensed Antivirus & MS Office\n3. **0% Interest EMI:** No hidden bank processing charge on select models!`,
        quickActions: [
          {
            label: '💬 Claim Your Free Offer on WhatsApp',
            action: () => window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Namaste Yash Computers, I want to book a laptop and claim the Festive Student Offer (Free Bag + Mouse + Discount).")}`, '_blank'),
            isWhatsApp: true
          }
        ]
      };
    }

    // Default friendly fallback
    return {
      text: `धन्यवाद आपके सवाल के लिए! 🙏\n\nAt **Yash Computers Rajgarh**, we offer:\n• **100% Sealed Box-Packed Laptops** (HP, Dell, Asus ROG, Lenovo, Apple MacBook)\n• **Instant 0% EMI** (Zero Down Payment available)\n• **Laptop Repair & SSD Upgrades in 30 Mins**\n\nआप हमारे शोरूम पर सीधे आ सकते हैं (Near Bus Stand, Rajgarh) या तुरंत WhatsApp पर चैट कर सकते हैं!`,
      recommendations: LAPTOPS.slice(0, 2),
      quickActions: [
        {
          label: '💬 Chat Directly on WhatsApp',
          action: () => window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(`Hello Yash Computers Rajgarh: ${query}`)}`, '_blank'),
          isWhatsApp: true
        },
        {
          label: `📞 Call Owner (${STORE_INFO.phone})`,
          action: () => window.open(`tel:${STORE_INFO.phone}`, '_self'),
          isCall: true
        }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate smart AI typing delay
    setTimeout(() => {
      const response = processUserQuery(text);
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendations: response.recommendations,
        quickActions: response.quickActions
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleResetChat = () => {
    setMessages([initialGreeting]);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chatbot-trigger-btn"
          id="open-ai-chatbot-btn"
          aria-label="Open Yash AI Chatbot"
          title="Chat with Yash AI Assistant"
        >
          <div className="trigger-pulse-ring"></div>
          <div className="trigger-icon-box">
            <Bot size={26} className="trigger-bot-icon" />
            <span className="trigger-online-dot"></span>
          </div>
          <div className="trigger-label-wrap">
            <span className="trigger-label-hi">यश AI मित्र</span>
            <span className="trigger-label-en">Ask AI • हिन्दी / EN</span>
          </div>
          <Sparkles size={16} className="trigger-sparkle" />
        </button>
      )}

      {/* Main Chatbot Window */}
      {isOpen && (
        <div 
          className="chatbot-window glass-card"
          role="dialog"
          aria-modal="true"
          aria-label="Yash Computers AI Assistant"
          id="ai-chatbot-dialog"
        >
          {/* Header */}
          <div className="chatbot-header">
            <div className="chat-header-info">
              <div className="chat-avatar-box">
                <Bot size={22} />
                <span className="chat-online-badge"></span>
              </div>
              <div className="chat-title-group">
                <div className="chat-name-row">
                  <span className="chat-bot-name">यश AI सहायक</span>
                  <span className="chat-partner-tag">Showroom AI</span>
                </div>
                <span className="chat-status-text">
                  Online • Powered by Yash Computers Knowledge
                </span>
              </div>
            </div>

            <div className="chat-header-actions">
              <button 
                onClick={handleResetChat} 
                className="chat-hdr-btn" 
                title="Restart Chat Conversation"
                aria-label="Restart conversation"
              >
                <RotateCcw size={16} />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="chat-hdr-btn chat-close-btn" 
                title="Close Chat"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Quick Info Strip */}
          <div className="chat-info-strip">
            <span>🌐 Ask in <strong>English</strong> or <strong>हिन्दी</strong></span>
            <span>⭐ 100% Genuine Box-Packed Laptops</span>
          </div>

          {/* Messages Stream */}
          <div className="chat-messages-container">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message-row ${msg.sender === 'user' ? 'message-user' : 'message-ai'}`}>
                {msg.sender === 'ai' && (
                  <div className="msg-avatar">
                    <Bot size={16} />
                  </div>
                )}
                
                <div className="msg-bubble-wrap">
                  <div className="msg-bubble">
                    <div className="msg-text-content">
                      {msg.text.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="msg-paragraph">
                          {paragraph.split('\n').map((line, lIdx) => (
                            <React.Fragment key={lIdx}>
                              {line.startsWith('• ') ? (
                                <span className="msg-bullet">{line}</span>
                              ) : line.startsWith('**') && line.endsWith('**') ? (
                                <strong>{line.replace(/\*\*/g, '')}</strong>
                              ) : (
                                line
                              )}
                              {lIdx < paragraph.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </p>
                      ))}
                    </div>

                    {/* Product Recommendation Cards inside AI answer */}
                    {msg.recommendations && msg.recommendations.length > 0 && (
                      <div className="msg-recommendations-list">
                        <span className="rec-heading">
                          <LaptopIcon size={14} /> Recommended Physical Stock:
                        </span>
                        {msg.recommendations.map((lap) => (
                          <div 
                            key={lap.id} 
                            className="mini-rec-card"
                            onClick={() => {
                              onSelectLaptop(lap);
                            }}
                          >
                            <img src={lap.image} alt={lap.name} className="mini-rec-img" />
                            <div className="mini-rec-info">
                              <span className="mini-rec-brand">{lap.brand}</span>
                              <strong className="mini-rec-name">{lap.name}</strong>
                              <span className="mini-rec-specs">{lap.specs.processor} • {lap.specs.ram}</span>
                              <div className="mini-rec-price-row">
                                <span className="mini-rec-price">₹{lap.price.toLocaleString('en-IN')}</span>
                                <span className="mini-rec-badge">View Specs →</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Direct Quick Action CTAs */}
                    {msg.quickActions && (
                      <div className="msg-actions-row">
                        {msg.quickActions.map((qa, i) => (
                          <button
                            key={i}
                            onClick={qa.action}
                            className={`msg-action-btn ${qa.isWhatsApp ? 'btn-msg-whatsapp' : qa.isCall ? 'btn-msg-call' : ''}`}
                          >
                            {qa.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="msg-timestamp">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message-row message-ai">
                <div className="msg-avatar">
                  <Bot size={16} />
                </div>
                <div className="msg-bubble typing-bubble">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="chat-chips-scroll">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip.query)}
                className="chat-chip-btn"
                type="button"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form 
            className="chat-input-bar"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              type="text"
              id="ai-chatbot-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="बजट, मॉडल, EMI या रिपेयर के बारे में पूछें..."
              className="chat-text-input"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="chat-send-btn"
              title="Send Message"
              aria-label="Send Message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
