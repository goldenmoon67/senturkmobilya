'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        console.log(section)
        
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });
      console.log(currentSection)
      if (currentSection !== activeSection && currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar__container">
        <Link href="#home" className="navbar__logo" onClick={closeMenu}>
          ŞENTÜRK MOBİLYA
        </Link>
        
        <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar__item">
            <Link 
              href="#home" 
              className={`navbar__link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Ana Sayfa
            </Link>
          </li>
          <li className="navbar__item">
            <Link 
              href="#hakkimizda" 
              className={`navbar__link ${activeSection === 'hakkimizda' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Hakkımızda
            </Link>
          </li>
          <li className="navbar__item">
            <Link 
              href="#urunlerimiz" 
              className={`navbar__link ${activeSection === 'urunlerimiz' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Ürünlerimiz
            </Link>
          </li>
          <li className="navbar__item">
            <Link 
              href="#sosyal" 
              className={`navbar__link ${activeSection === 'sosyal' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Sosyal Medya
            </Link>
          </li>
          <li className="navbar__item">
            <Link 
              href="#referans" 
              className={`navbar__link ${activeSection === 'referans' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Referanslar
            </Link>
          </li>
          <li className="navbar__item">
            <Link 
              href="#iletisim" 
              className={`navbar__link ${activeSection === 'iletisim' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              İletişim
            </Link>
          </li>
        </ul>
        
        <div 
          className={`navbar__hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <div className="navbar__hamburger-line"></div>
          <div className="navbar__hamburger-line"></div>
          <div className="navbar__hamburger-line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
