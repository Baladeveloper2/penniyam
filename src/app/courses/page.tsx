import prisma from "@/lib/prisma";
import CourseFilterGrid from "@/components/CourseFilterGrid";
import { STATIC_COURSES } from "@/lib/courses";
import { Suspense } from "react";
import CourseSkeleton from "@/components/CourseSkeleton";

export default async function CoursesPage() {
  const dbCourses = await prisma.course.findMany({
    orderBy: { createdAt: 'desc' }
  });

  // Use static courses if database is empty
  const courses = dbCourses.length > 0 ? dbCourses : STATIC_COURSES as any;

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem', fontWeight: 900 }}>Our <span style={{ color: 'var(--primary)' }}>Courses</span></h1>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Choose your learning mode — Classroom or Online, we support your journey at every step with fully comprehensive curriculums to launch your business.
          </p>
        </div>

        <Suspense fallback={<CourseSkeleton />}>
          <CourseFilterGrid initialCourses={courses} />
        </Suspense>

      </div>

      {/* Course Highlights / FAQ section */}
      <section style={{ marginTop: '6rem', backgroundColor: 'var(--primary-light)', padding: '5rem 0', borderTop: '1px solid rgba(var(--primary-h), var(--primary-s), var(--primary-l), 0.2)' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div className="card fade-in" style={{ padding: '3rem', backgroundColor: 'white', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800 }}>Practical Training</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>Offline courses feature live demonstrations and intensive hands-on guidance from industry experts natively inside our Academy kitchen and studios.</p>
            </div>
            <div className="card fade-in" style={{ padding: '3rem', backgroundColor: 'white', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800 }}>Learn from Anywhere</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>Our global online programs offer completely flexible timing along with premium 4K recorded video access to refresh your memory for a lifetime.</p>
            </div>
            <div className="card fade-in" style={{ padding: '3rem', backgroundColor: 'white', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💼</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800 }}>Business Support</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>We don't just teach you a skill. Every credentialized course includes hardcore foundational entrepreneurship knowledge on how to scale your own business via the PEN Network.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
