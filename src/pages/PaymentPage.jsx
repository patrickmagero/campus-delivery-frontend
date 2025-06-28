import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function PaymentPage() {
  const { cartItems } = useContext(CartContext);
  const [selectedMethod, setSelectedMethod] = useState("mpesa");
  const [phone, setPhone] = useState("");

  // Simulated buyer address from sign-up (replace with real user context)
  const buyerAddress = "Nairobi, CBD";

  // Simulate distance-based shipping
  const calculateShipping = (sellerLocation, buyerLocation) => {
    // Very simplified: real-world would involve coordinates and maps
    if (sellerLocation === buyerLocation) return 50;
    return 150;
  };

  // Simulate seller-specific discount (from cart item)
  const getSellerDiscount = (sellerId) => {
    const discountMap = {
      1: 30, // Seller 1 gives Ksh 30 off
      2: 50, // Seller 2 gives Ksh 50 off
      3: 20, // Seller 3 gives Ksh 20 off
    };
    return discountMap[sellerId] || 0;
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = cartItems.reduce(
    (total, item) =>
      total + calculateShipping(item.seller_location || "Nairobi", buyerAddress),
    0
  );

  const discount = cartItems.reduce(
    (total, item) => total + getSellerDiscount(item.seller_id),
    0
  );

  const total = subtotal + shipping - discount;

  const handleCheckout = () => {
    alert(`Processing payment for ${phone} via ${selectedMethod}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* LEFT: Payment Methods */}
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
        <p className="text-sm text-gray-500 mb-6">
          Trusted Payment, 100% Money Back Guarantee
        </p>

        {/* Wallet (disabled) */}
        <label className="flex items-center gap-4 p-4 border rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed">
          <input type="radio" disabled />
          <span>Wallet</span>
        </label>

        {/* M-Pesa */}
        <label className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer">
          <input
            type="radio"
            name="payment"
            checked={selectedMethod === "mpesa"}
            onChange={() => setSelectedMethod("mpesa")}
          />
          <div>
            <p className="font-semibold">M-PESA</p>
            <p className="text-sm text-gray-500">Via LEGACY CORE LTD</p>
          </div>
        </label>

        {/* Phone Number Input */}
        {selectedMethod === "mpesa" && (
          <div className="px-4">
            <input
              type="text"
              placeholder="+254 7..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full border rounded px-3 py-2"
            />
          </div>
        )}

        {/* Other methods disabled */}
        <label className="flex items-center gap-4 p-4 border rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed">
          <input type="radio" disabled />
          <span>Airtel, Equity, Vooma & More</span>
        </label>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
        >
          CHECKOUT NOW →
        </button>
      </div>

      {/* RIGHT: Order Summary */}
      <div className="bg-white shadow rounded-lg p-6 h-fit border">
        <h3 className="text-lg font-bold mb-4">Order Summary</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>Ksh {subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Ksh {shipping}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Seller Discount</span>
            <span>-Ksh {discount}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>Ksh {total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
