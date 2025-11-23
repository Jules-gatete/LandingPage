import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">

      {/* Top Section */}
      <div className="footer__top">

        {/* Awareness + Updates */}
        <div className="footer__newsletter">
          <h3>Stay Informed</h3>
          <p>
            Get updates on safe medicine disposal, community awareness,
            and new UmutiSafe features.
          </p>

          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="footer__links">

          <div className="footer__col">
            <h4>UmutiSafe</h4>
            <a href="#about">About</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Support</a>
            <a href="#policy">Policy Center</a>
          </div>

          <div className="footer__col">
            <h4>Support</h4>
            <a href="#how-it-works">Disposal Guide</a>
            <a href="#contact">Contact</a>
            <a href="#policy-privacy">Privacy</a>
          </div>

          <div className="footer__col">
            <h4>Community</h4>
            <div className="footer__social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">YouTube</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          
          <small>
            © {new Date().getFullYear()} UmutiSafe.  
            Helping households dispose medicines safely.
          </small>

          <nav className="footer__bottom-nav">
            <a href="#policy-license">Terms</a>
            <a href="#policy-privacy">Privacy</a>
          </nav>

        </div>
      </div>

    </footer>
  )
}
