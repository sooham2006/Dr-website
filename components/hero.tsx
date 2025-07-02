'use client';

import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
          Psychological Care for
          <br />
          <span className="font-normal text-teal-700">Change, Insight, and Well-Being</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Compassionate, evidence-based therapy to help you overcome anxiety, 
          strengthen relationships, and heal from trauma.
        </h2>
        <Button 
          onClick={scrollToContact}
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Book a Free Consultation
        </Button>
      </div>
    </section>
  );
}