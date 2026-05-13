import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Blog Hero */}
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Articles & News</h2>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Dental Health Tips & Updates</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Stay informed about the latest dental technologies, health tips, and clinic news from our experts.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600" />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="pl-12 pr-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none w-full md:w-80 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {BLOG_POSTS.map((post) => (
                <article key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-50 transition-all group">
                  <div className="relative h-80 sm:h-96">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-8 sm:p-12">
                    <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs font-semibold uppercase tracking-widest mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" /> {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-500" /> By {post.author}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                    </h2>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                    
                    <NavLink 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                    >
                      Read Full Article <ArrowRight className="w-5 h-5" />
                    </NavLink>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-12">
              {/* Categories */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-blue-600" /> Categories
                </h3>
                <ul className="space-y-4">
                  {['Oral Hygiene', 'Cosmetic Tips', 'News', 'Dental Technology', 'Preventative Care'].map(cat => (
                    <li key={cat}>
                      <a href="#" className="flex justify-between items-center text-slate-600 hover:text-blue-600 font-medium group">
                        {cat}
                        <span className="w-8 h-8 flex items-center justify-center bg-slate-50 rounded-full text-xs text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600">5</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl shadow-blue-100">
                <h3 className="text-xl font-bold mb-4">Stay Clean & Safe</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Subscribe to our monthly newsletter for dental hygiene hacks.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-blue-200 outline-none focus:bg-white/20 transition-all font-medium text-sm"
                  />
                  <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20 active:scale-95">
                    Subscribe Now
                  </button>
                </div>
              </div>

              {/* Recent Posts Mini */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 font-sans">Recent Updates</h3>
                <div className="space-y-6">
                  {BLOG_POSTS.map(post => (
                    <div key={post.id} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                        <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h4>
                        <p className="text-[10px] uppercase font-bold text-slate-400 mt-2 tracking-widest">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
