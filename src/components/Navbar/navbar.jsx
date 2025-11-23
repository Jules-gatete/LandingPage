import { useState } from 'react'
import logoMark from '../../assets/logo.svg?url'
import './navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(prev => !prev)
  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* Logo */}
        <a
          className="navbar__brand"
          href="#home"
          onClick={handleLinkClick}
          aria-label="UmutiSafe home"
        >
          <img className="navbar__logo" src={logoMark} alt="UmutiSafe Logo" />
          <span className="navbar__wordmark">UmutiSafe</span>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={handleToggle}
        >
          Menu
        </button>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={`navbar__nav${isOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul>
            <li><a href="#home" className="navbar__link is-active" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" className="navbar__link" onClick={handleLinkClick}>About</a></li>
            <li><a href="#how-it-works" className="navbar__link" onClick={handleLinkClick}>How It Works</a></li>
            <li><a href="#contact" className="navbar__link" onClick={handleLinkClick}>Contact</a></li>
            <li><a href="#policy" className="navbar__link" onClick={handleLinkClick}>Policy</a></li>
            <li><a href="#footer" className="navbar__link" onClick={handleLinkClick}>Updates</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}
