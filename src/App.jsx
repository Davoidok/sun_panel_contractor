import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import logoImg from './assets/Titan Shield Logo.PNG';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
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
      <Header />
      
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <AboutUs />
        <Services />
        <Industries />
        <WhyChooseUs />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="footer-main">
        <div className="container footer-container">
          
          {/* Logo & Bio Column */}
          <div className="footer-col col-brand">
            <a href="#" className="footer-logo" onClick={scrollToTop}>
              <img src={logoImg} alt="Titan Shield Panels Inc. Logo" className="footer-logo-img" />
            </a>
            <p className="footer-bio">
              Providing eco-friendly temporary wall systems and dust containment solutions for commercial remodels, healthcare facilities, and offices. Minimizing construction downtime while maximizing sustainability.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col col-links">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About Us</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Core Services</a></li>
              <li><a href="#industries" onClick={(e) => handleLinkClick(e, '#industries')}>Industries Served</a></li>
              <li><a href="#why-choose-us" onClick={(e) => handleLinkClick(e, '#why-choose-us')}>Why Choose Us</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footer-col col-contact">
            <h4>Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon"><Mail size={16} /></span>
                <a href="mailto:info@titanshieldpanels.com">info@titanshieldpanels.com</a>
              </li>
              <li>
                <span className="contact-icon"><MapPin size={16} /></span>
                <span>Titan Shield Panels, Inc. Support</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub Footer */}
        <div className="sub-footer">
          <div className="container sub-footer-container">
            <p>&copy; {new Date().getFullYear()} Titan Shield Panels Inc. All rights reserved.</p>
            <p className="sub-footer-text">
              Authorized Supplier & Installer of <span className="text-gradient" style={{ fontWeight: '700' }}>Swiftwall</span> Systems
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            className="btn-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        /* Footer Styling */
        .footer-main {
          background-color: #03060c;
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          padding: 5rem 0 0 0;
          position: relative;
          z-index: 10;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .footer-col h4 {
          font-family: var(--font-headings);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--grad-primary);
        }

        .footer-logo {
          display: inline-block;
          line-height: 0;
        }

        .footer-logo-img {
          height: 72px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.15));
          transition: filter 0.3s ease, transform 0.3s ease;
        }

        .footer-logo:hover .footer-logo-img {
          filter: drop-shadow(0 0 14px rgba(0, 229, 255, 0.35));
          transform: scale(1.04);
        }

        .footer-bio {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-top: 1.25rem;
        }

        .footer-links-list, .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .footer-links-list a {
          font-size: 0.95rem;
          color: var(--text-normal);
        }

        .footer-links-list a:hover {
          color: var(--color-accent);
          padding-left: 4px;
        }

        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-normal);
        }

        .contact-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-contact-list a:hover {
          color: var(--color-accent);
        }

        /* Sub Footer */
        .sub-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          padding: 2rem 0;
          background-color: #020408;
        }

        .sub-footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .sub-footer-text {
          font-family: var(--font-headings);
        }

        /* Floating Scroll Top Button */
        .btn-scroll-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(12, 17, 34, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(0, 229, 255, 0.3);
          color: var(--color-accent);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-glow), var(--shadow-md);
          z-index: 99;
          transition: all var(--transition-normal);
        }

        .btn-scroll-top:hover {
          background: var(--grad-primary);
          color: var(--text-white);
          border-color: transparent;
          transform: translateY(-5px);
          box-shadow: var(--shadow-glow-strong), 0 5px 15px rgba(0, 229, 255, 0.4);
        }

        @media (max-width: 992px) {
          .footer-container {
            grid-template-columns: 1.5fr 1fr;
            gap: 3rem;
          }
          .col-contact {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .col-contact {
            grid-column: span 1;
          }
          .sub-footer-container {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }
          .btn-scroll-top {
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default App;
