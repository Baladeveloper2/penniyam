"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user: session, logout: signOut } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const academyUrl = process.env.NEXT_PUBLIC_ACADEMY_URL || "";
  const naturalsUrl = process.env.NEXT_PUBLIC_NATURALS_URL || "";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Academy", href: academyUrl ? `${academyUrl}/courses` : "/courses" },
    { name: "PEN Network", href: "/pen-network" },
    { name: "Naturals", href: naturalsUrl || "/naturals" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className={`glass ${isScrolled ? 'scrolled' : ''}`} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '0.5rem 0' : '1rem 0',
        borderBottom: '1px solid var(--border)',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />

          {/* Desktop Links */}
          <div className="nav-links desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{ fontWeight: 600, color: 'var(--foreground)', fontSize: '0.95rem', textDecoration: 'none' }}
                className="nav-item"
              >
                {link.name}
              </Link>
            ))}


          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-only"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Escaped from Nav Stacking Context */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: isScrolled ? '65px' : '75px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#ffffff',
          zIndex: 9999,
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'fadeIn 0.3s ease',
          overflowY: 'auto'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                textDecoration: 'none',
                color: 'var(--foreground)',
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--muted)'
              }}
            >
              {link.name}
            </Link>
          ))}


        </div>
      )}
    </>
  );
}

