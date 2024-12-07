import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Priyanshu Pande. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <ul>
            <li>
              <a href="https://github.com/priyanshuwebd" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/priyanshu-pande/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:priyanshupande23@gmail.com" target="_blank" rel="noopener noreferrer">
                Email
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <p>Made with 💻 & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
