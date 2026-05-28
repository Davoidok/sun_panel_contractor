import { motion } from 'framer-motion';
import heroImage from '../assets/wall_hero.png';

export default function Hero() {
  const scrollToSection = (e, href) => {
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
    <section className="hero-section">
      <div className="grid-bg"></div>
      
      {/* Decorative Blur Glows */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container hero-container">
        <div className="grid-2">
          {/* Text Content */}
          <motion.div 
            className="hero-text-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="hero-tag">
              <span className="dot"></span> Sustainable Containment Solutions
            </span>
            <h1 className="hero-title">
              Titan containment, <br />
              <span className="text-gradient">Shielding</span> your space.
            </h1>
            <p className="hero-description">
              Titan Shield Panels Inc. provides premium, eco-friendly temporary wall systems 
              and dust containment solutions for commercial remodels, healthcare retrofits, and 
              occupied renovations. Experience rapid installation, zero waste, and maximum productivity.
            </p>
            <div className="hero-cta-buttons">
              <a 
                href="#contact" 
                className="btn btn-primary"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                Schedule Consultation
              </a>
              <a 
                href="#about" 
                className="btn btn-secondary"
                onClick={(e) => scrollToSection(e, '#about')}
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="hero-image-wrapper">
              <div className="image-border-glow"></div>
              <img 
                src={heroImage} 
                alt="Titan Shield Modular Temporary Wall Panels" 
                className="hero-img"
              />
              <div className="image-overlay-card glass-panel">
                <span className="card-accent-line"></span>
                <span className="card-number">01</span>
                <span className="card-title">Swiftwall Systems</span>
                <p className="card-text">Innovative panel systems designed to minimize disruption and reduce renovation waste.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 10rem 0 7rem 0;
          overflow: hidden;
          background: radial-gradient(circle at 80% 20%, rgba(67, 100, 247, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 10% 80%, rgba(0, 229, 255, 0.03) 0%, transparent 50%);
        }

        .hero-container {
          position: relative;
          z-index: 5;
        }

        /* Ambient Glows */
        .hero-glow-1 {
          position: absolute;
          top: -10%;
          right: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 82, 212, 0.12) 0%, rgba(0, 229, 255, 0.02) 60%, transparent 100%);
          filter: blur(60px);
          pointer-events: none;
        }

        .hero-glow-2 {
          position: absolute;
          bottom: 5%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(67, 100, 247, 0.08) 0%, transparent 80%);
          filter: blur(50px);
          pointer-events: none;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 229, 255, 0.06);
          border: 1px solid rgba(0, 229, 255, 0.2);
          color: var(--color-accent);
          font-family: var(--font-headings);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.05);
        }

        .hero-tag .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-accent);
          box-shadow: 0 0 8px var(--color-accent);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5.5vw, 4.5rem);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-normal);
          margin-bottom: 2.5rem;
          max-width: 580px;
          line-height: 1.7;
        }

        .hero-cta-buttons {
          display: flex;
          gap: 1.25rem;
        }

        /* Image Showcase */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 520px;
          border-radius: 20px;
          overflow: visible;
        }

        .image-border-glow {
          position: absolute;
          inset: -3px;
          background: var(--grad-primary);
          border-radius: 23px;
          z-index: 1;
          opacity: 0.75;
          filter: blur(1px);
        }

        .hero-img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          border-radius: 20px;
          position: relative;
          z-index: 2;
          display: block;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .image-overlay-card {
          position: absolute;
          bottom: -30px;
          left: -30px;
          width: 280px;
          padding: 1.5rem;
          z-index: 10;
          box-shadow: var(--shadow-lg), var(--shadow-glow);
          border-color: rgba(0, 229, 255, 0.3);
          border-radius: 12px;
          background: rgba(12, 17, 34, 0.85);
          text-align: left;
        }

        .card-accent-line {
          position: absolute;
          top: 0;
          left: 10%;
          width: 80%;
          height: 3px;
          background: var(--grad-primary);
          border-radius: 0 0 3px 3px;
        }

        .card-number {
          display: block;
          font-family: var(--font-headings);
          font-size: 2.25rem;
          font-weight: 900;
          color: rgba(0, 229, 255, 0.2);
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .card-title {
          font-family: var(--font-headings);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-light);
          margin-bottom: 0.25rem;
          display: block;
        }

        .card-text {
          font-size: 0.85rem;
          color: var(--text-normal);
          line-height: 1.4;
        }

        @media (max-width: 992px) {
          .hero-section {
            padding: 8rem 0 5rem 0;
          }
          .hero-cta-buttons {
            justify-content: center;
          }
          .hero-title {
            text-align: center;
          }
          .hero-description {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-tag {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-visual {
            margin-top: 3.5rem;
          }
          .image-overlay-card {
            bottom: -20px;
            left: 20px;
            right: 20px;
            width: auto;
          }
        }
      `}</style>
    </section>
  );
}
