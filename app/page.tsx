export default function Home() {
  const assets = [
    { title: "Royal Oud & Perfumes", price: "15,000 SAR" },
    { title: "Titan Gaming Gear Hub", price: "8,500 SAR" },
    { title: "Artisan Coffee Roasters", price: "5,500 SAR" }
  ];

  return (
    <main className="min-h-screen p-8 md:p-24 bg-navy">
      <div className="max-w-7xl mx-auto">
        <h1 className="luxury-title text-center text-6xl text-gold mb-20">VANTIX</h1>
        
        {/* هذا الكود هو المسؤول عن جعلهم 3 أعمدة بجانب بعض */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {assets.map((asset, i) => (
            <div key={i} className="bg-slate p-10 border border-gold/10 hover:border-gold transition-all duration-300">
              <p className="text-gold text-xs font-bold mb-4 uppercase">Estate No. 0{i+1}</p>
              <h3 className="luxury-title text-2xl mb-6">{asset.title}</h3>
              <p className="text-white font-bold text-xl">{asset.price}</p>
              <button className="mt-8 w-full border border-gold py-2 text-gold font-bold hover:bg-gold hover:text-navy transition">ACQUIRE NOW</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
