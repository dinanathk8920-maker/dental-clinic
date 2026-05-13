export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription?: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}
