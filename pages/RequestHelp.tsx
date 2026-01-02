import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const RequestHelp: React.FC = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    idea: '',
    date: '',
    people: '',
    notes: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ideaParam = params.get('idea');
    if (ideaParam) {
      setFormData(prev => ({ ...prev, idea: ideaParam }));
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <FadeIn>
          <div className="w-20 h-20 bg-boo-yellow rounded-full flex items-center justify-center text-4xl mb-6 mx-auto text-boo-dark animate-bounce">
            👋
          </div>
          <h2 className="text-3xl md:text-4xl text-white font-black mb-6">Thanks for writing!</h2>
          <p className="text-text-secondary text-lg font-medium max-w-md mx-auto leading-relaxed mb-8">
            I've received your note. I'm just one person, but I'll reach out on WhatsApp if I can help you plan this trip.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors"
          >
            Send another request
          </button>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mb-20">
      <FadeIn className="text-center pt-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Say Hello</h1>
        <p className="text-text-secondary text-lg font-medium max-w-lg mx-auto">
          I don't run a travel agency. I just help nice people plan nice trips to my city when I have time.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="bg-boo-card p-8 md:p-10 rounded-4xl border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-boo-orange/10 rounded-full blur-[50px] pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-4">Full Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-boo-dark border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/20 focus:outline-none focus:border-boo-yellow focus:ring-1 focus:ring-boo-yellow transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-4">WhatsApp</label>
                <input
                  required
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full bg-boo-dark border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/20 focus:outline-none focus:border-boo-yellow focus:ring-1 focus:ring-boo-yellow transition-all"
                  placeholder="+91 ..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-4">Email (Optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-boo-dark border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/20 focus:outline-none focus:border-boo-yellow focus:ring-1 focus:ring-boo-yellow transition-all"
                placeholder="jane@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-4">Idea / Place</label>
                <input
                  type="text"
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  className="w-full bg-boo-dark border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/20 focus:outline-none focus:border-boo-yellow focus:ring-1 focus:ring-boo-yellow transition-all"
                  placeholder="e.g. Araku Valley"
                />
              </div>
               <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-4">Approx Date</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-boo-dark border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/20 focus:outline-none focus:border-boo-yellow focus:ring-1 focus:ring-boo-yellow transition-all"
                  placeholder="Next month"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-4">People</label>
               <div className="relative">
                 <select
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    className="w-full bg-boo-dark border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-boo-yellow focus:ring-1 focus:ring-boo-yellow transition-all appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="1">Just me</option>
                    <option value="2">Couple</option>
                    <option value="3-5">Small Group</option>
                    <option value="5+">Large Group</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">▼</div>
               </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-4">Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full bg-boo-dark border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/20 focus:outline-none focus:border-boo-yellow focus:ring-1 focus:ring-boo-yellow transition-all resize-none"
                placeholder="What kind of experience are you looking for?"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-5 bg-boo-yellow text-boo-dark font-black text-lg rounded-full uppercase tracking-wider hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-boo-yellow/20"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </FadeIn>
    </div>
  );
};

export default RequestHelp;