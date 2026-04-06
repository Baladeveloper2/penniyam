"use client";

import { useState } from "react";
import { Course } from "@prisma/client";
import CourseCard from "@/components/CourseCard";

export default function CourseFilterGrid({ initialCourses }: { initialCourses: Course[] }) {
  const [filter, setFilter] = useState("All");

  const filteredCourses = filter === "All" 
    ? initialCourses 
    : initialCourses.filter(c => c.modes.includes(filter));

  const filterButtons = ['All', 'Offline', 'Online', 'Recorded'];

  return (
    <>
      {/* Filter Bar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem', 
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        {filterButtons.map(btn => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className="btn"
            style={{
              backgroundColor: filter === btn ? 'var(--primary)' : 'var(--muted)',
              color: filter === btn ? 'white' : 'var(--foreground)',
              fontSize: '0.9rem',
              padding: '0.5rem 1.5rem',
              border: filter === btn ? 'none' : '1px solid var(--border)'
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '3rem' 
        }}>
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} priority={index < 3} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--muted-foreground)' }}>
          No courses found for the selected mode.
        </div>
      )}
    </>
  );
}
