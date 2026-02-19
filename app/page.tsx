import React from 'react';

export default function Home() {
  const assets = [
    { title: "متجر النخبة #1", desc: "وصف فخم ومختصر للمتجر الجاهز الذي ستعرضه هنا للبيع بملكية كاملة وأداء استثنائي." },
    { title: "متجر النخبة #2", desc: "وصف فخم ومختصر للمتجر الجاهز الذي ستعرضه هنا للبيع بملكية كاملة وأداء استثنائي." },
    { title: "متجر النخبة #3", desc: "وصف فخم ومختصر للمتجر الجاهز الذي ستعرضه هنا للبيع بملكية كاملة وأداء استثنائي." }
  ];

  return (
    <main style={{ backgroundColor: '#0F172A', color: '#E2E8F0', minHeight: '100-screen', padding: '40px' }}>
      {/* Header */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px', maxWidth: '1200px', margin: '0 auto 80px' }}>
        <h1 style={{ color: '#F1C40F', fontSize: '32px', fontWeight: 'bold', letterSpacing: '2px' }}>VANTIX</h1>
        <div style={{ backgroundColor: '#F1C40F', color: '#0F172A', padding: '5px 15px', fontWeight: 'bold', borderRadius: '4px' }}>EN / AR</div>
      </nav>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '100px' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>هندسة الأصول الرقمية <span style={{ color: '#F1C40F' }}>بتميز مطلق</span></h2>
        <p style={{ color: '#94A3B8', fontSize: '18px', maxWidth: '700px', margin: '0 auto 40px' }}>نبتكر منصات تجارة إلكترونية فاخرة بملكية كاملة وأداء استثنائي - دون أي رسوم اشتراك شهرية.</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{ backgroundColor: '#F1C40F', border: 'none', padding: '15px 35px', fontWeight: 'bold', cursor: 'pointer' }}>استكشف محفظة الأصول</button>
          <button style={{ backgroundColor: 'transparent', border: '1px solid #475569', color: 'white', padding: '15px 35px', fontWeight: 'bold', cursor: 'pointer' }}>احجز استشارة حصرية</button>
        </div>
      </div>

      {/* Assets Grid - هذا اللي بيخليها 3 أعمدة بجانب بعض */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {assets.map((asset, i) => (
          <div key={i} style={{ backgroundColor: '#1E293B', padding: '40px', border: '1px solid rgba(241, 196, 15, 0.1)', textAlign: 'right' }}>
            <div style={{ color: '#F1C40F', fontSize: '12px', marginBottom: '15px', fontWeight: 'bold' }}>PREMIUM ASSET</div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>{asset.title}</h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px' }}>{asset.desc}</p>
            <button style={{ color: '#F1C40F', background: 'none', border: 'none', borderBottom: '1px solid #F1C40F', paddingBottom: '5px', cursor: 'pointer', fontWeight: 'bold' }}>ACQUIRE NOW</button>
          </div>
        ))}
      </div>
    </main>
  );
}
