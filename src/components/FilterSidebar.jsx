import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function FilterSidebar() {
  const categories = {
    "Wholesale Products": [
      "Foods and drinks",
      "Beauty and Cosmetics",
      "Baby Products",
      "Electronics",
      "Stationery",
    ],
    "Fresh and Local": [
      "Fresh Vegetables",
      "Fresh Fruits",
      "Cereals and Grains",
      "Traditional Vegetables",
      "Dairy and Poultry",
    ],
    "Services": [
      "Beauty and Personal Care",
      "Home Services",
      "Repair Services",
      "Construction and Housing",
      "Transport Services",
    ],
  };

  const [priceRange, setPriceRange] = useState([500, 10000]);
  const [selectedStars, setSelectedStars] = useState(5);

  return (
    <aside className="w-[280px] bg-white shadow p-5 rounded-lg space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-3">Filter Options</h2>
        {Object.entries(categories).map(([section, items]) => (
          <div key={section} className="mb-4">
            <h3 className="text-md font-semibold">{section}</h3>
            <ul className="space-y-2 mt-2">
              {items.map((item) => (
                <li key={item}>
                  <label className="inline-flex items-center space-x-2">
                    <input type="checkbox" className="accent-blue-600" />
                    <span>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-md font-semibold">Price</h3>
        <p className="text-sm text-gray-500 mb-2">
          Ksh {priceRange[0]} - {priceRange[1]}
        </p>
        <input
          type="range"
          min={500}
          max={10000}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([500, parseInt(e.target.value)])}
          className="w-full accent-blue-600"
        />
      </div>

      <div>
        <h3 className="text-md font-semibold">Review</h3>
        <ul className="space-y-2 mt-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <li key={star}>
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-600"
                  checked={selectedStars === star}
                  onChange={() => setSelectedStars(star)}
                />
                <div className="flex text-yellow-500">
                  {[...Array(star)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {[...Array(5 - star)].map((_, i) => (
                    <FaStar key={i} className="text-gray-300" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{star} star</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
