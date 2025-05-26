# Şentürk Mobilya Website

Bu proje, Şentürk Mobilya için modern, responsive ve SEO dostu bir web sitesi oluşturmak için tasarlanmıştır. Şentürk Mobilya, el yapımı modern mobilya tasarımları üreten bir firmadır.

## Özellikler

- Tamamen responsive tasarım
- Yüksek performanslı ve SEO dostu yapı
- Modern görsel stil
- Kaydırmayla tetiklenen animasyonlar
- Paralaks geçişler ve hover efektleri
- Isotope grid ile ürün filtreleme
- Lightbox ile ürün görüntüleme
- Swiper ile referans slider'ı
- İletişim formu
- Google Maps entegrasyonu
- WhatsApp floating action button

## Teknolojiler

- Next.js (Static Export)
- SCSS (BEM metodolojisi)
- AOS (Animate on Scroll)
- GSAP (GreenSock Animation Platform)
- Isotope (Filtrelenebilir grid)
- LightGallery (Ürün lightbox)
- Swiper (Slider)

## Başlangıç

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak sonucu görebilirsiniz.

## Build ve Deploy

Statik site oluşturmak için:

```bash
npm run build
```

Bu komut, `out` klasöründe statik HTML dosyalarını oluşturacaktır.

### Vercel ile Deploy

En kolay deploy yöntemi, Next.js'in yaratıcıları tarafından geliştirilen [Vercel Platform](https://vercel.com/new)'dur.

1. [Vercel](https://vercel.com/signup) hesabı oluşturun
2. Vercel CLI'ı yükleyin: `npm i -g vercel`
3. Projenin kök dizininde `vercel` komutunu çalıştırın
4. Yönlendirmeleri takip edin

### Netlify ile Deploy

1. [Netlify](https://app.netlify.com/signup) hesabı oluşturun
2. Yeni site oluşturun: "New site from Git" seçeneğini kullanın
3. GitHub/GitLab/Bitbucket hesabınızı bağlayın ve projenizi seçin
4. Build ayarları:
   - Build command: `npm run build`
   - Publish directory: `out`
5. "Deploy site" butonuna tıklayın

## Özelleştirme

Sitenin içeriğini ve görünümünü özelleştirmek için:

- `src/components/` klasöründeki bileşenleri düzenleyin
- `src/styles/` klasöründeki SCSS dosyalarını düzenleyin
- `public/` klasöründeki görselleri kendi görsellerinizle değiştirin

## Performans ve SEO

Site, aşağıdaki performans ve SEO özelliklerine sahiptir:

- Lazy-loading görsel optimizasyonu
- WebP formatında görsel dönüşümü
- Semantik HTML yapısı
- Uygun heading hiyerarşisi
- OpenGraph ve Twitter Card meta etiketleri
- Responsive tasarım
- Erişilebilirlik standartlarına uygunluk

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
