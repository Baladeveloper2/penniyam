"use client";

import { use } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";

export default function CoursePlayerClient({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const course = courses.find(c => c.id === resolvedParams.id);

  if (!course) return <div className="container">Course not found</div>;

  const lessons = [
    { title: "Introduction to the Course", duration: "10:00", active: true },
    { title: "Essential Tools & Equipment", duration: "15:30", active: false },
    { title: "Primary Techniques - Part 1", duration: "25:00", active: false },
    { title: "Primary Techniques - Part 2", duration: "20:00", active: false },
    { title: "Advanced Methods", duration: "30:00", active: false },
    { title: "Business & Marketing Strategy", duration: "45:00", active: false },
  ];

  return (
    <div className="section" style={{ padding: '0', backgroundColor: 'var(--background)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) 1fr', minHeight: '90vh' }}>
        {/* Main Player Area */}
        <div style={{ padding: '4rem' }}>
          <div style={{ 
            width: '100%', 
            aspectRatio: '16/9', 
            backgroundColor: 'black', 
            borderRadius: 'var(--radius)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            marginBottom: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ fontSize: '1.5rem', textAlign: 'center', opacity: 0.8 }}>
               [ Secure Video Player ]<br />
               <span style={{ fontSize: '1rem' }}>Streaming: {course.name} - Lesson 1</span>
            </div>
            {/* Watermark for security */}
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', opacity: 0.3, fontSize: '0.8rem' }}>
              Penniyam Academy | ID: USER-1234
            </div>
          </div>
          
          <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>1. Introduction to the Course</h1>
          <p style={{ color: 'var(--muted-foreground)', maxWidth: '800px' }}>
            In this opening lesson, we will cover the core objectives of the {course.name} course and what you can expect to achieve over the next {course.duration}.
          </p>
        </div>

        {/* Lesson List Sidebar */}
        <div style={{ 
          borderLeft: '1px solid var(--border)', 
          height: '100%', 
          backgroundColor: 'var(--muted)',
          padding: '2rem'
        }}>
          <Link href="/dashboard" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <span>←</span> Back to Dashboard
          </Link>
          
          <h3 style={{ marginBottom: '1.5rem' }}>Course Content</h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            {lessons.map((lesson, index) => (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  padding: '1rem', 
                  cursor: 'pointer', 
                  backgroundColor: lesson.active ? 'var(--primary-light)' : 'var(--background)',
                  borderColor: lesson.active ? 'var(--primary)' : 'var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>Lesson {index + 1}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{lesson.title}</div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{lesson.duration}</div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Project Support</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>Have questions about this lesson?</p>
            <button className="btn" style={{ width: '100%', fontSize: '0.8rem', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
              WhatsApp Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
