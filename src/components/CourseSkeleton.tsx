"use client";

export default function CourseSkeleton() {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
      gap: '3rem' 
    }}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="card" style={{ height: '500px', display: 'flex', flexDirection: 'column', padding: 0 }}>
          <div style={{ height: '240px', backgroundColor: 'var(--muted)', opacity: 0.3, position: 'relative', overflow: 'hidden' }}>
            <div className="skeleton-shimmer" />
          </div>
          <div style={{ padding: '2.5rem', flex: 1 }}>
            <div style={{ height: '1.5rem', width: '70%', backgroundColor: 'var(--muted)', opacity: 0.3, marginBottom: '1rem', borderRadius: '4px' }} />
            <div style={{ height: '1rem', width: '100%', backgroundColor: 'var(--muted)', opacity: 0.2, marginBottom: '0.5rem', borderRadius: '4px' }} />
            <div style={{ height: '1rem', width: '90%', backgroundColor: 'var(--muted)', opacity: 0.2, marginBottom: '2rem', borderRadius: '4px' }} />
            
            <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <div style={{ height: '2.5rem', width: '100%', backgroundColor: 'var(--muted)', opacity: 0.3, borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        .skeleton-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
