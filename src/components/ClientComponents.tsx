'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Import components with dynamic loading for client components
const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const Hero = dynamic(() => import('./Hero'), { ssr: false });
const About = dynamic(() => import('./About'), { ssr: false });
// Load Products with higher priority and no SSR to avoid hydration issues
const Products = dynamic(() => import('./Products'), { 
  ssr: false,
  loading: () => <div className="loading-placeholder">Ürünler yükleniyor...</div>
});
const Social = dynamic(() => import('./Social'), { ssr: false });
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false });
const Contact = dynamic(() => import('./Contact'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

// Add a client-side only script loader component
const ScriptLoader = dynamic(
  () => import('./ScriptLoader'),
  { ssr: false }
);

// Client component that wraps all dynamically loaded components
export default function ClientComponents() {


  return (
    <>
      <ScriptLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Social />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
