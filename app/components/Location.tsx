import React from 'react';

const Location: React.FC = () => {
  return (
    <div className="w-full h-[500px] relative bg-slate-200">
      {/* 
        Google Maps Embed
        - Colorful (no grayscale filter)
        - Specific marker at 100 Veterans Memorial Hwy, Hauppauge, NY
      */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8978536768397!2d-73.21554228459296!3d40.82522697931962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8361042767077%3A0x6273410317e0821c!2s100%20Veterans%20Memorial%20Hwy%2C%20Hauppauge%2C%20NY%2011788!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Company Location"
      ></iframe>
      
      {/* Floating Info Card */}
      <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm p-6 shadow-xl rounded-lg max-w-sm hidden md:block border border-slate-100">
        <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Service Area HQ</h3>
        <p className="text-slate-600 text-sm mb-3">
            100 Veterans Memorial Hwy<br/>
            Hauppauge, NY 11788
        </p>
        <p className="text-slate-500 text-xs italic">
            Based in Suffolk County, actively serving the entire Long Island region from the Nassau border to Montauk Point.
        </p>
      </div>
    </div>
  );
};

export default Location;