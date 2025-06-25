// components/ProductImageGallery.jsx
export default function ProductImageGallery({ images }) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-md h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">No image available</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Main image */}
      <div className="aspect-square rounded-lg overflow-hidden shadow">
        <img
          src={images[0]}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className="w-16 h-16 object-cover rounded border hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
}
