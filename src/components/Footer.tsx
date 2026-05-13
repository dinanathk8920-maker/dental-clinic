import { NavLink } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">
                  Dental
                </span>
                <span className="text-xs font-medium tracking-widest uppercase text-blue-400">
                  Clinic
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience world-class dental care with our expert team. We combine expert knowledge with advanced technology to give you the perfect smile.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <NavLink to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/departments" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  Departments
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  Dental Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">General Dentistry</li>
              <li className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">Cosmetic Dentistry</li>
              <li className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">Orthodontics</li>
              <li className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">Oral Surgery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm">Sector 14, Main Road, Dental Plaza, New Delhi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
