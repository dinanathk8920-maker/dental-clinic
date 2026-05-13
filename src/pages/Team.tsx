import { TEAM } from '../constants';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail, Plus } from 'lucide-react';

export default function Team() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Professionals</h2>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8">Meet Our Expert Team</h1>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our team consists of highly qualified dental surgeons, specialists, and support staff dedicated to providing the best care for you and your family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl shadow-slate-100">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8 gap-4">
                    <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">{doctor.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {doctor.bio}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {doctor.specialties.map(spec => (
                    <span key={spec} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full font-medium border border-slate-100">
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Join the Team placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-blue-50/50 rounded-[2.5rem] border-2 border-dashed border-blue-200 flex flex-col items-center justify-center p-12 text-center group hover:border-blue-400 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-90">
                <Plus className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Join Our Team</h3>
              <p className="text-slate-500 text-sm max-w-[200px]">
                We're always looking for talented dental professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">12</p>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Specialists</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">08</p>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Departments</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">15+</p>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Awards Won</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">100%</p>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Happy Patients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
