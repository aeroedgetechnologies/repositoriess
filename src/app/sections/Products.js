"use client";
import Image from 'next/image';
import Link from 'next/link';

const products = [
    {
        name: 'BEAKER',
        desc: '100ml, 250ml, 500ml, 1000ml',
        img: '/lab-glassware-with-colored-substance-assortment.jpg',
        link: '/sample-local-pdf.pdf'
    },
    {
        name: 'FLASK',
        desc: '250ml, 500ml, 1000ml',
        img: '/laboratory-glassware-with-blue-liquid-assortment.jpg',
        link: '/sample-local-pdf.pdf'
    },
    {
        name: 'TEST TUBE',
        desc: '5ml, 10ml, 20ml, 50ml',
        img: '/world-science-day-arrangement-with-microscope-copy-space.jpg',
        link: '/sample-local-pdf.pdf'
    },
    {
        name: 'DOUBLE SURFACE CONDENSER',
        desc: '100mm, 150mm, 200mm, 300mm, 400mm, 500mm',
        img: '/front-view-chemicals-composition-lab-with-copy-space.jpg',
        link: '/sample-local-pdf.pdf'
    },
    {
        name: 'BURETTES (GLASS STOPCOCK/ROTAFLOW)',
        desc: '5ml, 10ml, 25ml, 50ml, 100ml',
        img: '/laboratory-glassware-with-colored-liquid.jpg',
        link: '/sample-local-pdf.pdf'
    },
    {
        name: 'PIPETTES (GRADUATED/VOLUMETRIC)',
        desc: '1.0ml, 2.0ml, 5.0ml, 10.0ml, 25.0ml, 50.0ml',
        img: '/laboratory-glassware-with-blue-liquid-assortment.jpg',
        link: '/sample-local-pdf.pdf'
    },
    {
        name: 'CULTURE TUBES (CLEAR GLASS/AMBER(RB))',
        desc: '5ml, 10ml, 30ml, 60ml, 150ml',
        img: '/laboratory-glassware-with-colored-liquid.jpg',
        link: '/sample-local-pdf.pdf'
    },
    {
        name: 'CULTURE TUBES (CLEAR GLASS/AMBER(FB))',
        desc: '5ml, 10ml, 30ml, 60ml, 150ml',
        img: '/blue-liquid-laboratory-glassware-assortment_23-2149481689 (1).jpg',
        link: '/sample-local-pdf.pdf'
    }
];

export default function Products() {
    return (
        <section id="products" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Link 
                    href="/" 
                    className="inline-block mb-8 px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                    Back
                </Link>

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif tracking-wide">
                    Our Products
                </h2>
                <p className="text-xl text-gray-300 text-center mb-12">
                    Product Offerings by Krishnawanshi Overseas
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((p, i) => (
                        <a href={p.link} key={i} className="group" download>
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                                <div className="relative h-48">
                                    <Image
                                        src={p.img}
                                        alt={p.name}
                                        width={300} // Fixed width
                                        height={200} // Fixed height
                                        style={{ objectFit: 'contain' }}
                                        className="p-4 bg-white"
                                        loading="lazy"
                                        placeholder="blur" // Adds a blur placeholder while loading
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==" // Minimal blur placeholder
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                        {p.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm line-clamp-2">
                                        {p.desc}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="/sample-local-pdf.pdf" 
                        className="inline-block px-8 py-3 text-lg font-semibold text-gray-900 bg-white rounded-full hover:bg-blue-100 hover:text-blue-900 transition-all duration-300 shadow-md hover:shadow-lg"
                        download
                    >
                        More Products
                    </a>
                </div>
            </div>
        </section>
    );
}