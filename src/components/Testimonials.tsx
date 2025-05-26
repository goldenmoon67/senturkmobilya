'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Sample testimonial data
  // In a real project, this would come from a CMS or API
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      role: 'Mimar',
      image: '/testimonial1.jpg',
      quote: 'Şentürk Mobilya ile çalışmak harika bir deneyimdi. Müşterilerim için tasarladığım projeyi tam olarak anladılar ve beklentilerimin ötesinde bir ürün teslim ettiler.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Ayşe Kaya',
      role: 'İç Mimar',
      image: '/testimonial2.jpg',
      quote: 'Kalite ve detaylara verdikleri önem gerçekten etkileyici. Evim için sipariş ettiğim tüm mobilyalar mükemmel bir işçilikle teslim edildi ve tam zamanında geldi.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Mehmet Çelik',
      role: 'Ev Sahibi',
      image: '/testimonial3.jpg',
      quote: 'Oturma odası için aldığımız köşe koltuk takımı hem çok şık hem de son derece rahat. Şentürk Mobilya’nın profesyonel yaklaşımı ve kaliteli ürünleri için teşekkür ederiz.',
      rating: 4,
    },
  ];

  // Generate star rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="testimonials__star">
          {i < rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <section id="referans" className="testimonials">
      <div className="container">
        <h2 className="testimonials__title" data-aos="fade-up">Referanslarımız</h2>
        
        <div className="testimonials__slider" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonials__item">
                  <div className="testimonials__image">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={100} 
                      height={100}
                    />
                  </div>
                  <p className="testimonials__quote">{testimonial.quote}</p>
                  <h3 className="testimonials__name">{testimonial.name}</h3>
                  <p className="testimonials__role">{testimonial.role}</p>
                  <div className="testimonials__rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
