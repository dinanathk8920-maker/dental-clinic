import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import AppointmentForm from '../components/AppointmentForm';
import { SERVICES, TESTIMONIALS } from '../constants';
import { ArrowRight, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Specialities</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Quality Care For <br /> All Your Dental Needs
              </h3>
            </div>
            <NavLink to="/departments" className="text-blue-600 font-bold flex items-center gap-2 group">
              View All Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              // @ts-ignore
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Patient Reviews</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">What Our Patients Say</h3>
            <p className="text-slate-600">
              We take pride in delivering exceptional dental experiences. Here is what some of our valued patients have to say about their visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              // @ts-ignore
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Schedule Your Visit</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Ready to achieve your <br /> dream smile?
              </h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Book your appointment today and take the first step towards better oral health. Our team is ready to welcome you to our clean, modern facility.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Highly Rated Clinic</h4>
                    <p className="text-sm text-slate-500">Consistently 5-star reviews from our patients.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Expert Team</h4>
                    <p className="text-sm text-slate-500">Qualified professionals with decades of experience.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="booking-form">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
