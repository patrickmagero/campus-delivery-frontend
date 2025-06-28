import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function BillingPage() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [deliveryNote, setDeliveryNote] = useState("");
  const [address, setAddress] = useState("Nairobi, CBD");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.address) {
      setAddress(user.address);
    }
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 100;
  const discount = 29;
  const total = subtotal + shipping - discount;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* LEFT COLUMN */}
      <div className="lg:col-span-2 space-y-6">

        {/* Tabs */}
        <div className="flex gap-4">
          <button
            className={`flex-1 py-2 border rounded-t-lg ${
              deliveryMethod === "delivery"
                ? "bg-white border-b-4 border-yellow-400 font-semibold"
                : "bg-gray-100"
            }`}
            onClick={() => setDeliveryMethod("delivery")}
          >
            Delivery <span className="text-sm block text-gray-500">Ready within 2hrs</span>
          </button>
          <button
            className={`flex-1 py-2 border rounded-t-lg ${
              deliveryMethod === "pickup"
                ? "bg-white border-b-4 border-yellow-400 font-semibold"
                : "bg-gray-100"
            }`}
            onClick={() => setDeliveryMethod("pickup")}
          >
            Pick at a store <span className="text-sm block text-gray-500">Within an hour</span>
          </button>
        </div>

        {/* Delivery Address */}
        <section className="border rounded-lg overflow-hidden">
          <div className="bg-yellow-400 px-4 py-2 font-semibold">Delivery Address</div>
          {!editing ? (
            <div className="p-4 flex justify-between items-center">
              <p>{address}</p>
              <button
                onClick={() => setEditing(true)}
                className="text-blue-600 text-sm"
              >
                Change Address
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-2">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setEditing(false)}
                  className="text-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setEditing(false);
                    const user = JSON.parse(localStorage.getItem("user")) || {};
                    const updatedUser = { ...user, address };
                    localStorage.setItem("user", JSON.stringify(updatedUser));
                  }}
                  className="text-blue-600 font-semibold"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Schedule a delivery */}
        <section className="border rounded-lg overflow-hidden">
          <div className="bg-yellow-400 px-4 py-2 font-semibold">Schedule a delivery</div>
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <p>Saturday 25th June 2025<br />10:00AM - 12:00AM</p>
              <button className="text-blue-600 text-sm">Change Slot</button>
            </div>
            <textarea
              value={deliveryNote}
              onChange={(e) => setDeliveryNote(e.target.value)}
              placeholder="Additional Delivery Information"
              maxLength={255}
              className="w-full border rounded px-3 py-2 mt-2"
            />
            <p className="text-sm text-right text-gray-400">
              Remaining Characters: {255 - deliveryNote.length}
            </p>
          </div>
        </section>

        {/* Items Details */}
        <section className="border rounded-lg overflow-hidden">
          <div className="bg-yellow-400 px-4 py-2 font-semibold">Items Details</div>
          <div className="p-4 flex justify-between items-center">
            <p>{cartItems.map((item) => item.name).join(", ")}</p>
            <button className="text-blue-600 text-sm">Show Items</button>
          </div>
        </section>
      </div>

      {/* RIGHT COLUMN: ORDER SUMMARY */}
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
            <span>Coupon Discount</span>
            <span>-Ksh {discount}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>Ksh {total}</span>
          </div>
        </div>
        <button
          onClick={() =>
            navigate("/cart/billing/payment", {
              state: {
                address,
                deliveryNote,
              },
            })
          }
          className="w-full mt-6 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
