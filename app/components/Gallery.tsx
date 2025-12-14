import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://www.timberwoodtreeservice.com/wp-content/uploads/2023/06/31.jpg", span: "md:col-span-2 md:row-span-2", title: "Large Tree Removal" },
    { src: "https://crtreeservice.com/wp-content/uploads/2024/06/storm-damage-400x284.png", span: "md:col-span-1 md:row-span-1", title: "Pruning" },
    { src: "https://crtreeservice.com/wp-content/uploads/2024/06/cr-tree-service-19-400x284.jpg", span: "md:col-span-1 md:row-span-1", title: "Stump Grinding" },
    { src: "https://www.timberwoodtreeservice.com/wp-content/uploads/2023/06/43.jpg", span: "md:col-span-1 md:row-span-1", title: "Storm Cleanup" },
    { src: "https://www.timberwoodtreeservice.com/wp-content/uploads/2023/06/38.jpg", span: "md:col-span-1 md:row-span-1", title: "Forest Management" },
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">Portfolio</span>
          <h2 className="text-4xl font-serif text-slate-900 mt-2">Our Recent Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {images.map((img, idx) => (
            <div key={idx} className={`relative group overflow-hidden rounded-md cursor-pointer ${img.span}`}>
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;