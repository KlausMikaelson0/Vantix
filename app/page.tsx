import React from 'react';

export default function Home() {
  const assets = [
    { title: "Royal Oud & Perfumes", price: "15,000 SAR", desc: "Ultra-premium oriental fragrance platform featuring rare oud collections." },
    { title: "Titan Gaming Gear Hub", price: "8,500 SAR", desc: "Elite gaming equipment marketplace engineered for professional athletes." },
    { title: "Artisan Coffee Roasters", price: "5,500 SAR", desc: "Premium specialty coffee platform designed for artisan roasters." }
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] text-white px-6 md:px-20 py-12">
      {/* Navigation */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto mb-20">
        <h1 className="text-3xl font-bold tracking-[0.2em] text-[#F1C40F]">VANTIX</h1>
        <div className="bg-[#F1C40F] text-[#0F172A] px-4 py-1 font-bold text-sm rounded">AR / EN</div>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-32">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Architecting Digital <span className="text-[#F1C40F]">Legacies</span>
        </h2>
        <p className="text-gray-400 text-xl mb-12">We craft high-performance digital assets with 100% ownership and zero monthly fees.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#F1C40F] text-[#0F172A] px-10 py-4 font-bold hover:scale-105 transition">Explore Assets</button>
          <button className="border border-gray-700 px-10 py-4 font-bold hover:bg-white hover:text-black transition">Schedule Consultation</button>
        </div>
      </div>

      {/* The Grid - الجزء الذي سيحول التصميم لـ 3 أعمدة */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-gray-500 tracking-[0.3em] uppercase text-sm mb-16">Premium Asset Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {assets.map((asset, i) => (
            <div key={i} className="luxury-card p-10 rounded-sm">
              <div className="text-[#F1C40F] text-xs font-bold tracking-widest mb-6 uppercase">Estate No. 0{i+1}</div>
              <h4 className="text-2xl font-bold mb-4">{asset.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">{asset.desc}</p>
              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <span className="font-bold text-white">{asset.price}</span>
                <button className="text-[#F1C40F] text-xs font-bold border-b border-[#F1C40F] pb-1 hover:text-white hover:border-white transition">ACQUIRE NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
