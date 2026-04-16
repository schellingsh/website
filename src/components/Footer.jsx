import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="logo">schelling.sh</span>
          <p>Start from what was learned.</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/docs">Install</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="mailto:hello@schelling.sh">hello@schelling.sh</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 schelling.sh. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
