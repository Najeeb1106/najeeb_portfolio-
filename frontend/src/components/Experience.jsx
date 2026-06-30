import { motion } from "framer-motion";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Experience.css";

export default function Experience() {
  const { experience } = PortfolioContent;

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-header">
          <span className="experience-tag">{experience.tag}</span>
          <h2 className="experience-title">
            {experience.title} <span className="highlight">{experience.titleHighlight}</span>
          </h2>
          <p className="experience-desc">{experience.description}</p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {experience.list.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              {/* Timeline Center Node */}
              <div className="timeline-node">
                <div className="node-pulse" />
                <div className="node-core" />
              </div>

              {/* Timeline Card */}
              <motion.div
                className="timeline-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.15 }}
              >
                <div className="card-header">
                  <span className="job-duration">{item.duration}</span>
                  <h3 className="job-role">{item.role}</h3>
                  <div className="company-info">
                    <span className="job-company">{item.company}</span>
                    <span className="company-separator">•</span>
                    <span className="job-location">{item.location}</span>
                  </div>
                </div>

                <p className="job-description">{item.description}</p>

                <ul className="job-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="job-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="job-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
