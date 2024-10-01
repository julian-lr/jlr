import React from 'react';
import GitHubIcon from '../assets/icons/GitHub.svg';
import LinkedInIcon from '../assets/icons/LinkedIn.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logos">
          <a href="https://github.com/julian-lr" target="_blank" rel="noopener noreferrer" className="footer__link">
            <img src={GitHubIcon} alt="GitHub" className="footer__logo" />
          </a>
          <a href="https://www.linkedin.com/in/julian-lr/" target="_blank" rel="noopener noreferrer" className="footer__link">
            <img src={LinkedInIcon} alt="LinkedIn" className="footer__logo" />
          </a>
        </div>
        <div className="footer__text">Built by Julian LR</div>
      </div>
    </footer>
  );
}

export default Footer;