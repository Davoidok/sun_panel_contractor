import { motion } from 'framer-motion';
import { Leaf, Zap, Award } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: <Leaf className="value-icon-svg" />,
      title: "Sustainability",
      desc: "Providing eco-conscious containment and room division solutions that help reduce waste and support environmentally responsible practices."
    },
    {
      icon: <Zap className="value-icon-svg" />,
      title: "Efficiency",
      desc: "Combining flexibility and rapid installation methods to deliver reliable wall solutions that improve jobsite efficiency."
    },
    {
      icon: <Award className="value-icon-svg" />,
      title: "Professional",
      desc: "Helping contractors and facility managers maintain safe, clean, and functional environments for both workers and occupants."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="section about-section bg-gradient-glow">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2 className="text-metallic">Who We Are & What We Stand For</h2>
          <p className="section-desc">
            We specialize in sustainable temporary wall systems and eco-friendly containment solutions for commercial remodels and renovations.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid-2 about-info-grid">
          <motion.div 
            className="about-text-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3>Pioneering Sustainable Jobsite Containment</h3>
            <p>
              <strong>Titan Shield Panels Inc.</strong> is a solutions-driven construction support company specializing in sustainable temporary wall systems for commercial remodels, tenant improvements, healthcare facilities, education spaces, retail environments, and occupied renovations.
            </p>
            <p>
              We focus on providing efficient, eco-conscious containment and room division solutions using innovative panel systems such as <strong>Swiftwall</strong> products. We are committed to helping contractors, property managers, and facility owners maintain safe, clean, and functional spaces during active construction and retrofit projects.
            </p>
            <p>
              By combining sustainability, flexibility, and rapid installation methods, we help minimize disruption while supporting modern construction standards and environmentally responsible practices.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats-panel glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="stat-item">
              <span className="stat-num text-gradient">Eco</span>
              <span className="stat-label">Eco-Conscious Containment</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num text-gradient">Rapid</span>
              <span className="stat-label">Quick Installation & Removal</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num text-gradient">Clean</span>
              <span className="stat-label">Safe & Functional Spaces</span>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid-3 values-grid">
          {values.map((val, index) => (
            <motion.div 
              className="glass-card-interactive value-card"
              key={val.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <div className="value-icon-container">
                {val.icon}
              </div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-secondary);
        }

        .about-info-grid {
          margin-bottom: 5rem;
          align-items: stretch;
        }

        .about-text-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
          text-align: left;
        }

        .about-text-panel h3 {
          color: var(--text-light);
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .about-text-panel p {
          color: var(--text-normal);
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .about-text-panel strong {
          color: var(--color-accent);
        }

        .about-stats-panel {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          background: rgba(12, 17, 34, 0.4);
          border-color: rgba(0, 229, 255, 0.1);
        }

        .stat-item {
          text-align: center;
        }

        .stat-num {
          display: block;
          font-family: var(--font-headings);
          font-size: 3.5rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-family: var(--font-headings);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.3), transparent);
          margin: 1.5rem 0;
        }

        /* Core Values Cards */
        .values-grid {
          margin-top: 2rem;
        }

        .value-card {
          align-items: flex-start;
          text-align: left;
        }

        .value-icon-container {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--color-accent);
          transition: var(--transition-normal);
        }

        .value-card:hover .value-icon-container {
          background: var(--grad-primary);
          color: var(--text-white);
          border-color: transparent;
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);
          transform: scale(1.05);
        }

        .value-icon-svg {
          width: 26px;
          height: 26px;
        }

        .value-title {
          font-family: var(--font-headings);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 0.75rem;
        }

        .value-desc {
          font-size: 0.95rem;
          color: var(--text-normal);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-stats-panel {
            padding: 2rem;
          }
          .about-text-panel h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
