export type CourseMode = 'Online' | 'Offline' | 'Recorded';

export interface Course {
  id: string;
  name: string;
  description: string;
  modes: CourseMode[];
  duration: string;
  outcome: string;
  image: string;
  price?: string;
  instructor?: string;
  features?: string[];
  syllabus?: string[];
}

export const courses: Course[] = [
  {
    id: 'baking',
    name: 'Baking & Bakery',
    description: 'Master the art of professional baking, from breads to exquisite pastries.',
    modes: ['Offline', 'Recorded'],
    duration: '4 Weeks',
    outcome: 'Start your own home bakery or cake shop.',
    image: '/baking.png',
    price: '₹5,000',
    instructor: 'Chef Meena S.',
    features: ['Hands-on kitchen sessions', 'Complete recipe handbook', 'Business setup guidance'],
    syllabus: [
      'Introduction to Flour & Yeast',
      'Basic Breads & Buns',
      'Cakes & Sponges',
      'Advanced Pastry Techniques',
      'Decoration & Frosting',
      'Costing & Menu Planning'
    ]
  },
  {
    id: 'beautician',
    name: 'Beautician & Makeup',
    description: 'Comprehensive training in skincare, haircare, and professional bridal makeup.',
    modes: ['Offline', 'Recorded'],
    duration: '6 Weeks',
    outcome: 'Open your own beauty salon or work as a freelance artist.',
    image: '/beautician.png',
    price: '₹8,000',
    instructor: 'Priya Rajan',
    features: ['Professional product kit', 'Live model practice', 'Salon management basics'],
    syllabus: [
      'Skin Analysis & Facials',
      'Threading & Waxing Techniques',
      'Professional Hair Cutting',
      'Bridal Makeup Essentials',
      'Traditional Saree Draping',
      'Customer Relationship Management'
    ]
  },
  {
    id: 'tailoring',
    name: 'Tailoring & Boutique',
    description: 'Learn modern garment construction and boutique management.',
    modes: ['Offline'],
    duration: '8 Weeks',
    outcome: 'Launch your own fashion label or boutique.',
    image: '/tailoring.png',
    price: '₹10,000',
    instructor: 'Mrs. Lakshmi',
    features: ['Industrial machine training', 'Pattern making workshops', 'Boutique business model'],
    syllabus: [
      'Basic Stitching & Measurement',
      'Blouse & Churidhar Drafting',
      'Advanced Embroidery',
      'Western Outfit Construction',
      'Fabric Sourcing & Quality',
      'Inventory & Staff Management'
    ]
  },
  {
    id: 'ice-cream',
    name: 'Millet Ice Cream',
    description: 'Unique health-focused ice cream manufacturing using traditional millets.',
    modes: ['Offline'],
    duration: '2 Weeks',
    outcome: 'Start a healthy frozen dessert business.',
    image: '/ice-cream.png',
    price: '₹3,500',
    instructor: 'Scientific Expert',
    features: ['Healthy formulation', 'Machine operation', 'Packaging & Storage'],
    syllabus: ['Millet Selection', 'Extraction Process', 'Flavor Development', 'Food Safety']
  },
  {
    id: 'cleaning-products',
    name: 'Home Cleaning Manufacturing',
    description: 'Standardized manufacturing of soaps, detergents, and sanitizers.',
    modes: ['Offline'],
    duration: '1 Week',
    outcome: 'Establish a small-scale manufacturing unit.',
    image: '/cleaning.png',
    price: '₹2,500',
    instructor: 'Chemical Consultant',
    features: ['Formula recipes', 'Government license guidance', 'Marketing strategy'],
    syllabus: ['Raw Material Sourcing', 'Formulation Math', 'Quality Control', 'Branding']
  },
  {
    id: 'soap-making',
    name: 'Handmade Soap Making',
    description: 'Natural, herbal soap production using cold-process methods.',
    modes: ['Offline', 'Recorded'],
    duration: '1 Week',
    outcome: 'Create your own herbal soap brand.',
    image: '/soap.png',
    price: '₹2,500',
    instructor: 'Herbal Specialist',
    features: ['Chemical-free process', 'Essential oil blending', 'Gift packaging'],
    syllabus: ['Cold Process Basics', 'Soap Chemistry', 'Natural Additives', 'Design & Swirls']
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'Social media, SEO, and content strategy for business growth.',
    modes: ['Online', 'Recorded'],
    duration: '4 Weeks',
    outcome: 'Scale your business online or work as a digital consultant.',
    image: '/marketing.png',
    price: '₹6,000',
    instructor: 'Digital Strategist',
    features: ['Live campaign access', 'Practical tool training', 'Freelancing guide'],
    syllabus: ['Facebook & Instagram Ads', 'SEO Fundamentals', 'Content Creation', 'Email Marketing']
  },
  {
    id: 'fashion-tech',
    name: 'Fashion Technology',
    description: 'Advanced design techniques and industrial fashion production.',
    modes: ['Offline'],
    duration: '6 Months',
    outcome: 'Professional career in the fashion industry.',
    image: '/tailoring.png',
    price: '₹25,000',
    instructor: 'Industry Expert',
    features: ['Certification', 'Internship opportunities', 'Portfolio building'],
    syllabus: ['Industrial Design', 'CAD in Fashion', 'Production Planning', 'Trend Analysis']
  },
  {
    id: 'online-selling',
    name: 'Online Selling',
    description: 'Learn to sell on Amazon, Flipkart, and your own website.',
    modes: ['Online'],
    duration: '2 Weeks',
    outcome: 'Master the logistics and strategy of E-commerce.',
    image: '/marketing.png',
    price: '₹3,000',
    instructor: 'E-com Mentor',
    features: ['Store setup live', 'Seller central navigation', 'Ad strategy'],
    syllabus: ['Platform Selection', 'Product Listing', 'Order Fulfillment', 'Returns Management']
  },
  {
    id: 'business-basics',
    name: 'Business Basics',
    description: 'Foundational training in finance, legal, and operational management.',
    modes: ['Online'],
    duration: '2 Weeks',
    outcome: 'Build a solid structural foundation for your startup.',
    image: '/marketing.png',
    price: '₹2,000',
    instructor: 'Business Advisor',
    features: ['Legal compliance', 'Accounting basics', 'Operational workflow'],
    syllabus: ['Business Registration', 'GST & Taxes', 'Financial Literacy', 'Pitch Deck Design']
  }
];
