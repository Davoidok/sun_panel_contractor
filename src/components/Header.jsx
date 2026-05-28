import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`header-main ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <a href="#" className="logo-area" onClick={(e) => handleLinkClick(e, '#root')}>
            <svg className="logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer Shield Outline */}
              <path d="M50 5 L85 18 C85 55, 70 85, 50 95 C30 85, 15 55, 15 18 L50 5 Z" fill="url(#shieldBg)" stroke="url(#logoGrad)" strokeWidth="3" />
              {/* Vertical Pillars (Blue Bars from Logo) */}
              <rect x="32" y="25" width="6" height="30" rx="3" fill="#00E5FF" opacity="0.8" />
              <rect x="42" y="18" width="6" height="40" rx="3" fill="#4364F7" />
              <rect x="52" y="18" width="6" height="40" rx="3" fill="#4364F7" />
              <rect x="62" y="25" width="6" height="30" rx="3" fill="#00E5FF" opacity="0.8" />
              {/* Spartan Helmet silhouette */}
              <path d="M50 25 C41 25, 38 35, 38 48 C38 52, 40 56, 42 58 L45 52 L48 55 L45 70 L50 67 L55 70 L52 55 L55 52 L58 58 C60 56, 62 52, 62 48 C62 35, 59 25, 50 25 Z" fill="#E2E8F0" />
              <path d="M50 20 L53 30 L47 30 Z" fill="#cbd5e1" />
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0052D4" />
                  <stop offset="50%" stopColor="#4364F7" />
                  <stop offset="100%" stopColor="#00E5FF" />
                </linearGradient>
                <linearGradient id="shieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#060913" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>
              </defs>
            </svg>
            <div className="logo-text">
              <span className="brand-title">TITAN<span className="text-gradient">SHIELD</span></span>
              <span className="brand-subtitle">PANELS, INC.</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button */}
          <div className="header-cta">
            <a href="#contact" className="btn btn-header" onClick={(e) => handleLinkClick(e, '#contact')}>
              Schedule Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="mobile-drawer-content glass-panel">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={(e) => handleLinkClick(e, '#contact')}>
                Schedule Consultation
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .header-main {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition-normal);
          background: rgba(6, 9, 19, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .header-main.is-scrolled {
          height: 70px;
          background: rgba(6, 9, 19, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0, 229, 255, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 229, 255, 0.05);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-svg {
          width: 48px;
          height: 48px;
          filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.2));
          transition: var(--transition-normal);
        }

        .logo-area:hover .logo-svg {
          transform: rotate(-5deg) scale(1.05);
          filter: drop-shadow(0 0 12px rgba(0, 229, 255, 0.4));
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-title {
          font-family: var(--font-headings);
          font-size: 1.35rem;
          font-weight: 900;
          color: var(--text-light);
          letter-spacing: 0.05em;
        }

        .brand-subtitle {
          font-family: var(--font-headings);
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 0.3em;
          margin-top: 2px;
        }

        .nav-desktop {
          display: block;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.25rem;
        }

        .nav-links a {
          font-family: var(--font-headings);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-normal);
          position: relative;
          padding: 0.25rem 0;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--grad-primary);
          transition: var(--transition-normal);
        }

        .nav-links a:hover {
          color: var(--text-white);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .btn-header {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 229, 255, 0.3);
          color: var(--text-light);
          font-size: 0.85rem;
          padding: 0.6rem 1.25rem;
          border-radius: 30px;
        }

        .btn-header:hover {
          background: var(--grad-primary);
          color: var(--text-white);
          border-color: transparent;
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.3);
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-light);
          cursor: pointer;
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          z-index: 999;
          transition: var(--transition-slow);
          pointer-events: none;
        }

        .mobile-nav-drawer.is-open {
          right: 0;
          pointer-events: all;
        }

        .mobile-drawer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(3, 5, 11, 0.65);
          backdrop-filter: blur(4px);
        }

        .mobile-drawer-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 280px;
          height: 100%;
          border-radius: 0;
          border-left: 1px solid rgba(0, 229, 255, 0.2);
          display: flex;
          flex-direction: column;
          padding: 6rem 2rem 2rem 2rem;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          list-style: none;
          gap: 1.5rem;
        }

        .mobile-nav-links a {
          font-family: var(--font-headings);
          font-weight: 600;
          font-size: 1.15rem;
          color: var(--text-normal);
          display: block;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-links a:hover {
          color: var(--color-accent);
          padding-left: 5px;
        }

        @media (max-width: 992px) {
          .nav-desktop, .header-cta {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
