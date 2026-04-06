"use client";

import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 0, overflow: 'hidden' }}>
      <Link href={`/products/${product.id}`} style={{ display: 'block', position: 'relative', height: '220px', width: '100%' }}>
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 800,
            padding: '0.3rem 0.8rem',
            borderRadius: '100px',
            backgroundColor: 'rgba(255,255,255,0.95)',
            color: '#27ae60',
            textTransform: 'uppercase',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            letterSpacing: '0.05em'
          }}>
            {product.category}
          </span>
        </div>
      </Link>
      
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'center' }}>
        <Link href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 800 }}>{product.name}</h3>
        </Link>
        <p style={{ color: '#27ae60', fontWeight: 900, fontSize: '1.2rem', marginBottom: '1rem' }}>₹{product.price}</p>
        
        <div style={{ marginTop: 'auto' }}>
          <Link href={`/products/${product.id}`} className="btn" style={{ 
            width: '100%', 
            backgroundColor: '#2ecc71', 
            color: 'white',
            textAlign: 'center',
            display: 'block',
            padding: '0.6rem 1rem',
            fontSize: '0.9rem',
            boxShadow: '0 8px 20px -6px rgba(46, 204, 113, 0.5)'
          }}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
