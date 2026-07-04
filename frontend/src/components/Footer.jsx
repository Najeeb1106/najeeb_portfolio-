import { useLocation, useNavigate, Link } from "react-router-dom";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Footer.css";

export default function Footer() {
  const { footer } = PortfolioContent;
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.replace('#', '');
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
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-dot" />
            <span className="brand-text">{footer.brand}</span>
          </div>
          <p className="footer-text">{footer.text}</p>
        </div>

        <div className="footer-links">
          {footer.links.map((link, index) => {
            if (link.href.startsWith('/')) {
              return (
                <Link key={index} to={link.href}>
                  {link.label}
                </Link>
              );
            }
            return (
              <a key={index} href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Najeeb Ullah Tahir. All rights reserved.</span>
          <span className="footer-heart">{footer.heart}</span>
        </div>
      </div>
    </footer>
  );
}