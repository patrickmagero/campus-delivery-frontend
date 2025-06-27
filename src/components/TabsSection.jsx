import { useState } from "react";

export default function TabsSection({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabClass = (tab) =>
    `px-4 py-2 font-medium border-b-2 ${
      activeTab === tab
        ? "border-blue-600 text-blue-600"
        : "border-transparent text-gray-500"
    } hover:text-blue-600 cursor-pointer`;

  return (
    <div className="mt-12">
      {/* Tabs Header */}
      <div className="flex gap-6 border-b mb-4">
        <div onClick={() => setActiveTab("description")} className={tabClass("description")}>
          Description
        </div>
        <div onClick={() => setActiveTab("info")} className={tabClass("info")}>
          Additional Information
        </div>
        <div onClick={() => setActiveTab("reviews")} className={tabClass("reviews")}>
          Reviews
        </div>
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 leading-relaxed">
        {/* DESCRIPTION TAB */}
        {activeTab === "description" && (
          <div>{product.long_description || "No description provided."}</div>
        )}

        {/* ADDITIONAL INFO TAB */}
        {activeTab === "info" && (
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Category:</strong> {product.category || "N/A"}</li>
              <li><strong>Seller:</strong> {product.seller_name || "N/A"}</li>
              <li><strong>Seller Rating:</strong> {product.seller_rating || "N/A"} ★</li>
              <li><strong>Followers:</strong> {product.follower_count ?? "N/A"}</li>
              <li><strong>Verified Seller:</strong> {product.is_verified ? "Yes" : "No"}</li>
            </ul>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <h4 className="font-semibold mt-4 mb-2">Variants:</h4>
                <table className="text-sm w-full border rounded overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-3 py-2 border">Color</th>
                      <th className="px-3 py-2 border">Size</th>
                      <th className="px-3 py-2 border">Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.variants.map((v, i) => (
                      <tr key={i}>
                        <td className="px-3 py-1 border">{v.color || "-"}</td>
                        <td className="px-3 py-1 border">{v.size || "-"}</td>
                        <td className="px-3 py-1 border">{v.stock ?? "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold mb-1">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* REVIEWS TAB */}
        {activeTab === "reviews" && (
          <div>
            <p className="text-sm text-gray-500 mb-4">
              {product.review_count || 0} review{product.review_count === 1 ? "" : "s"}
            </p>

            {product.reviews && product.reviews.length > 0 ? (
              <div className="space-y-4">
                {product.reviews.map((review, index) => (
                  <div key={index} className="border rounded p-4">
                    <div className="flex justify-between">
                      <p className="font-semibold">{review.user_name}</p>
                      <p className="text-yellow-500">{review.rating} ★</p>
                    </div>
                    <p className="text-gray-600 mt-1">{review.comment}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-400 italic">No reviews yet.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
