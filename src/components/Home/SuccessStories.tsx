"use client";

export default function SuccessStories() {
  const stats = [
    { label: "Women Trained", value: "5000+" },
    { label: "Businesses Started", value: "1200+" },
    { label: "Avg. Income Growth", value: "40%" },
    { label: "Global Reach", value: "15+ Countries" }
  ];

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div className="card fade-in" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4rem', borderRadius: '2rem', boxShadow: '0 20px 40px rgba(var(--primary-h), var(--primary-s), var(--primary-l), 0.2)' }}>
            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Our Core Mission</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.95, marginBottom: '3rem', lineHeight: 1.6, fontStyle: 'italic' }}>
              "We believe that when you empower a woman with a skill, you empower a whole community to thrive."
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2.5rem' }}>
              {stats.map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '1rem', opacity: 0.9, fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in" style={{ padding: '2rem 0' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>The Journey</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: 1.2 }}>Learn → Build → <br />Connect → Sell</h2>
            <p style={{ color: 'var(--muted-foreground)', marginBottom: '2.5rem', fontSize: '1.15rem', lineHeight: 1.7 }}>
              Our proven framework has helped thousands of women in Tamil Nadu and beyond to transform their creative passions into profitable businesses.
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1.5rem' }}>
              {[
                "Hands-on practical classroom training",
                "Lifetime access to recorded course materials",
                "Integration into the PEN business network",
                "Priority access to market selling platforms"
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--foreground)', fontWeight: 600, fontSize: '1.1rem' }}>
                  <div style={{ 
                    minWidth: '28px', 
                    height: '28px', 
                    borderRadius: '50%', 
                    background: 'var(--accent)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '0.85rem', 
                    color: 'white',
                    boxShadow: '0 4px 10px rgba(243, 156, 18, 0.3)'
                  }}>✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
