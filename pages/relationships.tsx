import Link from "next/link"
import Navbar from "./navbar";
import Image from "next/image"
const relationships = () => {
  const fam = [
    {
      id: 1,
      title: 'MUM',
      image: '/images/wm.jpg',
      alt: 'Sleepwear category',
      link: "/"
    },
    {
      id: 1,
      title: 'LOVE',
      image: '/images/lov.jpg',
      alt: 'Sleepwear category',
      link: "/"
    },
    {
      id: 1,
      title: 'STRESS',
      image: '/images/mc.jpg',
      alt: 'Sleepwear category',
      link: "/"
    },
  ]
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {fam.map((card) => (
          <div key={card.id} className="relative">
            <Image
              src={card.image}
              alt={card.alt}
              width={800} 
              height={600}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-black tracking-wider font-semibold hover:text-white">{card.title}</h3>
            <Link href = {'card.link'}>more</Link>
            
          </div>
        ))}
      </div>

    </div>
  )
}
export default relationships