import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 relative shadow-sm h-full flex flex-col">
      <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-50 opacity-100" />
      
      <div className="flex gap-1 mb-4 relative">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
          />
        ))}
      </div>

      <p className="text-slate-600 italic leading-relaxed mb-8 flex-grow relative">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-4 pt-4 border-t border-slate-50 relative">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
          <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
