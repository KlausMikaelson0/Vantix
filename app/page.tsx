import React from 'react';

export default function Home() {
  const assets = [
    { id: "01", title: "Royal Oud & Perfumes", price: "15,000 SAR" },
    { id: "02", title: "Titan Gaming Gear Hub", price: "8,500 SAR" },
    { id: "03", title: "Artisan Coffee Roasters", price: "5,500 SAR" }
  ];

  return (
    <div style={{ backgroundColor: '#0F172A', color: 'white', minHeight: '100vh', padding: '60px 20px', textAlign: 'center', fontFamily: 'serif' }}>
      {/* اسم المتجر */}
      <h1 style={{ fontSize: '40px', fontWeight: 'bold', letterSpacing: '4px', marginBottom: '80px', color: '#F1C40F' }}>VANTIX</h1>

      {/* حاوية المتاجر - هذا الكود يخليها 3 أعمدة بجانب بعض */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {assets.map((asset) => (
          <div key={asset.id} style={{ flex: '1', minWidth: '300px', border: '1px solid #F1C40F', padding: '40px', backgroundColor: '#1E293B', textAlign: 'left' }}>
            <p style={{ color: '#F1C40F', fontSize: '12px', marginBottom: '15px' }}>ESTATE NO. {asset.id}</p>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>{asset.title}</h2>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '30px' }}>{asset.price}</p>
            <button style={{ width: '100%', padding: '12px', border: '1px solid white', background: 'none', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>ACQUIRE NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
}
