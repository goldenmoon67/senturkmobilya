'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Arka plan fotoğrafları
  const gridImages = [
    '/furniture1.jpg',
    '/furniture2.jpg',
    '/furniture3.jpg',
    '/furniture4.jpg',
    '/furniture5.jpg',
    '/furniture6.jpg',
  ];
  
  useEffect(() => {
    console.log('Hero component mounted');
  }, []);

  return (
    <section id="home">
    <div className="hero" ref={heroRef} style={{ 
      position: 'relative', 
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#121212',
      color: 'white',
      overflow: 'hidden',
      padding: '0 20px'
    }}>
      {/* Arka plan resim grid'i */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '10px',
        padding: '20px',
        opacity: 0.6
      }}>
        {gridImages.map((image, index) => (
          <div key={index} style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }}>
            <Image 
              src={image} 
              alt="Mobilya" 
              fill
              style={{
                objectFit: 'cover'
              }}
              priority={index < 3} // İlk 3 resmi öncelikli yükle
            />
          </div>
        ))}
      </div>
      
      <div className="hero__content" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '800px'
      }}>
        <h1 className="hero__title" style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          lineHeight: 1.2,
          color: 'white'
        }}>
          <span style={{ display: 'block' }}>Şentürk</span>
          <span style={{ display: 'block' }}>Mobilya</span>
        </h1>
        <p className="hero__subtitle" style={{
          fontSize: '1.5rem',
          marginBottom: '30px',
          maxWidth: '600px',
          margin: '0 auto 30px auto',
          color: '#f5f5f5'
        }}>
          El yapımı, özgün ve modern mobilya tasarımları ile yaşam alanlarınızı dönüştürün.
        </p>
        <Link href="#urunlerimiz" className="hero__cta" style={{
          display: 'inline-block',
          padding: '15px 30px',
          backgroundColor: '#d3a95c',
          color: 'white',
          borderRadius: '4px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          textDecoration: 'none'
        }}>
          Ürünlerimizi Keşfedin
        </Link>
      </div>
      
      <div className="hero__overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 1
      }}></div>
    </div>
    </section>
  );
};

export default Hero;
