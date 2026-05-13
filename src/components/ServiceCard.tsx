import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import { Service } from '../types';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  // @ts-ignore
  const Icon = Icons[service.icon];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all group",
        className
      )}
    >
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
        {service.description}
      </p>
      <div className="mt-auto pt-6 text-[10px] font-bold text-blue-600 flex items-center tracking-widest uppercase group-hover:text-blue-700 transition-colors">
        LEARN MORE <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
}
