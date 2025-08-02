"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick(e, id) {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleBrochure(e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/sample-local-pdf.pdf';
    link.download = 'brochure.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  }

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: 32,
          cursor: 'pointer',
          marginLeft: 16,
          color: '#111',
        }}
        className="nav-hamburger"
        aria-label="Open navigation menu"
      >
        &#9776;
      </button>
      <nav
        style={{
          display: 'flex',
          gap: 32,
          fontSize: 18,
          alignItems: 'center',
          color: '#111',
        }}
        className={isOpen ? 'nav-open' : ''}
      >
        <a href="#home" onClick={e => handleNavClick(e, 'home')} style={{ textDecoration: 'underline', textUnderlineOffset: 4, color: '#111' }}>Home</a>
        <a href="#about" onClick={e => handleNavClick(e, 'about')} style={{ color: '#111' }}>About</a>
        <Link href="/products" style={{ color: '#111', cursor: 'pointer' }}>Products</Link>
        <a href="#contact" onClick={e => handleNavClick(e, 'contact')} style={{ color: '#111' }}>Contact Us</a>
        <a href="#" onClick={handleBrochure} className="nav-brochure-desktop" style={{ background: '#000', color: '#fff', padding: '0.5rem 2rem', borderRadius: 24, fontWeight: 'bold', textDecoration: 'none', fontSize: 18, marginLeft: 16 }}>Brochure</a>
      </nav>
      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="nav-mobile-menu" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.7)', // Slightly darker overlay for emphasis
          zIndex: 10001, // Increased to ensure it’s above all HeroHeader content
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '20px',
        }}>
          <div style={{
            background: '#fff',
            width: '300px',
            padding: '20px',
            borderRadius: '8px',
          }}>
            <button
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: 20, right: 20, fontSize: 24, background: 'none', border: 'none', cursor: 'pointer', color: '#111' }}
              aria-label="Close menu"
            >
              ×
            </button>
            <a href="#" onClick={handleBrochure} style={{ background: '#000', color: '#fff', padding: '0.7rem 2.2rem', borderRadius: 50, fontWeight: 'bold', textDecoration: 'none', fontSize: 18, display: 'block', marginBottom: '20px', textAlign: 'center' }}>Brochure</a>
            <a href="#home" onClick={e => handleNavClick(e, 'home')} style={{ color: '#6a0dad', fontSize: 18, margin: '10px 0', display: 'block' }}>Home</a>
            <a href="#about" onClick={e => handleNavClick(e, 'about')} style={{ color: '#6a0dad', fontSize: 18, margin: '10px 0', display: 'block' }}>About</a>
            <Link href="/products" style={{ color: '#6a0dad', fontSize: 18, margin: '10px 0', cursor: 'pointer', display: 'block' }} onClick={() => setIsOpen(false)}>Products</Link>
            <a href="#contact" onClick={e => handleNavClick(e, 'contact')} style={{ color: '#6a0dad', fontSize: 18, margin: '10px 0', display: 'block' }}>Contact Us</a>
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 900px) {
          nav {
            display: none !important;
          }
          .nav-hamburger {
            display: block !important;
          }
          .nav-brochure-desktop {
            display: none !important;
          }
        }
        @media (min-width: 901px) {
          .nav-mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}