#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images

# Download sample furniture images
# Hero section images
curl -o public/furniture1.jpg https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&q=80
curl -o public/furniture2.jpg https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&q=80
curl -o public/furniture3.jpg https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=400&q=80
curl -o public/furniture4.jpg https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&q=80
curl -o public/furniture5.jpg https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=400&q=80
curl -o public/furniture6.jpg https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&h=400&q=80

# About section images
curl -o public/workshop1.jpg https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&h=400&q=80
curl -o public/workshop2.jpg https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500&h=350&q=80
curl -o public/workshop3.jpg https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=400&h=300&q=80

# Products section images
curl -o public/product1.jpg https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=300&q=80
curl -o public/product2.jpg https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&q=80
curl -o public/product3.jpg https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=400&h=300&q=80
curl -o public/product4.jpg https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=400&h=300&q=80
curl -o public/product5.jpg https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=300&q=80
curl -o public/product6.jpg https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&h=300&q=80
curl -o public/product7.jpg https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&h=300&q=80
curl -o public/product8.jpg https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&q=80
curl -o public/product9.jpg https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&h=300&q=80

# Social media section images
curl -o public/instagram1.jpg https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=300&h=300&q=80
curl -o public/instagram2.jpg https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&q=80
curl -o public/instagram3.jpg https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&q=80
curl -o public/instagram4.jpg https://images.unsplash.com/photo-1567016432779-094069958ea5?w=300&h=300&q=80

# Testimonials section images
curl -o public/testimonial1.jpg https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80
curl -o public/testimonial2.jpg https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80
curl -o public/testimonial3.jpg https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80

# OpenGraph image
curl -o public/og-image.jpg https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=630&q=80

echo "All images downloaded successfully!"
