'use client';

import { useEffect } from 'react';

/**
 * ScriptLoader component
 * 
 * This component handles loading and initializing client-side scripts
 * after the page has fully loaded. This helps with issues related to
 * libraries that depend on the DOM being fully available.
 */
const ScriptLoader = () => {
  useEffect(() => {
    // Initialize libraries that need to be loaded after DOM is ready
    const loadScripts = async () => {
      try {
        // Import AOS and initialize it
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 800,
          once: false, // Changed to false to re-animate when scrolling back
          mirror: true, // Animate elements when scrolling back into view
        });
        
        console.log('AOS initialized successfully');
        
        // Force refresh AOS on window resize to fix potential layout issues
        window.addEventListener('resize', () => {
          AOS.refresh();
        });
        
        // Add any other script initialization here
      } catch (error) {
        console.error('Error initializing scripts:', error);
      }
    };
    
    // Run script loader after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadScripts();
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default ScriptLoader;
