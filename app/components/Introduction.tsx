import React from 'react';
import { MapPin, ShieldCheck, History } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1">
            <h3 className="text-emerald-700 font-bold uppercase tracking-wider mb-2 text-sm">Our Roots</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
              Decades of Service on Long Island
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Located in the heart of Suffolk County, Evergreen Heritage has been a staple of the Long Island community for over four decades. What started as a small family operation has grown into the region's most trusted name in arboriculture.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We understand the unique landscape of New York's coast. Whether it's post-storm clearance in the Hamptons or precision pruning in Nassau, our team combines traditional techniques with modern safety standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
               <div className="flex flex-col gap-2">
                 <MapPin className="text-emerald-600 h-6 w-6" />
                 <span className="font-semibold text-slate-800">Suffolk Based</span>
                 <span className="text-sm text-slate-500">Serving all LI</span>
               </div>
               <div className="flex flex-col gap-2">
                 <History className="text-emerald-600 h-6 w-6" />
                 <span className="font-semibold text-slate-800">Est. 1985</span>
                 <span className="text-sm text-slate-500">Generations of XP</span>
               </div>
               <div className="flex flex-col gap-2">
                 <ShieldCheck className="text-emerald-600 h-6 w-6" />
                 <span className="font-semibold text-slate-800">Licensed</span>
                 <span className="text-sm text-slate-500">Fully Insured</span>
               </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://crtreeservice.com/wp-content/uploads/2024/06/cr-tree-service-4.jpg" 
                alt="Lumberjack working" 
                className="object-cover h-full w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-800 p-8 text-white hidden md:block shadow-lg">
                <p className="text-3xl font-serif font-bold">40+</p>
                <p className="text-sm uppercase tracking-wide">Years Experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Introduction;