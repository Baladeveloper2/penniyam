"use client";

import { Course } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course, priority = false }: { course: any, priority?: boolean }) {
  const courseModes = course.modes.split(',').map((m: any) => m.trim());
  
  return (
    <div className="card fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 0, overflow: 'hidden' }}>
      <Link href={`/courses/${course.id}`} style={{ display: 'block', position: 'relative', height: '240px', width: '100%' }}>
        <Image 
          src={course.image} 
          alt={course.title} 
          fill 
          style={{ objectFit: 'cover' }}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          padding: '2rem 1rem 1rem',
          background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
          display: 'flex', 
          gap: '0.5rem', 
          flexWrap: 'wrap' 
        }}>
          {courseModes.map((mode: any) => (
            <span key={mode} style={{
              fontSize: '0.65rem',
              fontWeight: 800,
              padding: '0.3rem 0.7rem',
              borderRadius: '100px',
              backgroundColor: mode === 'Offline' ? '#e74c3c' : (mode === 'Online' ? '#3498db' : '#f1c40f'),
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {mode}
            </span>
          ))}
        </div>
      </Link>
      
      <div style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', marginBottom: '0.75rem', fontWeight: 800 }}>{course.title}</h3>
        </Link>
        <p style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>{course.description}</p>
        
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', marginTop: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>Duration</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>{course.duration}</span>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', display: 'block', marginBottom: '0.25rem', fontWeight: 500 }}>Outcome</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)' }}>{course.outcome}</span>
          </div>
          
          <Link href={`/courses/${course.id}`} className="btn btn-primary" style={{ width: '100%', fontSize: '1rem', textAlign: 'center' }}>
            View Details & Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
