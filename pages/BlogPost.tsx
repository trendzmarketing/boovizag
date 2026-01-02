import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white mb-4">Post not found</h2>
        <Link to="/blog" className="text-boo-yellow underline">Back to Stories</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto mb-20">
      <FadeIn>
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-bold text-text-secondary hover:text-white transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Stories
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 text-center md:text-left">
           <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-text-secondary uppercase tracking-wider mb-6">
              <span className="flex items-center px-3 py-1 bg-white/5 rounded-full">
                <Calendar size={12} className="mr-2 text-boo-orange" />
                {post.date}
              </span>
              <span className="flex items-center px-3 py-1 bg-white/5 rounded-full">
                <Clock size={12} className="mr-2 text-boo-yellow" />
                {post.readTime}
              </span>
           </div>

           <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
             {post.title}
           </h1>
        </header>

        {/* Featured Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/5 shadow-2xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none text-text-primary/90 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-white italic border-l-4 border-boo-yellow pl-6 my-8">
            {post.excerpt}
          </p>
          
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer / Tags */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex gap-2">
              {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold text-text-secondary px-3 py-1.5 bg-white/5 rounded-full">
                      #{tag}
                  </span>
              ))}
           </div>
           
           <button 
             onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
             }}
             className="flex items-center text-sm font-bold text-boo-yellow hover:text-white transition-colors"
           >
              <Share2 size={16} className="mr-2" /> Share this story
           </button>
        </div>
      </FadeIn>
    </article>
  );
};

export default BlogPost;