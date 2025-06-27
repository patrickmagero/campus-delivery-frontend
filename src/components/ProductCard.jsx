import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="block group">
      <div className="border rounded-md overflow-hidden shadow hover:shadow-md transition duration-200 bg-white">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="p-4 space-y-1">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
          <p className="text-sm text-gray-500 truncate">{product.category}</p>
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-semibold">Ksh {product.price}</span>
            {product.old_price && (
              <span className="line-through text-gray-400 text-sm">Ksh {product.old_price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
