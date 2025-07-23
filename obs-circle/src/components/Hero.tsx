export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-800 text-white p-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Let's Explore and Build
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl ">
        your Connection in Web 3.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
          Get Started
        </button>
        <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-gray-900 transition-colors ">
          Learn More
        </button>
      </div>
    </section>
  );
}