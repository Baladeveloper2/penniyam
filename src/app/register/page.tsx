"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      // Automatically sign in after successful registration
      const signInRes = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (signInRes?.error) {
        router.push("/login");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--background)" }}>
      <div className="card fade-in" style={{ maxWidth: "450px", width: "100%", padding: "3rem", borderRadius: "1.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem", fontWeight: 800 }}>Create Account</h1>
          <p style={{ color: "var(--muted-foreground)" }}>Join the Penniyam Academy ecosystem.</p>
        </div>

        {error && (
          <div style={{ padding: "1rem", backgroundColor: "rgba(231, 76, 60, 0.1)", color: "#e74c3c", borderRadius: "0.5rem", marginBottom: "1.5rem", textAlign: "center", fontWeight: 500 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
              style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none" }}
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none" }}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="form-input"
              style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--border)", outline: "none" }}
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: "100%", marginTop: "1rem", padding: "1rem" }}>
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--muted-foreground)" }}>
          Already have an account? <Link href="/login" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
