'use client';
import React from 'react';
import { motion } from 'framer-motion';

const VideoScroll: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source
            src="https://www.timberwoodtreeservice.com/wp-content/uploads/2023/06/Tree-Removal-1.mp4"
            type="video/mp4"
          />
          <img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2940&auto=format&fit=crop"
            alt="Forest background"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content Layer - Centered */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-serif leading-tight drop-shadow-lg">
            Precision in every cut.
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 font-light drop-shadow-md leading-relaxed">
            We handle the toughest jobs that others walk away from.{' '}
            <br className="hidden md:block" />
            Safety, efficiency, and power combined.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoScroll;
