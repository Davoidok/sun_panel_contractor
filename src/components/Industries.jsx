import { motion } from 'framer-motion';
import { HeartPulse, ShoppingBag, Building2, Home, BedDouble, GraduationCap } from 'lucide-react';

export default function Industries() {
  const industriesList = [
    {
      icon: <HeartPulse className="ind-icon-svg" />,
      title: "Healthcare Facilities",
      desc: "Dust containment and room division solutions for active medical retrofits and facility upgrades."
    },
    {
      icon: <ShoppingBag className="ind-icon-svg" />,
      title: "Retail Spaces",
      desc: "Maintain clean and safe environments for customers and workers during active retail store renovations."
    },
    {
      icon: <Building2 className="ind-icon-svg" />,
      title: "Commercial Offices",
      desc: "Minimize business disruption during occupied office space division and corporate remodel projects."
    },
    {
      icon: <Home className="ind-icon-svg" />,
      title: "Multifamily Properties",
      desc: "Efficient and eco-conscious room division and corridor partitioning during tenant improvements."
    },
    {
      icon: <BedDouble className="ind-icon-svg" />,
      title: "Hospitality Environments",
      desc: "Professional appearance and dust containment solutions during occupied hotel renovations."
    },
    {
      icon: <GraduationCap className="ind-icon-svg" />,
      title: "Educational Institutions",
      desc: "Rapid installation and removal of partition systems for school and university remodels."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="industries" className="section industries-section bg-gradient-glow">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Industries Served</span>
          <h2 className="text-metallic">Containment Across Sectors</h2>
          <p className="section-desc">
            We help property managers and contractors maintain safe, clean, and functional spaces 
            across a wide range of active construction environments.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid-3 industries-grid">
          {industriesList.map((ind, index) => (
            <motion.div 
              className="glass-card-interactive industry-card"
              key={ind.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <div className="industry-card-overlay"></div>
              
              <div className="ind-icon-wrap">
                {ind.icon}
              </div>

              <h3 className="ind-title">{ind.title}</h3>
              <p className="ind-desc" style={{ marginBottom: 0 }}>{ind.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .industries-section {
          background-color: var(--bg-secondary);
        }

        .industries-grid {
          margin-top: 1rem;
        }

        .industry-card {
          align-items: flex-start;
          text-align: left;
          border-color: rgba(255, 255, 255, 0.04);
          justify-content: space-between;
        }

        .ind-icon-wrap {
          color: var(--color-accent);
          background: rgba(0, 229, 255, 0.05);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 229, 255, 0.15);
          margin-bottom: 1.5rem;
          transition: var(--transition-normal);
        }

        .industry-card:hover .ind-icon-wrap {
          background: var(--grad-primary);
          color: var(--text-white);
          border-color: transparent;
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);
          transform: scale(1.1);
        }

        .ind-icon-svg {
          width: 22px;
          height: 22px;
        }

        .ind-title {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }

        .ind-desc {
          font-size: 0.88rem;
          color: var(--text-normal);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .ind-projects-wrap {
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .ind-projects-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ind-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .ind-tag {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-normal);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          transition: var(--transition-fast);
        }

        .industry-card:hover .ind-tag {
          border-color: rgba(0, 229, 255, 0.2);
          color: var(--text-light);
          background: rgba(0, 229, 255, 0.02);
        }

        /* Hover overlay animation */
        .industry-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 82, 212, 0.08) 0%, transparent 100%);
          opacity: 0;
          transition: var(--transition-normal);
          pointer-events: none;
        }

        .industry-card:hover .industry-card-overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
