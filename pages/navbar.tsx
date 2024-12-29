import Link from "next/link"

const navbar = () => {
  return (
    <div>
        {/* Navigation */}
      <nav className="border-b border-gray-200 bg-gray-400 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Navigation */}
            <div className="flex space-x-8">
              <Link href="/home" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="/design" className="text-gray-700 hover:text-gray-900">
                Design
              </Link>
              <Link href="/food" className="text-gray-700 hover:text-gray-900">
                Food
              </Link>
              <Link href="/relationships" className="text-gray-700 hover:text-gray-900">
                Relationships
              </Link>
            </div>
             {/* Logo */}
             <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-serif tracking-wider">
                Waka Blogs
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="flex space-x-8">
              <Link href="/explore" className="text-gray-700 hover:text-gray-900">
                Explore
              </Link>
              <Link href="/craft" className="text-gray-700 hover:text-gray-900">
                Craft
              </Link>
              <Link href="/subscribe" className="text-gray-700 hover:text-gray-900">
                Subscribe
              </Link>
              <button className="text-gray-700 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
export default navbar