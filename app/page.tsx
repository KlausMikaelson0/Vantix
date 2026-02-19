import React from 'react';

export default function Home() {
  const assets = [
    { title: "Royal Oud & Perfumes", price: "15,000 SAR", desc: "Ultra-premium oriental fragrance platform featuring rare oud collections." },
    { title: "Titan Gaming Gear Hub", price: "8,500 SAR", desc: "Elite gaming equipment marketplace engineered for professional athletes." },
    { title: "Artisan Coffee Roasters", price: "5,500 SAR", desc: "Premium specialty coffee platform designed for artisan roasters." }
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] text-white">
      <nav className="flex justify-between items-center px-10 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-[0.2em] text-[#F1C40F] luxury-title">VANTIX</h1>
        <button className="border border-[#F1C40F]/30 text-[#F1C40F] px-4 py-1 text-sm">AR / EN</button>
      </nav>

      <div className="text-center max-w-5xl mx-auto mt-24 mb-32 px-6">
        <h2 className="text-6xl md:text-8xl luxury-title mb-8 font-bold">
          Architecting Digital <span className="gold-gradient">Legacies</span>
        </h2>
        <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          We craft high-performance digital assets with 100% ownership and zero monthly fees.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-[#F1C40F] text-[#0F172A] px-12 py-4 font-bold text-lg hover:scale-105 transition">Explore Assets</button>
          <button className="border border-gray-700 px-12 py-4 font-bold text-lg hover:bg-white hover:text-black transition">Schedule Consultation</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 pb-32">
        <h3 className="text-center text-gray-500 tracking-[0.4em] uppercase text-sm mb-16">Premium Asset Portfolio</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {assets.map((asset, i) => (
            <div key={i} className="asset-card p-10 rounded-sm">
              <div className="text-[#F1C40F] text-xs mb-6 tracking-widest font-bold">ESTATE NO. 0{i+1}</div>
              <h4 className="text-2xl luxury-title mb-4">{asset.title}</h4>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">{asset.desc}</p>
              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <span className="font-bold">{asset.price}</span>
                <button className="text-[#F1C40F] text-xs font-bold border-b border-[#F1C40F] pb-1">ACQUIRE NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
