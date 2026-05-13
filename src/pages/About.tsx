import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, ShieldCheck, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Committed To Your <br />
                <span className="text-blue-600">Oral Health Excellence</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our clinic was founded with a simple vision: to provide high-quality, compassionate dental care that puts the patient first. We believe everyone deserves a healthy, confident smile.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 font-bold">
                  <div className="text-3xl text-blue-600 mb-1">15+</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest">Years Experience</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 font-bold">
                  <div className="text-3xl text-blue-600 mb-1">20k+</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest">Procedures Done</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000&h=800" 
                alt="Clinic" 
                className="rounded-[2.5rem] shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 p-8 bg-blue-600 rounded-[2rem] text-white shadow-xl hidden md:block">
                <Award className="w-12 h-12 mb-4" />
                <h4 className="font-bold text-xl mb-1">Top Rated</h4>
                <p className="text-blue-100 text-sm">Recognized for excellence in New Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Target className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                To improve the lives of our patients through personalized, professional dental services delivered in a safe, comfortable environment. We strive to educate our community on the importance of preventive care.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Patient-centric care
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Advanced technology
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Continuous education
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Eye className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                To be the leading dental provider recognized for clinical excellence and patient satisfaction. We envision a future where everyone has access to top-tier dental treatments without fear or anxiety.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Community health focus
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Ethical practices
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Innovation in dentistry
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Our DNA</h2>
            <h3 className="text-4xl font-extrabold mb-6">Core Values That Drive Us</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-900/50">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold">Compassion</h4>
              <p className="text-slate-400 text-sm">Treating every patient like a member of our own family.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-900/50">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold">Excellence</h4>
              <p className="text-slate-400 text-sm">Maintaining the highest standards in everything we do.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-900/50">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold">Integrity</h4>
              <p className="text-slate-400 text-sm">Honest recommendations and transparent pricing, always.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-900/50">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold">Collaboration</h4>
              <p className="text-slate-400 text-sm">Working together across departments for better results.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
