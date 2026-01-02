import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center max-w-5xl mx-auto relative w-full px-4">
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-boo-yellow/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-boo-orange/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

        <FadeIn delay={100} className="relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-boo-yellow text-sm font-bold tracking-wide mb-8">
            Hello, friend 👋
          </span>
          <h1 className="flex flex-wrap justify-center items-baseline text-6xl md:text-8xl lg:text-9xl font-logo font-semibold leading-none mb-8 tracking-tighter select-none">
            <span className="text-boo-yellow flex items-baseline">
              b
              <span className="relative flex flex-col items-center mx-[2px] md:mx-1">
                o
                <span className="absolute -bottom-3 md:-bottom-5 w-3 h-3 md:w-5 md:h-5 bg-boo-orange rounded-full"></span>
              </span>
              o
            </span>
            <span className="text-white ml-0.5">vizag</span>
          </h1>
        </FadeIn>

        <FadeIn delay={300} className="relative z-10">
          <p className="text-xl md:text-3xl text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            My little diary of this city.<br />
            <span className="text-text-primary">Places, moments, and quiet discoveries.</span>
          </p>
        </FadeIn>

        <FadeIn delay={500} className="flex flex-col sm:flex-row gap-4 relative z-10">
          <Link
            to="/diary"
            className="group px-10 py-4 bg-boo-yellow text-boo-dark text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(244,180,0,0.4)]"
          >
            Explore Diary
          </Link>
          <Link
            to="/help"
            className="group px-10 py-4 bg-white/10 text-white border border-white/10 backdrop-blur-md text-lg font-bold rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Request Help
          </Link>
        </FadeIn>
      </section>

      {/* Featured Image */}
      <FadeIn delay={600} className="w-full max-w-5xl h-[50vh] md:h-[70vh] relative mb-24 group">
        <div className="absolute inset-0 bg-gradient-to-t from-boo-dark via-transparent to-transparent z-10 rounded-4xl md:rounded-5xl pointer-events-none"></div>
        <div className="w-full h-full overflow-hidden rounded-4xl md:rounded-5xl shadow-2xl border border-white/5">
          <img
            src="https://picsum.photos/1600/900?grayscale&blur=1"
            alt="Vizag Coast"
            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20">
          <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
             <p className="text-white font-bold text-lg">Sunrise at RK Beach</p>
             <p className="text-text-secondary text-sm">Best at 5:30 AM</p>
          </div>
        </div>
      </FadeIn>

      {/* Quick Intro Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-20">
        {[
          { title: "No Ads", desc: "Just pure content.", icon: "✨" },
          { title: "No Sales", desc: "I don't sell tours.", icon: "🎒" },
          { title: "Just Love", desc: "For my beautiful city.", icon: "❤️" }
        ].map((item, i) => (
          <FadeIn key={i} delay={800 + (i * 100)} className="w-full">
            <div className="bg-boo-card p-8 rounded-4xl border border-white/5 h-full hover:bg-white/5 transition-colors duration-300 text-center md:text-left">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-text-secondary font-medium">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Home;