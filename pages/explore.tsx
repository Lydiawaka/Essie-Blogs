import Link from "next/link"
import Navbar from "./navbar"
const explore = () => {
  const nature = [
    {
      id: 1,
      title: 'SHOP SLEEPWEAR',
      image: '/images/riv.jpg',
      alt: 'Sleepwear category',
      link: "/"
    },
    {
      id: 1,
      title: 'SHOP SLEEPWEAR',
      image: '/images/ros.jpg',
      alt: 'Sleepwear category',
      link: "/"
    },
    {
      id: 1,
      title: 'SHOP SLEEPWEAR',
      image: '/images/flo1.jpg',
      alt: 'Sleepwear category',
      link: "/"
    },
    {
      id: 1,
      title: 'SHOP SLEEPWEAR',
      image: '/images/flo2.jpg',
      alt: 'Sleepwear category',
      link: "/"
    },
    {
      id: 1,
      title: 'SHOP SLEEPWEAR',
      image: '/images/riv.jpg',
      alt: 'Sleepwear category',
      link: "/"
    }
  ]
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {nature.map((card) => (
          <div key={card.id} className="relative">
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-black tracking-wider font-semibold hover:text-white">{card.title}</h3>
            <Link href = {'card.link'}>View Recipe</Link>
            
          </div>
        ))}
      </div>
    </div>
  )
}
export default explore