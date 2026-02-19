export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#E2E8F0] p-6 md:p-20">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-3xl font-bold tracking-widest text-[#F1C40F]">VANTIX</h1>
        <button className="text-sm border border-[#F1C40F]/50 px-4 py-1 rounded text-[#F1C40F]">AR / EN</button>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-24">
        <h2 className="text-5xl md:text-7xl font-serif mb-6">Architecting Digital <span className="text-[#F1C40F]">Legacies</span></h2>
        <p className="text-gray-400 text-xl mb-10">High-performance digital assets with 100% ownership and zero monthly fees.</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#F1C40F] text-[#0F172A] px-8 py-4 font-bold rounded-sm">Explore Assets</button>
          <button className="border border-gray-600 px-8 py-4 font-bold rounded-sm hover:bg-white hover:text-black transition">Schedule Consultation</button>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-[#1E293B] border border-[#F1C40F]/10 p-8 rounded-sm hover:border-[#F1C40F] transition-all group">
            <div className="text-[#F1C40F] text-xs mb-4 tracking-widest uppercase">Premium Asset</div>
            <h3 className="text-2xl font-bold mb-4">Luxurious Arabian Oud</h3>
            <p className="text-gray-400 text-sm mb-8">Turnkey e-commerce solution engineered for excellence in the perfume industry.</p>
            <button className="text-[#F1C40F] font-bold border-b border-[#F1C40F] pb-1 group-hover:text-white group-hover:border-white transition">ACQUIRE NOW</button>
          </div>
        ))}
      </div>
    </main>
  );
}
