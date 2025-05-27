'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [isLightSection, setIsLightSection] = useState(true);

  // Mobil cihaz kontrolü
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // İlk yükleme kontrolü
    checkIfMobile();
    
    // Ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      let onLightSection = true;
      
      sections.forEach((section) => {
        console.log(section)
        
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId;
          
          // Check if this section has a dark background
          const isDarkSection = ['urunlerimiz', 'referans'].includes(sectionId);
          onLightSection = !isDarkSection;
        }
      });
      console.log(currentSection)
      if (currentSection !== activeSection && currentSection) {
        setActiveSection(currentSection);
      }
      
      // Update navbar color based on section background
      setIsLightSection(onLightSection);
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#121212',
        color: '#ffffff',
        transition: 'all 0.3s ease',
        padding: '15px 0',
        boxShadow: isScrolled ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none'
      }}>
      <div className="container navbar__container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link 
          href="#home" 
          className="navbar__logo" 
          onClick={closeMenu}
          style={{
            padding: '10px 15px',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            letterSpacing: '1px',
            display: 'inline-block'
          }}
        >
          ŞENTÜRK MOBİLYA
        </Link>
        
        <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`} style={{
          display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          position: isMobile ? 'absolute' : 'relative',
          top: isMobile ? '100%' : 'auto',
          left: isMobile ? 0 : 'auto',
          right: isMobile ? 0 : 'auto',
          backgroundColor: isMobile ? '#121212' : 'transparent',
          padding: isMobile ? '20px' : 0,
          boxShadow: isMobile ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
          listStyle: 'none',
          margin: 0,
          gap: '20px',
          zIndex: 1001
        }}>
          <li className="navbar__item" style={{ margin: 0, padding: 0 }}>
            <Link 
              href="#home" 
              className={`navbar__link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={closeMenu}
              style={{
                color: activeSection === 'home' ? 'var(--accent-color)' : (isLightSection ? 'var(--text-light)' : 'var(--text-dark)'),
                textDecoration: 'none',
                fontWeight: 500,
                padding: '8px 12px',
                transition: 'all 0.3s ease',
                borderBottom: activeSection === 'home' ? '2px solid #d3a95c' : '2px solid transparent'
              }}
            >
              Ana Sayfa
            </Link>
          </li>
          <li className="navbar__item" style={{ margin: 0, padding: 0 }}>
            <Link 
              href="#hakkimizda" 
              className={`navbar__link ${activeSection === 'hakkimizda' ? 'active' : ''}`}
              onClick={closeMenu}
              style={{
                color: activeSection === 'hakkimizda' ? 'var(--accent-color)' : (isLightSection ? 'var(--text-light)' : 'var(--text-dark)'),
                textDecoration: 'none',
                fontWeight: 500,
                padding: '8px 12px',
                transition: 'all 0.3s ease',
                borderBottom: activeSection === 'hakkimizda' ? '2px solid #d3a95c' : '2px solid transparent'
              }}
            >
              Hakkımızda
            </Link>
          </li>
          <li className="navbar__item" style={{ margin: 0, padding: 0 }}>
            <Link 
              href="#urunlerimiz" 
              className={`navbar__link ${activeSection === 'urunlerimiz' ? 'active' : ''}`}
              onClick={closeMenu}
              style={{
                color: activeSection === 'urunlerimiz' ? 'var(--accent-color)' : (isLightSection ? 'var(--text-light)' : 'var(--text-dark)'),
                textDecoration: 'none',
                fontWeight: 500,
                padding: '8px 12px',
                transition: 'all 0.3s ease',
                borderBottom: activeSection === 'urunlerimiz' ? '2px solid #d3a95c' : '2px solid transparent'
              }}
            >
              Ürünlerimiz
            </Link>
          </li>
          <li className="navbar__item" style={{ margin: 0, padding: 0 }}>
            <Link 
              href="#sosyal" 
              className={`navbar__link ${activeSection === 'sosyal' ? 'active' : ''}`}
              onClick={closeMenu}
              style={{
                color: activeSection === 'sosyal' ? 'var(--accent-color)' : (isLightSection ? 'var(--text-light)' : 'var(--text-dark)'),
                textDecoration: 'none',
                fontWeight: 500,
                padding: '8px 12px',
                transition: 'all 0.3s ease',
                borderBottom: activeSection === 'sosyal' ? '2px solid #d3a95c' : '2px solid transparent'
              }}
            >
              Sosyal Medya
            </Link>
          </li>
          <li className="navbar__item" style={{ margin: 0, padding: 0 }}>
            <Link 
              href="#referans" 
              className={`navbar__link ${activeSection === 'referans' ? 'active' : ''}`}
              onClick={closeMenu}
              style={{
                color: activeSection === 'referans' ? 'var(--accent-color)' : (isLightSection ? 'var(--text-light)' : 'var(--text-dark)'),
                textDecoration: 'none',
                fontWeight: 500,
                padding: '8px 12px',
                transition: 'all 0.3s ease',
                borderBottom: activeSection === 'referans' ? '2px solid #d3a95c' : '2px solid transparent'
              }}
            >
              Referanslar
            </Link>
          </li>
          <li className="navbar__item" style={{ margin: 0, padding: 0 }}>
            <Link 
              href="#iletisim" 
              className={`navbar__link ${activeSection === 'iletisim' ? 'active' : ''}`}
              onClick={closeMenu}
              style={{
                color: activeSection === 'iletisim' ? 'var(--accent-color)' : (isLightSection ? 'var(--text-light)' : 'var(--text-dark)'),
                textDecoration: 'none',
                fontWeight: 500,
                padding: '8px 12px',
                transition: 'all 0.3s ease',
                borderBottom: activeSection === 'iletisim' ? '2px solid #d3a95c' : '2px solid transparent'
              }}
            >
              İletişim
            </Link>
          </li>
        </ul>
        
        {isMobile && (
          <div 
            className={`navbar__hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '30px',
              height: '22px',
              cursor: 'pointer',
              zIndex: 1002
            }}
          >
            <div className="navbar__hamburger-line" style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'white',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
            }}></div>
            <div className="navbar__hamburger-line" style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'white',
              transition: 'all 0.3s ease',
              opacity: isMenuOpen ? 0 : 1
            }}></div>
            <div className="navbar__hamburger-line" style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'white',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
            }}></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
