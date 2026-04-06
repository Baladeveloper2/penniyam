"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', height: '65px', minWidth: '200px' }}>
      <img
        src="/Academy.jpeg"
        alt="Penniyam Academy"
        style={{ height: '100%', width: 'auto', objectFit: 'contain', display: 'block' }}
      />
    </Link>
  );
}
