// src/pages/DeliveryProgress.jsx
export default function DeliveryProgress() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Delivery Status</h1>
          <p className="text-gray-600 mb-10">
            Track each part of your order's journey.
          </p>
        </div>

        {/* Section 1 */}
        <div id="how-long">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">⏱️ How long to wait?</h2>
          <p className="text-gray-600">
            Your delivery is estimated to arrive within 45 minutes. Track your driver live on the map.
          </p>
        </div>

        {/* Section 2 */}
        <div id="what-items">
          <h2 className="text-2xl font-semibold text-blue-700 mt-12 mb-2">📦 What will they bring?</h2>
          <p className="text-gray-600">
            Your order includes fresh produce, cleaning supplies, and a surprise snack.
          </p>
        </div>

        {/* Section 3 */}
        <div id="how-delivered">
          <h2 className="text-2xl font-semibold text-blue-700 mt-12 mb-2">🚚 How will they bring it?</h2>
          <p className="text-gray-600">
            Delivered by bike to reduce carbon emissions. A secure hand-off will be made at your door.
          </p>
        </div>
      </div>
    </section>
  );
}
