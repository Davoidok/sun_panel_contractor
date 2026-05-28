import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Mail, Phone, User, CheckCircle2, ChevronRight, ShieldAlert } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypes = [
    "Temporary Wall Systems",
    "Dust & Noise Isolation",
    "Retrofit / Remodel Support",
    "Healthcare / ICRA Containment",
    "Commercial Space Division",
    "Sustainable Support Services"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.projectType) tempErrors.projectType = "Please select a project type";
    if (!formData.message.trim()) tempErrors.message = "Project details are required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="section contact-section bg-gradient-glow">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get Started</span>
          <h2 className="text-metallic">Ready To Improve Your Next Remodel Project?</h2>
          <p className="section-desc">
            Get in touch with our containment experts today to secure your site layout, 
            control dust and debris, and maintain full business operations.
          </p>
        </div>

        {/* Form Wrap */}
        <div className="contact-wrapper">
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.div 
                className="contact-card glass-panel"
                key="contact-form-key"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-grid">
                    
                    {/* Full Name */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        <span className="label-icon"><User size={14} /></span> Full Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                      />
                      {errors.name && <span className="error-text"><ShieldAlert size={12} /> {errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        <span className="label-icon"><Mail size={14} /></span> Business Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@company.com" 
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                      />
                      {errors.email && <span className="error-text"><ShieldAlert size={12} /> {errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        <span className="label-icon"><Phone size={14} /></span> Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 000-0000" 
                        className={`form-input ${errors.phone ? 'input-error' : ''}`}
                      />
                      {errors.phone && <span className="error-text"><ShieldAlert size={12} /> {errors.phone}</span>}
                    </div>

                    {/* Project Type */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="projectType">
                        <span className="label-icon"><Calendar size={14} /></span> Project Service
                      </label>
                      <select 
                        id="projectType" 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className={`form-select ${errors.projectType ? 'input-error' : ''}`}
                      >
                        <option value="">Select services needed...</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.projectType && <span className="error-text"><ShieldAlert size={12} /> {errors.projectType}</span>}
                    </div>

                    {/* Message */}
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="message">
                        Describe your temporary containment needs (timeline, dimensions, facility type)
                      </label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please details your requirements here. (e.g. 50 linear feet of walls, 12ft high, hospital corridor...)" 
                        className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      ></textarea>
                      {errors.message && <span className="error-text"><ShieldAlert size={12} /> {errors.message}</span>}
                    </div>

                  </div>

                  {/* Submit Button */}
                  <div className="form-submit-area">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="spinner-loader"></span>
                      ) : (
                        <>Schedule Consultation <ChevronRight size={18} /></>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                className="contact-card success-card glass-panel"
                key="success-receipt-key"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon-wrap">
                  <CheckCircle2 className="success-icon-svg" />
                </div>
                <h3>Consultation Scheduled!</h3>
                <p className="success-intro">
                  Thank you, <strong>{formData.name}</strong>. Your consultation request for <strong>{formData.projectType}</strong> has been successfully received.
                </p>
                <div className="success-receipt-details">
                  <h4>Request Confirmation</h4>
                  <div className="receipt-row">
                    <span className="receipt-label">Client Name:</span>
                    <span className="receipt-value">{formData.name}</span>
                  </div>
                  <div className="receipt-row">
                    <span className="receipt-label">Contact Email:</span>
                    <span className="receipt-value">{formData.email}</span>
                  </div>
                  <div className="receipt-row">
                    <span className="receipt-label">Phone Number:</span>
                    <span className="receipt-value">{formData.phone}</span>
                  </div>
                  <div className="receipt-row">
                    <span className="receipt-label">Service Type:</span>
                    <span className="receipt-value">{formData.projectType}</span>
                  </div>
                </div>
                <p className="success-footer">
                  Our temporary wall specialists will review your requirements and reach out to you within 24 business hours to finalize a schedule.
                </p>
                <button 
                  onClick={resetForm} 
                  className="btn btn-secondary btn-new-request"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-secondary);
          position: relative;
        }

        .contact-wrapper {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .contact-card {
          padding: 3rem;
          border-color: rgba(0, 229, 255, 0.2);
          box-shadow: var(--shadow-glow), var(--shadow-lg);
          background: rgba(12, 17, 34, 0.7);
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .full-width {
          grid-column: span 2;
        }

        .label-icon {
          display: inline-flex;
          align-items: center;
          margin-right: 0.25rem;
          color: var(--color-accent);
        }

        .input-error {
          border-color: #ef4444 !important;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.15) !important;
        }

        .error-text {
          color: #ef4444;
          font-size: 0.75rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          text-align: left;
        }

        .form-submit-area {
          margin-top: 2rem;
          display: flex;
          justify-content: flex-end;
        }

        .btn-submit {
          width: auto;
          min-width: 240px;
        }

        /* Loading Spinner */
        .spinner-loader {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: var(--text-white);
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Success Card Styling */
        .success-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4rem 3rem;
        }

        .success-icon-wrap {
          color: var(--color-accent);
          filter: drop-shadow(0 0 10px rgba(0, 229, 255, 0.4));
          margin-bottom: 1.5rem;
        }

        .success-icon-svg {
          width: 64px;
          height: 64px;
        }

        .success-card h3 {
          font-family: var(--font-headings);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-light);
          margin-bottom: 1rem;
        }

        .success-intro {
          font-size: 1.05rem;
          color: var(--text-normal);
          max-width: 580px;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .success-intro strong {
          color: var(--text-light);
        }

        .success-receipt-details {
          background: rgba(8, 12, 20, 0.6);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 1.5rem;
          width: 100%;
          max-width: 480px;
          margin-bottom: 2rem;
          text-align: left;
        }

        .success-receipt-details h4 {
          font-family: var(--font-headings);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-accent);
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.5rem;
        }

        .receipt-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
        }

        .receipt-row:last-child {
          margin-bottom: 0;
        }

        .receipt-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .receipt-value {
          color: var(--text-light);
          font-weight: 600;
        }

        .success-footer {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .btn-new-request {
          min-width: 200px;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .full-width {
            grid-column: span 1;
          }
          .contact-card {
            padding: 2rem 1.5rem;
          }
          .form-submit-area {
            justify-content: center;
          }
          .btn-submit {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
