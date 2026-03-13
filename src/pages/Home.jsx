import React from 'react';
import { motion } from 'framer-motion';
import PopularItems from '@/components/home/PopularItems';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import BlogPreview from '@/components/home/BlogPreview';
import HeroCarousel from '@/components/home/HeroCarousel';
import CollectionCarousel from '@/components/home/CollectionCarousel';
import BrandCarousel from '@/components/home/BrandCarousel';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Luxury Collection Carousel */}
      <CollectionCarousel />

      {/* Modern Brand Carousel (3D Fan Effect) */}
      <BrandCarousel />

      {/* Redesigned Popular Items */}
      <PopularItems />

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Articles Section (Restored) */}
      <BlogPreview />
    </div>
  );
};

export default Home;
