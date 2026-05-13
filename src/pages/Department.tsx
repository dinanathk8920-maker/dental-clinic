import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'motion/react';

export default function Department() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-24">
      {/* Page Header */}
      <section className="bg-white py-20 border-b border-slate-100 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Our Specializations</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              We offer a wide range of dental services tailored to meet the unique needs of every patient. Explore our departments below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* @ts-ignore */}
              <ServiceCard service={service} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* Feature Section */}
        <section className="mt-24 bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="white">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="transparent" />
              <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" fill="transparent" />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Don't See What You're Looking For?</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Our clinic covers many more specialized procedures beyond those listed. Contact us today to discuss your specific dental needs with our specialists.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-lg active:scale-95">
                Contact Our Specialists
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="font-bold text-xl mb-1">Modern Equipment</h3>
                <p className="text-blue-100 text-sm">State-of-the-art diagnostic tools.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="font-bold text-xl mb-1">Emergency Care</h3>
                <p className="text-blue-100 text-sm">24/7 support for dental emergencies.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="font-bold text-xl mb-1">Flexible Billing</h3>
                <p className="text-blue-100 text-sm">Multiple payment and insurance options.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="font-bold text-xl mb-1">Recovery Lounges</h3>
                <p className="text-blue-100 text-sm">Comfortable spaces for aftercare.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
