export interface Laptop {
  id: string;
  name: string;
  brand: 'Apple' | 'HP' | 'Dell' | 'Lenovo' | 'ASUS' | 'Acer';
  category: 'Gaming' | 'Student & Office' | 'Ultrabook' | 'Creator & Workstation';
  price: number;
  originalPrice: number;
  discountPercentage: number;
  tag?: 'Best Seller' | 'New Arrival' | 'Hot Deal' | 'Budget King';
  rating: number;
  reviewCount: number;
  image: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    graphics: string;
    display: string;
    battery: string;
    os: string;
    weight: string;
  };
  features: string[];
  warranty: string;
  inStock: boolean;
  emiStartsAt: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  turnaroundTime: string;
  iconName: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  purchasedModel: string;
  date: string;
}

export interface FilterOptions {
  search: string;
  category: string;
  brand: string;
  maxPrice: number;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
}

export interface ShowroomPhoto {
  id: string;
  title: string;
  category: 'all' | 'storefront' | 'asus' | 'demo' | 'accessories' | 'lounge' | 'team';
  image: string;
  badge: string;
  description: string;
  highlightSpecs?: string[];
}
