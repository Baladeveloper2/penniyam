"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetailClient() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find((p) => p.id === id);

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  if (!product) {
    return (
      <div className="container" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
        <Link href="/naturals" className="btn" style={{ marginTop: '2rem', backgroundColor: '#2ecc71', color: 'white' }}>Back to Shop</Link>
      </div>
    );
  }

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="product-detail-page">
      <style>{`
        @media (min-width: 900px) {
          .product-image-sticky {
            position: sticky;
            top: 120px;
          }
        }
      `}</style>
      <div className="container" style={{ padding: 'clamp(2rem, 5vw, 5rem) 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'start' }}>
          
          {/* Product Images */}
          <div className="product-image-sticky">
            <div className="card" style={{ padding: '0', overflow: 'hidden', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <div style={{ position: 'relative', height: 'clamp(300px, 50vh, 500px)' }}>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(0.5rem, 2vw, 1rem)', marginTop: '1rem' }}>
               {[1, 2, 3, 4].map(idx => (
                 <div key={idx} style={{ position: 'relative', height: 'clamp(60px, 15vw, 100px)', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)', cursor: 'pointer' }}>
                   <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover', opacity: 0.7 }} />
                 </div>
               ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <span style={{ color: '#2ecc71', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>{product.category}</span>
            <h1 style={{ fontSize: '3rem', margin: '0.5rem 0 1.5rem' }}>{product.name}</h1>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#2ecc71', marginBottom: '2rem' }}>₹{product.price}</h3>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '3rem' }}>
              {product.description}
            </p>

            <div style={{ marginBottom: '3rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>Key Benefits</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {product.benefits.map((benefit, i) => (
                  <span key={i} style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(46, 204, 113, 0.1)', color: '#27ae60', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>
                    ✨ {benefit}
                  </span>
                ))}
              </div>
            </div>

            <div className="card" style={{ marginBottom: '3rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1.5rem' }}>Full Ingredient List</h4>
              <p style={{ color: 'var(--muted-foreground)', fontStyle: 'italic', fontSize: '0.95rem' }}>
                {product.ingredients.join(', ')}
              </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>How to Use</h4>
              <p style={{ lineHeight: 1.6 }}>{product.usage}</p>
            </div>

            {formStatus === 'success' ? (
              <div className="card" style={{ textAlign: 'center', backgroundColor: 'rgba(46, 204, 113, 0.1)', border: '1px solid #2ecc71' }}>
                <h3>Enquiry Received!</h3>
                <p>We've received your product enquiry and will get back to you with pricing and availability for your region.</p>
              </div>
            ) : (
              <div className="card" style={{ borderTop: '5px solid #2ecc71' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Enquire for Purchase</h3>
                <form onSubmit={handleEnquiry} style={{ display: 'grid', gap: '1rem' }}>
                   <input type="text" placeholder="Your Name" required className="input" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }} />
                   <input type="tel" placeholder="Mobile Number" required className="input" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }} />
                   <textarea placeholder="Tell us your quantity requirements or questions..." className="input" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', minHeight: '100px' }} />
                   <button type="submit" disabled={formStatus === 'submitting'} className="btn" style={{ backgroundColor: '#2ecc71', color: 'white' }}>
                     {formStatus === 'submitting' ? 'Sending...' : 'Check Availability'}
                   </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
