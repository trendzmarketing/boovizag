import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { TRIP_IDEAS } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const TripIdeas: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-20">
       <FadeIn className="text-center mb-16 pt-8">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Moods, not Packages</h1>
        <p className="text-text-secondary text-lg font-medium max-w-2xl mx-auto">
          Just loose plans and gentle inspirations for how to spend time here.
        </p>
      </FadeIn>

      <div className="grid gap-8">
        {TRIP_IDEAS.map((idea, index) => (
          <FadeIn key={idea.id} delay={index * 100}>
            <div className="bg-boo-card rounded-4xl p-8 md:p-10 border border-white/5 hover:border-boo-yellow/30 transition-all duration-500 relative overflow-hidden group">
              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-boo-yellow/5 rounded-full blur-[80px] group-hover:bg-boo-yellow/10 transition-colors duration-500 pointer-events-none"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0 group-hover:text-boo-yellow transition-colors">{idea.title}</h2>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 text-xs font-bold uppercase tracking-wider text-boo-orange border border-white/5">
                   <Sparkles size={12} className="mr-2" />
                  {idea.pace} Pace
                </span>
              </div>
              
              <p className="text-text-primary text-lg md:text-xl font-medium leading-relaxed mb-8 opacity-90 relative z-10">
                {idea.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-white/5 relative z-10">
                <div className="text-sm font-semibold text-text-secondary mb-4 sm:mb-0">
                  Perfect for: <span className="text-white">{idea.forWho}</span>
                </div>
                
                <Link 
                  to={`/help?idea=${encodeURIComponent(idea.title)}`}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white text-boo-dark text-sm font-bold hover:bg-boo-yellow transition-colors duration-300 group/btn"
                >
                  Help me plan this
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default TripIdeas;