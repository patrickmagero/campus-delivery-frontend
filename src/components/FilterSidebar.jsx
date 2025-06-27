import { FaStar } from "react-icons/fa";

export default function FilterSidebar({
  selectedFilters,
  setSelectedFilters,
  priceRange,
  setPriceRange,
  selectedRating,
  setSelectedRating,
}) {
  const filterCategories = {
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
    Services: [
      "Beauty and Personal Care",
      "Home Services",
      "Repair Services",
      "Construction and Housing",
      "Transport Services",
    ],
  };

  const toggleFilter = (item) => {
    const current = selectedFilters.category || [];
    const updated = current.includes(item)
      ? current.filter((i) => i !== item)
      : [...current, item];

    setSelectedFilters({
      ...selectedFilters,
      category: updated,
    });
  };

  const handleMinPriceChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin <= priceRange[1]) {
      setPriceRange([newMin, priceRange[1]]);
    }
  };

  const handleMaxPriceChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax >= priceRange[0]) {
      setPriceRange([priceRange[0], newMax]);
    }
  };

  return (
    <aside className="w-64 bg-white border rounded-md p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Filter Options</h2>

      {/* Category Filters */}
      {Object.entries(filterCategories).map(([group, items]) => (
        <div key={group} className="mb-4">
          <h3 className="font-semibold mb-2">{group}</h3>
          <ul className="space-y-1 max-h-32 overflow-y-auto pr-1">
            {items.map((item) => (
              <li key={item}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-blue-600"
                    checked={selectedFilters.category?.includes(item) || false}
                    onChange={() => toggleFilter(item)}
                  />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Price Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex flex-col gap-2">
          <label>
            Min: Ksh {priceRange[0]}
            <input
              type="range"
              min={0}
              max={10000}
              value={priceRange[0]}
              onChange={handleMinPriceChange}
            />
          </label>
          <label>
            Max: Ksh {priceRange[1]}
            <input
              type="range"
              min={0}
              max={10000}
              value={priceRange[1]}
              onChange={handleMaxPriceChange}
            />
          </label>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Selected Range: Ksh {priceRange[0]} - {priceRange[1]}
        </p>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="font-semibold mb-2">Review</h3>
        <ul className="space-y-1">
          {[5, 4, 3, 2, 1].map((stars) => (
            <li key={stars}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-blue-600"
                  checked={selectedRating === stars}
                  onChange={() =>
                    setSelectedRating(selectedRating === stars ? null : stars)
                  }
                />
                <div className="flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: stars }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-sm text-gray-700">{stars} star</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
