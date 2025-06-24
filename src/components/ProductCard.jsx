export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <div className="h-40 w-full bg-gray-100 rounded mb-3 flex items-center justify-center">
        <img 
          src={product.image || "/placeholder.png"} 
          alt={product.title} 
          className="h-full object-contain" 
        />
      </div>
      <h3 className="font-semibold text-gray-800">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="text-yellow-600 font-bold mt-1">Ksh {product.price?.toLocaleString()}</p>
    </div>
  );
}
