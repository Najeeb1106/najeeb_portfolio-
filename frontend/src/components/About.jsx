import { motion } from "framer-motion";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/About.css";

export default function About() {
  const { about } = PortfolioContent;

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-header"
        >
          <span className="section-tag">{about.tag}</span>
          <h2 className="section-title">
            {about.title} <span className="highlight">{about.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-content"
          >
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-text">
                {paragraph}
              </p>
            ))}
            
            <div className="about-stats">
              {about.stats.map((stat, index) => (
                <div key={index} className="about-stat">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="skills-badge-container"
          >
            <h3 className="skills-badge-title">Core Proficiency Areas</h3>
            <p className="skills-badge-subtitle">Practical engineering fields and methodologies I apply across projects.</p>
            <div className="skills-badge-grid">
              {about.skills.map((skill, index) => (
                <div key={index} className="skill-badge-item">
                  <span className="skill-badge-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}