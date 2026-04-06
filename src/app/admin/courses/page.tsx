import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function AdminCoursesPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "ADMIN") {
    redirect("/login");
  }

  const courses = await prisma.course.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div className="section" style={{ minHeight: "80vh", backgroundColor: "var(--background)" }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/admin" style={{ color: "var(--muted-foreground)", textDecoration: "none", fontSize: "0.95rem" }}>
            ← Back to Dashboard
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800 }}>Course Database</h1>
          <Link href="/admin/courses/new" className="btn btn-primary" style={{ padding: "0.8rem 1.5rem" }}>
            + Add New Course
          </Link>
        </div>

        <div className="card fade-in" style={{ padding: "0", overflowX: "auto", border: "1px solid var(--border)" }}>
          <table style={{ width: "100%", minWidth: "800px", borderCollapse: "collapse", textAlign: "left" }}>
            <thead style={{ backgroundColor: "rgba(0,0,0,0.02)" }}>
              <tr>
                <th style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)", fontWeight: 600, color: "var(--muted-foreground)" }}>Course Title</th>
                <th style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)", fontWeight: 600, color: "var(--muted-foreground)" }}>Pricing</th>
                <th style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)", fontWeight: 600, color: "var(--muted-foreground)" }}>Available Modes</th>
                <th style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)", fontWeight: 600, color: "var(--muted-foreground)", textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ padding: "4rem 2rem", textAlign: "center", color: "var(--muted-foreground)", fontSize: "1.1rem" }}>
                    No courses exist in the database yet. Click "Add New Course" to get started.
                  </td>
                </tr>
              ) : (
                courses.map((course: any) => (
                  <tr key={course.id} style={{ borderBottom: "1px solid var(--border)", transition: "background-color 0.2s" }} className="table-row-hover">
                    <td style={{ padding: "1.5rem", fontWeight: 700, fontSize: "1.1rem" }}>{course.title}</td>
                    <td style={{ padding: "1.5rem", color: "var(--primary)", fontWeight: 800 }}>{course.price}</td>
                    <td style={{ padding: "1.5rem", color: "var(--muted-foreground)", fontSize: "0.9rem" }}>
                      <span style={{ backgroundColor: "var(--muted)", padding: "0.4rem 0.8rem", borderRadius: "100px", fontWeight: 600 }}>{course.modes}</span>
                    </td>
                    <td style={{ padding: "1.5rem", textAlign: "right" }}>
                      <Link href={`/admin/courses/${course.id}`} className="btn" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem", backgroundColor: "white", border: "1px solid var(--border)", color: "var(--foreground)", marginRight: "0.5rem" }}>
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
