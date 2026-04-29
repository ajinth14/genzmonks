export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Oversized Tees' | 'Streetwear Hoodies' | 'Minimal Fits';
  description: string;
  images: string[];
  sizes: string[];
  trending?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'gm-001',
    name: 'Cyber Monk Oversized Tee',
    price: 1499,
    category: 'Oversized Tees',
    description: 'High-quality 240GSM cotton oversized tee with futuristic monk graphic. Breathable, durable, and bold.',
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    trending: true,
  },
  {
    id: 'gm-002',
    name: 'Neon Rebellion Hoodie',
    price: 3299,
    category: 'Streetwear Hoodies',
    description: 'Heavyweight fleece hoodie with electric blue accents and signature GENZMONKS branding.',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop'],
    sizes: ['M', 'L', 'XL'],
    trending: true,
  },
  {
    id: 'gm-003',
    name: 'Minimal Zen Cargo Pants',
    price: 2499,
    category: 'Minimal Fits',
    description: 'Utility meets aesthetics. Lightweight tech-fabric cargo pants for the urban explorer.',
    images: ['https://images.unsplash.com/photo-1552939322-26156cf78198?q=80&w=1000&auto=format&fit=crop'],
    sizes: ['30', '32', '34', '36'],
    trending: false,
  },
  {
    id: 'gm-004',
    name: 'Aesthetic Chaos Tee',
    price: 1299,
    category: 'Oversized Tees',
    description: 'Minimalistic black tee with "GZMNKS" embroidery. The subtle flex for every Gen Z monk.',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    trending: true,
  },
  {
    id: 'gm-005',
    name: 'Midnight Phantom Jacket',
    price: 4599,
    category: 'Minimal Fits',
    description: 'Premium technical shell jacket. Water-resistant, windproof, and styled for the future.',
    images: ['https://images.unsplash.com/photo-1551028711-031c9f8a84a0?q=80&w=1000&auto=format&fit=crop'],
    sizes: ['M', 'L', 'XL'],
    trending: false,
  },
  {
    id: 'gm-006',
    name: 'Static Glitch Hoodie',
    price: 2999,
    category: 'Streetwear Hoodies',
    description: 'Screen-printed glitch art on premium loopback cotton. A statement piece for the bold.',
    images: ['https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1000&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    trending: true,
  },
];

export const CATEGORIES = [
  {
    name: 'Oversized Tees',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
    tagline: 'Stay Loose, Stay Bold.'
  },
  {
    name: 'Streetwear Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    tagline: 'Warmth with an Edge.'
  },
  {
    name: 'Minimal Fits',
    image: 'https://images.unsplash.com/photo-1551028711-031c9f8a84a0?q=80&w=800&auto=format&fit=crop',
    tagline: 'Less is Future.'
  }
];
