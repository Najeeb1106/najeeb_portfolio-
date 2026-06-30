import { motion } from "framer-motion";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Certifications.css";

export default function Certifications() {
  const { certifications } = PortfolioContent;

  return (
    <section className="certifications" id="certifications">
      <div className="certs-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="certs-header"
        >
          <span className="section-tag">{certifications.tag}</span>
          <h2 className="section-title">
            {certifications.title} <span className="highlight">{certifications.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{certifications.description}</p>
        </motion.div>

        <div className="certs-grid">
          {certifications.list.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="cert-card"
            >
              <div className="cert-glow" />
              <div className="cert-header">
                <div className="cert-logo-wrapper">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="cert-logo"
                    width="24"
                    height="24"
                  />
                </div>
                <span className="cert-date">{cert.date}</span>
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
                <p className="cert-desc">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
