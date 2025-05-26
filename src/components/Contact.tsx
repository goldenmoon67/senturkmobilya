'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Simulate form submission
    // In a real project, this would be an API call to a form handling service like Formspree
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="iletisim" className="contact">
      <div className="container">
        <h2 className="contact__title" data-aos="fade-up">İletişim</h2>
        
        <div className="contact__container">
          {/* Google Maps */}
          <div className="contact__map" data-aos="fade-up" data-aos-delay="100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.2186900268313!2d28.950842615414547!3d41.05792792398576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a2a2c3b963%3A0x7671d1b9817b8519!2zxZ5pxZ9saSwgMzQzNzAgxZ5pxZ9saSvEsHN0YW5idWw!5e0!3m2!1str!2str!4v1621512269831!5m2!1str!2str" 
              loading="lazy"
              title="Şentürk Mobilya Konum"
              aria-label="Şentürk Mobilya Konum"
            ></iframe>
          </div>
          
          {/* Contact Form */}
          <div className="contact__form" data-aos="fade-up" data-aos-delay="200">
            {submitSuccess ? (
              <div className="contact__success">
                <h3>Mesajınız başarıyla gönderildi!</h3>
                <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact__input-group">
                  <label htmlFor="name" className="contact__label">Adınız</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="contact__input" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="contact__input-group">
                  <label htmlFor="email" className="contact__label">E-posta</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="contact__input" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="contact__input-group">
                  <label htmlFor="message" className="contact__label">Mesajınız</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="contact__textarea" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="contact__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                </button>
                
                {submitError && <p className="contact__error">{submitError}</p>}
              </form>
            )}
            
            <div className="contact__info">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                </div>
                <div className="contact__info-text">
                  <strong>Adres</strong>
                  Şişli, İstanbul, Türkiye
                </div>
              </div>
              
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4h-16c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-12c0-1.105-.895-2-2-2zm0 4.236l-8 4.882-8-4.882v-2.236l8 4.882 8-4.882v2.236z"/>
                  </svg>
                </div>
                <div className="contact__info-text">
                  <strong>E-posta</strong>
                  info@senturkmobilya.com
                </div>
              </div>
              
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                  </svg>
                </div>
                <div className="contact__info-text">
                  <strong>Telefon</strong>
                  +90 212 123 45 67
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <Link 
        href="https://wa.me/902121234567" 
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </Link>
    </section>
  );
};

export default Contact;
