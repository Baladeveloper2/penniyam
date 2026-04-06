"use client";

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const contactDetails = [
    { label: "Phone", value: "+91 90004 03803", icon: "📞" },
    { label: "Email", value: "info@penniyam.in", icon: "✉️" },
    { label: "Support", value: "support@penniyam.in", icon: "🛠️" },
    { label: "CEO Office", value: "ceo@penniyam.in", icon: "💼" }
  ];

  return (
    <div className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get in <span style={{ color: 'var(--primary)' }}>Touch</span></h1>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Have questions about our courses, network, or products? Our team is here to support your journey.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
              {contactDetails.map(detail => (
                <div key={detail.label} style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                  <div style={{ fontSize: '1.5rem', padding: '0.75rem', background: 'var(--primary-light)', borderRadius: 'var(--radius)' }}>
                    {detail.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', textTransform: 'uppercase' }}>{detail.label}</h4>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ background: 'var(--muted)', padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Office Location</h3>
              <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                Penniyam Private Limited,<br />
                Madurai, Tamil Nadu, India.
              </p>
              <div style={{ height: '200px', backgroundColor: '#ddd', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p>Google Maps Placeholder</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '3rem' }}>
            <ContactForm type="course" />
            <ContactForm type="pen" />
          </div>
        </div>
      </div>
    </div>
  );
}
