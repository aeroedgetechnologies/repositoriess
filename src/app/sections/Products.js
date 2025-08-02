"use client";
import Image from 'next/image';
import Link from 'next/link';

const products = [
    {
        name: 'BEAKER',
        desc: '100ml, 250ml, 500ml, 1000ml',
        img: 'https://images.pexels.com/photos/4021087/pexels-photo-4021087.jpeg?auto=compress&cs=tinysrgb&w=400&h=180',
        link: '/products/beaker'
    },
    {
        name: 'FLASK',
        desc: '250ml, 500ml, 1000ml',
        img: 'https://images.pexels.com/photos/4021088/pexels-photo-4021088.jpeg?auto=compress&cs=tinysrgb&w=400&h=180',
        link: '/products/flask'
    },
    {
        name: 'TEST TUBE',
        desc: '5ml, 10ml, 20ml, 50ml',
        img: 'https://images.pexels.com/photos/4021089/pexels-photo-4021089.jpeg?auto=compress&cs=tinysrgb&w=400&h=180',
        link: '/products/test-tube'
    },
    {
        name: 'DOUBLE SURFACE CONDENSER',
        desc: '100mm, 150mm, 200mm, 300mm, 400mm, 500mm',
        img: 'https://images.pexels.com/photos/4021090/pexels-photo-4021090.jpeg?auto=compress&cs=tinysrgb&w=400&h=180',
        link: '/products/condenser'
    },
    {
        name: 'BURETTES (GLASS STOPCOCK/ROTAFLOW)',
        desc: '5ml, 10ml, 25ml, 50ml, 100ml',
        img: 'https://images.pexels.com/photos/4021091/pexels-photo-4021091.jpeg?auto=compress&cs=tinysrgb&w=400&h=180',
        link: '/products/burettes'
    },
    {
        name: 'PIPETTES (GRADUATED/VOLUMETRIC)',
        desc: '1.0ml, 2.0ml, 5.0ml, 10.0ml, 25.0ml, 50.0ml',
        img: 'https://images.pexels.com/photos/4021092/pexels-photo-4021092.jpeg?auto=compress&cs=tinysrgb&w=400&h=180',
        link: '/products/pipettes'
    },
    {
        name: 'CULTURE TUBES (CLEAR GLASS/AMBER(RB))',
        desc: '5ml, 10ml, 30ml, 60ml, 150ml',
        img: 'https://images.pexels.com/photos/4021093/pexels-photo-4021093.jpeg?auto=compress&cs=tinysrgb&w=400&h=180',
        link: '/products/culture-tubes-rb'
    },
    {
        name: 'CULTURE TUBES (CLEAR GLASS/AMBER(FB))',
        desc: '5ml, 10ml, 30ml, 60ml, 150ml',
        img: 'https://images.pexels.com/photos/4021094/pexels-photo-4021094.jpeg?auto=compress&cs=tinysrgb&w=400&h=180',
        link: '/products/culture-tubes-fb'
    }
];

export default function Products() {
    return (
        <section id="products" style={{ background: '#111', color: '#fff', padding: '5vw 0' }}>
            <Link href="/" className="nav-back-desktop" style={{ background: 'transparent', color: '#fff', padding: '0.5rem 2rem', borderRadius: 24, fontWeight: 'bold', textDecoration: 'none', fontSize: 18, marginLeft: 16 }}>Back</Link>

            <h2 style={{
                textAlign: 'center',
                fontSize: '3.2rem',
                marginBottom: 8,
                fontWeight: 700,
                fontFamily: 'serif',
                letterSpacing: 1,
            }}>Our Products</h2>
            <p style={{ textAlign: 'center', marginBottom: 32, fontSize: 22 }}>Product Offerings by Krishnawanshi Overseas</p>
            <div className="products-original-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 48,
                justifyContent: 'center',
                alignItems: 'end',
                maxWidth: 1200,
                margin: '0 auto',
            }}>
                {products.map((p, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', boxShadow: 'none', padding: 0 }}>
                        <img
                            src={p.img}
                            alt={p.name}
                            width={180}
                            height={180}
                            style={{ objectFit: 'contain', borderRadius: 0, marginBottom: 18, background: '#fff', maxHeight: 180, maxWidth: '100%' }}
                            loading="lazy"
                        />
                        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8, color: '#fff', textTransform: 'uppercase', textAlign: 'center', letterSpacing: 1 }}>{p.name}</div>
                        <div style={{ fontSize: 17, color: '#fff', textAlign: 'center', lineHeight: 1.5 }}>{p.desc}</div>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 32 }}>
                <a href="#" style={{ background: '#fff', color: '#111', padding: '0.5rem 2rem', borderRadius: 24, fontWeight: 'bold', textDecoration: 'none', fontSize: 18, boxShadow: '0 2px 8px #0001' }}>MORE...</a>
            </div>
            <style>{`
        @media (max-width: 900px) {
          .products-original-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
        }
        @media (max-width: 600px) {
          .products-original-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }
      `}</style>
        </section>
    );
} 