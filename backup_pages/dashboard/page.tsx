import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import prisma from "@/lib/prisma";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default async function StudentDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  if ((session.user as any)?.role === "ADMIN") {
    redirect("/admin");
  }

  const userId = (session.user as any)?.id;

  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
    include: {
      course: true
    },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="section" style={{ minHeight: "80vh", backgroundColor: "var(--background)" }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", fontWeight: 900 }}>Welcome, {session.user?.name}</h1>
        <p style={{ color: "var(--muted-foreground)", marginBottom: "3rem", fontSize: "1.2rem" }}>
          Your personalized learning portal. Access your professional course materials here.
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.8rem" }}>My Enrolled Courses</h2>
          <Link href="/courses" className="btn" style={{ border: "1px solid var(--border)", backgroundColor: "white" }}>
            Browse Catalog
          </Link>
        </div>

        {enrollments.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {enrollments.map((enrollment: any) => (
              <div key={enrollment.id} className="card fade-in" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", height: "200px", width: "100%" }}>
                  <Image src={enrollment.course.image} alt={enrollment.course.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.2)" }} />
                  <div style={{ position: "absolute", top: "1rem", right: "1rem", backgroundColor: "white", padding: "0.4rem 1rem", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)" }}>
                     Active Student
                  </div>
                </div>
                <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", fontWeight: 800 }}>{enrollment.course.title}</h3>
                  <p style={{ color: "var(--muted-foreground)", fontSize: "0.95rem", marginBottom: "2rem" }}>Enrolled on {new Date(enrollment.createdAt.toString()).toLocaleDateString()}</p>
                  
                  <div style={{ marginTop: "auto" }}>
                     <button className="btn btn-primary" style={{ width: "100%", padding: "0.8rem" }}>Access Learning Materials</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card fade-in" style={{ padding: "4rem 2rem", textAlign: "center", border: "1px dashed var(--border)", backgroundColor: "white" }}>
            <div style={{ 
              width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "var(--muted)", 
              display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "1.5rem" 
            }}>
              📚
            </div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>No active enrollments yet.</h3>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
              Explore our academy catalog to find the perfect professional course to scale your business today.
            </p>
            <Link href="/courses" className="btn btn-primary" style={{ padding: "0.8rem 2rem", display: "inline-block" }}>
              Explore Full Courses Catalog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
