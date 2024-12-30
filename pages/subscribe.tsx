import Navbar from "./navbar";



const subscribe = () => {
  return (
    <div>
        <Navbar />
      {/* FORM */}

      <div className="w-full max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-8">
        <p className="text-gray-800 text-lg">
          I don&apos;t send out the newsletter very frequently. But when I do, it&apos;s pretty rad.
        </p>
      </div>
      
      <form  className="space-y-6">
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="px-8 py-2 bg-yellow-200 hover:bg-yellow-300 rounded-full text-gray-800 font-medium transition-colors duration-200"
          >
            Subscribe Now
          </button>
        </div>
      </form>
    </div>

    </div>
  )
}
export default subscribe