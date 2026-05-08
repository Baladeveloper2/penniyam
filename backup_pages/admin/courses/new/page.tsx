"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewCoursePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    modes: "Offline, Recorded",
    duration: "4 Weeks",
    outcome: "Certification & Business Support",
    category: "General",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to create course");
      }

      router.push("/admin/courses");
      router.refresh();
    } catch (err) {
      setError("An error occurred while creating the course.");
      setLoading(false);
    }
  };

  return (
    <div className="section" style={{ minHeight: "80vh", backgroundColor: "var(--background)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/admin/courses" style={{ color: "var(--muted-foreground)", textDecoration: "none", fontSize: "0.95rem" }}>
            ← Back to Course Database
          </Link>
        </div>

        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Add New Course</h1>

        <div className="card fade-in" style={{ padding: "3rem" }}>
          
          {error && (
            <div style={{ padding: "1rem", backgroundColor: "rgba(231, 76, 60, 0.1)", color: "#e74c3c", borderRadius: "0.5rem", marginBottom: "2rem", fontWeight: 500 }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Course Title</label>
              <input 
                type="text" required
                value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}
                style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none" }}
                placeholder="e.g. Master Baking Certification"
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Description</label>
              <textarea 
                required rows={4}
                value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none", fontFamily: "inherit" }}
                placeholder="Detailed curriculum breakdown..."
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Price (String)</label>
                <input 
                  type="text" required
                  value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})}
                  style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none" }}
                  placeholder="e.g. ₹5,000"
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Modes</label>
                <input 
                  type="text" required
                  value={formData.modes} onChange={(e) => setFormData({...formData, modes: e.target.value})}
                  style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none" }}
                  placeholder="e.g. Offline, Recorded"
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Duration</label>
                <input 
                  type="text" required
                  value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Category</label>
                <input 
                  type="text" required
                  value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
                  style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none" }}
                />
              </div>
            </div>

            <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
              <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                {loading ? "Saving to Database..." : "Create Course"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
