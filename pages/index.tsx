"use client"
import Link from "next/link"
import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from "./navbar"


  
const Index = () => {

  const router = useRouter();

  const handleExplore = () => {
    router.push('/home');  
  };
  return (
    <div>
      
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/teee.jpg"
            alt="Architectural Detail"
            width={800} 
            height={600}
            className="w-full h-full object-cover"
          />
          < Navbar />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
            ROMANTICIZING YOUR LIFE
          </h1>
          <button className="mt-8 px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors" onClick={handleExplore}>
            EXPLORE MORE
          </button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="relative h-[700px]">
          <Image
            src="/images/forest.jpg"
            alt="Elegant Scene"
            width={800} 
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 max-w-lg">
          <h2 className="text-3xl font-light">Welcome To ESSIE BLOGS</h2>
          <p className="text-gray-600 leading-relaxed">
            Romanticizing life and embracing slow living can help you find joy in the small, simple moments of everyday life.
          </p>
          <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors" onClick={handleExplore}>
            EXPLORE MORE
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="space-y-4">
            <Image
              src="/images/one.jpg"
              alt="Service 1"
              width={800} 
              height={600}
              className="w-full h-64 object-cover"
            />
            <div className="text-sm text-gray-500">APRIL 12TH 2024</div>
            <h3 className="text-xl">CRAFTING</h3>
            <p className="text-gray-600">
              Crafting bespoke digital experiences with attention to every detail.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-50 p-8 flex flex-col justify-center">
            <h3 className="text-xl mb-4">ENTERTRENUER</h3>
            <p className="text-gray-600 mb-6">
              Discover our range of creative services designed to elevate your digital presence.
            </p>
            <Link href="/services" className="text-sm uppercase tracking-wider hover:opacity-75">
              VIEW MORE
            </Link>
          </div>

          {/* Service Card 3 */}
          <div className="space-y-4">
            <Image
              src="/images/tee.jpg"
              alt="Service 3"
              width={800} 
              height={600}
              className="w-full h-64 object-cover"
            />
            <div className="text-sm text-gray-500">FEBRUARY 24TH 2024</div>
            <h3 className="text-xl">PORTFOLIO</h3>
            <p className="text-gray-600">
              Explore our collection of carefully curated projects and collaborations.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl mb-6">ABOUT US</h2>
            <p className="text-gray-300 leading-relaxed">
              We believe in creating spaces that tell stories, evoke emotions, 
              and transform digital presence into memorable experiences. Our work 
              combines classical beauty with modern functionality.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Index;