export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <div className="h-40 w-full bg-gray-100 rounded mb-3 flex items-center justify-center">
        <img 
          src={product.image_url || "/placeholder.png"} 
          alt={product.name} 
          className="h-full object-contain" 
        />
      </div>
      <h3 className="font-semibold text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.category || "Uncategorized"}</p>
      <p className="text-yellow-600 font-bold mt-1">Ksh {parseFloat(product.price).toLocaleString()}</p>
    </div>
  );
}
