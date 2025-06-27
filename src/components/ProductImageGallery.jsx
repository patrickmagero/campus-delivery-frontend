import { useState } from "react";

export default function ProductImageGallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  if (!images.length) {
    return <div className="p-4 text-gray-500">No images available.</div>;
  }

  return (
    <div className="w-full lg:w-1/2 space-y-4">
      {/* Main Image */}
      <div className="border rounded-lg overflow-hidden">
        <img
          src={activeImage}
          alt="Product"
          className="w-full h-80 object-cover transition-all duration-300"
        />
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setActiveImage(img)}
              className={`w-16 h-16 object-cover rounded-lg border cursor-pointer transition 
                ${img === activeImage ? "ring-2 ring-blue-500" : "hover:opacity-80"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
