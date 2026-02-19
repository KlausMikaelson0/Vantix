import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      {/* Header */}
      <nav className="flex justify-between items-center mb-20">
        <div className="text-3xl font-bold tracking-tighter luxury-gradient">VANTIX</div>
        <button className="gold-button px-6 py-2 rounded-sm font-bold text-sm">EN / AR</button>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          هندسة الأصول الرقمية <span className="luxury-gradient">بتميز مطلق</span>
        </h1>
        <p className="text-gray-400 text-xl mb-12">
          نبتكر منصات تجارة إلكترونية فاخرة بملكية كاملة وأداء استثنائي - دون أي رسوم اشتراك شهرية.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="gold-button px-10 py-4 text-lg font-bold">استكشف محفظة الأصول</button>
          <button className="border border-gray-700 px-10 py-4 text-lg font-bold hover:bg-white hover:text-black transition">احجز استشارة حصرية</button>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[#1E293B] p-8 rounded-sm gold-border hover:border-[#F1C40F] transition duration-500">
            <div className="text-[#F1C40F] text-xs mb-4">PREMIUM ASSET</div>
            <h3 className="text-2xl font-bold mb-4">Asset #{i}</h3>
            <p className="text-gray-400 mb-8">وصف فخم ومختصر للمتجر الجاهز الذي ستعرضه هنا للبيع.</p>
            <button className="text-sm font-bold border-b border-[#F1C40F] pb-1">ACQUIRE NOW</button>
          </div>
        ))}
      </div>
    </main>
  );
}
