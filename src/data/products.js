// Product Collections Data
export const collections = [
  { 
    id: 'spring-2024',
    name: 'Spring Collection', 
    year: '2024',
    items: '24 pieces',
    desc: 'Lightweight fabrics meet traditional silhouettes'
  },
  { 
    id: 'summer-2024',
    name: 'Urban Essentials', 
    year: '2024',
    items: '18 pieces',
    desc: 'Modern streetwear with Japanese minimalism'
  },
  { 
    id: 'autumn-2024',
    name: 'Heritage Line', 
    year: '2024',
    items: '32 pieces',
    desc: 'Timeless pieces inspired by ancient craftsmanship'
  },
];

// Featured Products
export const featuredProducts = [
  { 
    id: 1, 
    name: 'Oversized Haori Jacket', 
    price: '¥28,500', 
    category: '羽織',
    image: '/images/product-1.jpg',
    description: 'Traditional haori jacket with modern oversized silhouette',
    material: '100% Organic Cotton',
    sizes: ['S', 'M', 'L', 'XL']
  },
  { 
    id: 2, 
    name: 'Minimalist Kimono Robe', 
    price: '¥32,000', 
    category: '着物',
    image: '/images/product-2.jpg',
    description: 'Contemporary kimono robe with clean lines',
    material: 'Premium Linen Blend',
    sizes: ['S', 'M', 'L', 'XL']
  },
  { 
    id: 3, 
    name: 'Wide Hakama Trousers', 
    price: '¥24,800', 
    category: 'パンツ',
    image: '/images/product-3.jpg',
    description: 'Wide-leg trousers inspired by traditional hakama',
    material: 'Cotton Twill',
    sizes: ['S', 'M', 'L', 'XL']
  },
  { 
    id: 4, 
    name: 'Noragi Work Jacket', 
    price: '¥26,500', 
    category: '野良着',
    image: '/images/product-4.jpg',
    description: 'Vintage-inspired work jacket with functional details',
    material: 'Heavyweight Canvas',
    sizes: ['S', 'M', 'L', 'XL']
  },
];

// All Products (untuk Collection page)
export const allProducts = [
  // Spring Collection
  { 
    id: 101, 
    name: 'Light Haori Jacket', 
    price: '¥24,500', 
    category: '羽織',
    image: '/images/spring-1.jpg',
    season: 'spring',
    collection: 'Spring Collection'
  },
  { 
    id: 102, 
    name: 'Flowing Midi Dress', 
    price: '¥18,900', 
    category: 'ドレス',
    image: '/images/spring-2.jpg',
    season: 'spring',
    collection: 'Spring Collection'
  },
  { 
    id: 103, 
    name: 'Linen Wide Pants', 
    price: '¥16,200', 
    category: 'パンツ',
    image: '/images/spring-3.jpg',
    season: 'spring',
    collection: 'Spring Collection'
  },
  
  // Summer Collection
  { 
    id: 201, 
    name: 'Indigo Dyed Yukata', 
    price: '¥32,000', 
    category: '浴衣',
    image: '/images/summer-1.jpg',
    season: 'summer',
    collection: 'Urban Essentials'
  },
  { 
    id: 202, 
    name: 'Loose Linen Shirt', 
    price: '¥14,500', 
    category: 'シャツ',
    image: '/images/summer-2.jpg',
    season: 'summer',
    collection: 'Urban Essentials'
  },
  
  // Autumn Collection
  { 
    id: 301, 
    name: 'Wool Blend Coat', 
    price: '¥42,000', 
    category: 'コート',
    image: '/images/autumn-1.jpg',
    season: 'autumn',
    collection: 'Heritage Line'
  },
  { 
    id: 302, 
    name: 'Noragi Work Jacket', 
    price: '¥28,500', 
    category: '野良着',
    image: '/images/autumn-2.jpg',
    season: 'autumn',
    collection: 'Heritage Line'
  },
];

// Helper functions
export const getProductById = (id) => {
  return allProducts.find(product => product.id === id);
};

export const getProductsBySeason = (season) => {
  return allProducts.filter(product => product.season === season);
};

export const getProductsByCollection = (collectionName) => {
  return allProducts.filter(product => product.collection === collectionName);
};