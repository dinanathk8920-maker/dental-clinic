import AppointmentForm from '../components/AppointmentForm';
import { Phone, MapPin, Mail, Clock, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export default function AppointmentPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <section className="bg-white py-20 border-b border-slate-100 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Appointment</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready for a smile makeover? Use the form below to select your desired service and preferred timing.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" /> Appointment Info
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Clinic Address</p>
                    <p className="text-lg font-bold text-slate-900 leading-tight">Sector 14, Main Road, New Delhi</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Working Hours</p>
                    <div className="text-sm font-bold text-slate-900 space-y-1">
                      <p className="flex justify-between gap-4">Mon - Sat: <span>09:00 - 19:00</span></p>
                      <p className="flex justify-between gap-4">Sunday: <span className="text-blue-600 uppercase font-extrabold">Emergency Only</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative shadow-xl shadow-slate-200">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10 font-sans">Patient Safety</h3>
              <p className="text-slate-400 text-sm mb-6 relative z-10 leading-relaxed font-sans">
                Your health is our priority. We follow strict sterilization protocols and COVID-19 safety guidelines for every visit.
              </p>
              <ul className="space-y-3 relative z-10 font-sans">
                <li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> Sterilized Tools
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> Regular Sanitization
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> Verified Staff
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function ShieldCheck(props: any) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
