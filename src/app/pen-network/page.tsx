"use client";

import Image from "next/image";

export default function PenNetworkPage() {
  return (
    <div className="section" style={{ padding: '0' }}>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        height: '400px', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <Image 
          src="/pen.png" 
          alt="PEN Network Community" 
          fill 
          style={{ objectFit: 'cover' }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>PEN <span style={{ color: 'var(--primary)' }}>Network</span></h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px' }}>
            Where Women Entrepreneurs Learn, Build, and Connect.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div className="fade-in">
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why Join PEN?</h2>
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)' }}>🤝 Mentorship & Support</h3>
                <p style={{ color: 'var(--muted-foreground)' }}>Get guidance from established entrepreneurs who have successfully built their own brands through Penniyam.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)' }}>🌍 Market Access</h3>
                <p style={{ color: 'var(--muted-foreground)' }}>Gain priority access to showcase your products on our marketplace and at exclusive Penniyam events.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)' }}>💡 Continuous Learning</h3>
                <p style={{ color: 'var(--muted-foreground)' }}>Exclusive workshops, business webinars, and networking meetups to keep you updated with market trends.</p>
              </div>
            </div>
          </div>
          
          <div className="card fade-in" style={{ backgroundColor: 'var(--muted)', padding: '3rem' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>Member Registration</h3>
            <form style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Full Name</label>
                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Existing Business?</label>
                <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', backgroundColor: 'white' }}>
                  <option>No, I am a new learner</option>
                  <option>Yes, I have an existing business</option>
                </select>
              </div>
              <button className="btn btn-primary" type="button" style={{ backgroundColor: 'var(--secondary)', boxShadow: 'none', width: '100%' }}>
                Apply to Join PEN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
