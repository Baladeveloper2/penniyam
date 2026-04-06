"use client";

import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

export default function NaturalsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Skin Care' | 'Hair Care' | 'Body Care' | 'Wellness'>('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const categories: ('All' | 'Skin Care' | 'Hair Care' | 'Body Care' | 'Wellness')[] = ['All', 'Skin Care', 'Hair Care', 'Body Care', 'Wellness'];

  return (
    <div className="section" style={{ padding: '0' }}>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        height: '450px', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <Image 
          src="/naturals.png" 
          alt="Penniyam Naturals" 
          fill 
          style={{ objectFit: 'cover' }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Penniyam <span style={{ color: '#2ecc71' }}>Naturals</span></h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '650px' }}>
            Pure, Potent, and Handcrafted. Penniyam Naturals brings you the finest herbal cosmetics made with love by our trained entrepreneurs.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBlock: '4rem' }}>
        {/* Category Filters */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 'clamp(0.5rem, 2vw, 1rem)', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn ${activeCategory === cat ? 'btn-primary' : ''}`}
              style={{
                backgroundColor: activeCategory === cat ? '#2ecc71' : 'white',
                color: activeCategory === cat ? 'white' : 'var(--foreground)',
                border: activeCategory === cat ? 'none' : '1px solid var(--border)',
                padding: '0.6rem 1.5rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                borderRadius: '100px'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '6rem' }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Info Section */}
        <div className="card fade-in" style={{ 
          background: 'linear-gradient(rgba(39, 174, 96, 0.1), rgba(39, 174, 96, 0.05))', 
          border: '1px solid rgba(39, 174, 96, 0.2)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          padding: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>E-Commerce Coming Soon</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted-foreground)', marginBottom: '2.5rem' }}>
              We are currently in the process of scaling our digital shop. Soon you will be able to purchase your favorite Penniyam Naturals products directly from this website.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn" style={{ backgroundColor: 'var(--foreground)', color: 'white' }}>Notify Me</button>
              <button className="btn" style={{ backgroundColor: 'white', border: '1px solid var(--border)' }}>Wholesale Inquiry</button>
            </div>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
             <Image src="/naturals.png" alt="E-commerce Preview" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
