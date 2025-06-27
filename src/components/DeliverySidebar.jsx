export default function DeliverySidebar({ productId, product }) {
  return (
    <aside className="w-full lg:w-64 bg-white border rounded p-4 shadow-sm space-y-6">
      {/* Seller Info */}
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Seller Information</h3>
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Name:</strong> {product.seller_name || "N/A"}</p>
          <p><strong>Rating:</strong> {product.seller_rating ?? "N/A"} ★</p>
          <p><strong>Followers:</strong> {product.follower_count ?? 0}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`font-medium ${product.is_verified ? "text-green-600" : "text-gray-500"}`}>
              {product.is_verified ? "Verified Seller" : "Unverified"}
            </span>
          </p>
        </div>
      </div>

      {/* Delivery & Returns */}
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Delivery & Returns</h3>
        <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1">
          <li>Delivery within campus: <strong>1–2 hours</strong></li>
          <li>Standard delivery (outside campus): <strong>1–2 days</strong></li>
          <li>7-day return policy for eligible items</li>
          <li>Instant refunds to wallet or M-PESA</li>
        </ul>
      </div>
    </aside>
  );
}
