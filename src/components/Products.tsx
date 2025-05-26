'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  filterCategory: 'oturma' | 'depolama' | 'masa';
}

const Products = () => {
  const [filterKey, setFilterKey] = useState<string>('*');
  const [mounted, setMounted] = useState(false);

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      title: 'Modern Koltuk Takımı',
      category: 'Oturma Grubu',
      image: '/product1.jpg',
      filterCategory: 'oturma',
    },
    {
      id: 2,
      title: 'Minimalist TV Ünitesi',
      category: 'Depolama',
      image: '/product2.jpg',
      filterCategory: 'depolama',
    },
    {
      id: 3,
      title: 'Yemek Masası',
      category: 'Masa',
      image: '/product3.jpg',
      filterCategory: 'masa',
    },
    {
      id: 4,
      title: 'Köşe Koltuk',
      category: 'Oturma Grubu',
      image: '/product4.jpg',
      filterCategory: 'oturma',
    },
    {
      id: 5,
      title: 'Kitaplık',
      category: 'Depolama',
      image: '/product5.jpg',
      filterCategory: 'depolama',
    },
    {
      id: 6,
      title: 'Çalışma Masası',
      category: 'Masa',
      image: '/product6.jpg',
      filterCategory: 'masa',
    },
    {
      id: 7,
      title: 'Berjer',
      category: 'Oturma Grubu',
      image: '/product7.jpg',
      filterCategory: 'oturma',
    },
    {
      id: 8,
      title: 'Konsol',
      category: 'Depolama',
      image: '/product8.jpg',
      filterCategory: 'depolama',
    },
    {
      id: 9,
      title: 'Sehpa',
      category: 'Masa',
      image: '/product9.jpg',
      filterCategory: 'masa',
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filtrelenmiş ürünleri hesapla
  const filteredProducts = products.filter(product => {
    if (filterKey === '*') return true;
    return product.filterCategory === filterKey;
  });

  return (
    <section id="urunlerimiz">
    <div className="products-section" style={{
      backgroundColor: '#121212',
      padding: '80px 0',
      color: 'white'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 className="section-title" style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '50px',
          position: 'relative',
          display: 'inline-block',
          width: '100%'
        }}>
          Ürünlerimiz
          <span className="title-underline" style={{
            display: 'block',
            width: '60px',
            height: '3px',
            backgroundColor: '#d3a95c',
            margin: '15px auto 0'
          }}></span>
        </h2>
        
        {/* Kategori filtreleri */}
        <div className="filter-buttons" style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '40px'
        }}>
          <button 
            onClick={() => setFilterKey('*')}
            style={{
              padding: '10px 20px',
              backgroundColor: filterKey === '*' ? '#d3a95c' : 'transparent',
              color: filterKey === '*' ? 'white' : '#d3a95c',
              border: `1px solid ${filterKey === '*' ? '#d3a95c' : 'rgba(211, 169, 92, 0.5)'}`,
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '500',
              outline: 'none'
            }}
          >
            Tümü
          </button>
          <button 
            onClick={() => setFilterKey('oturma')}
            style={{
              padding: '10px 20px',
              backgroundColor: filterKey === 'oturma' ? '#d3a95c' : 'transparent',
              color: filterKey === 'oturma' ? 'white' : '#d3a95c',
              border: `1px solid ${filterKey === 'oturma' ? '#d3a95c' : 'rgba(211, 169, 92, 0.5)'}`,
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '500',
              outline: 'none'
            }}
          >
            Oturma Grubu
          </button>
          <button 
            onClick={() => setFilterKey('depolama')}
            style={{
              padding: '10px 20px',
              backgroundColor: filterKey === 'depolama' ? '#d3a95c' : 'transparent',
              color: filterKey === 'depolama' ? 'white' : '#d3a95c',
              border: `1px solid ${filterKey === 'depolama' ? '#d3a95c' : 'rgba(211, 169, 92, 0.5)'}`,
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '500',
              outline: 'none'
            }}
          >
            Depolama
          </button>
          <button 
            onClick={() => setFilterKey('masa')}
            style={{
              padding: '10px 20px',
              backgroundColor: filterKey === 'masa' ? '#d3a95c' : 'transparent',
              color: filterKey === 'masa' ? 'white' : '#d3a95c',
              border: `1px solid ${filterKey === 'masa' ? '#d3a95c' : 'rgba(211, 169, 92, 0.5)'}`,
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '500',
              outline: 'none'
            }}
          >
            Masa
          </button>
        </div>
        
        {/* Ürünler grid'i */}
        {mounted ? (
          <div className="products-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '25px',
            marginTop: '20px'
          }}>
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="product-card"
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#1a1a1a',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.25)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = 'translateY(-10px)';
                  target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                  const infoElement = target.querySelector('.product-info') as HTMLElement;
                  if (infoElement) {
                    infoElement.style.opacity = '1';
                    infoElement.style.transform = 'translateY(0)';
                  }
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.25)';
                  const infoElement = target.querySelector('.product-info') as HTMLElement;
                  if (infoElement) {
                    infoElement.style.opacity = '0';
                    infoElement.style.transform = 'translateY(20px)';
                  }
                }}
              >
                <div className="product-image-container" style={{
                  position: 'relative',
                  paddingTop: '100%', // Kare oran için
                  overflow: 'hidden',
                  borderRadius: '12px 12px 0 0'
                }}>
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                
                <div className="product-info" style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  padding: '20px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), transparent)',
                  color: 'white',
                  opacity: '0',
                  transform: 'translateY(20px)',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  borderRadius: '0 0 12px 12px',
                  height: '40%'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: 'white',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
                  }}>{product.title}</h3>
                  
                  <p style={{
                    fontSize: '14px',
                    color: '#d3a95c',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '500',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                  }}>{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px'
          }}>
            <p style={{ color: '#d3a95c' }}>Ürünler yükleniyor...</p>
          </div>
        )}
        
        {/* Filtrelenmiş sonuç yoksa */}
        {mounted && filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#d3a95c'
          }}>
            <p>Bu kategoride ürün bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default Products;
