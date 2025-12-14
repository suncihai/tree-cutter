import React from 'react';
import { Trees, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <Trees className="h-6 w-6 text-emerald-500" />
          <span className="text-white font-bold tracking-wider font-serif">EVERGREEN</span>
        </div>

        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Evergreen Heritage Logging. All rights reserved. <br />
          Licensed & Insured in NY State.
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;