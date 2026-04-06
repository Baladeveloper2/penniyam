"use client";

import { useState } from "react";

interface FormProps {
  type: 'course' | 'pen';
}

export default function ContactForm({ type }: FormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '3rem', border: '2px solid var(--primary)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h3>Success!</h3>
        <p>Thank you for reaching out. Our team will contact you shortly via WhatsApp or Email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ display: 'grid', gap: '1.25rem' }}>
      <h3 style={{ marginBottom: '1rem' }}>{type === 'course' ? 'Enquire About a Course' : 'Apply to Join PEN Network'}</h3>
      
      <div>
        <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Full Name</label>
        <input required type="text" placeholder="Enter your name" style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Phone Number (WhatsApp Preferred)</label>
        <input required type="tel" placeholder="+91" style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
      </div>

      {type === 'course' ? (
        <>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Select Course</label>
            <select required style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', backgroundColor: 'white' }}>
              <option value="">Choose a program...</option>
              <option>Baking & Bakery</option>
              <option>Beautician & Makeup</option>
              <option>Tailoring & Boutique</option>
              <option>Handmade Soap Making</option>
              <option>Digital Marketing</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Location</label>
            <input required type="text" placeholder="Your City/Area" style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
          </div>
        </>
      ) : (
        <>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Do you have an existing business?</label>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="radio" name="business" value="yes" /> Yes
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="radio" name="business" value="no" /> No
              </label>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, fontSize: '0.85rem' }}>Major Interest / Specialization</label>
            <textarea placeholder="Tell us about your business goals..." style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', minHeight: '100px' }}></textarea>
          </div>
        </>
      )}

      <button disabled={status === 'loading'} className="btn btn-primary" style={{ marginTop: '1rem' }}>
        {status === 'loading' ? 'Sending...' : 'Submit Application'}
      </button>
      
      <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', textAlign: 'center' }}>
        By submitting, you agree to receive updates via WhatsApp/Email.
      </p>
    </form>
  );
}
