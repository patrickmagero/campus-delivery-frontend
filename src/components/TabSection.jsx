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
        {activeTab === "description" && (
          <div>{product.long_description || "No description provided."}</div>
        )}

        {activeTab === "info" && (
          <div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Brand: Apple</li>
              <li>Warranty: 1 Year</li>
              <li>Condition: New</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <p className="text-sm text-gray-500 mb-4">
              {product.review_count || 0} reviews
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
