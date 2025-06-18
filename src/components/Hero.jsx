// src/components/Hero.jsx
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-[#F8F9FF] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Text Section */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Don’t miss amazing grocery deals
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Shop with us for the freshest produce and unbeatable prices.
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Shop now
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/shoppingcartandgroceries.jpeg"
            alt="Shopping Cart and Groceries"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
