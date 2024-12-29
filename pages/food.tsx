import Link from "next/link"
import Navbar from "./navbar"

const food = () => {

  const foods = [
    {
      id: 1,
      title: 'CHICKEN WINGS',
      image: '/images/fchic.jpg',
      alt: 'food category',
      link: "/"
    },
    {
      id: 2,
      title: 'CHICKEN TENDER',
      image: '/images/chc.jpg',
      alt: 'Food category'
    },
    {
      id: 3,
      title: 'BURGER',
      image: '/images/chips.jpg',
      alt: 'Food category'
    },
    {
      id: 4,
      title: 'HEN',
      image: '/images/chicn.jpg',
      alt: 'Food category'
    },
    {
      id: 5,
      title: 'CHICK',
      image: '/images/chik.jpg',
      alt: 'Food category'
    },
    


  ]
  return (
    <div>
        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {foods.map((card) => (
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
export default food