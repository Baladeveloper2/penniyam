"use client";

import Link from "next/link";

const ecosystemItems = [
  {
    title: "Penniyam Academy",
    description: "Hands-on professional training in Baking, Tailoring, Digital Marketing and more.",
    link: "/courses",
    image: "/baking.png",
    color: "var(--primary)"
  },
  {
    title: "PEN Network",
    description: "Connecting established and aspiring entrepreneurs for growth and support.",
    link: "/pen-network",
    image: "/pen.png",
    color: "var(--secondary)"
  },
  {
    title: "Marketplace",
    description: "Empowering our students to sell their products to a global audience.",
    link: "/marketplace",
    image: "/marketplace.png",
    color: "var(--accent)"
  },
  {
    title: "Penniyam Naturals",
    description: "Our premium cosmetics brand showcasing student-made natural products.",
    link: "/naturals",
    image: "/naturals.png",
    color: "#2ecc71"
  }
];

import Image from "next/image";

export default function Ecosystem() {
  return (
    <section className="section" style={{ backgroundColor: 'white', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1rem' }}>Our Pillars</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>The Penniyam <span style={{ color: 'var(--primary)' }}>Ecosystem</span></h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
            A comprehensive support system designed to take women from foundational learning to global business leadership.
          </p>
        </div>
        
        <div className="grid-responsive">
          {ecosystemItems.map((item) => (
            <Link key={item.title} href={item.link} className="card fade-in" style={{ 
              textDecoration: 'none', 
              padding: 0, 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column',
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)'
            }}>
              <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}></div>
              </div>
              <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ color: 'var(--foreground)', fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 800 }}>{item.title}</h3>
                <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem', flex: 1, lineHeight: 1.6, fontSize: '1.05rem' }}>{item.description}</p>
                <div style={{ 
                  marginTop: 'auto',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between'
                }}>
                  <span style={{ color: item.color, fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Explore {item.title.split(' ')[1] || 'Details'}
                  </span>
                  <span style={{ color: item.color, fontSize: '1.5rem' }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
