import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/Titan Shield Logo.PNG';

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
            <img src={logoImg} alt="Titan Shield Panels Inc. Logo" className="logo-img-header" />
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

        .logo-img-header {
          height: 56px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.2));
          transition: var(--transition-normal);
        }

        .logo-area:hover .logo-img-header {
          transform: scale(1.05);
          filter: drop-shadow(0 0 12px rgba(0, 229, 255, 0.4));
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
