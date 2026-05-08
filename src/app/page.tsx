"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const academyUrl = process.env.NEXT_PUBLIC_ACADEMY_URL || "https://penniyamacademy.com";
  const naturalsUrl = process.env.NEXT_PUBLIC_NATURALS_URL || "https://penniyamnaturals.com";

  return (
    <div style={{ backgroundColor: "var(--background)", color: "var(--foreground)", minHeight: "100vh" }}>
      
      {/* Unified Enterprise Hero Section */}
      <section style={{ 
        position: "relative", 
        overflow: "hidden", 
        paddingBlock: "8rem 6rem",
        background: "linear-gradient(135deg, #fff5f8 0%, #f6f0ff 100%)",
        borderBottom: "1px solid var(--border)"
      }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center", position: "relative", zIndex: 2 }}>
          <div className="fade-in">
            <span style={{ 
              color: "var(--primary)", 
              fontWeight: 800, 
              fontSize: "0.85rem", 
              textTransform: "uppercase", 
              letterSpacing: "2.5px",
              display: "inline-block",
              marginBottom: "1rem",
              backgroundColor: "rgba(236, 72, 153, 0.08)",
              padding: "0.4rem 1rem",
              borderRadius: "100px"
            }}>
              One Cohesive Platform
            </span>
            <h1 style={{ 
              fontSize: "clamp(3rem, 6vw, 4.5rem)", 
              lineHeight: "1.1", 
              marginBottom: "1.5rem", 
              color: "var(--foreground)", 
              fontWeight: 900 
            }}>
              Building the Future of <br />
              <span style={{ 
                background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)", 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent"
              }}>
                Women-Led
              </span> <br />
              Enterprise
            </h1>
            <p style={{ 
              fontSize: "1.25rem", 
              color: "var(--muted-foreground)", 
              marginBottom: "3rem", 
              maxWidth: "550px", 
              lineHeight: "1.7" 
            }}>
              Penniyam is a premium dual-platform ecosystem designed to empower women globally. Through **Penniyam Academy**, we teach high-value vocational crafts, and through **Penniyam Naturals**, we provide a professional commercial channel to showcase and sell natural products.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <a href="#showcase" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                Explore Platforms
              </a>
              <Link href="/pen-network" className="btn" style={{ 
                padding: "1rem 2.5rem", 
                fontSize: "1.05rem",
                border: "2px solid var(--primary)", 
                color: "var(--primary)",
                background: "transparent"
              }}>
                Join PEN Network
              </Link>
            </div>
          </div>
          
          <div className="fade-in" style={{ position: "relative" }}>
            <div style={{ 
              position: "relative", 
              borderRadius: "2rem", 
              overflow: "hidden", 
              boxShadow: "0 30px 60px -15px rgba(135, 20, 80, 0.15)",
              aspectRatio: "1.2",
              border: "1px solid rgba(255, 255, 255, 0.6)"
            }}>
              <Image 
                src="/pen_hero.png" 
                alt="Women Entrepreneurs Collaborating" 
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)" }}></div>
            </div>
            {/* Floating Trust Card */}
            <div style={{
              position: "absolute",
              bottom: "-2rem",
              left: "-2rem",
              backgroundColor: "white",
              padding: "1.5rem 2rem",
              borderRadius: "1.25rem",
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
              border: "1px solid var(--border)",
              maxWidth: "260px"
            }} className="desktop-only">
              <h4 style={{ margin: "0 0 0.25rem", color: "var(--primary)", fontSize: "1.75rem", fontWeight: 800 }}>5,000+</h4>
              <p style={{ margin: "0", color: "var(--muted-foreground)", fontSize: "0.85rem", fontWeight: 600 }}>Women entrepreneurs certified & actively running businesses.</p>
            </div>
          </div>
        </div>
        
        {/* Decorative Blur Element */}
        <div style={{ 
          position: "absolute", 
          top: "-10%", 
          right: "-10%", 
          width: "45%", 
          height: "60%", 
          background: "rgba(236, 72, 153, 0.12)", 
          borderRadius: "50%", 
          filter: "blur(130px)", 
          zIndex: 1
        }}></div>
      </section>

      {/* Corporate Introduction Section */}
      <section className="section" style={{ paddingBlock: "6rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>WHO WE ARE</span>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "0.5rem", marginBottom: "1.5rem" }}>Fostering Economic Independence & Creative Leadership</h2>
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                At Penniyam, our mission is to eliminate the barriers to entry for aspiring female business founders. We operate on a verified "Learn, Build, Connect, Sell" loop that ensures no student is left behind.
              </p>
              <p style={{ color: "var(--muted-foreground)", fontSize: "1.1rem", lineHeight: "1.7" }}>
                Our infrastructure is completely split into two highly optimized segments, allowing users to choose whether they wish to learn high-value technical vocational skills or purchase elite natural items formulated by our verified members.
              </p>
            </div>
            
            <div style={{ display: "grid", gap: "2rem" }}>
              <div style={{ backgroundColor: "var(--muted)", padding: "2rem", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                <h3 style={{ fontSize: "1.25rem", color: "var(--secondary)", marginBottom: "0.5rem" }}>🧠 Holistic Vocational Coaching</h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.95rem", margin: "0" }}>Curriculums covering financial literacy, brand identity, digital marketing, and advanced cosmetology chemistry.</p>
              </div>
              <div style={{ backgroundColor: "var(--muted)", padding: "2rem", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                <h3 style={{ fontSize: "1.25rem", color: "var(--secondary)", marginBottom: "0.5rem" }}>🌱 Premium Natural Commercialization</h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.95rem", margin: "0" }}>An integrated marketplace featuring student-made soaps, herbal cosmetics, and artisanal fashion, supporting stable local livelihoods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Showcase Section */}
      <section id="showcase" style={{ paddingBlock: "6rem", borderTop: "1px solid var(--border)", background: "#fafafa" }}>
        <div className="container">
          
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "2.5px" }}>OUR REVOLUTIONARY PLATFORMS</span>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, marginTop: "0.5rem" }}>Explore Our Dedicated Ecosystems</h2>
            <p style={{ color: "var(--muted-foreground)", fontSize: "1.2rem", maxWidth: "650px", margin: "1rem auto 0", lineHeight: "1.7" }}>
              Select either platform below to be redirected to its dedicated, fully segregated website and begin your journey.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "6rem" }}>
            
            {/* Platform 1: Penniyam Academy */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "4rem", 
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "2rem",
              padding: "4rem",
              border: "1px solid var(--border)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
            }}>
              <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", aspectRatio: "1.3", boxShadow: "0 15px 35px rgba(0,0,0,0.05)" }}>
                <Image 
                  src="/penniyam_academy.png" 
                  alt="Penniyam Academy Platform" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <span style={{ 
                  color: "var(--primary)", 
                  fontWeight: 800, 
                  fontSize: "0.8rem", 
                  textTransform: "uppercase", 
                  letterSpacing: "2px",
                  backgroundColor: "rgba(236, 72, 153, 0.08)",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "100px",
                  display: "inline-block",
                  marginBottom: "1rem"
                }}>
                  EDUCATE & EMPOWER
                </span>
                <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--secondary)" }}>Penniyam Academy</h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "2rem" }}>
                  A specialized, high-performing educational platform offering certified vocational coaching. Master professional soap-making, herbal cosmetics formulation, artisanal baking, custom tailoring, and digital marketing. Let domain experts guide you from absolute basics to business-ready certified mastery.
                </p>
                <div style={{ display: "grid", gap: "1rem", marginBottom: "2.5rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontWeight: 600, color: "var(--foreground)" }}>
                    <span style={{ color: "var(--primary)", fontSize: "1.1rem" }}>🎓</span> Certified Curriculums (Online & Offline)
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontWeight: 600, color: "var(--foreground)" }}>
                    <span style={{ color: "var(--primary)", fontSize: "1.1rem" }}>👩‍🏫</span> Direct One-On-One Mentor support
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontWeight: 600, color: "var(--foreground)" }}>
                    <span style={{ color: "var(--primary)", fontSize: "1.1rem" }}>📊</span> Entrepreneurship & Bookkeeping courses
                  </div>
                </div>
                <a href={academyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1.05rem" }}>
                  Explore Academy →
                </a>
              </div>
            </div>

            {/* Platform 2: Penniyam Naturals */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "4rem", 
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "2rem",
              padding: "4rem",
              border: "1px solid var(--border)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
            }}>
              <div style={{ order: "clamp(0, 1, 2)" }}>
                <span style={{ 
                  color: "#2ecc71", 
                  fontWeight: 800, 
                  fontSize: "0.8rem", 
                  textTransform: "uppercase", 
                  letterSpacing: "2px",
                  backgroundColor: "rgba(46, 204, 113, 0.08)",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "100px",
                  display: "inline-block",
                  marginBottom: "1rem"
                }}>
                  COMMERCIALIZE & GROW
                </span>
                <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--secondary)" }}>Penniyam Naturals</h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "2rem" }}>
                  Our premium, direct-to-consumer e-commerce portal showcasing world-class organic cosmetic, skincare, and wellness products. Every single item listed is meticulously handcrafted and clinically tested by certified female entrepreneurs from our academy, directly funding stable local livelihoods.
                </p>
                <div style={{ display: "grid", gap: "1rem", marginBottom: "2.5rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontWeight: 600, color: "var(--foreground)" }}>
                    <span style={{ color: "#2ecc71", fontSize: "1.1rem" }}>🌿</span> 100% Herbal, Handcrafted & Organic
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontWeight: 600, color: "var(--foreground)" }}>
                    <span style={{ color: "#2ecc71", fontSize: "1.1rem" }}>🔬</span> Clinically Tested, Safe, & Premium Cosmetics
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontWeight: 600, color: "var(--foreground)" }}>
                    <span style={{ color: "#2ecc71", fontSize: "1.1rem" }}>🛒</span> Directly Funds Women Financial Independence
                  </div>
                </div>
                <a href={naturalsUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{ 
                  backgroundColor: "#2ecc71", 
                  color: "white", 
                  padding: "1rem 2.5rem", 
                  fontSize: "1.05rem",
                  boxShadow: "0 8px 20px -6px rgba(46,204,113,0.4)"
                }}>
                  Visit Naturals →
                </a>
              </div>
              <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", aspectRatio: "1.3", boxShadow: "0 15px 35px rgba(0,0,0,0.05)", order: "clamp(0, -1, 1)" }}>
                <Image 
                  src="/penniyam_naturals.png" 
                  alt="Penniyam Naturals Platform" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Motivational Quote & Banner Section */}
      <section style={{
        background: "linear-gradient(135deg, var(--secondary) 0%, hsl(var(--primary-h), var(--primary-s), 20%) 100%)",
        color: "white",
        paddingBlock: "7rem",
        textAlign: "center"
      }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "2rem", lineHeight: "1.3" }}>
            "Empowering Women Leaders, Handcrafting Natural Success."
          </h2>
          <p style={{ fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto 3rem", opacity: 0.9, lineHeight: "1.8" }}>
            Our dual framework ensures absolute separation. Aspiring learners receive the best digital vocational training inside our Academy, while consumers acquire premium, chemical-free cosmetic solutions on our Naturals shop. Together, we build a sustainable circular economy.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <a href={academyUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: "white", color: "var(--foreground)" }}>Join Academy Portal</a>
            <a href={naturalsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Shop Organic Naturals</a>
          </div>
        </div>
      </section>

    </div>
  );
}
