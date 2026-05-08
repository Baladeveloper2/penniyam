"use client";

import Image from "next/image";
import { useState } from "react";

export default function PenNetworkPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessStatus: "No, I am a new learner",
    interest: "Herbal Cosmetics",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", businessStatus: "No, I am a new learner", interest: "Herbal Cosmetics", message: "" });
    }, 4000);
  };

  return (
    <div style={{ backgroundColor: "var(--background)", color: "var(--foreground)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{
        position: "relative",
        height: "540px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}>
        <Image
          src="/pen_hero.png"
          alt="PEN Network Community"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(26, 8, 46, 0.9) 0%, rgba(135, 20, 80, 0.75) 50%, rgba(0, 0, 0, 0.6) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "3rem"
        }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div className="fade-in" style={{ color: "white" }}>
              <span style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(5px)",
                padding: "0.5rem 1.25rem",
                borderRadius: "100px",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "inline-block",
                marginBottom: "1.5rem"
              }}>
                ✨ PENNIYAM ENTERPRISE NETWORK
              </span>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: "1.15",
                marginBottom: "1.5rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)"
              }}>
                Empowering Women <br />
                <span style={{
                  background: "linear-gradient(135deg, #ff79c6 0%, #ffb86c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Entrepreneurs
                </span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                maxWidth: "600px",
                marginBottom: "2.5rem",
                opacity: 0.9,
                lineHeight: "1.6"
              }}>
                An elite, collaborative ecosystem where aspiring female leaders learn high-income crafts, build premium brands, and scale their businesses globally.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#join-form" className="btn btn-primary" style={{ padding: "1rem 2.25rem", fontSize: "1rem" }}>
                  Join the Network
                </a>
                <a href="#pillars" className="btn" style={{
                  padding: "1rem 2.25rem",
                  fontSize: "1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white"
                }}>
                  Explore Our Pillars
                </a>
              </div>
            </div>
            <div className="desktop-only fade-in" style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                borderRadius: "var(--radius)",
                padding: "2.5rem",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                color: "white",
                maxWidth: "420px"
              }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#ff79c6" }}>🚀 Exclusive Access</h3>
                <p style={{ fontSize: "0.95rem", opacity: 0.9, marginBottom: "1.5rem" }}>
                  As a PEN Network member, unlock access to proprietary cosmetics formulas, business coaching, and priority marketplace listings.
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span>Next Cohort Starts:</span>
                    <strong style={{ color: "#ffb86c" }}>May 20, 2026</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Available Slots:</span>
                    <strong style={{ color: "#50fa7b" }}>12 Seats Left</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Overlap Section */}
      <section style={{ marginTop: "-4rem", position: "relative", zIndex: 10 }}>
        <div className="container">
          <div style={{
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "2.5rem",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            textAlign: "center"
          }}>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary)", marginBottom: "0.25rem" }}>5,000+</h2>
              <p style={{ color: "var(--muted-foreground)", fontWeight: 600, fontSize: "0.95rem" }}>Women Empowered</p>
            </div>
            <div style={{ borderLeft: "1px solid var(--border)" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary)", marginBottom: "0.25rem" }}>150+</h2>
              <p style={{ color: "var(--muted-foreground)", fontWeight: 600, fontSize: "0.95rem" }}>Expert Business Mentors</p>
            </div>
            <div style={{ borderLeft: "1px solid var(--border)" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary)", marginBottom: "0.25rem" }}>₹5+</h2>
              <p style={{ color: "var(--muted-foreground)", fontWeight: 600, fontSize: "0.95rem" }}>Community Revenue Generated</p>
            </div>
            <div style={{ borderLeft: "1px solid var(--border)" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary)", marginBottom: "0.25rem" }}>25+</h2>
              <p style={{ color: "var(--muted-foreground)", fontWeight: 600, fontSize: "0.95rem" }}>Startup Industries & Crafts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section id="pillars" className="section" style={{ paddingBlock: "6rem 4rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>HOW WE EMPOWER YOU</span>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "0.5rem" }}>Our Three Core Strategic Pillars</h2>
            <p style={{ color: "var(--muted-foreground)", maxWidth: "600px", margin: "1rem auto 0" }}>
              We provide a complete, holistic framework that guides you all the way from initial skills acquisition to brand scaling and global commercialization.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {/* Pillar 1 */}
            <div className="card" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: "240px", width: "100%" }}>
                <Image
                  src="/pen_training.png"
                  alt="Skill Development & Training"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "2.5rem" }}>
                <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>PILLAR 01</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--secondary)" }}>Self-Development & Skill Training</h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>
                  Unlock access to elite training programs. Master professional cosmetic chemistry, culinary arts, tailoring, digital marketing, and essential bookkeeping through active workshops led by domain experts.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="card" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: "240px", width: "100%" }}>
                <Image
                  src="/naturals.png"
                  alt="Market Integration & Brand Acceleration"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "2.5rem" }}>
                <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>PILLAR 02</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--secondary)" }}>Market Access & Brand Launch</h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>
                  Gain a direct, streamlined pipeline to monetize your creations. Leverage our dedicated e-commerce engine, Penniyam Naturals, to display your products on a world-class portal with instant visibility.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="card" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: "240px", width: "100%" }}>
                <Image
                  src="/pen_growth.png"
                  alt="Leadership & Business Scale"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "2.5rem" }}>
                <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>PILLAR 03</span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--secondary)" }}>Leadership & Business Scaling</h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>
                  Transition from sole entrepreneur to an industry powerhouse. Engage in weekly peer collaboration sessions, acquire business funding strategies, and receive personalized mentorship to scale globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Motivational Quote Section */}
      <section style={{
        background: "linear-gradient(135deg, var(--secondary) 0%, hsl(var(--primary-h), var(--primary-s), 25%) 100%)",
        color: "white",
        paddingBlock: "6rem",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "12rem",
          fontWeight: 900,
          opacity: 0.05,
          fontFamily: "serif",
          userSelect: "none"
        }}>“</div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, marginBottom: "2rem", lineHeight: "1.3" }}>
            "When you empower a woman entrepreneur, <br />
            you empower an entire community."
          </h2>
          <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 2.5rem", opacity: 0.9, lineHeight: "1.8" }}>
            The fastest, most sustainable path to robust economic growth is investing directly in women’s vision, skills, and independence. Our platform is built to give you the exact technical expertise, market channels, and mentorship backing required to break glass ceilings and write your own legacy.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "100px", overflow: "hidden", position: "relative" }}>
              <Image src="/pen_growth.png" alt="Quote Author" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ textAlign: "left" }}>
              <h4 style={{ margin: "0", fontSize: "1.1rem", fontWeight: 700, color: "#ff79c6" }}>Penniyam Council Board</h4>
              <p style={{ margin: "0", fontSize: "0.85rem", opacity: 0.8 }}>Empowering 5000+ Dreams Globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Form & Checklist Section */}
      <section id="join-form" className="section" style={{ paddingBlock: "6rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>TAKE THE NEXT STEP</span>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "0.5rem", marginBottom: "1.5rem" }}>Ready to Start Your Success Story?</h2>
              <p style={{ color: "var(--muted-foreground)", marginBottom: "2rem" }}>
                Apply to become an active member of the Penniyam Enterprise Network today. Our panel will review your interest and reach out within 48 business hours to assign you a personal coordinator.
              </p>

              <div style={{ display: "grid", gap: "1.25rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ backgroundColor: "rgba(236, 72, 153, 0.1)", color: "var(--primary)", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "100px", flexShrink: 0, fontWeight: 700, textIndent: "10px", lineHeight: "32px" }}>✓</span>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem", fontSize: "1.1rem" }}>100% Free Lifetime Community Access</h4>
                    <p style={{ margin: "0", color: "var(--muted-foreground)", fontSize: "0.9rem" }}>Interact, share ideas, and cross-promote inside our premium communication channels.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ backgroundColor: "rgba(236, 72, 153, 0.1)", color: "var(--primary)", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "100px", flexShrink: 0, fontWeight: 700, textIndent: "10px", lineHeight: "32px" }}>✓</span>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem", fontSize: "1.1rem" }}>Proprietary Manufacturing Recipes</h4>
                    <p style={{ margin: "0", color: "var(--muted-foreground)", fontSize: "0.9rem" }}>Learn secret, commercially proven formulations for herbal soaps, skin serums, and oils.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ backgroundColor: "rgba(236, 72, 153, 0.1)", color: "var(--primary)", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "100px", flexShrink: 0, fontWeight: 700, textIndent: "10px", lineHeight: "32px" }}>✓</span>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem", fontSize: "1.1rem" }}>Wholesale & Retail Pipelines</h4>
                    <p style={{ margin: "0", color: "var(--muted-foreground)", fontSize: "0.9rem" }}>Sell directly to b2b buyers and leverage global exhibitions to rapidly scale brand footprint.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card" style={{
                backgroundColor: "var(--muted)",
                border: "1px solid var(--border)",
                padding: "3rem",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                position: "relative"
              }}>
                {isSubmitted ? (
                  <div style={{ textAlign: "center", paddingBlock: "3rem" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🎉</div>
                    <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "var(--secondary)" }}>Application Received!</h3>
                    <p style={{ color: "var(--muted-foreground)" }}>
                      Thank you for applying to PEN Network. One of our lead advisors will contact you shortly via phone or WhatsApp. Let's grow together!
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", textAlign: "center" }}>Join the Elite Cohort</h3>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", textAlign: "center", marginBottom: "2.5rem" }}>
                      Fill out this quick application to reserve your slot.
                    </p>
                    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.5rem" }}>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.9rem" }}>Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          style={{ width: "100%", padding: "0.85rem", borderRadius: "var(--radius)", border: "1px solid var(--border)", fontSize: "0.95rem" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.9rem" }}>Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="WhatsApp Number (e.g. +91 98765 43210)"
                          style={{ width: "100%", padding: "0.85rem", borderRadius: "var(--radius)", border: "1px solid var(--border)", fontSize: "0.95rem" }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.9rem" }}>Existing Business Status</label>
                        <select
                          value={formData.businessStatus}
                          onChange={(e) => setFormData({ ...formData, businessStatus: e.target.value })}
                          style={{ width: "100%", padding: "0.85rem", borderRadius: "var(--radius)", border: "1px solid var(--border)", backgroundColor: "white", fontSize: "0.95rem" }}
                        >
                          <option>No, I am a new learner</option>
                          <option>Yes, I have an existing small business</option>
                          <option>Yes, I want to pivot/scale an established business</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.9rem" }}>Primary Business Interest</label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          style={{ width: "100%", padding: "0.85rem", borderRadius: "var(--radius)", border: "1px solid var(--border)", backgroundColor: "white", fontSize: "0.95rem" }}
                        >
                          <option>Herbal Cosmetics & Soap Formulation</option>
                          <option>Artisanal Foods & Confectionery</option>
                          <option>Tailoring, Fashion & Garments</option>
                          <option>Digital Marketing & E-commerce</option>
                          <option>Other Business Craft</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.9rem" }}>Message / Growth Goals</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us a bit about your goals..."
                          rows={3}
                          style={{ width: "100%", padding: "0.85rem", borderRadius: "var(--radius)", border: "1px solid var(--border)", fontSize: "0.95rem", fontFamily: "inherit" }}
                        />
                      </div>
                      <button className="btn btn-primary" type="submit" style={{ backgroundColor: "var(--secondary)", width: "100%", padding: "1rem" }}>
                        Submit Application
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
