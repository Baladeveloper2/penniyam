import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session || (session.user as any)?.role !== "ADMIN") {
    redirect("/login");
  }

  const courseCount = await prisma.course.count();
  const userCount = await prisma.user.count();

  return (
    <div className="section" style={{ minHeight: "80vh", backgroundColor: "var(--background)" }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Admin Dashboard</h1>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          <div className="card fade-in" style={{ padding: "2.5rem", borderLeft: "4px solid var(--primary)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ color: "var(--muted-foreground)", fontSize: "1.1rem" }}>Total Courses</h3>
            <p style={{ fontSize: "3.5rem", fontWeight: 900, marginTop: "1rem" }}>{courseCount}</p>
          </div>
          <div className="card fade-in" style={{ padding: "2.5rem", borderLeft: "4px solid var(--accent)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ color: "var(--muted-foreground)", fontSize: "1.1rem" }}>Registered Students</h3>
            <p style={{ fontSize: "3.5rem", fontWeight: 900, marginTop: "1rem" }}>{userCount}</p>
          </div>
        </div>

        <div style={{ marginTop: "5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2>Course Management</h2>
            <Link href="/admin/courses/new" className="btn btn-primary" style={{ padding: "0.8rem 1.5rem" }}>
              + Add New Course
            </Link>
          </div>
          
          <div className="card fade-in" style={{ padding: "3rem", textAlign: "center", border: "1px dashed var(--border)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Course Directory Loading...</h3>
            <p style={{ color: "var(--muted-foreground)", maxWidth: "500px", margin: "0 auto" }}>
              In the next iteration, this space will display a full data table of all courses with options to edit and delete entries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
