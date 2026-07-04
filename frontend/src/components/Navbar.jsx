import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/navbar.css";

export default function Navbar() {
  const { navbar } = PortfolioContent;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const sectionId = id.replace('#', '');
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 200);
      setOpen(false);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      } else if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setOpen(false);
      }
    }
  };

  const handleDownloadCV = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Najeeb_Ullah_Tahir_CV_v2.docx";
      link.download = "Najeeb_Ullah_Tahir_CV_v2.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 800);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <div className="nav-brand" onClick={() => scrollToSection("#home")}>
          <div className="brand-glow" />
          <span className="brand-dot" />
          <span className="brand-text">{navbar.brand}</span>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navbar.links.map((link, i) => (
            <motion.li 
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}>
                {link.label}
                <span className="link-underline" />
              </a>
            </motion.li>
          ))}
          <li className="mobile-cta">
            <div className="mobile-cta-group">
              <button className="nav-btn-hire" onClick={() => scrollToSection("#contact")}>
                Hire Me
              </button>
              <button className="nav-btn-cv" onClick={handleDownloadCV} disabled={isDownloading}>
                {isDownloading ? (
                  <span>Downloading...</span>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download CV
                  </>
                )}
              </button>
            </div>
          </li>
        </ul>

        <div className="nav-cta-group">
          <button className="nav-btn-hire" onClick={() => scrollToSection("#contact")}>
            Hire Me
          </button>
          <button className="nav-btn-cv" onClick={handleDownloadCV} disabled={isDownloading}>
            {isDownloading ? (
              <span>Downloading...</span>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span style={{ verticalAlign: 'middle' }}>Download CV</span>
              </>
            )}
          </button>
        </div>

        <button 
          className={`burger ${open ? "open" : ""}`} 
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </motion.nav>
  );
}