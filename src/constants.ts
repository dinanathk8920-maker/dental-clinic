import { Service, Doctor, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    description: 'Comprehensive dental care for your whole family, from routine cleanings to fillings.',
    icon: 'Stethoscope',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with professional whitening, veneers, and bonding.',
    icon: 'Sparkles',
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth and correct your bite with braces or clear aligners.',
    icon: 'Smile',
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care designed specifically for infants, children, and teens.',
    icon: 'Baby',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Restore missing teeth with permanent, natural-looking implants.',
    icon: 'ShieldCheck',
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery',
    description: 'Expert surgical procedures for wisdom teeth, extractions, and more.',
    icon: 'Scissors',
  },
];

export const TEAM: Doctor[] = [
  {
    id: 'dr-sarah-mitchell',
    name: 'Dr. Sarah Mitchell',
    role: 'Lead Dentist & Founder',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ef197ec2?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'With over 15 years of experience, Dr. Mitchell is dedicated to providing compassionate dental care.',
    specialties: ['Cosmetic Dentistry', 'Oral Surgery'],
  },
  {
    id: 'dr-james-wilson',
    name: 'Dr. James Wilson',
    role: 'Senior Orthodontist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Dr. Wilson specializes in modern orthodontic treatments for adults and children.',
    specialties: ['Invisalign', 'Braces'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Patient',
    content: 'The best dental experience I have ever had. The staff is professional and the treatment was painless.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Singh',
    role: 'Patient',
    content: 'This dental clinic is amazing for kids. My son was so comfortable during his first visit.',
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Importance of Regular Dental Checkups',
    excerpt: 'Discover why visiting your dentist every six months is crucial for your oral health.',
    content: 'Full content here...',
    date: 'May 10, 2024',
    author: 'Dr. Sarah Mitchell',
    category: 'Preventative Care',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&h=400',
  },
];
