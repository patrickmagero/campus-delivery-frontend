import { Link } from 'react-router-dom';

export default function ProductCategoryCard({ title, items = [], buttonLink = '/products' }) {
  return (
    <Link
      to={buttonLink}
      className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between min-h-[300px] hover:shadow-md transition-all duration-300 group"
    >
      <h3 className="text-lg font-semibold mb-4 group-hover:text-yellow-600 transition-colors duration-200">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img
              src={item.image}
              alt={item.label}
              className="h-12 w-12 object-contain mb-2 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-sm text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>

      <span className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md w-full text-center transition-colors duration-200">
        View All Products
      </span>
    </Link>
  );
}
