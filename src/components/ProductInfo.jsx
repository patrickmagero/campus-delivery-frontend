// components/ProductInfo.jsx

export default function ProductInfo({ product }) {
  // Extract unique colors and sizes from product variants
  const availableColors = [
    ...new Set(product.variants?.map((v) => v.color).filter(Boolean)),
  ];

  const availableSizes = [
    ...new Set(product.variants?.map((v) => v.size).filter(Boolean)),
  ];

  return (
    <div className="flex-1 space-y-4">
      <p className="text-sm text-gray-500 uppercase">{product.category}</p>
      <h1 className="text-2xl font-bold">{product.name}</h1>

      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-blue-600">
          Ksh {product.price}
        </span>
        {product.old_price && (
          <span className="line-through text-gray-400">
            Ksh {product.old_price}
          </span>
        )}
      </div>

      <p className="text-gray-600">{product.description}</p>

      {/* Color options */}
      {availableColors.length > 0 && (
        <div className="flex items-center gap-2">
          {availableColors.map((color, idx) => (
            <div
              key={idx}
              className="w-6 h-6 rounded-full border"
              style={{ backgroundColor: color }}
              title={color}
            ></div>
          ))}
        </div>
      )}

      {/* Size options */}
      {availableSizes.length > 0 && (
        <div className="flex gap-2">
          {availableSizes.map((size, idx) => (
            <span
              key={idx}
              className="border px-2 py-1 rounded text-sm text-gray-700"
            >
              {size}
            </span>
          ))}
        </div>
      )}

      {/* Quantity selector (static for now) */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Quantity:</span>
        <div className="flex items-center border rounded overflow-hidden">
          <button className="px-3 py-1 text-lg">-</button>
          <span className="px-4 py-1">1</span>
          <button className="px-3 py-1 text-lg">+</button>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Add to Cart
        </button>
        <button className="border px-4 py-2 rounded-lg">Buy Now</button>
      </div>

      {/* Tags */}
      {product.tags && product.tags.length > 0 && (
        <div className="text-sm text-gray-500">
          Tags: {product.tags.join(", ")}
        </div>
      )}
    </div>
  );
}
