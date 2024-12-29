"use client";

import Navbar from './navbar';
import Link from "next/link";

const design = () => {
  const navigationLinks = [
    'Favorite Books',
    'Gift Guides',
    'Painting',
    'Sewing',
    
  ];

  const contentCards = [
    {
      image: '/images/whtcofe.jpg',
      title: 'Have a Cozy Weekend.',
      type: 'weekend',
    },
    {
      image: '/images/blcofe.jpg',
      title: 'Three Comic/Movie/Band',
      type: 'entertainment',
    },
    {
        image: '/images/comb.jpg',
        title: 'Hair',
        type: 'entertainment',
      },
      {
        image: '/images/sw.jpg',
        title: 'Yarn',
        type: 'entertainment',
      },
      {
        image: '/images/thread.jpg',
        title: 'Thread',
        type: 'entertainment',
      },
      {
        image: '/images/machine.jpg',
        title: 'Sewing Machine',
        type: 'entertainment',
      },
    {
      image: '/images/flo2.jpg',
      title: 'Most Popular',
      subtitle: 'DESIGN',
      
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-serif text-center mb-8">Design</h1>
        <nav>
          <ul className="flex justify-between items-center border-t border-b border-gray-200 py-4">
            {navigationLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-gray-800 hover:text-gray-600">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contentCards.map((card, index) => (
          <div key={index} className="space-y-4">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover"
            />

            {card.type === 'popular' ? (
              <div className="space-y-2">
                <p className="text-blue-600 text-sm">{card.subtitle}</p>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium">{card.title}</h2>
                </div>
              </div>
            ) : (
              <h2 className="text-xl font-medium">{card.title}</h2>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default design;
