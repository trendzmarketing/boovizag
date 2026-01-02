import React from 'react';
import FadeIn from '../components/FadeIn';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mb-20">
      <FadeIn className="pt-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">About</h1>
        
        <div className="space-y-8 text-xl font-medium text-text-secondary leading-relaxed">
          <p className="text-white">
            This website is a personal archive. I built it because I love Visakhapatnam—the way the hills hug the sea, the smell of coffee in the morning, and the quiet spots that tourists usually miss.
          </p>
          <p>
            I am not a travel agent. I don't get commissions from the hotels or restaurants listed here. There are no ads on this page, and no one paid to be in this diary.
          </p>
          <div className="p-8 bg-boo-card rounded-3xl border border-white/5">
            <p className="italic text-white/90">
              "When you request help, it comes directly to my personal WhatsApp. I reply when I have free time, simply because I enjoy helping people discover the calmer side of my city."
            </p>
          </div>
          <p>
             I hope this diary helps you find a moment of peace in Vizag.
          </p>
          <p className="pt-4 text-boo-yellow font-bold text-2xl">
            — Boo
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;