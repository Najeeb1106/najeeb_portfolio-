import { motion } from "framer-motion";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/References.css";

export default function References() {
  const { references } = PortfolioContent;

  return (
    <section className="references-section" id="references">
      <div className="references-container">
        <div className="references-header">
          <span className="references-tag">{references.tag}</span>
          <h2 className="references-title">
            {references.title} <span className="highlight">{references.titleHighlight}</span>
          </h2>
          <p className="references-desc">{references.description}</p>
        </div>

        <div className="references-grid">
          {references.list.map((item, index) => (
            <motion.div
              key={index}
              className="reference-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="quote-mark">“</div>
              
              <div className="ref-relationship">
                <span className="relationship-tag">{item.relationship}</span>
              </div>

              <div className="ref-meta">
                <h3 className="ref-name">{item.name}</h3>
                <p className="ref-role">{item.role}</p>
              </div>

              <div className="ref-contact">
                <a href={`mailto:${item.contact}`} className="ref-email-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {item.contact}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
