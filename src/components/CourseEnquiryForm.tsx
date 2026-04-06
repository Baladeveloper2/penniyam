"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CourseEnquiryForm({ courseId, coursePrice, courseModes }: { courseId: string, coursePrice: string, courseModes: string[] }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "already_enrolled">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      router.push("/login");
      return;
    }

    setFormStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message === "You are already enrolled in this course.") {
          setFormStatus("already_enrolled");
        } else {
          setErrorMsg(data.message || "Failed to enroll");
          setFormStatus("idle");
        }
        return;
      }

      setFormStatus("success");
    } catch (err) {
      setErrorMsg("An unexpected error occurred.");
      setFormStatus("idle");
    }
  };

  return (
    <div style={{ position: 'sticky', top: '120px' }}>
      <div className="card fade-in" style={{ borderTop: '6px solid var(--primary)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>Course Fee</p>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{coursePrice}</h3>
        </div>

        {errorMsg && (
          <div style={{ padding: '1rem', backgroundColor: 'rgba(231, 76, 60, 0.1)', color: '#e74c3c', borderRadius: '0.5rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 500, fontSize: '0.9rem' }}>
            {errorMsg}
          </div>
        )}

        {formStatus === 'success' ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <h3 style={{ marginBottom: "0.5rem" }}>Enrolled Successfully!</h3>
            <p style={{ color: 'var(--muted-foreground)' }}>You have successfully gained access to this course.</p>
            <Link href="/dashboard" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Go to Dashboard</Link>
          </div>
        ) : formStatus === 'already_enrolled' ? (
           <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
            <h3 style={{ marginBottom: "0.5rem" }}>Already Enrolled</h3>
            <p style={{ color: 'var(--muted-foreground)' }}>You already have access to this course.</p>
            <Link href="/dashboard" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Go to Dashboard</Link>
          </div>
        ) : (
          <form onSubmit={handleEnrollment} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ padding: "1rem", backgroundColor: "var(--background)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
               <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>
                 {session 
                   ? `You are logged in as ${session.user?.name}. Click below to confirm enrollment securely via your student account.` 
                   : 'You must be logged in to securely enroll and access course materials. You will be redirected to the login page.'}
               </p>
            </div>
            
            <button type="submit" disabled={formStatus === 'submitting'} className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', padding: '1rem', fontWeight: 700 }}>
              {formStatus === 'submitting' ? 'Processing...' : (session ? 'Confirm SECURE Enrollment' : 'Log in to Enroll')}
            </button>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', textAlign: 'center', marginTop: '1rem' }}>
              Instant access upon enrollment via Role-Based Access Controls.
            </p>
          </form>
        )}
      </div>

      <div className="card fade-in" style={{ marginTop: '2rem', textAlign: 'center', backgroundColor: 'var(--muted)' }}>
        <h4>Need Technical Help?</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>Our IT support team is on standby.</p>
        <Link href="tel:+919000403803" style={{ fontWeight: 800, color: 'var(--primary)', textDecoration: 'none', fontSize: '1.2rem' }}>+91 90004 03803</Link>
      </div>
    </div>
  );
}
