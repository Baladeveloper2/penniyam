"use client";

import { useState } from "react";

export default function SyllabusAccordion({ syllabus }: { syllabus: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {syllabus.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div 
            key={index} 
            className="card"
            style={{ 
              backgroundColor: isOpen ? '#fff' : 'var(--background)', 
              border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border)',
              borderRadius: '1rem',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.5rem',
                backgroundColor: 'transparent',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <span style={{ 
                width: '36px', 
                height: '36px', 
                backgroundColor: isOpen ? 'var(--primary)' : 'var(--muted)', 
                color: isOpen ? 'white' : 'var(--muted-foreground)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontSize: '1rem',
                fontWeight: 800,
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}>{index + 1}</span>
              
              <span style={{ 
                fontWeight: 700, 
                fontSize: '1.1rem',
                flex: 1,
                color: isOpen ? 'var(--foreground)' : 'var(--muted-foreground)'
              }}>{item}</span>

              <span style={{ 
                fontSize: '1.5rem', 
                transition: 'transform 0.3s ease',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                color: 'var(--primary)'
              }}>
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div style={{ 
                padding: '0 1.5rem 2rem 5rem', 
                fontSize: '1rem', 
                color: 'var(--muted-foreground)',
                lineHeight: 1.6,
                animation: 'slideDown 0.3s ease-out'
              }}>
                <p>
                  Comprehensive deep-dive into {item.toLowerCase()}. This module includes hands-on workshops, 
                  theoretical frameworks, and industry-standard practices to ensure complete mastery of the subject matter.
                </p>
                <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>✓ Professional tools & workspace setup</li>
                  <li>✓ Step-by-step practical demonstration</li>
                  <li>✓ Batch production & quality standards</li>
                </ul>
              </div>
            )}
          </div>
        );
      })}

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
