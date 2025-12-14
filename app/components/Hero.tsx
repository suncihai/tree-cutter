'use client';
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://crtreeservice.com/wp-content/uploads/2024/06/cr-tree-service-32.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-emerald-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Long Island, New York
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Mastery in <br />
            <span className="text-emerald-500">Timber</span> & Earth
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
            Providing expert tree care, land clearing, and sustainable logging
            services since 1985.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-sm transition-all transform hover:scale-105"
          >
            Request a Consultation
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </div>
  );
};

export default Hero;
