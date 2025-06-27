import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const totalPrice = (parseFloat(product.price) * quantity).toFixed(2);

  return (
    <div className="flex-1 space-y-4">
      <p className="text-sm text-gray-500 uppercase">{product.category}</p>
      <h1 className="text-2xl font-bold">{product.name}</h1>

      {/* Dynamic Price */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-blue-600">
          Ksh {totalPrice}
        </span>
        {product.old_price && (
          <span className="line-through text-gray-400">
            Ksh {parseFloat(product.old_price).toFixed(2)}
          </span>
        )}
        <span className="text-sm text-gray-500"> (x{quantity})</span>
      </div>

      <p className="text-gray-600">{product.description}</p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Quantity:</span>
        <div className="flex items-center border rounded overflow-hidden">
          <button onClick={handleDecrease} className="px-3 py-1 text-lg">
            -
          </button>
          <span className="px-4 py-1">{quantity}</span>
          <button onClick={handleIncrease} className="px-3 py-1 text-lg">
            +
          </button>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => addToCart(product, quantity)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            addToCart(product, quantity);
            navigate("/cart");
          }}
          className="border px-4 py-2 rounded-lg"
        >
          Buy Now
        </button>
      </div>

      {/* Optional: Tags */}
      {product.tags && product.tags.length > 0 && (
        <div className="text-sm text-gray-500">
          Tags: {product.tags.join(", ")}
        </div>
      )}
    </div>
  );
}
