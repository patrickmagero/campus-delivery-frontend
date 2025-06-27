import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function OrderCompletePage() {
  const { cartItems } = useContext(CartContext);
  
  // Dummy data for example
  const orderId = "#SDGT1254FD";
  const paymentMethod = "M-Pesa";
  const transactionId = "TR542SSFE";
  const deliveryDate = "May 12, 2019";

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 100;
  const discount = 29;
  const total = subtotal + shipping - discount;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Success Icon & Message */}
      <div className="text-center mb-10">
        <div className="text-yellow-500 text-5xl mb-4">✔️</div>
        <h2 className="text-2xl font-bold">Your order is completed</h2>
        <p className="text-gray-600">Thank you, Your order has been received</p>
      </div>

      {/* Order Meta Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 text-sm text-white font-semibold">
        <div className="bg-yellow-500 px-4 py-3 rounded shadow">
          ORDER ID: <span className="block text-black">{orderId}</span>
        </div>
        <div className="bg-yellow-500 px-4 py-3 rounded shadow">
          PAYMENT METHOD: <span className="block text-black">{paymentMethod}</span>
        </div>
        <div className="bg-yellow-500 px-4 py-3 rounded shadow">
          TRANSACTION ID: <span className="block text-black">{transactionId}</span>
        </div>
        <div className="bg-yellow-500 px-4 py-3 rounded shadow">
          ESTIMATED DELIVERY DATE: <span className="block text-black">{deliveryDate}</span>
        </div>
      </div>

      {/* Order Details */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">Order Details</h3>
        <div className="divide-y">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500 uppercase">{item.category}</p>
                </div>
              </div>
              <p className="font-semibold">KES {(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Summary Totals */}
        <div className="mt-6 border-t pt-4 text-sm text-gray-700 space-y-2">
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
            <span>Coupon Discount</span>
            <span>-Ksh {discount}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>Ksh {total}</span>
          </div>
        </div>
      </div>

      {/* Track Order Button */}
      <div className="text-right mt-6">
        <Link to="/delivery">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
            Track Order
          </button>
        </Link>
      </div>
    </div>
  );
}
