import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export default function AppointmentForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<AppointmentFormData>();

  const onSubmit = async (data: AppointmentFormData) => {
    console.log('Appointment Data:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Appointment request submitted successfully!');
    reset();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-blue-100 border border-slate-100"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Book Your Appointment</h2>
        <p className="text-slate-500">Fill out the form below and we'll confirm your slot.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-500" /> Full Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all placeholder:text-slate-400"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" /> Email Address
            </label>
            <input
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all placeholder:text-slate-400"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" /> Phone Number
            </label>
            <input
              {...register('phone', { required: 'Phone is required' })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all placeholder:text-slate-400"
              placeholder="Your phone number"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {/* Service */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" /> Select Service
            </label>
            <select
              {...register('service', { required: 'Please select a service' })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all"
            >
              <option value="">Choose a treatment...</option>
              {SERVICES.map(s => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
          </div>

          {/* Date */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" /> Preferred Date
            </label>
            <input
              type="date"
              {...register('date', { required: 'Date is required' })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all"
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
          </div>

          {/* Time */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" /> Preferred Time
            </label>
            <input
              type="time"
              {...register('time', { required: 'Time is required' })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all"
            />
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-blue-500" /> Additional Notes (Optional)
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all placeholder:text-slate-400 resize-none"
            placeholder="Tell us about any specific concerns..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-[0.99]"
        >
          {isSubmitting ? 'Booking...' : (
            <>
              <Calendar className="w-5 h-5" />
              Confirm Appointment
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
