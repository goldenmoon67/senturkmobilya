'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section id="hakkimizda" className="about">
      <div className="container about__container">
        <div className="about__content" data-aos="fade-up">
          <h2 className="about__title">Hakkımızda</h2>
          <p className="about__text">
            Şentürk Mobilya, 20 yılı aşkın süredır modern ve özgün mobilya tasarımları üreten bir aile şirketidir. 
            Her bir parçamız, ustalık ve tutku ile el işçiliği kullanılarak üretilir. 
            Tasarımlarımız, modern çizgilerle geleneksel zanaatkârlığı birleştirerek, hem estetik hem de işlevsel mobilyalar sunar.
          </p>
          <p className="about__text">
            Kaliteli malzemeler ve sürdürülebilir üretim yöntemlerine olan bağlılığımız, uzun ömürlü ve çevreye duyarlı ürünler yaratmamızı sağlar. 
            Her bir mobilyamız, evinize veya iş yerinize karakter ve sıcaklık katmak için tasarlanmıştır.
          </p>
          
          <div className="about__stats" data-aos="fade-up" data-aos-delay="200">
            <div className="about__stat">
              <div className="about__stat-number">20+</div>
              <div className="about__stat-text">Yıllık Deneyim</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">500+</div>
              <div className="about__stat-text">Tamamlanan Proje</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">100%</div>
              <div className="about__stat-text">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
        
        <div className="about__gallery" data-aos="fade-up" data-aos-delay="100">
          <div className="about__image about__image--1">
            <Image 
              src="/workshop1.jpg" 
              alt="Şentürk Mobilya Atölyesi - Ustalık ve el işçiliği" 
              width={600} 
              height={400} 
              quality={90}
            />
          </div>
          <div className="about__image about__image--2">
            <Image 
              src="/workshop2.jpg" 
              alt="Şentürk Mobilya Tasarım Süreci" 
              width={500} 
              height={350} 
              quality={90}
            />
          </div>
          <div className="about__image about__image--3">
            <Image 
              src="/workshop3.jpg" 
              alt="Şentürk Mobilya Malzeme Seçimi" 
              width={400} 
              height={300} 
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
