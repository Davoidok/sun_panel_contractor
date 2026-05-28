import { motion } from 'framer-motion';
import { Leaf, Clock, Eye, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf className="why-icon" />,
      title: "Eco-Friendly Approach",
      desc: "Reusable systems that reduce construction waste."
    },
    {
      icon: <Clock className="why-icon" />,
      title: "Minimal Business Disruption",
      desc: "Ideal for occupied renovations."
    },
    {
      icon: <Eye className="why-icon" />,
      title: "Professional Appearance",
      desc: "Clean modern systems versus plastic barriers."
    },
    {
      icon: <ShieldCheck className="why-icon" />,
      title: "Fast Turnaround",
      desc: "Efficient installation and removal scheduling."
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="why-choose-us" className="section why-choose-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="text-metallic">The Titan Shield Advantage</h2>
          <p className="section-desc">
            We provide clean, flexible temporary containment walls that help contractors 
            and managers maintain clean, safe environments.
          </p>
        </div>

        {/* Features 2x2 Grid */}
        <motion.div 
          className="grid-2 why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat) => (
            <motion.div 
              className="why-feature-card glass-card-interactive"
              key={feat.title}
              variants={cardVariants}
            >
              <div className="why-icon-box">
                {feat.icon}
              </div>
              <div className="why-feature-text">
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <style>{`
        .why-choose-section {
          background-color: var(--bg-primary);
        }

        .why-grid {
          gap: 2rem;
          margin-top: 1rem;
        }

        .why-feature-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          border-color: rgba(255, 255, 255, 0.04);
          text-align: left;
        }

        .why-icon-box {
          color: var(--color-accent);
          flex-shrink: 0;
          width: 54px;
          height: 54px;
          border-radius: 12px;
          background: rgba(0, 229, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 229, 255, 0.15);
          transition: var(--transition-normal);
        }

        .why-feature-card:hover .why-icon-box {
          background: var(--grad-primary);
          color: var(--text-white);
          border-color: transparent;
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);
        }

        .why-icon {
          width: 24px;
          height: 24px;
        }

        .why-feature-text h3 {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }

        .why-feature-text p {
          font-size: 0.95rem;
          color: var(--text-normal);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .why-feature-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
