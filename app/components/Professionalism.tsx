import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Professionalism: React.FC = () => {
  return (
    <div className="bg-white py-32 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
          "We don't just cut trees. We engineer landscapes with precision and respect for nature."
        </h2>
        
        <div className="h-1 w-24 bg-emerald-500 mx-auto mb-10"></div>

        <p className="text-slate-600 text-lg leading-relaxed mb-12">
          Arboriculture requires a balance of brute force and delicate handling. Our team of certified arborists assesses every project for safety, tree health, and property aesthetics. We use state-of-the-art rigging equipment to ensure zero impact on your surrounding property. When we leave, the only evidence of our work is a pristine landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            "ISA Certified Arborists",
            "State-of-the-art Machinery",
            "100% Safety Record"
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <CheckCircle2 className="text-emerald-600 w-6 h-6 flex-shrink-0" />
              <span className="font-semibold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professionalism;