import { motion } from 'framer-motion';
import { Layers, VolumeX, Shuffle, Zap } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Layers className="service-icon-svg" />,
      title: "Temporary Wall Systems",
      desc: "Containment solutions for active remodels."
    },
    {
      icon: <VolumeX className="service-icon-svg" />,
      title: "Dust & Noise Control",
      desc: "Maintain cleaner occupied spaces during construction."
    },
    {
      icon: <Shuffle className="service-icon-svg" />,
      title: "Retrofit Support",
      desc: "Flexible panel systems for phased renovations."
    },
    {
      icon: <Zap className="service-icon-svg" />,
      title: "Rapid Installation",
      desc: "Quick setup and removal to reduce downtime."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Core Services</span>
          <h2 className="text-metallic">What We Deliver</h2>
          <p className="section-desc">
            We provide specialized modular wall setups designed to keep remodels clean, quiet, and efficient.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid-4 services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesList.map((service, index) => (
            <motion.div 
              className="glass-card-interactive service-card"
              key={service.title}
              variants={cardVariants}
            >
              <div className="service-glow-effect"></div>
              
              <div className="service-icon-box">
                {service.icon}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc" style={{ marginBottom: 0 }}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <style>{`
        .services-section {
          background-color: var(--bg-primary);
          position: relative;
        }

        .services-grid {
          margin-top: 1rem;
        }

        .service-card {
          align-items: flex-start;
          text-align: left;
          border-color: rgba(255, 255, 255, 0.04);
        }

        .service-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(0, 82, 212, 0.2) 0%, rgba(0, 229, 255, 0.1) 100%);
          border: 1px solid rgba(0, 229, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--color-accent);
          transition: var(--transition-normal);
        }

        .service-card:hover .service-icon-box {
          background: var(--grad-primary);
          color: var(--text-white);
          border-color: transparent;
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);
          transform: scale(1.05) rotate(5deg);
        }

        .service-icon-svg {
          width: 24px;
          height: 24px;
        }

        .service-title {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 0.75rem;
        }

        .service-desc {
          font-size: 0.9rem;
          color: var(--text-normal);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .service-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1rem;
        }

        .service-features li {
          font-size: 0.8rem;
          color: var(--text-light);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
        }

        .bullet-point {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--color-accent);
          box-shadow: 0 0 5px var(--color-accent);
        }

        /* Ambient Glow Behind Service Card */
        .service-glow-effect {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%);
          filter: blur(15px);
          pointer-events: none;
          transition: var(--transition-normal);
          opacity: 0;
        }

        .service-card:hover .service-glow-effect {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
