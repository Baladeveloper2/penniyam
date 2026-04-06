import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import CourseEnquiryForm from "@/components/CourseEnquiryForm";
import { notFound } from "next/navigation";
import { STATIC_COURSES } from "@/lib/courses";
import { Metadata } from "next";
import SyllabusAccordion from "@/components/SyllabusAccordion";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  let course;

  if (id.startsWith('static-')) {
    course = STATIC_COURSES.find(c => c.id === id);
  } else {
    course = await prisma.course.findUnique({
      where: { id }
    });
  }

  if (!course) {
    return {
      title: "Course Not Found | Penniyam Academy",
      description: "The course you are looking for does not exist."
    };
  }

  return {
    title: `${course.title} | Penniyam Academy`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.image]
    }
  };
}

export const dynamic = 'force-dynamic';

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let course;

  try {
    if (id.startsWith('static-')) {
      course = STATIC_COURSES.find(c => c.id === id);
    } else {
      course = await prisma.course.findUnique({
        where: { id }
      });
    }
  } catch (error) {
    console.error("Database connection error:", error);
    // Try to find in static courses as a last resort fallback
    course = STATIC_COURSES.find(c => c.id === id || c.id === `static-${id}`);
  }

  if (!course) {
    notFound();
  }

  const courseModes = course.modes.split(',').map(m => m.trim());
  const syllabus = (course as any).syllabus || [
    "Introduction & Tool Mastery",
    "Fundamental Techniques",
    "Advanced Processes",
    "Business & Marketing Strategy",
    "Live Project Implementation"
  ];

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '450px', width: '100%', overflow: 'hidden' }}>
        <Image 
          src={course.image} 
          alt={course.title} 
          fill 
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0,0,0,0.65)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '2rem'
        }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
            <span style={{ 
              color: 'var(--primary)', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              fontSize: '0.95rem',
              letterSpacing: '0.25em'
            }}>{course.category} Certification</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginTop: '1.5rem', fontWeight: 900, lineHeight: 1.1 }}>{course.title}</h1>
          </div>
        </div>
      </section>

      <style>{`
        .course-layout-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 5rem;
          align-items: start;
        }
        @media (max-width: 960px) {
          .course-layout-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
      <div className="container" style={{ padding: 'clamp(2rem, 5vw, 5rem) 1rem', maxWidth: '1400px' }}>
        <div className="course-layout-grid">
          
          {/* Main Content */}
          <div>
            <div className="card fade-in" style={{ marginBottom: '4rem', padding: '3rem', borderLeft: '6px solid var(--primary)', backgroundColor: 'white' }}>
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Course Overview</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--muted-foreground)', lineHeight: 1.8 }}>
                {course.description} Our curriculum focuses aggressively on practical, hands-on learning that translates directly to real-world business success in the {course.category} market.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
              <div className="card" style={{ padding: '2.5rem', textAlign: 'center', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏱️</div>
                <h4 style={{ color: 'var(--muted-foreground)' }}>Duration</h4>
                <p style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '0.5rem' }}>{course.duration}</p>
              </div>
              <div className="card" style={{ padding: '2.5rem', textAlign: 'center', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                <h4 style={{ color: 'var(--muted-foreground)' }}>Outcome</h4>
                <p style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '0.5rem' }}>{course.outcome}</p>
              </div>
            </div>

            <div className="card fade-in" style={{ marginBottom: '4rem', padding: '3rem' }}>
              <h2 style={{ marginBottom: '2.5rem', fontSize: '2rem', borderBottom: '2px solid var(--border)', paddingBottom: '1rem' }}>Course Syllabus Outline</h2>
              <SyllabusAccordion syllabus={syllabus} />
            </div>
          </div>

          <CourseEnquiryForm courseId={course.id} coursePrice={course.price} courseModes={courseModes} />

          {/* WhatsApp CTA */}
          <div style={{ marginTop: '2rem' }}>
            <a 
              href={`https://wa.me/919445100095?text=Hi, I'm interested in the ${course.title} course. Can you provide more details?`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ 
                width: '100%', 
                backgroundColor: '#25D366', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '0.75rem',
                fontSize: '1.1rem',
                fontWeight: 700,
                padding: '1.25rem',
                boxShadow: '0 10px 20px rgba(37, 211, 102, 0.2)'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.521.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
