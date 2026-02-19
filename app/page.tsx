import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white p-6 md:p-20">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-24 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-widest text-[#F1C40F]">VANTIX</h1>
        <div className="bg-[#F1C40F] text-[#0F172A] px-4 py-1 font-bold text-sm rounded cursor-pointer">EN / AR</div>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-5xl mx-auto mb-32">
        <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
          هندسة الأصول الرقمية <span className="gold-gradient">بتميز مطلق</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          نبتكر منصات تجارة إلكترونية فاخرة بملكية كاملة وأداء استثنائي - دون أي رسوم اشتراك شهرية.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-[#F1C40F] text-[#0F172A] px-10 py-4 font-bold text-lg hover:scale-105 transition">استكشف محفظة الأصول</button>
          <button className="border border-gray-600 px-10 py-4 font-bold text-lg hover:bg-white hover:text-black transition">احجز استشارة حصرية</button>
        </div>
      </div>

      {/* Assets Grid Section */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="asset-card p-8 rounded-sm text-right">
            <div className="text-[#F1C40F] text-xs mb-4 tracking-widest uppercase font-bold">Premium Asset</div>
            <h3 className="text-2xl font-bold mb-4">متجر النخبة #{i}</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">وصف فخم ومختصر للمتجر الجاهز الذي ستعرضه هنا للبيع بملكية كاملة وأداء استثنائي.</p>
            <button className="w-full border border-[#F1C40F] text-[#F1C40F] py-3 font-bold hover:bg-[#F1C40F] hover:text-black transition uppercase text-xs tracking-widest">Acquire Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}
