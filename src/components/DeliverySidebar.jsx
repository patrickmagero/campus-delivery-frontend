// components/DeliverySidebar.jsx
export default function DeliverySidebar({ productId }) {
  return (
    <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg border space-y-6">
      {/* Delivery & Returns */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Delivery & Returns</h2>

        <div className="text-sm text-gray-600 space-y-2">
          <div>
            <span className="font-medium text-gray-700">Location:</span>{" "}
            Nairobi
          </div>
          <div>
            <span className="font-medium text-gray-700">Delivery Point:</span>{" "}
            Main Campus Gate
          </div>
          <div>
            <span className="font-medium text-gray-700">Fee:</span> Ksh 50
          </div>
          <div>
            <span className="font-medium text-gray-700">Return Policy:</span>{" "}
            Within 3 days of delivery
          </div>
        </div>
      </div>

      {/* Seller Info */}
      <div className="pt-4 border-t">
        <h2 className="text-lg font-semibold mb-2">Seller Information</h2>
        <div className="text-sm text-gray-700">
          <p className="font-medium">Magero Mobile Store</p>
          <p>⭐ 4.8 rating</p>
          <p>1000+ followers</p>
          <button className="mt-2 text-blue-600 underline">Follow Seller</button>
        </div>
      </div>
    </div>
  );
}
