import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright">© 2024 Showtime</div>
        <div className="made-by">
          Made by{" "}
          <a
            href="https://github.com/nikhilgugwad"
            target="_blank"
            rel="noopener noreferrer"
            className="author"
          >
            Nikhil Gugwad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
