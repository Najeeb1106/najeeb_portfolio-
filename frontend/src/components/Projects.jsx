import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Projects.css";

const GooglePlayIcon = ({ size = 14, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    style={{ flexShrink: 0 }}
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.352-.338-.61-.926-.61-1.686V3.5c0-.76.258-1.348.61-1.686zM15.207 13.414l2.543 2.543-12.802 7.424 10.259-9.967zM15.207 10.586L4.948.619 17.75 8.043l-2.543 2.543zm1.414 1.414l3.784-2.195c.801-.465.801-1.22 0-1.685l-3.784-2.195-2.121 2.121 2.121 2.121z"/>
  </svg>
);

export default function Projects() {
  const { projects } = PortfolioContent;
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = filter === "all" 
    ? projects.items 
    : projects.items.filter(p => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <span className="section-tag">{projects.tag}</span>
          <h2 className="section-title">
            {projects.title} <span className="highlight">{projects.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {projects.description}
          </p>
        </motion.div>

        <div className="projects-filters">
          {projects.categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const isGooglePlay = project.liveUrl && (project.liveType === "playstore" || project.liveUrl.includes("play.google.com"));
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="project-card"
              >
                <div className="project-image">
                  {project.statusBadge && (
                    <div className="project-card-badge">
                      <span className="live-pulse"></span>
                      {isGooglePlay && <GooglePlayIcon size={12} />}
                      <span>{project.statusBadge}</span>
                    </div>
                  )}
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="project-img"
                      loading="lazy"
                    />
                  ) : (
                    <span className="project-emoji">{project.emoji || "📁"}</span>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button 
                      onClick={() => openModal(project)} 
                      className="project-action-btn details"
                    >
                      Details
                    </button>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`project-action-btn live ${isGooglePlay ? 'playstore' : ''}`}
                      >
                        {isGooglePlay ? (
                          <>
                            <GooglePlayIcon size={14} />
                            <span>Google Play</span>
                          </>
                        ) : (
                          "Live Demo"
                        )}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-action-btn github"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (() => {
          const isGooglePlayModal = selectedProject.liveUrl && (
            selectedProject.liveType === "playstore" || 
            selectedProject.liveUrl.includes("play.google.com")
          );

          return (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <div className="modal-image">
                  {selectedProject.statusBadge && (
                    <div className="project-card-badge modal-badge">
                      <span className="live-pulse"></span>
                      {isGooglePlayModal && <GooglePlayIcon size={12} />}
                      <span>{selectedProject.statusBadge}</span>
                    </div>
                  )}
                  {selectedProject.imageUrl ? (
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title}
                      loading="lazy"
                    />
                  ) : (
                    <span className="modal-emoji">{selectedProject.emoji || "📁"}</span>
                  )}
                </div>

                <div className="modal-body">
                  <div className="modal-header-row">
                    <h2 className="modal-title">{selectedProject.title}</h2>
                  </div>
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  {selectedProject.features && (
                    <div className="modal-features-container">
                      <h4 className="modal-features-title">Key Features:</h4>
                      <ul className="modal-features-list">
                        {selectedProject.features.map((feat, idx) => (
                          <li key={idx}>
                            <span className="feature-check">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="modal-tags">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="modal-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="modal-actions">
                    {selectedProject.liveUrl ? (
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`modal-btn primary ${isGooglePlayModal ? 'playstore' : ''}`}
                      >
                        {isGooglePlayModal ? (
                          <>
                            <GooglePlayIcon size={18} />
                            <span>View on Google Play</span>
                          </>
                        ) : (
                          <>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                              <path d="M2 12h20M12 2c2.5 2.5 3.5 6 3.5 10s-1 7.5-3.5 10c-2.5-2.5-3.5-6-3.5-10s1-7.5 3.5-10z" />
                            </svg>
                            <span>Live Site</span>
                          </>
                        )}
                      </a>
                    ) : (
                      <button 
                        className="modal-btn primary disabled"
                        disabled
                        title="Not live yet"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                          <path d="M2 12h20M12 2c2.5 2.5 3.5 6 3.5 10s-1 7.5-3.5 10c-2.5-2.5-3.5-6-3.5-10s1-7.5 3.5-10z" />
                        </svg>
                        <span>Not Live Yet</span>
                      </button>
                    )}
                    
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-btn secondary"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  {!selectedProject.liveUrl && selectedProject.githubUrl && (
                    <p className="modal-note">This project is currently in development. Check back soon for the live version!</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}