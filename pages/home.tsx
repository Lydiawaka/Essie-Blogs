import Head from "next/head"
import Link from "next/link";
import Navbar from "./navbar";
import { FaInstagram, FaPinterest, FaFacebook, FaTwitter } from "react-icons/fa";


const home = () => {
  return (
    <div>
      <Head>
        <title>Waka Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navbar />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                src="/images/grn.jpg"
                alt="Subway entrance with snow"
                className="object-cover rounded-lg"
              />
            </div>
            {/* Add more blog content here */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="text-center">
                <img
                  src="/images/bkk.jpg"
                  alt="Profile"
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-2xl font-serif mb-4">Waka</h2>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaPinterest className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default home