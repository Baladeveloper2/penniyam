export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Skin Care' | 'Hair Care' | 'Body Care' | 'Wellness';
  benefits: string[];
  ingredients: string[];
  usage: string;
}

export const products: Product[] = [
  {
    id: 'herbal-soap',
    name: 'Handmade Herbal Soap',
    description: 'Cold-pressed natural soap infused with neem, tulsi, and aloe vera for deep cleansing and skin health.',
    price: '149',
    image: '/soap.png',
    category: 'Body Care',
    benefits: ['Antibacterial properties', 'Glow-boosting', 'Chemical-free'],
    ingredients: ['Neem Oil', 'Tulsi Extract', 'Aloe Vera Gel', 'Coconut Oil'],
    usage: 'Lather onto wet skin, then rinse thoroughly. Suitable for daily use.'
  },
  {
    id: 'skincare-serum',
    name: 'Natural Skincare Serum',
    description: 'A light, non-greasy serum that penetrates deep into the skin to provide intense hydration and anti-aging benefits.',
    price: '499',
    image: '/naturals.png',
    category: 'Skin Care',
    benefits: ['Deep hydration', 'Reduces fine lines', 'Brightens complexion'],
    ingredients: ['Hyaluronic Acid', 'Vitamin C', 'Rosa Canina Fruit Oil', 'Saffron'],
    usage: 'Apply 2-3 drops to clean face and neck. Gently massage in upward strokes.'
  },
  {
    id: 'hair-oil',
    name: 'Organic Hair Oil',
    description: 'Traditional herbal blend of 21 herbs to promote hair growth, prevent dandruff, and add natural shine.',
    price: '299',
    image: '/soap.png',
    category: 'Hair Care',
    benefits: ['Reduces hair fall', 'Promotes growth', 'Deep conditioning'],
    ingredients: ['Bhringraj', 'Amla', 'Brahmi', 'Cold-pressed Coconut Oil'],
    usage: 'Massage into scalp and leave for at least 30 minutes before washing.'
  },
  {
    id: 'body-butter',
    name: 'Whipped Shea Butter',
    description: 'Ultra-moisturizing body cream made with raw shea butter and essential oils.',
    price: '399',
    image: '/naturals.png',
    category: 'Body Care',
    benefits: ['24-hour moisture', 'Heals dry patches', 'Smooth texture'],
    ingredients: ['Raw Shea Butter', 'Sweet Almond Oil', 'Vanilla Extract'],
    usage: 'Apply liberally over the body, focusing on dry areas like elbows and knees.'
  }
];
