import Navbar from "./navbar";
import { FaStar } from "react-icons/fa";

const craft = () => {

    const categoryCards = [
        {
          id: 1,
          title: 'SHOP SLEEPWEAR',
          image: '/images/ering.jpg',
          alt: 'Sleepwear category'
        },
        {
          id: 2,
          title: 'SHOP FOR FRIENDS',
          image: '/images/earring.jpg',
          alt: 'Friends gifts category'
        },
        {
          id: 3,
          title: 'SHOP ACCESSORIES',
          image: '/images/earing.jpg',
          alt: 'Accessories category'
        }
      ];
    
      const stockingFillers = [
        {
          id: 1,
          name: 'SILK PYJAMAS',
          price: '£19.00',
          image: '/images/silkpjs.jpg',
        },
        {
          id: 2,
          name: 'EARRINGS',
          price: '£22.00',
          image: '/images/earing.jpg',
        },
        {
          id: 3,
          name: 'VELVET BOW',
          price: '£25.99',
          image: '/images/bow.jpg',
        },
        {
          id: 4,
          name: 'SEWING',
          price: '£8.50',
          image: '/images/sw.jpg',
        }
      ];

  return (
    <div>
        < Navbar />
        {/* Hero Section */}
      <div className="relative mb-12">
        <img 
          src="/images/one.jpg" 
          alt="Holiday decor"
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-light italic">
          Joyeux Noël
        </h1>
      </div>

      {/* Main Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl mb-4">THE GIFTING EMPORIUM</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We've curated a careful selection of the finest gifts to spoil one person or yourself this season. Tis the season to indulge, from silk pyjamas to the perfect NYE accessories, it's time to gift it well.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {categoryCards.map((card) => (
          <div key={card.id} className="relative">
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-sm tracking-wider text-center">{card.title}</h3>
            
          </div>
        ))}
      </div>

      {/* Stocking Fillers Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-8">
          <FaStar className="w-4 h-4" />
          <h2 className="text-2xl">GIFT IT WELL</h2>
          <FaStar className="w-4 h-4" />
        </div>
        <button className="text-sm tracking-wider underline mb-12">
          SHOP STOCKING FILLERS
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stockingFillers.map((item) => (
            <div key={item.id} className="text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h4 className="text-sm mb-2">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* All Wrapped Up Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src="/images/bkk.jpg"
              alt="Gift wrapping"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="bg-white p-8">
            <h2 className="text-2xl mb-4">ALL WRAPPED UP</h2>
            <p className="text-gray-600 mb-6 text-sm">
              We don't just offer our gift wrapping service - ensure your gifts beautifully wrapped
            </p>
            <button className="text-gray-800 text-sm border-b border-gray-800">
              SHOP GIFTS
            </button>
          </div>
        </div>

        {/* Large Gift Image */}
        <div className="relative">
          <img
            src="/images/grn.jpg"
            alt="Wrapped gift with bow"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="h-1 bg-gray-200 rounded">
              <div className="w-1/2 h-full bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>

    </div>
   
  )
}
export default craft