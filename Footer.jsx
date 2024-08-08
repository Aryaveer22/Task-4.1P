import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section1">
        <h3>Explore</h3>
        <div className="footer-links">
          <div className="footer-link">Home</div>
          <div className="footer-link">Questions</div>
          <div className="footer-link">Articles</div>
          <div className="footer-link">Tutorials</div>
        </div>
      </div>
      <div className="footer-section1">
        <h3>Support</h3>
        <div className="footer-links">
          <div className="footer-link">FAQs</div>
          <div className="footer-link">Help</div>
          <div className="footer-link">Contact Us</div>
        </div>
      </div>
      <div className="footer-section2">
        <h3>Stay connected</h3>
        <div className="social-icons">
          <img src={require('./images/facebook.png')} alt="Facebook" className="icon" />
          <img src={require('./images/twitter.png')} alt="Twitter" className="icon" />
          <img src={require('./images/instagram.png')} alt="Instagram" className="icon" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>DEV@Deakin 2024</p>
        <div className="footer-bottom-links">
          <div className="footer-bottom-link">Privacy Policy</div>
          <div className="footer-bottom-link">Terms</div>
          <div className="footer-bottom-link">Code of Conduct</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
