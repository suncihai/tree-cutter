import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "James Wilson",
    location: "Southampton, NY",
    text: "Evergreen removed a massive 100-year-old oak that was leaning over our roof. They craned it out piece by piece. Incredible precision.",
  },
  {
    name: "Sarah Jenkins",
    location: "Huntington, NY",
    text: "Professional from the first phone call. They cleared our backyard for a pool install and left the ground perfectly level.",
  },
  {
    name: "Robert M.",
    location: "Montauk, NY",
    text: "We had emergency storm damage last winter. They were on site within 4 hours. Highly recommended for emergency work.",
  },
  {
    name: "Elena Rodriguez",
    location: "Garden City, NY",
    text: "Their team is polite, uniformed, and fast. The stump grinding was so thorough you can't tell a tree was ever there.",
  },
  {
    name: "Mike O'Connor",
    location: "Smithtown, NY",
    text: "Fair pricing for excellent work. I appreciate that they recycle the wood chips and timber. Very eco-friendly approach.",
  },
  {
    name: "The Davidson Family",
    location: "Oyster Bay, NY",
    text: "We've used them for annual pruning for 10 years. Our property looks immaculate thanks to Evergreen Heritage.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">Trusted by Neighbors</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-sm text-emerald-600">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;