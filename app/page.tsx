import React from 'react';

export default function Home() {
  const assets = [
    { title: "Royal Oud & Perfumes", price: "15,000 SAR", desc: "Ultra-premium oriental fragrance platform featuring rare oud collections." },
    { title: "Titan Gaming Gear Hub", price: "8,500 SAR", desc: "Elite gaming equipment marketplace engineered for professional athletes." },
    { title: "Artisan Coffee Roasters", price: "5,500 SAR", desc: "Premium specialty coffee platform designed for artisan roasters." }
  ];

  return (
    <main style={{ backgroundColor: '#0F172A', color: '#E2E8F0', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto 80px' }}>
        <h1 style={{ color: '#F1C40F', fontSize: '32px', fontWeight: 'bold', letterSpacing: '3px' }}>VANTIX</h1>
        <div style={{ backgroundColor: '#F1C40F', color: '#0F172A', padding: '5px 15px', fontWeight: 'bold', borderRadius: '2px', fontSize: '14px' }}>AR / EN</div>
      </nav>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '100px' }}>
        <h2 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '-1px' }}>
          Architecting Digital <span style={{ color: '#F1C40F' }}>Legacies</span>
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '20px', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          We craft high-performance digital assets with 100% ownership and zero monthly fees.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{ backgroundColor: '#F1C40F', border: 'none', padding: '15px 40px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Explore Assets</button>
          <button style={{ backgroundColor: 'transparent', border: '1px solid #475569', color: 'white', padding: '15px 40px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Schedule Consultation</button>
        </div>
      </div>

      {/* Assets Grid - هذا الجزء سيجبر المتاجر على الظهور بجانب بعضها */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', color: '#64748B', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '50px' }}>Premium Asset Portfolio</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {assets.map((asset, i) => (
            <div key={i} style={{ flex: '1', minWidth: '300px', backgroundColor: '#1E293B', padding: '40px', border: '1px solid rgba(241, 196, 15, 0.1)', transition: '0.3s' }}>
              <div style={{ color: '#F1C40F', fontSize: '12px', marginBottom: '20px', fontWeight: 'bold', letterSpacing: '2px' }}>ESTATE NO. 0{i+1}</div>
              <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>{asset.title}</h4>
              <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.7', marginBottom: '30px', minHeight: '70px' }}>{asset.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{asset.price}</span>
                <button style={{ color: '#F1C40F', background: 'none', border: 'none', borderBottom: '1px solid #F1C40F', paddingBottom: '3px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px', letterSpacing: '1px' }}>ACQUIRE NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
