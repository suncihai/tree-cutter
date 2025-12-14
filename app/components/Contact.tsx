import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-emerald-950 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Let's Clear the Way</h2>
            <p className="text-emerald-100 mb-10 text-lg">
              Ready to start your project? Contact us for a free estimate. 
              We offer 24/7 emergency response for storm damage.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-800 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Call Us</p>
                  <p className="text-emerald-100">(631) 555-0199</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-800 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-emerald-100">info@evergreenheritage.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-800 p-3 rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Hours</p>
                  <p className="text-emerald-100">Mon-Fri: 7am - 6pm</p>
                  <p className="text-emerald-100">Sat: 8am - 2pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-slate-900 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Tree Removal</option>
                  <option>Pruning / Trimming</option>
                  <option>Stump Grinding</option>
                  <option>Land Clearing</option>
                  <option>Emergency Service</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
              </div>

              <button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-md transition-colors">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;