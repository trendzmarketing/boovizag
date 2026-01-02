import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const sortedPosts = useMemo(() => {
    return [...BLOG_POSTS].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto w-full mb-20">
      <FadeIn className="text-center mb-16 pt-8">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Stories</h1>
        <p className="text-text-secondary text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Longer thoughts, updates, and deep dives into the<br className="hidden md:block"/> culture of this coastal city.
        </p>
      </FadeIn>

      <div className="grid gap-12">
        {sortedPosts.map((post, index) => (
          <FadeIn key={post.id} delay={index * 100}>
            <Link to={`/blog/${post.slug}`} className="block group">
              <article className="bg-boo-card rounded-4xl p-6 md:p-8 border border-white/5 hover:border-boo-yellow/30 transition-all duration-500 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative overflow-hidden">
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Image */}
                <div className="w-full md:w-64 h-48 md:h-48 shrink-0 rounded-2xl overflow-hidden relative z-10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">
                    <span className="flex items-center text-boo-orange">
                      <Calendar size={12} className="mr-1.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-boo-yellow transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-text-primary/80 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                     <div className="flex gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] font-bold text-text-secondary px-2 py-1 bg-white/5 rounded-full border border-white/5">
                                #{tag}
                            </span>
                        ))}
                     </div>
                     <span className="text-boo-yellow font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                        Read Story <ArrowRight size={16} className="ml-2" />
                     </span>
                  </div>
                </div>
              </article>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Blog;