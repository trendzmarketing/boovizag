import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { DIARY_ENTRIES } from '../constants';
import { DiaryEntry } from '../types';
import { MapPin, Clock } from 'lucide-react';

const Diary: React.FC = () => {
  const categories = ['All', 'Coffee', 'Food', 'Beach', 'Quiet', 'Outskirts'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEntries = activeCategory === 'All'
    ? DIARY_ENTRIES
    : DIARY_ENTRIES.filter(e => e.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="max-w-6xl mx-auto w-full">
      <FadeIn className="text-center mb-16 pt-8">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">The Diary</h1>
        <p className="text-text-secondary text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Places that felt right. Not necessarily the most famous,<br className="hidden md:block"/> but the ones that stayed with me.
        </p>
      </FadeIn>

      <FadeIn delay={100} className="mb-16 flex justify-center flex-wrap gap-2 md:gap-4 px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-boo-yellow text-boo-dark scale-105 shadow-lg shadow-boo-yellow/20'
                : 'bg-boo-card text-text-secondary border border-white/5 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 mb-20">
        {filteredEntries.map((entry: DiaryEntry, index: number) => (
          <FadeIn key={entry.id} delay={index * 50} className="group">
            <div className="bg-boo-card rounded-4xl p-4 md:p-5 border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2 h-full flex flex-col">
              
              {/* Image Container */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-3xl mb-6 relative">
                 <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                   {entry.category}
                 </div>
                 <img
                  src={entry.image}
                  alt={entry.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="px-2 pb-2 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-white group-hover:text-boo-yellow transition-colors">{entry.name}</h2>
                </div>
                
                <div className="flex items-center text-text-secondary text-sm mb-6 font-medium space-x-4">
                   <span className="flex items-center"><MapPin size={14} className="mr-1.5 text-boo-orange"/> {entry.area}</span>
                   <span className="flex items-center"><Clock size={14} className="mr-1.5 text-boo-yellow"/> {entry.bestTime}</span>
                </div>
                
                <div className="relative mb-8 flex-grow">
                  <p className="text-lg text-text-primary font-medium leading-relaxed italic opacity-90">
                    "{entry.note}"
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                     {entry.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs font-bold text-text-secondary px-3 py-1 bg-white/5 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entry.name + ' ' + entry.area + ' Visakhapatnam')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-boo-yellow hover:text-boo-dark transition-all duration-300"
                    title="View on Map"
                  >
                    <MapPin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      
      {filteredEntries.length === 0 && (
        <div className="text-center py-20 text-text-secondary font-medium">
          No entries found.
        </div>
      )}
    </div>
  );
};

export default Diary;