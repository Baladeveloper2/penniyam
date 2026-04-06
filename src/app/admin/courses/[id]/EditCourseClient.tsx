"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditCourseClient({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    modes: "",
    duration: "",
    outcome: "",
    category: "",
    image: "/placeholder.png"
  });

  useEffect(() => {
    fetch(`/api/courses/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.message === "Not Found") {
          setError("Course not found");
        } else {
          setFormData(data);
        }
        setFetching(false);
      })
      .catch((err) => {
        setError("Failed to load course details");
        setFetching(false);
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/courses/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update course");

      router.push("/admin/courses");
      router.refresh();
    } catch (err) {
      setError("An error occurred while updating the course.");
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this course? This action cannot be undone.")) return;
    
    setDeleting(true);
    setError("");

    try {
      const res = await fetch(`/api/courses/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete course");

      router.push("/admin/courses");
      router.refresh();
    } catch (err) {
      setError("An error occurred while deleting the course.");
      setDeleting(false);
    }
  };

  if (fetching) {
    return <div style={{ padding: "5rem", textAlign: "center", fontSize: "1.2rem", color: "var(--muted-foreground)" }}>Loading...</div>;
  }

  return (
    <div className="section" style={{ minHeight: "80vh", backgroundColor: "var(--background)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/admin/courses" style={{ color: "var(--muted-foreground)", textDecoration: "none", fontSize: "0.95rem" }}>
            ← Back to Course Database
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem" }}>Edit Course</h1>
          <button 
            type="button" 
            onClick={handleDelete}
            disabled={deleting}
            className="btn" 
            style={{ backgroundColor: "var(--destructive)", color: "var(--destructive-foreground)", padding: "0.6rem 1.2rem", fontWeight: 600, border: "none" }}
          >
            {deleting ? "Deleting..." : "Delete Course"}
          </button>
        </div>

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
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Description</label>
              <textarea 
                required rows={4}
                value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none", fontFamily: "inherit" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Price (String)</label>
                <input 
                  type="text" required
                  value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})}
                  style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Modes</label>
                <input 
                  type="text" required
                  value={formData.modes} onChange={(e) => setFormData({...formData, modes: e.target.value})}
                  style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none" }}
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
                {loading ? "Saving Changes..." : "Update Course"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
