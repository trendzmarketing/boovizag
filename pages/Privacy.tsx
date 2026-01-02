import React from 'react';
import FadeIn from '../components/FadeIn';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mb-20">
      <FadeIn className="pt-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Privacy</h1>
        
        <div className="space-y-8 text-lg font-medium text-text-secondary leading-relaxed">
          <div className="bg-boo-card p-8 rounded-4xl border border-white/5 space-y-6">
            <p>
              <strong className="text-white block mb-2">Data Collection</strong> I only collect the information you voluntarily provide in the "Request Help" form (Name, WhatsApp, Email, Trip details).
            </p>
            <p>
              <strong className="text-white block mb-2">Usage</strong> This data is used solely to contact you regarding your trip inquiry. I do not add you to any newsletters or marketing lists.
            </p>
            <p>
              <strong className="text-white block mb-2">Sharing</strong> I do not sell, trade, or transfer your data to outside parties. 
            </p>
            <p>
              <strong className="text-white block mb-2">Cookies</strong> This website does not use tracking cookies or analytics software.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Privacy;