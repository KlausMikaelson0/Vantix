import React from 'react';

export default function Home() {
  const assets = [
    { title: "متجر النخبة #1", desc: "منصة تجارة إلكترونية متكاملة مصممة للنخبة، تتميز بأداء فائق وتصميم عصري يعكس فخامة براندك." },
    { title: "متجر النخبة #2", desc: "أصل رقمي مجهز بالكامل، يجمع بين سهولة الاستخدام وقوة البرمجة الخاصة لضمان سيطرتك على السوق." },
    { title: "متجر النخبة #3", desc: "استثمار تقني طويل الأمد بملكية كاملة، صُمم خصيصاً لمن يبحث عن التميز والابتعاد عن التكرار." }
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] text-[#E2E8F0] px-6 py-12 md:px-20 md:py-16">
      {/* الهيدر - Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-24">
        <h1 className="text-3xl font-bold tracking-widest text-[#F1C40F] font-serif">VANTIX</h1>
        <div className="bg-[#F1C40F] text-[#0F172A] px-4 py-1 font-bold text-sm rounded transition hover:scale-105 cursor-pointer">
          EN / AR
        </div>
      </nav>

      {/* القسم الرئيسي - Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-32">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          هندسة الأصول الرقمية <span className="text-[#F1C40F]">بتميز مطلق</span>
        </h2>
        <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed">
          نبتكر منصات تجارة إلكترونية فاخرة بملكية كاملة وأداء استثنائي - دون أي رسوم اشتراك شهرية.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="w-full md:w-auto bg-[#F1C40F] text-[#0F172A] px-10 py-4 font-bold text-lg hover:bg-white transition duration-300">
            استكشف محفظة الأصول
          </button>
          <button className="w-full md:w-auto border border-gray-600 px-10 py-4 font-bold text-lg hover:bg-white hover:text-black transition duration-300">
            احجز استشارة حصرية
          </button>
        </div>
      </div>

      {/* شبكة المتاجر - The Grid (هنا السر في الترتيب) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {assets.map((asset, i) => (
          <div key={i} className="bg-[#1E293B] border border-[#F1C40F]/10 p-10 rounded-sm hover:border-[#F1C40F] transition duration-500 group">
            <div className="text-[#F1C40F] text-xs font-bold tracking-widest mb-6 uppercase">
              Premium Asset
            </div>
            <h3 className="text-2xl font-bold mb-6 group-hover:text-[#F1C40F] transition">
              {asset.title}
            </h3>
            <p className="text-gray-400 text-sm leading-loose mb-10 text-right">
              {asset.desc}
            </p>
            <button className="text-[#F1C40F] font-bold border-b border-[#F1C40F] pb-1 hover:text-white hover:border-white transition">
              ACQUIRE NOW
            </button>
          </div>
        ))}
      </div>

      {/* الفوتر - Footer */}
      <footer className="mt-40 text-center text-gray-600 text-xs tracking-widest uppercase">
        Vantix Digital Architecture Lab © 2024
      </footer>
    </main>
  );
}
