import type { Laptop, ServiceItem, Testimonial } from '../types';

export const LAPTOPS: Laptop[] = [
  {
    id: 'lap-1',
    name: 'Apple MacBook Air M3 (13.6-inch)',
    brand: 'Apple',
    category: 'Ultrabook',
    price: 104900,
    originalPrice: 114900,
    discountPercentage: 9,
    tag: 'Best Seller',
    rating: 4.9,
    reviewCount: 42,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Apple M3 chip (8-core CPU, 10-core GPU)',
      ram: '16GB Unified Memory',
      storage: '512GB High-Speed SSD',
      graphics: 'Apple 10-Core Integrated GPU',
      display: '13.6" Liquid Retina Display with True Tone (2560x1664)',
      battery: 'Up to 18 Hours Battery Life',
      os: 'macOS Sequoia',
      weight: '1.24 kg'
    },
    features: ['MagSafe 3 Charging', '1080p FaceTime HD Camera', 'Silent Fanless Design', 'Touch ID'],
    warranty: '1 Year Apple Official Warranty + Store Setup Free',
    inStock: true,
    emiStartsAt: 4499
  },
  {
    id: 'lap-2',
    name: 'ASUS ROG Strix G16 (2024 Gaming)',
    brand: 'ASUS',
    category: 'Gaming',
    price: 119990,
    originalPrice: 144990,
    discountPercentage: 17,
    tag: 'Hot Deal',
    rating: 4.8,
    reviewCount: 29,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7-13650HX 13th Gen',
      ram: '16GB DDR5 4800MHz (Expandable to 32GB)',
      storage: '1TB PCIe 4.0 NVMe M.2 SSD',
      graphics: 'NVIDIA GeForce RTX 4060 8GB GDDR6',
      display: '16" FHD+ 165Hz IPS Anti-Glare 100% sRGB',
      battery: '90Whr 4-cell with Fast Charging',
      os: 'Windows 11 Home + MS Office 2021',
      weight: '2.50 kg'
    },
    features: ['ROG Intelligent Cooling with Liquid Metal', 'RGB 4-Zone Backlit Keyboard', 'Dolby Atmos Sound', 'MUX Switch + NVIDIA Advanced Optimus'],
    warranty: '1 Year Asus Onsite Warranty + 1 Year Yash Computers Care Support',
    inStock: true,
    emiStartsAt: 5190
  },
  {
    id: 'lap-3',
    name: 'HP Pavilion 15 (Core i5 13th Gen)',
    brand: 'HP',
    category: 'Student & Office',
    price: 54990,
    originalPrice: 65990,
    discountPercentage: 16,
    tag: 'Best Seller',
    rating: 4.7,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-1335U (10 Cores, up to 4.60 GHz)',
      ram: '16GB DDR4 3200MHz RAM',
      storage: '512GB NVMe M.2 SSD',
      graphics: 'Intel Iris Xe Graphics',
      display: '15.6" Full HD IPS Micro-edge Anti-glare',
      battery: '3-cell 41Whr (Fast Charge: 50% in 45 mins)',
      os: 'Windows 11 Home + MS Office Lifetime License',
      weight: '1.75 kg'
    },
    features: ['Fingerprint Reader', 'Audio by B&O Dual Speakers', 'HP Wide Vision 720p HD Camera', 'Backlit Keyboard'],
    warranty: '1 Year HP India Warranty with Free Laptop Bag',
    inStock: true,
    emiStartsAt: 2490
  },
  {
    id: 'lap-4',
    name: 'Dell Inspiron 14 5430 Metallic',
    brand: 'Dell',
    category: 'Ultrabook',
    price: 68900,
    originalPrice: 79900,
    discountPercentage: 14,
    tag: 'New Arrival',
    rating: 4.6,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-1335U 13th Gen',
      ram: '16GB LPDDR5 4800MHz',
      storage: '1TB M.2 PCIe NVMe SSD',
      graphics: 'Intel Iris Xe Graphics',
      display: '14.0" 16:10 FHD+ (1920x1200) WVA Display',
      battery: '4-cell 54Whr Integrated',
      os: 'Windows 11 + Office H&S 2021',
      weight: '1.53 kg'
    },
    features: ['Aluminum Exterior Cover', 'Waves MaxxAudio Pro', 'Thunderbolt 4.0 Port', 'Lid-open Sensor'],
    warranty: '1 Year Dell Premium Onsite Support with Accidental Damage Cover',
    inStock: true,
    emiStartsAt: 3050
  },
  {
    id: 'lap-5',
    name: 'Lenovo IdeaPad Slim 3 (Ryzen 5 7520U)',
    brand: 'Lenovo',
    category: 'Student & Office',
    price: 41990,
    originalPrice: 52990,
    discountPercentage: 20,
    tag: 'Budget King',
    rating: 4.7,
    reviewCount: 65,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 5 7520U (4 Cores / 8 Threads, up to 4.3 GHz)',
      ram: '16GB LPDDR5 5500MHz RAM',
      storage: '512GB SSD M.2 2242 PCIe 4.0',
      graphics: 'AMD Radeon 610M Graphics',
      display: '15.6" FHD (1920x1080) TN 250nits Anti-glare',
      battery: '47Whr (Rapid Charge Boost: 2hr run on 15min charge)',
      os: 'Windows 11 Home + MS Office 2021',
      weight: '1.62 kg'
    },
    features: ['Military-Grade Durability (MIL-STD-810H)', 'Privacy Shutter Camera', 'Dolby Audio Speakers'],
    warranty: '1 Year Lenovo Warranty + Extended 2nd Year Option at ₹999',
    inStock: true,
    emiStartsAt: 1890
  },
  {
    id: 'lap-6',
    name: 'Acer Nitro V 15 (RTX 4050 6GB)',
    brand: 'Acer',
    category: 'Gaming',
    price: 76990,
    originalPrice: 94990,
    discountPercentage: 19,
    tag: 'Hot Deal',
    rating: 4.8,
    reviewCount: 45,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-13420H (8 Cores, up to 4.60 GHz)',
      ram: '16GB DDR5 System Memory',
      storage: '512GB PCIe Gen4 NVMe SSD',
      graphics: 'NVIDIA GeForce RTX 4050 with 6GB Dedicated GDDR6',
      display: '15.6" 144Hz FHD IPS Display',
      battery: '57Whr Li-ion battery',
      os: 'Windows 11 Home 64-bit',
      weight: '2.1 kg'
    },
    features: ['Dual Fan Cooling System', 'NitroSense Control Center', 'DTS:X Ultra Audio', 'Wi-Fi 6 Connectivity'],
    warranty: '1 Year International Travelers Warranty + Local Showroom Support',
    inStock: true,
    emiStartsAt: 3450
  },
  {
    id: 'lap-7',
    name: 'Lenovo ThinkPad E14 Gen 5 (Business Grade)',
    brand: 'Lenovo',
    category: 'Creator & Workstation',
    price: 62490,
    originalPrice: 75000,
    discountPercentage: 16,
    tag: 'Best Seller',
    rating: 4.9,
    reviewCount: 51,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-1335U 13th Gen',
      ram: '16GB DDR4 3200MHz (Upgradeable)',
      storage: '512GB SSD M.2 PCIe Gen4 NVMe Opal 2.0',
      graphics: 'Integrated Intel Iris Xe',
      display: '14" WUXGA (1920x1200) IPS Anti-glare 300 nits',
      battery: '47Whr Battery with 65W USB-C Quick Charge',
      os: 'Windows 11 Professional Pre-installed',
      weight: '1.41 kg'
    },
    features: ['Legendary Ergonomic ThinkPad Keyboard', 'Hardware TPM 2.0 Security Chip', 'Spill-resistant keyboard', 'FHD Camera with Privacy Shutter'],
    warranty: '3 Years Lenovo Premier Onsite Commercial Warranty',
    inStock: true,
    emiStartsAt: 2790
  },
  {
    id: 'lap-8',
    name: 'Dell Inspiron 15 3520 (Brand New Box-Packed)',
    brand: 'Dell',
    category: 'Student & Office',
    price: 41990,
    originalPrice: 53990,
    discountPercentage: 22,
    tag: 'Best Seller',
    rating: 4.8,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5 12th Gen 1235U (10 Cores, up to 4.40 GHz)',
      ram: '16GB DDR4 3200MHz RAM',
      storage: '512GB M.2 PCIe NVMe High-Speed SSD',
      graphics: 'Intel Iris Xe Graphics',
      display: '15.6" Full HD (1920x1080) 120Hz Anti-Glare Narrow Border Display',
      battery: '41 Whr Battery with ExpressCharge (0 to 80% in 60 mins)',
      os: 'Pre-loaded Windows 11 Home + MS Office 2021 Lifetime Genuine',
      weight: '1.65 kg'
    },
    features: ['100% Brand New Sealed Box', 'Official Dell 1-Year Onsite Warranty', 'Spill-resistant Full-size Keyboard', 'Free Yash Computers Premium Laptop Bag & Wireless Mouse Included'],
    warranty: '1 Year Dell Official Onsite Brand Warranty + Lifetime Free Tech Support at Yash Computers',
    inStock: true,
    emiStartsAt: 1899
  },
  {
    id: 'lap-9',
    name: 'HP 15s Ryzen 5 5500U (Fresh Seal-Packed)',
    brand: 'HP',
    category: 'Student & Office',
    price: 39990,
    originalPrice: 51900,
    discountPercentage: 23,
    tag: 'Hot Deal',
    rating: 4.7,
    reviewCount: 145,
    image: 'https://images.unsplash.com/photo-1544731612-de292439cc67?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 5 5500U 6-Core / 12-Threads (up to 4.0 GHz)',
      ram: '16GB DDR4 RAM (Expandable up to 32GB)',
      storage: '512GB PCIe NVMe M.2 Fast SSD',
      graphics: 'AMD Radeon Graphics',
      display: '15.6" Micro-edge Full HD Anti-Glare (250 nits)',
      battery: '41 Whr Fast Charge (50% in 45 mins)',
      os: 'Windows 11 Home + Microsoft Office Home & Student 2021',
      weight: '1.69 kg'
    },
    features: ['100% Fresh Box-Packed with Intact HP Factory Seal', 'Official HP 1-Year Pan-India Warranty', 'HP TrueVision HD Camera with Temporal Noise Reduction', 'Complimentary Laptop Backpack & Optical Mouse'],
    warranty: '1 Year Official HP Manufacturer Warranty + Free Initial Setup at Yash Computers',
    inStock: true,
    emiStartsAt: 1799
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Chip-Level Motherboard Repair',
    description: 'Expert diagnostic and microscopic repair for dead laptops, water-damaged boards, short circuits, and charging IC issues.',
    price: 'Starting ₹799',
    turnaroundTime: '24-48 Hours',
    iconName: 'Cpu',
    popular: true
  },
  {
    id: 'srv-2',
    title: 'Super-Fast SSD & RAM Upgrades',
    description: 'Make your 5-year-old laptop boot in 8 seconds! Genuine Kingston, Crucial & WD SSDs installed with zero data loss.',
    price: 'Starting ₹1,200',
    turnaroundTime: 'Same Day (30 mins)',
    iconName: 'Zap',
    popular: true
  },
  {
    id: 'srv-3',
    title: 'Screen & Hinge Replacement',
    description: 'Broken display or broken hinge? Genuine IPS LED screens and structural hinge repairs for HP, Dell, Lenovo, and Asus.',
    price: 'Starting ₹1,800',
    turnaroundTime: 'Same Day',
    iconName: 'Monitor'
  },
  {
    id: 'srv-4',
    title: 'Deep Thermal Cleaning & Fan Service',
    description: 'Solve overheating and fan noise issues. Application of Arctic MX-4 premium thermal paste and dust clearance.',
    price: 'Flat ₹399',
    turnaroundTime: '45 mins',
    iconName: 'ThermometerSnowflake'
  },
  {
    id: 'srv-5',
    title: 'Battery & Original Charger Replacement',
    description: '100% original manufacturer batteries with 1-year brand warranty. Laptop chargers for all brands and USB-C GaN chargers.',
    price: 'Starting ₹1,150',
    turnaroundTime: 'Instant on stock',
    iconName: 'BatteryCharging'
  },
  {
    id: 'srv-6',
    title: 'OS, Antivirus & Data Recovery',
    description: 'Genuine Windows 11 installation, virus removal, driver tuning, and deep recovery from formatted or corrupted drives.',
    price: 'Starting ₹499',
    turnaroundTime: 'Same Day',
    iconName: 'ShieldCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikram Singh Rajput',
    role: 'Civil Engineering Student',
    location: 'Rajgarh, MP',
    rating: 5,
    comment: 'Purchased ASUS ROG Gaming laptop from Yash Computers. Best price in entire Rajgarh district compared to Bhopal or Indore! Got free gaming mouse, bag, and instant demo in store.',
    purchasedModel: 'ASUS ROG Strix G16',
    date: '2 weeks ago'
  },
  {
    id: 'test-2',
    name: 'Pooja Verma',
    role: 'Government Teacher & Educator',
    location: 'Biaora / Rajgarh',
    rating: 5,
    comment: 'Needed a reliable laptop for school records and online teaching. Yash bhaiya suggested HP Pavilion with easy 6-month Bajaj Finserv zero interest EMI. Very polite and honest service.',
    purchasedModel: 'HP Pavilion 15',
    date: '1 month ago'
  },
  {
    id: 'test-3',
    name: 'Ramesh Sharma',
    role: 'Chartered Accountant / Tax Consultant',
    location: 'Hospital Road, Rajgarh',
    rating: 5,
    comment: 'My Dell office laptop died just 2 days before audit deadlines. Yash Computers diagnosed the motherboard chip fault and returned it working like brand new next morning with 100% data intact.',
    purchasedModel: 'Chip-Level Motherboard Repair',
    date: '3 weeks ago'
  },
  {
    id: 'test-4',
    name: 'Mohit Patidar',
    role: 'Freelance Graphic Designer',
    location: 'Rajgarh',
    rating: 5,
    comment: 'Purchased a brand new seal-packed HP 15s Ryzen 5 at Yash Computers. Got the best price in Rajgarh with free original HP backpack and wireless mouse. Instant unboxing and setup in front of me!',
    purchasedModel: 'HP 15s Ryzen 5 (Fresh Box-Packed)',
    date: 'Just recently'
  }
];

export const STORE_INFO = {
  name: 'Yash Computers',
  hindiName: 'यश कम्प्यूटर्स',
  tagline: 'Rajgarh\'s #1 Laptop & Tech Hub',
  partnership: 'ASUS Certified Channel Partner',
  gstin: '23BMXPK5641R1Z4',
  phone: '+91 93006 98522',
  alternatePhone: '+91 93006 98522',
  whatsapp: '919300698522',
  email: 'yashcomputers.rajgarh@gmail.com',
  address: 'Shop No. 12-14, Near Bus Stand, Main Market Road, Rajgarh, Madhya Pradesh - 465661',
  timing: '10:00 AM - 09:00 PM (Open All 7 Days)',
  googleMapsQuery: 'Yash Computers, Main Market, Rajgarh'
};

export const SHOWROOM_GALLERY: import('../types').ShowroomPhoto[] = [
  {
    id: 'photo-storefront',
    title: 'Showroom Entrance & Signage',
    category: 'storefront',
    image: '/images/showroom/storefront-exterior.jpg',
    badge: 'ASUS Certified Channel Partner',
    description: 'Official storefront on Main Market Road, Rajgarh with bold signage, authorized partner status, and verified GST registration.',
    highlightSpecs: ['ASUS Certified Channel Partner', 'GSTIN: 23BMXPK5641R1Z4', 'Near Bus Stand, Rajgarh (MP)']
  },
  {
    id: 'photo-owner',
    title: 'Meet the Founder & Tech Specialist',
    category: 'team',
    image: '/images/showroom/owner-founder-counter.jpg',
    badge: '15+ Years Trusted Guidance',
    description: 'Personalized guidance right at the showroom counter. Every laptop is unboxed and tested live in front of the customer before handover.',
    highlightSpecs: ['Dell, HP, ASUS & Lenovo Specialist', 'Free Setup & Migration', 'Zero-Pressure Guidance']
  },
  {
    id: 'photo-asus-zone',
    title: 'ASUS Authorized Experience Zone',
    category: 'asus',
    image: '/images/showroom/asus-brand-zone.jpg',
    badge: 'Official ASUS Partner Zone',
    description: 'Illuminated 3D ASUS branding, authorized channel partner certificates, and ready stock of Vivobook, Zenbook, and TUF gaming series.',
    highlightSpecs: ['Official Channel Certificate', 'TUF & Vivobook Stock', '100% Brand Onsite Warranty']
  },
  {
    id: 'photo-live-demo',
    title: 'Live Hands-On Laptop Demo Desk',
    category: 'demo',
    image: '/images/showroom/laptop-demo-testing-zone.jpg',
    badge: 'Try Before You Buy',
    description: 'Try the keyboards, screens, audio, and boot speeds yourself before making a purchase. Ant Esports gaming setup and testing monitor available.',
    highlightSpecs: ['Live Boot Speed Test', 'Screen & Speaker Inspection', 'Real Hands-On Feel']
  },
  {
    id: 'photo-accessories',
    title: 'Original Peripherals & Accessories Showcase',
    category: 'accessories',
    image: '/images/showroom/genuine-parts-accessories.jpg',
    badge: '100% Genuine Components',
    description: 'Complete inventory of Logitech, SanDisk, Kingston, Brother, Canon, Epson original inks, Wi-Fi routers, and Quick Heal security.',
    highlightSpecs: ['Logitech, SanDisk, Kingston', 'Original HP & Epson Inks', 'Quick Heal Authorized']
  },
  {
    id: 'photo-gaming-stock',
    title: 'Gaming Laptops & Heavy-Duty Machines',
    category: 'demo',
    image: '/images/showroom/gaming-laptops-counter.jpg',
    badge: 'Factory Fresh Stock',
    description: 'In-stock inventory of ASUS TUF Gaming and HP laptops ready for immediate purchase with free bag, mouse, and setup.',
    highlightSpecs: ['RTX 40-Series & 30-Series', 'Immediate Same-Day Handover', 'Free Gaming Bag & Mouse']
  },
  {
    id: 'photo-customer-lounge',
    title: 'Customer Lounge & Fresh Stock',
    category: 'lounge',
    image: '/images/showroom/customer-lounge-stock.jpg',
    badge: 'Customer Comfort',
    description: 'Relax in our comfortable customer waiting lounge while our technicians complete data migration, Windows setup, and software installation.',
    highlightSpecs: ['Comfortable Seating', 'Free High-Speed WiFi', 'Live Setup Observation']
  },
  {
    id: 'photo-interior-panoramic',
    title: 'Showroom Wide Perspective',
    category: 'storefront',
    image: '/images/showroom/showroom-panoramic-view.jpg',
    badge: 'All-In-One Tech Hub',
    description: 'A look across our spacious showroom showing multi-brand laptops, monitors, inverters/UPS, audio systems, and PC components.',
    highlightSpecs: ['Laptops & Desktops', 'Inverters & Printers', 'Massive Local Inventory']
  },
  {
    id: 'photo-owner-portrait',
    title: 'Personalized Customer Care',
    category: 'team',
    image: '/images/showroom/owner-portrait.jpg',
    badge: 'Local Rajgarh Support',
    description: 'Friendly support before, during, and long after your purchase. We are always just a call or store visit away.',
    highlightSpecs: ['Direct WhatsApp Assistance', 'Local Warranty Claims Help', 'Fair & Honest Pricing']
  },
  {
    id: 'photo-modern-overview',
    title: 'Modern Ambient Interior & GPU Wall',
    category: 'accessories',
    image: '/images/showroom/showroom-overview-lighting.jpg',
    badge: 'Component & GPU Hub',
    description: 'Modern ambient LED lighting and glass showcases highlighting NVIDIA GeForce RTX graphics cards, motherboards, and PC components.',
    highlightSpecs: ['GeForce RTX Graphics Cards', 'Custom PC Upgrades', 'Clean Modern Ambience']
  }
];
